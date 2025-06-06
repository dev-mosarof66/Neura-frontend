import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Provider from './context/Provider'
const Layout = lazy(() => import('./pages/public/Layout'))
const Landing = lazy(() => import('./pages/public/Landing'))
const Signup = lazy(() => import('./pages/public/Signup'))
const Login = lazy(() => import('./pages/public/Login'))
const Blogs = lazy(() => import('./pages/public/Blogs'))
const About = lazy(() => import('./pages/public/About'))
const NewsLetter = lazy(() => import('./pages/public/NewsLetter'))
const Explore = lazy(() => import('./pages/public/Explore'))
const Error = lazy(() => import('./pages/public/Error'))
const BlogDescription = lazy(() => import('./pages/public/BlogDescription'))
const Saved = lazy(() => import('./pages/user/Saved'))
const Loader = lazy(() => import('./components/public/loader'))
const AdminLogin = lazy(() => import('../src/pages/admin/login'))
const AdminDashboardLayout = lazy(() => import('../src/pages/admin/layout'))
const CreateBlog = lazy(() => import('../src/pages/admin/createBlog'))
const AdminDashboard = lazy(() => import('../src/pages/admin/dashboard'))

const route = () => {
    return (
        <Provider>
            <BrowserRouter>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path='' element={<Layout />} >
                            <Route index element={<Landing />} />
                            <Route path='/blogs' element={<Blogs />} />
                            <Route path='/news-letter' element={<NewsLetter />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/explore' element={<Explore />} />
                            <Route path='/saved' element={<Saved />} />
                            <Route path='/blogs/:id' element={<BlogDescription />} />
                        </Route>
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='*' element={<Error />} />
                        <Route path='/admin' element={<AdminDashboardLayout />} >
                            <Route index element={<AdminDashboard />} />
                            <Route path='/admin/create-blog' element={<CreateBlog />} />
                        </Route>
                        <Route path='/admin/create-blog/full-screen' element={<CreateBlog />} />
                        <Route path='/admin/login' element={<AdminLogin />} />
                    </Routes>
                </Suspense>

            </BrowserRouter>
        </Provider>
    )
}

export default route
