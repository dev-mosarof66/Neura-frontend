import { useRef } from 'react'
import Editor from './Editor'



const CreateBlog = () => {

  const editorRef = useRef(null)

  return (
    <div className='w-full overflow-y-auto hide'>
      <Editor editorRef={editorRef} />
    </div>
  )
}




export default CreateBlog