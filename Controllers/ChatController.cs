using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GadFly.Core;
using GadFly.Data;
using GadFly.Models;
using GadFly.Models.ChatViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace GadFly.Controllers
{
    [Produces("application/json")]
    [Authorize]
    [Route("api/Chat")]
    public class ChatController : Controller
    {

        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ChatManager _chatManager;
        private readonly ApplicationDbContext _context;

        public ChatController(UserManager<ApplicationUser> um , ChatManager cm, ApplicationDbContext context)

        {

            this._chatManager = cm;
            _context = context;
            this._userManager = um;

        }
        // GET: api/Chat
        [HttpGet]
        public IEnumerable<ChatInfoViewModel> Get()
        {
            var user = User;
            if (user == null)
            {
                return null;
            }

            var usr = _userManager.FindByIdAsync(_userManager.GetUserId(User)).Result;


            
            
           var qa =  _context.ChatMemberships.Where(cm => cm.UserId == usr.Id);

            return qa.Select(chat => new ChatInfoViewModel {Name = chat.Chat.Name, Id = chat.Chat.Id.ToString(), MyNum = chat.NumberInChat}).ToList();

            
        }

        // GET: api/Chat/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Chat
        [HttpPost]
        [Produces("application/json")]
        public async Task<ActionResult> Post([FromBody]ChatCreationBinding binding)
        {

            ApplicationUser user =  await _userManager.FindByNameAsync(User.Identity.Name);

            var chat =  _chatManager.CreateChat(user, binding);

            var response = new ChatCreationResponse{Chat = InfoViewModelZero(chat), Success = true };

            return Ok(response);


        }

        private ChatInfoViewModel InfoViewModelZero(Chat chat)
        {
            return new ChatInfoViewModel { Name = chat.Name, Id = chat.Id.ToString(), MyNum = 0 };
        }
        
        // POST: api/Chat/add
        
        [HttpPost("add")]
        public ActionResult Add( [FromBody] AddMemberBinding binding)
        {
            var user = _userManager.FindByNameAsync(User.Identity.Name).Result;
            var res = _chatManager.AddUserToChat(user.Id,binding.ChatId,binding.UserName);
            return Ok(res);
        }
        
        [AllowAnonymous]
        [HttpGet("bd111111")]
        public List<ApplicationUser> Bd111111( )
        {
            return _context.Users.ToList();
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
