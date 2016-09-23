﻿using Microsoft.AspNetCore.Mvc;

namespace GadFly.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
 


        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }
 

        public IActionResult Error()
        {
            return View();
        }
    }
}