using System.Net;
using System.Threading.Tasks;
using Api.ActionFilters;
using Api.Contracts;
using Api.DTOs;
using Api.Entities;
using Api.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers.v1
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhotosController : ControllerBase
    {
        private readonly IPhotoService _photoService;

        public PhotosController(IPhotoService photoService)
        {
            _photoService = photoService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var photo = await _photoService.GetPhotoById(id);

            return Ok(photo);
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var photos = await _photoService.GetPhotos();

            return Ok(photos);
        }

        [HttpPost]
        [ServiceFilter(typeof(ValidationFilter))]
        public async Task<IActionResult> Post([FromBody] PhotoForCreate model)
        {

            var photo = await _photoService.AddPhoto(model);

            return CreatedAtAction(
                actionName: nameof(GetById),
                routeValues: new { photoId = photo.Data.Id },
                value: photo
            );
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id, [FromBody] PhotoForDelete photoForDelete)
        {
            await _photoService.DeletePhoto(id, photoForDelete.Password);

            return NoContent();
        }
    }
}