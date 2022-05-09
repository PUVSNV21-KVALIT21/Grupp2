using Grupp2.Entities;
using Grupp2.Models;
using Grupp2.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Grupp2.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private IEnumerable<Product> Products { get; set; }
        private readonly ProductService _productService;
        public HomeController(ILogger<HomeController> logger, ProductService productService)
        {
            _logger = logger;
            _productService = productService;
        }

        public async Task <IActionResult> IndexAsync(string? productString, string? categoryString)
        {

            if (!String.IsNullOrEmpty(productString))
            {
                Products = await _productService.SearchProduct(productString);
            }
            else if (!String.IsNullOrEmpty(categoryString))
            {
                Products = await _productService.SearchByCategory(categoryString);
            }
            else
            {
                Products = await _productService.GetProducts();
            }
            return View(Products);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}