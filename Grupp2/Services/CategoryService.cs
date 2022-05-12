using Grupp2.Data;
using Grupp2.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Grupp2.Services
{
    public class CategoryService
    {
        private IEnumerable<Category> categories;
        private readonly ApplicationDbContext _database;

        public CategoryService(ApplicationDbContext database)
        {
            _database = database;
        }

        public async Task<IEnumerable<Category>> GetCategories()
        {
            categories = await _database.Categories.ToListAsync();
            return categories;
        }
    }
}
