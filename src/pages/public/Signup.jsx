import React, { useContext, useEffect, useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Check } from 'lucide-react';
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import '../../css/public/Landing.css'
import toast from 'react-hot-toast';
import axiosInstance from '../../utils/axios';
import Context from '../../context/context';


const Signup = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  //from context

  const { User, SetUser } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('password and confirm password must be same');
      return;
    }

    setIsLoading(true);

    // Simulate signup process
    await new Promise(resolve => setTimeout(resolve, 2000));

    await axiosInstance.post("/user/signup", {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword
    }).then((res) => {
      console.log(res.data)
      toast.success("User created successfully.")
      toast.success("redirecting to Login page..")
      navigate("/login")
    }).catch((error) => {
      console.log(error)
      toast.error("User already exists.")
    }).finally(() => {
      setIsLoading(false);

    })

  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const passwordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const getStrengthColor = (strength) => {
    if (strength === 0) return 'bg-gray-200';
    if (strength === 1) return 'bg-red-400';
    if (strength === 2) return 'bg-yellow-400';
    if (strength === 3) return 'bg-blue-400';
    return 'bg-green-400';
  };

  const getStrengthText = (strength) => {
    if (strength === 0) return '';
    if (strength === 1) return 'Weak';
    if (strength === 2) return 'Fair';
    if (strength === 3) return 'Good';
    return 'Strong';
  };

  useEffect(() => {
    document.title = 'Signup | Neura'
  }, [])

  useEffect(() => {
    if (User) {
      navigate('/')
    }
  }, [User, navigate])

  return (
    <div className="w-full h-screen gradient-mesh flex items-center justify-center hide">
      <div className="rounded-2xl px-4 xs:px-14 py-3 border border-gray-100  shadow-2xl shadow-accent">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-2xl xs:text-3xl font-bold text-white">Create account</h2>
          <p className="text-gray-400 text-sm xs:text-base">Join us and start your journey</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2.5">
          {/* Name Fields */}
          <div className="w-full gap-4">
            <div>
              <label htmlFor="fullName" className="text-xs xs:text-sm font-medium text-gray-400">
                Full name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 size-5 xs:size-6" />
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-blue-400 text-xs xs:text-sm"
                  placeholder="John Doe"
                />
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs xs:text-sm font-medium text-gray-400">
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 size-4 xs:size-6" />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full sm:w-[320px] pl-11 text-xs xs:text-sm pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200  placeholder:text-blue-400"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="text-xs xs:text-sm font-medium text-gray-400">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 size-4 xs:size-6" />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-11 text-xs xs:text-sm pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-blue-400"
                placeholder="Create a password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="size-4 xs:size-6" /> : <Eye className="size-4 xs:size-6" />}
              </button>
            </div>
            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="space-y-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-2 flex-1 rounded-full transition-colors ${passwordStrength(formData.password) >= level
                        ? getStrengthColor(passwordStrength(formData.password))
                        : 'bg-gray-200'
                        }`}
                    />
                  ))}
                </div>
                <p className={`text-xs ${passwordStrength(formData.password) >= 3 ? 'text-green-600' : 'text-gray-500'}`}>
                  {getStrengthText(passwordStrength(formData.password))} password strength
                </p>
              </div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-xs xs:text-sm font-medium text-gray-400">
              Confirm password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 size-4 xs:size-6" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full pl-11 text-xs xs:text-sm pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-blue-400"
                placeholder="Confirm password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="size-4 xs:size-6" /> : <Eye className="size-4 xs:size-6" />}
              </button>
            </div>
            {formData.confirmPassword && formData.password !== formData.confirmPassword && (
              <p className="text-xs text-red-600">Passwords do not match</p>
            )}
            {formData.confirmPassword && formData.password === formData.confirmPassword && (
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-600" />
                <p className="text-xs text-green-600">Password match</p>
              </div>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              id="accept-terms"
              name="accept-terms"
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5"
            />
            <label htmlFor="accept-terms" className="ml-2 block text-xs text-gray-300">
              I agree to the{' '}
              <button type="button" className="text-blue-600 hover:text-blue-500 transition-colors">
                Terms of Service
              </button>{' '}
              and{' '}
              <button type="button" className="text-blue-600 hover:text-blue-500 transition-colors">
                Privacy Policy
              </button>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !acceptTerms || formData.password !== formData.confirmPassword}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 cursor-pointer"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Sign Up
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-blue-600 text-white font-bold">Or sign up with</span>
            </div>
          </div>
        </div>

        {/* Social Signup */}
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50/20 group transition-all duration-300 cursor-pointer">
            <FaGoogle />
            <span className="ml-2 text-sm font-medium text-gray-400 group-hover:text-blue-500">Google</span>
          </button>
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50/20 transition-all group ">
            <FaGithub />
            <span className="ml-2 text-sm font-medium text-gray-400 group-hover:text-blue-500">GitHub</span>
          </button>
        </div>

        {/* Sign in link */}
        <p className="mt-2 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <button onClick={() => navigate("/login")} className="font-medium text-blue-600 hover:text-blue-500 transition-all cursor-pointer">
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;