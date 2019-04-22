using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UdemyCourse.API.SQL_Query;
using UdemyCurse.API.Models;
namespace UdemyCourse.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        // private readonly CustomerQuery _cQuery;
        // public CustomerController(CustomerQuery repo)
        // {
        //     _cQuery = repo;
        // }
        [HttpGet]
        public ActionResult  GetCustomer()
        {
            CustomerQuery model = new CustomerQuery();
            var CustomerList = model.GetCustomer();
            return Content(CustomerList);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        [Route("Get")]
        public ActionResult<string> GetCustomerById(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        [Route("Post")]
        public string CustomerSave([FromBody] Users model)
        {
            return model.Name;
        }
    }
}
