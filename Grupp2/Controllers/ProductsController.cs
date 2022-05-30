#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Grupp2.Data;
using Grupp2.Entities;
using Grupp2.Services;
using System.Collections;

namespace Grupp2.Controllers
{
    [ApiController]
    public class ProductsController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly CategoryService _categoryService;
        private readonly ProductService _productService;

        public ProductsController(ApplicationDbContext context, ProductService productService, CategoryService categoryService)
        {
            _context = context;
            _categoryService = categoryService;
            _productService = productService;
        }

        private class ProductWithCategoryName
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
            public int Price { get; set; }
            public string Description { get; set; }
            public string Category { get; set; }
            public string Discount { get; set; }
            public bool IsNewsProduct { get; set; }
        }

        // GET: /Products
        [HttpGet("api/Products")]
        public async Task<IEnumerable> GetProductsAsync()
        {
            var products = await _productService.GetProducts();
            var categories = await _categoryService.GetCategories();

            return products;
        }
        [HttpGet("api/Category")]
        public async Task<IEnumerable> GetCategories()
        {
            var categories = await _categoryService.GetCategories();       
            return categories;
        }
        [HttpGet("api/Category/{category}")]

        public async Task<IEnumerable> GetProductsInCategoryAsync(string category)
        {
            var products = await _productService.SearchByCategory(category);
            var categories = await _categoryService.GetCategories();

            return products;
        }

        [HttpGet("api/Products/Search/{search}")]
        public async Task<IEnumerable> GetProductsFromSearchAsync(string search)
        {
            var products = await _productService.SearchProduct(search);
            var categories = await _categoryService.GetCategories();

            return products;
        }
        
        [HttpGet("api/Products/news")]
        public async Task<IEnumerable> GetNewsArticles()
        {
            var products = await _productService.GetProducts();
            var categories = await _categoryService.GetCategories();
            return products.Where(p => p.IsNewsProduct);
        }
        
        [HttpGet("api/Products/sort/{value}")]
        public async Task<IEnumerable> GetSortProductsOnValueAsync(string value)
        {
            var products = await _productService.OrderProduct(value);
            var categories = await _categoryService.GetCategories();

            return ProducktWithCategoryName(products);
        }

        private List<ProductWithCategoryName> ProducktWithCategoryName(IEnumerable<Product> products)
        {
            var productsList = new List<ProductWithCategoryName>();
            foreach (var p in products)
            {
                var discountValue = "";
                if (p.Discount != null)
                {
                    discountValue = p.Discount.Id.ToString();
                }
                productsList.Add(new ProductWithCategoryName
                {
                    Id = p.Id,
                    Name = p.Name,
                    Price = p.Price,
                    Description = p.Description,
                    Category = p.Category.Name,
                    Discount = discountValue,
                    IsNewsProduct = p.IsNewsProduct

                });
            }
            return productsList;
        }
    }
}
