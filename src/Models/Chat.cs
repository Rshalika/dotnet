using System.Collections.Generic;

namespace GadFly.Models
{
    public partial class Chat
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Chat()
        {
            this.ChatMessages = new HashSet<ChatMessage>();
            this.Members = new HashSet<ChatMembership>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        
        public ApplicationUser Creator { get; set; }


        public virtual ICollection<ChatMembership> Members { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public  virtual ICollection<ChatMessage> ChatMessages { get; set; }

    }
}
