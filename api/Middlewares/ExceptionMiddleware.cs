using System;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using Api.Exceptions;
using Api.Wrappers;
using Microsoft.AspNetCore.Http;

namespace Api.Middlewares
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception exception)
            {
                var response = context.Response;
                response.ContentType = "application/json";

                var apiResponse = new ApiResponse<string>() { IsSuccess = false, Message = exception?.Message };

                switch (exception)
                {
                    case ApiException ex:
                        response.StatusCode = (int)HttpStatusCode.BadRequest;
                        break;
                    default:
                        response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        break;
                }

                var result = JsonSerializer.Serialize(apiResponse);

                await response.WriteAsync(result);
            }
        }
    }
}