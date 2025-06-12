import React, { useRef, useState } from 'react'
import Context from './context'

const Provider = ({ children }) => {

    const [blog, setBlog] = useState({
        title: "",
        fileName: "Untitled"
    })
    const [admin, setAdmin] = useState(null)
    const [User, SetUser] = useState(null)
    const [logoutPopup, setLogoutPopup] = useState(false)
  const [blogs, setBlogs] = useState('')



    const editorRef = useRef(null);

    return (
        <Context.Provider
            value={{ editorRef, blog, admin, setAdmin, setBlog, User, SetUser,logoutPopup,setLogoutPopup,blogs,setBlogs }}>
            {
                children
            }
        </Context.Provider>
    )
}

export default Provider