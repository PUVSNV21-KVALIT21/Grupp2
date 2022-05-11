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

        // GET: /Products
        [HttpGet("Products")]
        public async Task<IEnumerable> GetProductsAsync()
        {
            var products = await _productService.GetProducts();
            var categories = await _categoryService.GetCategories();

            return products;
        }

        [HttpGet("Category{category}")]
        public async Task<IEnumerable> GetCategoryAsync()
        {
            var products = await _productService.GetProducts();
            var categories = await _categoryService.GetCategories();

            return products;
        }

    }
}
