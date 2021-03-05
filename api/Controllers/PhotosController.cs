using System.Net;
using System.Threading.Tasks;
using Api.Contracts;
using Api.DTOs;
using Api.Entities;
using Api.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers.v1
{
    [ApiController]
    [Route("api/[controller]")]
    public class PhotosController : ControllerBase
    {
        private readonly IPhotoService _photoService;

        public PhotosController(IPhotoService photoService)
        {
            _photoService = photoService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _photoService.GetPhotos();

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] PhotoForCreate model)
        {

            var result = await _photoService.AddPhoto(model, ModelState);

            return new ObjectResult(result) { StatusCode = StatusCodes.Status201Created };
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id, [FromBody] PhotoForDelete photoForDelete)
        {
            await _photoService.DeletePhoto(id, photoForDelete.Password);

            return NoContent();
        }
    }
}