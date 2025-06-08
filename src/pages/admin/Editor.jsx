import { useEffect, useState } from 'react';
import { FaBold, FaUnderline, FaItalic, FaSave } from 'react-icons/fa';
import '../../css/public/Landing.css'
import toast from 'react-hot-toast';
import Loader from '../../components/public/loader';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router';

const Editor = ({ editorRef }) => {
  const navigate = useNavigate()
  const [fileName, setFileName] = useState('Untitled');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false)

  const handleSave = () => {
    const content = editorRef.current.innerHTML;
    localStorage.setItem('editor-content', content);
    localStorage.setItem('editor-title', title);
    localStorage.setItem('editor-filename', fileName);
    toast.success("data stored in database.")
  };


  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  useEffect(() => {
    setLoading(true)
    const content = localStorage.getItem("editor-content");
    const title = localStorage.getItem("editor-title");
    const fileName = localStorage.getItem("editor-filename");
    if (content && editorRef.current) editorRef.current.innerHTML = content;
    if (title) setTitle(title);
    if (fileName) setFileName(fileName);
    setLoading(false)
  }, []);

  //automatically save the changes

  // useEffect(() => {
  //   setInterval(() => {
  //     const content = editorRef.current.innerHTML;
  //     localStorage.setItem('editor-content', content);
  //     localStorage.setItem('editor-title', title);
  //     localStorage.setItem('editor-filename', fileName);
  //     toast.success("data saved automatically.")
  //   }, 10000);
  // }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className={`w-full mx-auto pt-6  flex flex-col`}>

      <header className="w-full fixed top-0 backdrop-blur-2xl flex items-center justify-between px-4 xs:px-14 py-6">
        <div className='flex items-center gap-4'>
          <div className='hover:scale-95 cursor-pointer duration-300 transition-transform delay-75'>
            <img className='size-7' onClick={() => navigate('/')} src={logo} alt='Logo' />
          </div>
          <div className='flex items-center gap-2'>
            <button className="tooltip tooltip-bottom" data-tip="Save" onClick={handleSave}>
              <FaSave className="text-2xl text-gray-500 hover:text-blue-600 cursor-pointer" />
            </button>
            <input
              type="text"
              className="text-base font-semibold bg-transparent outline-none"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
          </div>
        </div>
      </header>

      <div className='w-full xs:w-[90%] mx-auto overflow-y-auto p-6 py-14'>
        <div className="p-4">
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Blog title goes here..."
            className="w-full text-xl font-semibold border-none outline-none resize-none hide"
          />
        </div>

        <div
          contentEditable={true}
          ref={editorRef}
          className="flex-1 p-4 overflow-y-scroll outline-none focus:outline-none text-base leading-relaxed hide"
          suppressContentEditableWarning={true}
        >
          Start typing here...
        </div>
      </div>

      <ToolBar formatText={formatText} />
    </div>
  );
};

const ToolBar = ({ formatText }) => {
  return (
    <div className="w-full flex items-center justify-center fixed bottom-4 z-50">
      <div className="flex gap-3 border border-gray-600 shadow-md px-5 py-3 rounded-xl items-center backdrop-blur-sm ">
        <ToolbarButton command='bold' formatText={formatText} icon={<FaBold />} tooltip="Bold" />
        <ToolbarButton command='italic' formatText={formatText} icon={<FaItalic />} tooltip="Italic" />
        <ToolbarButton command='underline' formatText={formatText} icon={<FaUnderline />} tooltip="Underline" />


        <select
          className="select select-bordered select-sm cursor-pointer text-sm"
          onChange={(e) => formatText('fontSize', e.target.value)}
        >
          <option disabled value='0'>Font Size</option>
          <option value="1">Very Small</option>
          <option value="2">Small</option>
          <option value="3">Normal</option>
          <option value="4">Large</option>
          <option value="5">Very Large</option>
        </select>

        <label className="tooltip tooltip-top" data-tip="Text Color">
          <input
            type="color"
            className="w-8 h-8 rounded-full cursor-pointer"
            onChange={(e) => formatText('foreColor', e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

const ToolbarButton = ({ icon, tooltip, command, formatText }) => (
  <button
    onClick={() => formatText(command)}
    className="tooltip tooltip-top text-lg sm:text-xl cursor-pointer hover:text-blue-600 transition"
    data-tip={tooltip}
  >
    {icon}
  </button>
);

export default Editor;
