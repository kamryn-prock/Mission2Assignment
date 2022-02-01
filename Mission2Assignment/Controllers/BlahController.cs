using Microsoft.AspNetCore.Mvc;
using Mission2Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2Assignment.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {  
            return View();
        }
        // Get the grades
        [HttpGet]
        public IActionResult Calculator ()
        {
            return View();
        }

        // post the results
        [HttpPost]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();
        }
    }
}
