import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';  

const Register = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  // State variables for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedRole, setSelectedRole] = useState('');


  // Validation state variables
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [roleError, setRoleError] = useState('');

  const navigate = useNavigate();

  // Handle form field changes
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError('');
  };


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };


  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError('');
  };


  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
    setMobileNumberError('');
  };


  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    setRoleError('');
  };


  // Validate if the entered values are valid
  const validateFields = () => {
    let isValid = true;


    if (!username.trim()) {
      setUsernameError('Username is required');
      isValid = false;
    }


    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setEmailError('Enter a valid email address');
      isValid = false;
    }


    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.trim() || !passwordRegex.test(password.trim())) {
      setPasswordError('Password must contain at least 8 characters with one uppercase, one lowercase, one digit, and one special symbol');
      isValid = false;
    }


    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }


    // Basic mobile number validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileNumber.trim() || !mobileRegex.test(mobileNumber.trim())) {
      setMobileNumberError('Enter a valid 10-digit mobile number');
      isValid = false;
    }


    if (!selectedRole) {
      setRoleError('Role selection is required');
      isValid = false;
    }


    return isValid;
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();


    // Validate the fields
    const isValid = validateFields();


    // If all fields are valid, proceed with submission
    if (isValid) {
      // Perform form submission logic
      alert("Account successfully created");
      console.log('Form submitted:', { username, email, password, confirmPassword, mobileNumber, selectedRole });
      navigate("/")
    }
  };


  return (
    <div className="min-h-screen flex">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        {/* Left Section */}
        <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
          <div className="absolute bg-gradient-to-b from-yellow-300 to-yellow-400 opacity-75 inset-0 z-0"></div>
          <div className="w-full z-10">
          <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Seamless, captivating events don’t just happen... They’re ProPlannd, Where every detail is a MasterPiece.</div>
          <br/>
          <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Plan your parties like a pro...</div>
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
          </ul>
        </div>
        {/* Right Section */}
        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="flex flex-col items-center">
                <img src={logo} alt="Logo" className="w-44" />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-gray-900">Create an Account</h2>
              <p className="mt-2 text-sm text-gray-500">Please fill in the details below</p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              {/* Username Input */}
              <div className="relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Username</label>
                <input
                  value={username}
                  onChange={handleUsernameChange}
                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="text" placeholder="Your username" />
                {usernameError && <p className="text-red-500 text-xs mt-1">{usernameError}</p>}
              </div>
              {/* Email Input */}
              <div className="relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                <input
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="text" placeholder="mail@gmail.com" />
                {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
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


             
              {/* Confirm Password Input */}
              <div className="mt-4 relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Confirm Password</label>
                <input
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password" placeholder="Confirm your password" />
                {confirmPasswordError && <p className="text-red-500 text-xs mt-1">{confirmPasswordError}</p>}
              </div>
              {/* Mobile Number Input */}
              <div className="mt-4 relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Mobile Number</label>
                <input
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="tel" placeholder="Your mobile number" />
                {mobileNumberError && <p className="text-red-500 text-xs mt-1">{mobileNumberError}</p>}
              </div>
              {/* Role Selection */}
              <div className="mt-4 relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Select Role</label>
                <select
                  value={selectedRole}
                  onChange={handleRoleChange}
                  className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                >
                  <option value="" disabled>Select a Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  <option value="service">Service Provider</option>
                </select>
                {roleError && <p className="text-red-500 text-xs mt-1">{roleError}</p>}
              </div>
              {/* Sign Up Button */}
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full flex justify-center bg-gradient-to-r from-yellow-500 to-yellow-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4 rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Sign up
                </button>
              </div>
            </form>
            {/* Sign In Link */}
            <p className="flex flex-col items-center justify-center mt-4 text-center text-md text-gray-500">
              <span>Already have an account?</span>
              <a
                href="/login"
                className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Register;
