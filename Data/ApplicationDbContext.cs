using GadFly.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GadFly.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()

        {

            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./blog.db");
        }



        public  DbSet<Chat> Chats { get; set; }

        public DbSet<ChatMembership> ChatMemberships { get; set; }

        public DbSet<ChatMessage> ChatMessages { get; set; }
         
      


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<ChatMembership>()
                .HasKey(t => new {t.ChatId, t.UserId});

            builder.Entity<ChatMembership>()
                .HasOne(m => m.Chat)
                .WithMany(c => c.Members)
                .HasForeignKey(m=>m.ChatId)
                .HasPrincipalKey(c => c.Id);

            builder.Entity<ChatMembership>()
                .HasOne(m => m.User)
                .WithMany(c => c.ChatMemberships)
                .HasForeignKey(m => m.UserId)
                .HasPrincipalKey(u => u.Id);



            builder.Entity<Chat>()
                .HasOne(c => c.Creator)
                .WithMany(u => u.Chats)
                .HasPrincipalKey(a => a.Id);



            builder.Entity<ChatMessage>()
                .HasOne(m => m.Chat)
                .WithMany(c => c.ChatMessages)
                .HasPrincipalKey(c => c.Id);

        }
    }
}
