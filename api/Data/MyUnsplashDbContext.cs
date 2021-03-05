using Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class MyUnsplashDbContext : DbContext
    {
        public MyUnsplashDbContext(DbContextOptions<MyUnsplashDbContext> options) : base(options)
        {

        }

        public DbSet<Photo> Photos { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}