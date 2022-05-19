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
using Microsoft.AspNetCore.Authorization;

namespace Grupp2.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = "Admin")]
    public class ProductController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly CategoryService _categoryService;
        private readonly ProductService _productService;

        public ProductController(ApplicationDbContext context, ProductService productService, CategoryService categoryService)
        {
            _context = context;
            _categoryService = categoryService;
            _productService = productService;

        }
        // GET: Admin/Product
        public async Task<IActionResult> Index()
        {
            var product = await _context.Products.ToArrayAsync();
            var category = await _context.Categories.ToArrayAsync();

            return View(product);
        }

        //Admin/Product/GetProductsInCategory/{search}
        [HttpGet]
        public async Task<IActionResult> GetProductsInCategory(string search)
        {
            var products = await _productService.SearchByCategory(search);
            var categories = await _categoryService.GetCategories();
            return View("Index", products);
        }

        //Admin/Products/GetProductsFromSearch/{search}
        [HttpGet]
        public async Task<IActionResult> GetProductsFromSearch(string search)
        {
            var products = await _productService.SearchProduct(search);
            var categories = await _categoryService.GetCategories();
            return View("Index", products);
        }

        // GET: Admin/Product/Details/5
        public async Task<IActionResult> Details(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var product = await _context.Products
                .FirstOrDefaultAsync(m => m.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            return View(product);
        }

        // GET: Admin/Product/Create
        public async Task<IActionResult> Create()
        {
            var categories = await _categoryService.GetCategories();
            ViewBag.Categories = new SelectList(categories, "Id", "Name");
            return View();
        }

        // POST: Admin/Product/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Price,Description,IsNewsProduct,Category,ImgPath")] Product product)
        {
            if (ModelState.IsValid)
            {
                var categoryRequestSelectedItem = Request.Form["category-select-list"];
                var categoreis = await _categoryService.GetCategories();
                var selectedCategory = categoreis.Where(c => c.Id.ToString() == categoryRequestSelectedItem.ToString()).FirstOrDefault();
                product.Category = selectedCategory;
                product.Id = Guid.NewGuid();
                //product.Category = categories.Where(c => c.Id == product.Category.Id);
                _context.Add(product);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(product);
        }

        // GET: Admin/Product/Edit/5
        public async Task<IActionResult> Edit(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            var categories = await _categoryService.GetCategories();
            ViewBag.Categories = new SelectList(categories, "Id", "Name");

            return View(product);
        }

        // POST: Admin/Product/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, [Bind("Id,Name,Price,Description,IsNewsProduct,Category,ImgPath")] Product product)
        {
            if (id != product.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    var categoryRequestSelectedItem = Request.Form["category-select-list"];
                    var categoreis = await _categoryService.GetCategories();
                    var selectedCategory = categoreis.Where(c => c.Id.ToString() == categoryRequestSelectedItem.ToString()).FirstOrDefault();
                    product.Category = selectedCategory;
                    _context.Update(product);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProductExists(product.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(product);
        }

        // GET: Admin/Product/Delete/5
        public async Task<IActionResult> Delete(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var product = await _context.Products
                .FirstOrDefaultAsync(m => m.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            return View(product);
        }

        // POST: Admin/Product/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var product = await _context.Products.FindAsync(id);
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ProductExists(Guid id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}
