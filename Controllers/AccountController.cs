using System.Threading.Tasks;
using GadFly.Models;
using GadFly.Models.AccountViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace GadFly.Controllers
{
    [Authorize]
    [Consumes("application/json")]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
       
        public AccountController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
    
        }

        

        //
        // POST: /Account/Login
        [HttpPost]
        [AllowAnonymous]
        [Consumes("application/json")]
        public async Task<IActionResult> Login([FromBody]LoginViewModel model)
        {
 
                var user = await _userManager.FindByEmailAsync(model.Email);
                if (user == null)
                {
                    user = new ApplicationUser() {Email = model.Email, UserName = model.Email, UserId = model.UserId};
                    await _userManager.CreateAsync(user);
                    user = await _userManager.FindByEmailAsync(user.Email);

                }
                await  _signInManager.SignInAsync(user, false);
                

            return Ok(
                new LoginResultModel() { Success = true}
            );
        }

      
        
        #region Helpers

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }

        private Task<ApplicationUser> GetCurrentUserAsync()
        {
            return _userManager.GetUserAsync(HttpContext.User);
        }


        #endregion
    }
}
