using System.ComponentModel.DataAnnotations;

namespace Api.DTOs
{
    public class PhotoForDelete
    {
        [Required]
        public string Password { get; set; }
    }
}