// import React from 'react'
// import { Link } from 'react-router-dom'
// // import Navbar from '../stores/components/Navbar'

// const Signup = () => {
//   return (
//     <>
//     {/* <Navbar /> */}
//     <div>
//         <div className="wrapper signUp">
//       {/* <div className="illustration">
//         <img src="https://source.unsplash.com/random" alt="illustration" />
//       </div> */}
//       <div className="form">
//         <div className="heading">CREATE AN ACCOUNT</div>
//         <form>
//           <div>
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" placeholder="Enter your name" />
//           </div>
//           <div>
//             <label htmlFor="name">E-Mail</label>
//             <input type="text" id="name" placeholder="Enter your mail" />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter you password"
//             />
//           </div>
//           <button type="submit">
//             {/* <Link to="/login"> */}
//             Submit
//             {/* </Link> */}
//             </button>
//         </form>
//         <p>
//           Have an account ? <Link to="/login"> Login </Link>
//         </p>
//       </div>
//     </div>
//       </div>
//     </>
//   )
// }

// export default Signup



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      // submit logic here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div>
        <div className="wrapper signUp">
          <div className="form">
            <div className="heading">CREATE AN ACCOUNT</div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <p>
                {errors.name && <span className="error">{errors.name}</span>}
                </p>
              </div>
              <div>
                <label htmlFor="email">E-Mail</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <p>
                {errors.email && <span className="error">{errors.email}</span>}
                </p>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <p>
                {errors.password && (
                <span className="error">{errors.password}</span>
                )}
                </p>
              </div>
              <button type="submit">Submit</button>
            </form>
            <p>
              Have an account ? <Link to="/login"> Login </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
