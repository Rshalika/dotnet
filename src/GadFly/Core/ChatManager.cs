using System;
using System.Linq;
using GadFly.Data;
using GadFly.Models;
using GadFly.Models.ChatViewModels;
using Microsoft.AspNetCore.Identity;

namespace GadFly.Core
{
    public class ChatManager
    {

        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public ChatManager(ApplicationDbContext con, UserManager<ApplicationUser> userManager)
        {
            this._context = con;
            this._userManager = userManager;
        }

        public Chat CreateChat(ApplicationUser user, ChatCreationBinding binding)
        {
            try
            {
                user = _userManager.FindByIdAsync(user.Id).Result;
                var chat = new Chat
                {
                    Name = binding.ChatName,
                    Creator = user
                };

                Chat c = _context.Chats.Add(chat).Entity;


                AddUserToChat(user,chat,binding.UserName,0);

                user.Chats.Add(chat);


                _context.SaveChanges();
                return c;

            }
            catch (Exception e)
            {
                Console.Write(e.StackTrace);

            }
            return null;
        }

        public ChatCreationResponse AddUserToChat(string userId, int chatId,string userName)
        {
            try
            {
                ApplicationUser user = _userManager.FindByIdAsync(userId).Result;
                Chat chat = _context.Chats.First(c => c.Id == chatId);
                int chatMemeberCount = _context.ChatMemberships.Where(cm => cm.ChatId == chatId).ToList().Count;
                AddUserToChat(user,chat,userName, chatMemeberCount);
                _context.SaveChanges();
                return new ChatCreationResponse {Success = true, Chat = new ChatInfoViewModel {MyNum = chatMemeberCount,Id=chat.Id.ToString(), Name = chat.Name} };

            }
            catch (Exception e )
            {
                Console.Write(e.StackTrace);
                return new ChatCreationResponse { Success = false };
                
            }
           

        }
        private void AddUserToChat(ApplicationUser user, Chat chat, string userName, int chatMemeberCount)
        {
            try
            {
                
                var cm = new ChatMembership { Chat = chat, User = user, NameInChat = userName,NumberInChat = chatMemeberCount};
                _context.ChatMemberships.Add(cm);

                 
            }
            catch (Exception e)
            {
                Console.Write(e.StackTrace);

            }


        }





    }
}