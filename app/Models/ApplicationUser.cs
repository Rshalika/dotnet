using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace GadFly.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            this.Chats = new List<Chat>();
           
        }



        public  List<Chat> Chats { get; set; }

        public List<ChatMembership> ChatMemberships { get; set; }

       
    }
}
