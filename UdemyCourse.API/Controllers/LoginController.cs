﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UdemyCourse.API.Models;
using UdemyCourse.API.Data;
using UdemyCourse.API.DTO;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;

namespace UdemyCourse.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly LoginQuery _lQuery;
        private readonly IConfiguration _config ;
        public LoginController(LoginQuery lQuery, IConfiguration connfig)
        {
            _lQuery = lQuery;
            _config= connfig;
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
        public IActionResult Login (User model)
        {
            throw new Exception("Computer Syas NO !!!");
           var amodel = _lQuery.LoginUser(model.UserName, model.UserPassword);
          if(amodel==null)  return Unauthorized();       
        var claims = new []
        {
            new Claim(ClaimTypes.NameIdentifier,amodel.UserId.ToString()),
            new Claim(ClaimTypes.Name,amodel.UserName)
        };
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
   
        var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha512Signature);

        var tokenDescriptor = new SecurityTokenDescriptor{
            Subject = new ClaimsIdentity(claims),
            Expires= DateTime.Now.AddMinutes(5),
            SigningCredentials = creds
        };
    
        var tokenHandler= new JwtSecurityTokenHandler();
        var token =tokenHandler.CreateToken(tokenDescriptor);
        return Ok(new {
            token= tokenHandler.WriteToken(token)
        });
    }


    }
}
