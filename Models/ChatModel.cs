using System;

namespace GadFly.Models
{

    public class ChannelEvent
    {
        public ChannelEvent()
        {
            this.Timestamp = new DateTime();
        }
        public string Name { get; set; }

        public string ChannelName { get; set; }
        public DateTime Timestamp { get; set; }
        public Object Data { get; set; }

        public string Json { get; set; }



    }
}