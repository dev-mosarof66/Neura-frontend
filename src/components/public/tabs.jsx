import '../../css/public/Landing.css'
import { FaBookReader } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { PiNewspaperFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import { useState } from 'react';

const TabItems = [
  {
    id: 1,
    title: "Home",
    Icon: <HiHome />
  },
  {
    id: 2,
    title: "Blogs",
    Icon: <FaBookReader />
  },
  {
    id: 3,
    title: "Explore",
    Icon: <MdExplore />
  },
  {
    id: 4,
    title: "News Letter",
    Icon: <PiNewspaperFill />
  },
  {
    id: 5,
    title: "Saved",
    Icon: <FaBookmark />
  },
]



const Tabs = () => {
  const [selectedItem, setSelectedItem] = useState(1)
  return (
    <div className='w-[100%] mx-auto flex bg-base-100 py-2 xs:py-1 rounded-t-xl border-t border-t-secondary'>
      <ul className="flex w-[90%] xs:w-[90%] mx-auto justify-between text-white font-medium text-sm">
        {
          TabItems.map((item, index) => (
            <Comp key={index} title={item.title} Icon={item.Icon} id={item.id} selected={selectedItem} onpress={setSelectedItem} />
          ))
        }
      </ul>

    </div>
  )
}

const Comp = ({ title, Icon, selected, id, onpress }) => {
  return (
    <div onClick={() => onpress(id)} className={`flex flex-col items-center justify-center cursor-pointer hover:bg-accent p-3 xs:p-2 ${selected === id ? "bg-accent" : ""} rounded-sm gap-0.5 transition duration-300 tooltip tooltip-info`} data-tip={title} >
      <div className={`text-xl xs:text-xl ${selected === id ? "text-secondary" : "text-white"}`}>
        {Icon}
      </div>
      <p className={`${selected === id ? "text-secondary font-bold" : ""} hidden xs:block`}>{title}</p>
    </div>
  )
}

export default Tabs
