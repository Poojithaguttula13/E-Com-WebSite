import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
// import Navbar from '../stores/components/Navbar';

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        let formErrors = {};

    if (!email) formErrors.email = "Email is required";
    if (!password) formErrors.password = "Password is required";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
    //   alert("Login successful");
      navigate("/");
      console.log({ email, password });
    }
    };
  return (
    <>
    {/* <Navbar /> */}
    <div className='login-page'>
    <div className="wrapper signIn">
			{/* <div className="illustration">
				<img src="https://source.unsplash.com/random" alt="illustration" />
			</div> */}
			<div className="form">
				<div className="heading">LOGIN</div>
				<form onSubmit={handleLogin}>
					<div>
						<label htmlFor="e-mail">E-mail</label>
                        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{errors.email}</p>
					</div>
					<div>
						<label htmlFor="password">Password</label>
                        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{errors.password}</p>
					</div>
					<button type="submit">
                        {/* <Link to="/land"> */}
						Submit
                        {/* </Link> */}
					</button>
				</form>
				<p>
					Don't have an account ? <Link to="/signup"> Sign In </Link>
				</p>
			</div>
		</div>
    </div>
    </>
  )
}

export default Login
