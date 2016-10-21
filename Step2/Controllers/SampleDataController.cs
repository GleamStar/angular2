using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularCore.Model;
using Microsoft.AspNetCore.Mvc;

namespace AngularCore.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private IFrameworkRepository _repository;
        public  SampleDataController(IFrameworkRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("[action]")]
        public  async Task<IEnumerable<Item>> GetFrameworks()
        {
            return await  _repository.GetAll();
        }
        [HttpPost("[action]")]
        public async Task AddFramework([FromBody] Item item)
        {
            if (item!= null) await _repository.AddItem(item);
        }

    }
}
