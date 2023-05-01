import React, {useState} from "react";

export function LoginForm(props){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="container">
        <div className="column">
        <div>
            <div>
<p>Welcome to Wakeel – your one-stop destination for all your legal needs! <br></br><br></br> We're a unique platform that connects clients with top-notch lawyers across various practice areas. Our mission is to make legal services more accessible and convenient for everyone. With Wakeel, finding the right lawyer has never been easier. Our user-friendly platform allows you to search for lawyers by practice area, location, and rating. You can also browse lawyer profiles, read reviews from other clients, and connect with attorneys directly through our website. <br></br><br></br>At Wakeel, we understand that dealing with legal matters can be overwhelming, which is why we've designed our platform to simplify the process. Whether you need legal advice for your business or personal matters, we've got you covered. <br></br><br></br>Join the thousands of satisfied clients who have found the right lawyer for their legal needs on Wakeel. <br></br><br></br>Register today and let us help you find the perfect legal partner!</p>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
</div>
     <div class="overlay"></div>
<div class="text">
	<div class="wrapper">
		<div id="W" class="letter">W</div>
		<div class="shadow">W</div>
	</div>
	<div class="wrapper">
		<div id="A" class="letter">A</div>
		<div class="shadow">A</div>
	</div>
	<div class="wrapper">
		<div id="K" class="letter">K</div>
		<div class="shadow">K</div>
	</div>
	<div class="wrapper">
		<div id="E" class="letter">E</div>
		<div class="shadow">E</div>
	</div>
	<div class="wrapper">
		<div id="E" class="letter">E</div>
		<div class="shadow">E</div>
	</div>
	<div class="wrapper">
		<div id="L" class="letter">L</div>
		<div class="shadow">L</div>
	</div>
   </div>
</div>
        </div>
        <div className="column">
        <div className="auth-form-container">
            <article>
              <h1>WAKEEL</h1>
              <p>Your partner for a successful legal battle</p>
              <br></br>
              <br></br>
              <br></br>
              </article>
        <form className="login-form" onSubmit={handleSubmit}>
            <label for="email">Enter a registered email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@xyz.com"/>
            <label for="password">Enter your password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******"/>
            <br></br>
            <br></br>
            <button class="button-33" type = "submit">Log In</button> 
        </form>
        <br></br>
        <button className = "link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register now!</button>
        </div>
        </div>
      </div>
    )
}