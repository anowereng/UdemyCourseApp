using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using UdemyCourse.API.Models;
using Sampan;
using System.Data;
using System.Collections.Generic;
using System.Collections;
using UdemyCourse.API.Data;
using UdemyCourse.API.DTO;
namespace UdemyCourse.API.Controllers
{
    public class AuthController : ControllerBase
    {
        private readonly AuthRepository _repo;
       public AuthController(AuthRepository repo){
            _repo = repo;
        }
        [HttpPost("Register")]
        public  IActionResult Register([FromBody] string UserName="",string UserPassword =""){
            UserDTO model = new UserDTO();
            model.UserName=model.UserName.ToLower();
            if(  _repo.UserExists(model.UserName))
                    return BadRequest("UserName already exists");

                    var usermodel= new User{
                        UserName=model.UserName 
                        };

            var createdUser = _repo.Register(usermodel,model.UserPassword);
            return StatusCode(201);
        }

             [HttpPost]
        [Route("Auth/TestReslt")]
        public string TestReslt([FromBody] string UserName = "")
        {
            
            return UserName;
        }
 
    }
}


