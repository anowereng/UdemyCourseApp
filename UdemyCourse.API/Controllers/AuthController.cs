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
    public class AuthController : ControllerBase
    {

        private readonly AuthRepository _repo;
        public AuthController(AuthRepository repo)
        {
            _repo = repo;
        }
        [HttpPost("Register")]
        public IActionResult Register([FromBody] User model)
        {
            model.UserName = model.UserName.ToLower();
            if (_repo.UserExists(model.UserName))
                return BadRequest("UserName already exists");

            var usermodel = new User
            {
                UserName = model.UserName
            };

            var createdUser = _repo.Register(usermodel, model.UserPassword);
            return StatusCode(201);
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        // [HttpPost]
        // [Route("Post")]
        // public string DataPost([FromBody] Users model)
        // {
        //     return model.Name;
        // }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
