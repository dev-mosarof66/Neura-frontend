import React, { useRef, useState } from 'react'
import Context from './context'

const Provider = ({ children }) => {

    const [blog, setBlog] = useState({
        title: "",
        fileName: "Untitled"
    })
    const [admin, setAdmin] = useState(null)
    const [User, SetUser] = useState(null)

    const editorRef = useRef(null);

    return (
        <Context.Provider
            value={{ editorRef, blog, admin, setAdmin, setBlog, User, SetUser }}>
            {
                children
            }
        </Context.Provider>
    )
}

export default Provider