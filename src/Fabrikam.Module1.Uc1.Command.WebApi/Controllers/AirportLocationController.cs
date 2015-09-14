using Fabrikam.Command.Entities.Service;
using Microsoft.AspNet.Mvc;
using System.Collections.Generic;

namespace Fabrikam.Module1.Uc1.Command.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class AirportLocationController : Controller
    {
        #region Query Side
        //// GET: api/airportlocation
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/airportlocation/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //} 
        #endregion

        // POST api/airportlocation
        [HttpPost]
        public void Post([FromBody]AirportLocation value)
        {
            // Send to the service library; where in the value object goes under validations and data transformation
        }

        // PUT api/airportlocation/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/airportlocation/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
