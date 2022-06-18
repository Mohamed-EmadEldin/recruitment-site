import React from 'react'
import './sign.css';

const Sign =()=> {
  
    return (
      <div>
           <div class="main">  	
		<input type="checkbox" id="chk"/>

			<div class="signup">
				<form>
					<label for="chk" class="sig">Sign up</label>
				
    <div class="user-box">
      <input type="text" title="Enter Username" required/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="text" title="Enter email" required/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" title="Enter password" required/>
      <label>Password</label>
    </div>
          
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" class="log" >Login</label>
	
          				

    <div class="user-box">

      <input type="text" title="Enter Username" required/>

      <label>Username</label>

    </div>				

    <div class="user-box">

      <input type="password" title="Enter password" required/>

      <label>Password</label>

    </div>
					<button>Login</button>
				</form>
			</div>
	</div>
      </div>
    )
  }


export default Sign
