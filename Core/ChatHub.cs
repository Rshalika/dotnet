using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GadFly.Data;
using GadFly.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore.Query.Expressions;

namespace GadFly.Core {
    public class ChatHub : Hub
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _context;

        public ChatHub(
             UserManager<ApplicationUser> userManager,
            ApplicationDbContext context
            )
        {
            
            this._userManager = userManager;
            _context = context;
        }
       
        public void Send(ChannelEvent evt)
        {

            lock (_context)
            {
                ApplicationUser user = _userManager.FindByNameAsync(Context.User.Identity.Name).Result;
                Chat chat = _context.Chats.First(c => c.Id.ToString() == evt.ChannelName);
                var msg = new ChatMessage {Author = user, Chat = chat, Message = evt.Data.ToString()};
                var cme = _context.ChatMemberships.First(cm => cm.UserId == user.Id && cm.ChatId == chat.Id);
                var nameInChat = cme.NameInChat;

                _context.ChatMessages.Add(msg);
                chat.ChatMessages.Add(msg);

                _context.SaveChanges();

                evt.Name = nameInChat;
                evt.IdInChat = cme.NumberInChat;

                Clients.Group(evt.ChannelName).addMessage(evt);
            }

        }

        public void GiveOldMessages(string id)
        {

            if (id == null) return;
            lock (_context){
                var user = _userManager.FindByNameAsync(Context.User.Identity.Name).Result;
                if (user == null) return;

                IEnumerable<ChatMembership> chatMemberships =
                    _context.ChatMemberships.Where(cm => cm.UserId == user.Id).ToList();
                
                foreach (var chatMembership in chatMemberships)
                {
                    Groups.Add(Context.ConnectionId, chatMembership.ChatId.ToString());
                }
                var cms = _context.ChatMessages.Where(cm => cm.ChatId.ToString() == id).ToList();
                var cmbs = _context.ChatMemberships.ToList();
                var usrs = _context.Users.ToList();
                var q = from cm in cms
                    join membership in cmbs on cm.ChatId equals membership.ChatId
                    join  usr in usrs on membership.UserId equals usr.Id 
                    where cm.Author.Id == usr.Id
                    select new ChannelEvent
                    {
                        Data = cm.Message,
                        ChannelName = id,
                        Name = membership.NameInChat,
                        IdInChat = membership.NumberInChat
                        
                    };
                var evts = q.ToList();;
                Clients.Caller.TakeOldMessages(id, evts);
                
                
            }


        }

        public override Task OnConnected() { 
        

        var id = Context.User.Identity.Name;
            var user = _userManager.FindByNameAsync(id).Result;
            
            if (user != null)
            {
                var chatMemberships = _context.ChatMemberships.Where(cm => cm.UserId == user.Id).ToList();
                foreach (var chatMembership in chatMemberships)
                {
                    Groups.Add(Context.ConnectionId,chatMembership.ChatId.ToString());
                }
            }
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            try
            {


                var id = _userManager.GetUserId(Context.Request.HttpContext.User);

                var user = _userManager.FindByIdAsync(id).Result;

                if (user != null)
                {
                    var chatMemberships = _context.ChatMemberships.Where(cm => cm.UserId == user.Id).ToList();
                    foreach (var chatMembership in chatMemberships)
                    {
                        Groups.Remove(Context.ConnectionId, chatMembership.ChatId.ToString());
                    }
                }
                return base.OnDisconnected(stopCalled);
            }

            catch (Exception e)
            {
                return base.OnDisconnected(stopCalled);

            }


            

        }

        public override Task OnReconnected()
        {

            
            return base.OnReconnected();
        }
    }
}
