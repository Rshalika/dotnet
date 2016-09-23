
using System.ComponentModel.DataAnnotations;
using GadFly.Models.ChatViewModels;

namespace GadFly.Models
{
    public class ChatCreationBinding
    {   

        [Required]
        public string ChatName { get; set; }

        public string UserName { get; set; }

     
    }

    public class ChatCreationResponse
    {
        public ChatInfoViewModel Chat { get; set; }

        public bool Success { get; set; }
    }


    
    public class AddMemberBinding
    {
        public string UserName { get; set; }

        public int ChatId { get; set; }



    }


}