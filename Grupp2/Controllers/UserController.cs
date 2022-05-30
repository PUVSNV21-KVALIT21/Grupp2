using Grupp2.Data;
using Grupp2.Entities;
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

        private class UserApi
        {
            public string Addres1 { get; set; }
            public string Addres2 { get; set; }
            public Cart Cart { get; set; }
            public string Email { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public MembershipLevel MembershipLevel { get; set; }
            public string PhoneNumber { get; set; }
            public string PostArea { get; set; }
            public string PostCode  { get; set; }
            public string UserName { get; set; }
            public string Role { get; set; }
        }

        [HttpGet("User")]
        public async Task<IEnumerable> GetUser()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier); // will give the user's userId
            //var userName = User.FindFirstValue(ClaimTypes.Name); // will give the user's userName
            //var email = User.FindFirstValue(ClaimTypes.Email); // will give the user's Email
            var role = User.FindFirstValue(ClaimTypes.Role);
            var user = _context.Users.Where(u => u.Id == userId).ToArray();

            var userApi = new List<UserApi>();
            userApi.Add(new UserApi
            {
                UserName = user[0].UserName,
                Email = user[0].Email,
                Role = role,
                PhoneNumber = user[0].PhoneNumber,
                MembershipLevel = user[0].MembershipLevel,
                Addres1 = user[0].Address1,
                Addres2 = user[0].Address2,
                FirstName = user[0].FirstName,
                LastName = user[0].LastName,
                PostArea = user[0].PostArea,
                PostCode = user[0].PostCode,
                Cart = user[0].Cart,
            });

            

            return userApi.ToArray();
        }
    }
}
