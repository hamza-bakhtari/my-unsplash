using System.Collections.Generic;
using System.Threading.Tasks;
using Api.DTOs;
using Api.Entities;
using Api.Wrappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Api.Contracts
{
    public interface IPhotoService
    {
        Task<ApiResponse<Photo>> AddPhoto(PhotoForCreate model);
        Task<ApiResponse<Photo>> GetPhotoById(int id);
        Task<ApiResponse<IEnumerable<Photo>>> GetPhotos();
        Task DeletePhoto(int id, string password);
    }
}