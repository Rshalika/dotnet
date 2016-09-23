

namespace GadFly.Models
{
   

    public partial class ChatMessage
    {
        
        public int Id { get; set; }

        public string Message { get; set; }

        
        
        public  ApplicationUser Author { get; set; }

        public int ChatId { get;set;}
        public  Chat Chat { get; set; }
    }
}
