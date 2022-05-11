using Grupp2.Data;
using Grupp2.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Grupp2.Services
{
    public class ProductService
    {
        private IEnumerable<Product> products;
        private readonly ApplicationDbContext _database;

        public ProductService(ApplicationDbContext database)
        {
            _database = database;
        }

        public async Task<IEnumerable<Product>> GetProducts()
        {
            products = await _database.Products.ToListAsync();
            return products;
        }

        public async Task<IEnumerable<Product>> SearchProduct(string search)
        {
            var products = await _database.Products
                    .Where(l =>
                    l.Name.Contains(search))
                    .ToListAsync();
            return products;
        }

        public async Task<IEnumerable<Product>> SearchByCategory(string category)
        {
            var products = await _database.Products
                    .Where(l =>
                    l.Category.Name.Contains(category))
                    .ToListAsync();
            return products;
        }
    }
}
