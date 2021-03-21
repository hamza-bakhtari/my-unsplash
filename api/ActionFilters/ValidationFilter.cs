using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Api.ActionFilters
{
    public class ValidationFilter : IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {
            throw new System.NotImplementedException();
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                var errors = new Dictionary<string, string[]>();
                var result = new ContentResult();

                foreach(var (key, value) in context.ModelState)
                {
                    errors.Add(key, value.Errors.Select(e => e.ErrorMessage).ToArray());
                }

                context.HttpContext.Response.StatusCode = StatusCodes.Status422UnprocessableEntity;

                result.ContentType = "application/json";
                result.Content = JsonSerializer.Serialize(new { errors });
                
                context.Result = result;
                
            }
        }
    }
}