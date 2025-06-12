import React, { useContext, useEffect, useState } from 'react';
import { Eye, EyeOff, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router';
import axiosInstance from '../../utils/axios'
import toast from 'react-hot-toast';
import Context from '../../context/context';

const Login = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const { setAdmin } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate login process
        await axiosInstance.post('/admin/login', {
            username: formData.username,
            password: formData.password
        }).then((res) => {
            console.log(res.data);
            setAdmin(res.data.admin)
            toast.success('Login successful.')

        }).catch((error) => {
            console.log(`Login error : ${error}`);
            toast.error('Login failed.')

        }).finally(() => {
            setIsLoading(false);
        })

        navigate("/admin")
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        document.title = 'Login | Neura'
    }, [])

    return (
        <div className="w-full h-screen gradient-mesh flex items-center justify-center">
            <div className="border border-gray-100 shadow-2xl shadow-error rounded-2xl p-6 xs:p-8 xs:px-14">
                {/* Header */}
                <div className="text-center mb-5 w-full">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Admin Login</h2>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                    {/* username Field */}
                    <div className="space-y-2">
                        <label htmlFor="username" className="text-sm font-medium text-gray-400">
                            Username
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-5 h-5" />
                            <input
                                id="username"
                                name="username"
                                type="username"
                                required
                                value={formData.username}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-blue-400"
                                placeholder="username"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-400">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-5 h-5" />
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-blue-400"
                                placeholder="password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 cursor-pointer"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <>
                                Sign in
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;