import React, { useRef, useState } from 'react'
import Context from './context'

const Provider = ({ children }) => {

    const [blog, setBlog] = useState({
        title: "",
        fileName: "Untitled"
    })

    const editorRef = useRef(null);

    return (
        <Context.Provider value={{ editorRef, blog, setBlog }}>
            {
                children
            }
        </Context.Provider>
    )
}

export default Provider