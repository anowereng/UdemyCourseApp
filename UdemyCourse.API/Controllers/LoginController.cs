using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UdemyCourse.API.Models;
using UdemyCourse.API.Data;
using UdemyCourse.API.DTO;
namespace UdemyCourse.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly LoginQuery _lQuery;
        public LoginController(LoginQuery lQuery)
        {
            _lQuery = lQuery;
        }

        [HttpPost("Register")]
        public IActionResult Register([FromBody] User model)
        {
            model.UserName = model.UserName.ToLower();
            if (_lQuery.UserExists(model.UserName))
                return BadRequest("userName already exists, try different name !!");

            var createdUser = _lQuery.CreateUser(model);
            return StatusCode(201);
        }

        [HttpPost("Login")]
        public IActionResult Login (Login model)
        {
            
        }
           

    }
}
