import React, { useState } from 'react'
import Context from './context'

const Provider = ({ children }) => {

    const [blog, setBlog] = useState({
        fileName:"Untitled",
        title: "",
        content: ""
    })
    return (
        <Context.Provider value={{blog,setBlog}}>
            {
                children
            }
        </Context.Provider>
    )
}

export default Provider