namespace GadFly.Models
{
    public class ChatMembership
    {
        public int ChatId { get; set; }
        public Chat Chat { get; set; }

        public string NameInChat { get; set; }

        public int NumberInChat { get; set; }

        public string  UserId { get; set; }
        public ApplicationUser User { get ; set; }

    }
}
