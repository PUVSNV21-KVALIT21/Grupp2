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
            if(search == "" || search == null)
            {
                return null;
            }
            else
            {
                var products = await _database.Products
                        .Where(l =>
                        l.Name.Contains(search))
                        .ToListAsync();
                return products;
            }
        }

        public async Task<IEnumerable<Product>> OrderProduct(string value)
        {
            value = value.Trim().ToLower();
            if (value == "name")
            {
                var products = await _database.Products
                        .OrderBy(l => l.Name)
                        .ToListAsync();
                return products;
            }
            else if (value == "price")
            {
                var products = await _database.Products
                        .OrderBy(l => l.Price)
                        .ToListAsync();
                return products;
            }
            else if (value == "category")
            {
                var products = await _database.Products
                        .OrderBy(l => l.Category.Name)
                        .ToListAsync();
                return products;
            }
            else if (value == "discount")
            {
                var products = await _database.Products
                        .OrderBy(l => l.Discount.DiscountValue)
                        .ToListAsync();
                return products;
            }
            else if (value == "isnew")
            {
                var products = await _database.Products
                        .OrderBy(l => l.IsNewsProduct)
                        .ToListAsync();
                return products;
            }
            else
            {
                var products = await _database.Products
                        .OrderBy(l => l)
                        .ToListAsync();
                return products;
            }
        }

        public async Task<IEnumerable<Product>> SearchByCategory(string category)
        {
            if (category != null)
            {
                var products = await _database.Products
                        .Where(l =>
                        l.Category.Name.Contains(category))
                        .ToListAsync();
                return products;
            }
            return new List<Product>();
        }
    }
}
