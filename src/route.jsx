import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
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

const route = () => {
    return (
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
                </Routes>
            </Suspense>

        </BrowserRouter>
    )
}

export default route
