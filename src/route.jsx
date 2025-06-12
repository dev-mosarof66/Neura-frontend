import React, { lazy, Suspense, useContext, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router'
import Context from './context/context'
import axiosInstance from './utils/axios'
const Layout = lazy(() => import('./pages/public/Layout'))
const Landing = lazy(() => import('./pages/public/Landing'))
const Signup = lazy(() => import('./pages/public/Signup'))
const Login = lazy(() => import('./pages/public/Login'))
const Blogs = lazy(() => import('./pages/public/Blogs'))
const About = lazy(() => import('./pages/public/About'))
const NewsLetter = lazy(() => import('./pages/public/NewsLetter'))
const Explore = lazy(() => import('./pages/public/Explore'))
const Error = lazy(() => import('./pages/public/Error'))
const CategoryBlog = lazy(() => import('./pages/user/CategoryBlog'))
const BlogDescription = lazy(() => import('./pages/public/BlogDescription'))
const Loader = lazy(() => import('./components/public/loader'))


//user
const Saved = lazy(() => import('./pages/user/Saved'))
const Home = lazy(() => import('./pages/user/Home'))
const Profile = lazy(() => import('./pages/user/profile'))

//admin
const AdminLogin = lazy(() => import('../src/pages/admin/login'))
const AdminDashboardLayout = lazy(() => import('../src/pages/admin/layout'))
const CreateBlog = lazy(() => import('../src/pages/admin/createBlog'))
const AdminDashboard = lazy(() => import('../src/pages/admin/dashboard'))

const InnerRouter = () => {
    const { admin, setAdmin, User, SetUser } = useContext(Context);
    const location = useLocation();

    console.log(admin);


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axiosInstance.get('/user/get-profile');
                SetUser(res.data.user);
            } catch (error) {
                console.log('error in user data', error.response?.data);
            }
        };

        const fetchAdminData = async () => {
            try {
                const res = await axiosInstance.get('/admin/get-profile');
                setAdmin(res.data.user);
            } catch (error) {
                console.log(error.response?.data);
            }
        };

        if (location.pathname === '/admin') {
            fetchAdminData();
        } else
            fetchUserData();
        window.scrollTo(0, 0)
    }, [location]);

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path='' element={<Layout />} >
                    <Route index element={User === null ? <Landing /> : <Home />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/blogs/:id' element={<CategoryBlog />} />
                    <Route path='/news-letter' element={<NewsLetter />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/explore' element={<Explore />} />
                    <Route path='/saved' element={<Saved />} />
                    <Route path='/blogs/des/:id' element={<BlogDescription />} />
                </Route>
                <Route path='/login' element={User === null ? <Login /> : <Navigate to='/' />} />
                <Route path='/signup' element={User === null ? <Signup /> : <Navigate to='/' />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<Error />} />
                <Route path='/admin' element={admin === null ? <Navigate to={'/admin/login'} /> : <AdminDashboardLayout />} >
                    <Route index element={<AdminDashboard />} />
                </Route>
                <Route path='/admin/create-blog' element={<CreateBlog />} />
                <Route path='/admin/login' element={admin === null ? <AdminLogin /> : <Navigate to='/admin' />} />
            </Routes>
        </Suspense>
    );
};

const Router = () => {
    return (
        <>
            <Toaster />
            <BrowserRouter>
                <InnerRouter />
            </BrowserRouter>
        </>
    );
};

export default Router;


