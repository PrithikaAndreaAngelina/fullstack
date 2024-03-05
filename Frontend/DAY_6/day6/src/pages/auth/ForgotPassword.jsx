import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import logo from '..//..//assets//images/logo.png'
import '../../assets/css/login.css'

const ForgotPassword = () => {
  const navigate = useNavigate();
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError('');
  };
  // Validate if the entered values are valid
  const validateFields = () => {
    let isValid = true;

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

    return isValid;
  };

    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validate the fields
      const isValid = validateFields();
  
      // If all fields are valid, proceed with submission
      if (isValid) {
        alert("Reset is done successfully");
      console.log('Form Submitted', { email,password });
      navigate('/login');
      }
    };
  return (
    <div className="min-h-screen flex">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        {/* Left Section */}
        <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
          <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
          <div className="w-full z-10">
          <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Seamless, captivating events don’t just happen... They’re ProPlannd, Where every detail is a MasterPiece.</div>
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
              <img src={logo} className="w-44"/>
            </div>
              <h2 className="mt-6 text-3xl font-bold text-gray-900">Forgot Password?</h2>
              <p className="mt-2 text-sm text-gray-500">Please enter your email to reset your password</p>
            </div>
            <div className="flex flex-row justify-center items-center space-x-3">
              {/* Add your additional components here if needed */}
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              {/* Email Input */}
              <div className="relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                <input
                  className={`w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500 ${emailError ? 'border-red-500 mb-1' : ''}`}
                  type="text"
                  placeholder="mail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
              </div>
              {/* Password Input */}
              <div className="mt-4 relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">New Password</label>
                <input
                  className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  value={password}
                  onChange={handlePasswordChange}
                  type={passwordVisibility ? "text" : "password"} 
                  placeholder="Enter your New password"
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
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Confirm New Password</label>
                <input
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password" placeholder="Confirm your New Password" />
                {confirmPasswordError && <p className="text-red-500 text-xs mt-1">{confirmPasswordError}</p>}
              </div>
              {/* Sign In Button */}
              <div>
                <button type="submit"
                  className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4 rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                  Reset Password
                </button>
              </div>
            </form>
            {/* Sign Up Link */}
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <a href="/login"
                className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">
                Back to Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
