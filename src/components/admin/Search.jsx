import React from 'react'
import { Search } from 'lucide-react'
const SearchComp = ({input,setInput}) => {
    return (
        <div>
            <div className='w-full md:w-[300px] flex items-center gap-2 border py-2 px-3 rounded-xl border-accent'>
                <Search size={20} color='gray' />
                <input value={input} onChange={(e) => setInput(e.target.value)} type='text' className='w-[80%] outline-none text-sm placeholder:text-secondary/50 text-white' placeholder='Search' />
            </div>
        </div>
    )
}

export default SearchComp