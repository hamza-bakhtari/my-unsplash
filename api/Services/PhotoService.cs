using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Contracts;
using Api.DTOs;
using Api.Entities;
using Api.Exceptions;
using Api.Wrappers;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Api.Services
{
    public class PhotoService : IPhotoService
    {
        private readonly IGenericRepositoryAsync<Photo> _photoRepository;

        public PhotoService(IGenericRepositoryAsync<Photo> photoRepository)
        {
            _photoRepository = photoRepository;
        }

        public async Task<ApiResponse<Photo>> AddPhoto(PhotoForCreate model, ModelStateDictionary modelState)
        {
            if (!modelState.IsValid)
                throw new ApiException("Failed to add photo", new { Errors = modelState.Values });

            var photo = new Photo()
            {
                Label = model.Label,
                Url = model.Url,
                Created = DateTime.UtcNow
            };

            await _photoRepository.AddAsync(photo);

            return new ApiResponse<Photo>(photo);
        }

        public async Task DeletePhoto(int id, string password)
        {
            var photo = await _photoRepository.GetByIdAsync(id);

            if (photo == null)
            {
                throw new ApiException("Photo Not Found.");
            }

            if (string.IsNullOrEmpty(password))
            {
                throw new ApiException("Password must not be empty");
            }

            if (password != Constants.DEFAULT_PASSWORD)
            {
                throw new ApiException("Please Enter a Valid Password.");
            }

            await _photoRepository.DeleteAsync(photo);
        }

        public async Task<ApiResponse<IEnumerable<Photo>>> GetPhotos()
        {
            var photos = await _photoRepository.GetAllAsync();
            return new ApiResponse<IEnumerable<Photo>>(photos);
        }
    }
}