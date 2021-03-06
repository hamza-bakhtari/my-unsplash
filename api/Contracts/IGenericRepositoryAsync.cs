using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Contracts
{
    public interface IGenericRepositoryAsync<T> where T : class
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByIdAsync(int id);
        Task<T> AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity);
    }
}