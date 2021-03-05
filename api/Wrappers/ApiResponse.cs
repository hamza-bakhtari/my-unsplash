using System.Collections.Generic;
using System.Net;

namespace Api.Wrappers
{
    public class ApiResponse<T>
    {
        public ApiResponse()
        {

        }
        public ApiResponse(T data, string message = null)
        {
            IsSuccess = true;
            Data = data;
            Message = message;
        }

        public ApiResponse(string message)
        {
            IsSuccess = false;
            Message = message;
        }

        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public List<string> Errors { get; set; }
        public T Data { get; set; }
    }
}