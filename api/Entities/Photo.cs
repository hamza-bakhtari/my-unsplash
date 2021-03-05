using System;

namespace Api.Entities
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Label { get; set; }
        public DateTime Created { get; set; }
    }
}