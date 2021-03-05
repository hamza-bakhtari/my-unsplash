using System.ComponentModel.DataAnnotations;

namespace Api.DTOs
{
    public class PhotoForCreate
    {
        [Required(ErrorMessage = "Label field is required")]
        public string Label { get; set; }
        [Required(ErrorMessage = "Url field is required")]
        [Url(ErrorMessage = "Please enter a valid url")]
        public string Url { get; set; }
    }
}