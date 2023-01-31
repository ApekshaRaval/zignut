
import { useState } from 'react';
import './page.css';
const Signup=()=> {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
    console.log(name,email,password);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1> {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1>SignUp</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		
		<input onChange={handleName} className="input"
		value={name} type="text"  placeholder='Enter Name'/>
        <br/> 
         <br/>

		<input onChange={handleEmail} className="input"
		value={email} type="email" placeholder='xyz@gmail.com' />

         <br/> 
         <br/>
		<input onChange={handlePassword} className="input"
		value={password} type="password" placeholder='Enter secret code'/>
         <br/> 
         <br/>
       
		<button onClick={handleSubmit} className="btn" type="submit">
		Add Me
		</button>
	</form>
	</div>
);
}
export default Signup;
