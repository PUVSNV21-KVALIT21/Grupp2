using Grupp2.Data;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Security.Claims;

namespace Grupp2.Controllers
{
    [ApiController]
    public class UserController : Controller
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("User")]
        public async Task<IEnumerable> GetUser()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier); // will give the user's userId
            var userName = User.FindFirstValue(ClaimTypes.Name); // will give the user's userName
            var email = User.FindFirstValue(ClaimTypes.Email); // will give the user's Email
            var user = _context.Users.Where(u => u.Id == userId).ToArray();

            return user;
        }
    }
}
