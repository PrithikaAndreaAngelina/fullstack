import React, { useState } from 'react';
import '..//../assets/css/login.css'
import logo from '..//..//assets//images/logo.png'
import { useNavigate } from 'react-router-dom';  

const Login = () => {
  // State hooks for inputs and validation messages
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };
  // Validate email format
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Validate password criteria
  const isValidPassword = (password) => password.length >= 8 &&
    /[A-Z]/.test(password) && // At least one uppercase letter
    /[a-z]/.test(password) && // At least one lowercase letter
    /[0-9]/.test(password) && // At least one digit
    /[^A-Za-z0-9]/.test(password); // At least one special character

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!isValidPassword(password)) {
      setPasswordError('Invalid Password');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      // Proceed with your submission logic (API call etc.)
      alert("Logged in successfully");
      console.log('Form Submitted', { email, password });
      navigate("/user/home/")
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        {/* Left Section */}
        <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
          <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
          <div className="w-full space-y-6 z-10">
          <div className="sm:text-4xl xl:text-5xl font-bold leading-relax mb-6 ">Seamless, captivating events don’t just happen... </div>
          <div className="sm:text-4xl xl:text-5xl font-bold leading-loose mb-6 ">They’re ProPlannd., </div>
          </div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        {/* Content omitted for brevity */}
        {/* Right Section */}
        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="flex flex-col items-center">
                <img src={logo} alt="Logo" className="w-44"/>
              </div>
              <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome Back!</h2>
              <p className="mt-2 text-sm text-gray-500">Please sign in to your account</p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              {/* Email Input */}
              <div className="relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                <input
                  className={`w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500 ${emailError ? 'border-red-500 mb-1' : ''}`}
                  type="email"
                  placeholder="mail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
              </div>
              {/* Password Input */}
              <div className="mt-4 relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Password</label>
                <input
                  className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  value={password}
                  onChange={handlePasswordChange}
                  type={passwordVisibility ? "text" : "password"} 
                  placeholder="Enter your password"
                />
                {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                <button
                  type="button"
                  onClick={() => setPasswordVisibility(!passwordVisibility)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {passwordVisibility ? '🚫' : '👁'}
                </button>
              </div>
              {/* Remember Me Checkbox and Forgot Password Link */}
              <div className="flex items-center justify-between">
                 <div className="flex items-center">
                   <input id="remember_me" name="remember_me" type="checkbox"
                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>
                <div className="text-sm">
                  <a href="/forgotpassword/" className="text-indigo-400 hover:text-blue-500">Forgot your password?</a>
                </div>
              </div>
              {/* Sign In Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4 rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Sign in
                </button>
              </div>
            </form>
            {/* Sign Up Link */}
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Don't have an account?</span>
              <a href="/register"
                className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
