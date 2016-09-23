import {Component} from '@angular/core'
import {LoginService} from "./login.component";

@Component({
    template: `
 
 <nav id="mynavbar" class="navbar navbar-default navbar-fixed-top ">
        <ul class="nav navbar-nav  navbar-right">
             
            <li><a href="#login" style="margin-right:10;">Log in</a></li>
        </ul>
    </nav>


<div data-spy="scroll" data-target="#mynavbar" style=" position: relative">
<div id="section1">
  <h1 
style="font-size: 100px;
    text-align: center;">Hi</h1>
 
  <h1 style="
    text-align: center;"> we are asshole chat!</h1>

  <h4 style="text-align: center;"> Don't be us. Don't be an asshole! </h4>
  <h3 style="text-align: center;"> Be yourself </h3>
    
</div>
<style>
   #section2 > ul > li{
    font-size: 40px;
     
    }

#section2{
    text-align: center;
}
     
#section2 > h1 {
    display: inline-block;
    background-color: #23726a;
    text-align: center;
    }
#howtolist {
    width: 50%;
    margin: 0 auto;
    font-size: x-large;
    }
#howtolist  {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    }
#howtolist > p {
    background-color: #23726a;
    display: inline-block;
    width: 50%;
    margin-left: 20px;
 
    font-size: x-large
  }

.loginBtn{
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    float: left;
    border-right: groove;
}


.loginBntContainer{
    width: 200px;
    height: 50px;
    margin: 1 auto;
    line-height: 50px;
    cursor: pointer;
}
.loginBntContainerF{
    background: #3a5897;
}

.loginBntContainerG{
    background: #e74c3c;
}
#login{
    text-align: center;
}
</style>
<div id="section2">
  <h1>How to use asshole chat:</h1>
    <div id="howtolist">
      <p>create chats</p> 
<br/>
     <p>give it a name</p> 
<br/>
       <p>chat </p>  
<br/>
     <p>repeat </p> 
<br/>
        
    </div>
 </div>
<div id="login">
  <h1>Login</h1>

<h2>with</h2>
   <div class="container">
  <div class="row">
     <div class="col-md-4">
         
    </div>
    <div class="col-md-4">
   
        <div (click)="onFb()" class="loginBntContainerF loginBntContainer">
            <div class="loginBtn" style="background: url('/fb.png'); background-size: 100% 100%;"></div> 
            Facebook
        </div>
        <div class="loginBntContainerG loginBntContainer">
            <div class="loginBtn" style="background: url('/gp.png'); background-size: 100% 100%; "></div> Google
        </div>

    </div>
 
  <div class="col-md-4">
         
    </div>
  </div>
</div>

</div>
</div>
`

})

export class Intro {
    constructor(private loginService: LoginService) {
        
    }

    onFb() {
        this.loginService.onLoginFb();
    }
}