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
        Task<ApiResponse<Photo>> AddPhoto(PhotoForCreate model, ModelStateDictionary modalState);
        Task<ApiResponse<IEnumerable<Photo>>> GetPhotos();
        Task DeletePhoto(int id, string password);
    }
}