import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { ArrowBigUp, ArrowBigDown } from 'lucide-react';
import '../../css/public/Landing.css'
import PrviousComment from '../../components/public/Comment'



const BlogDescription = () => {
    const location = useLocation()
    const item = location.state;
    console.log(item);

    const [like, setLike] = useState(100)
    const [dislike, setDislike] = useState(500)

    const handleLike = () => {
        setLike((prev) => prev + 1)
    }
    const handleDislike = () => {
        setDislike((prev) => prev - 1)
    }

    useEffect(() => {
        document.title = `${item.title}`
        window.scrollTo(0, 0)
    })

    return (
        <div onScroll={() => console.log('scrolling')} className='flex flex-col gap-8'>
            <BlogCard item={item} />
            <div className='flex flex-col gap-3 border border-green-600'>  </div>
            <Subscription like={like} handleLike={handleLike} dislike={dislike} handleDislike={handleDislike} />
        </div>
    )
}

const BlogCard = ({ item }) => {
    return (
        <div className="w-full  mx-auto flex flex-col md:block md:mt-6 gap-3">
            <img className="w-full md:w-96 lg:w-[500px] xl:w-[600px] bg-amber-50 object-cover float-left mr-8" src={item?.image} />
            <h2 className="text-2xl xs:text-3xl sm:text-3xl xl:text-5xl font-bold text-white mb-2 lg:mb-6">{item.title}</h2>
            <p className="text-gray-300 text-sm xs:text-base xl:text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, assumenda quo! Labore magni iure obcaecati molestias consequuntur molestiae natus, numquam, ex voluptatem ducimus fuga similique officia, aspernatur hic cumque dolorem officiis! Nemo, quibusdam reiciendis earum reprehenderit veniam harum accusamus illo, doloremque nostrum culpa excepturi atque totam, dolores porro minima ut laboriosam qui quasi vel laborum ratione quae provident. Iusto molestiae pariatur ducimus nihil saepe cupiditate ipsum voluptatibus, culpa nulla vel. Possimus recusandae iste dolorem similique corporis rem enim ipsum neque sed aspernatur, culpa, nam, suscipit dolor tenetur hic illo! Quos dolor repellendus, ullam voluptatum consectetur voluptatibus veritatis facere, nulla libero, eveniet itaque! Ea quaerat laudantium quisquam, amet eveniet consequuntur quos. Sit quas quis architecto nesciunt officia quae impedit fugiat, animi eius error ipsum. Quidem, delectus ad voluptatibus molestiae quam consequatur saepe quod perferendis perspiciatis maxime omnis fugit labore debitis doloribus quasi asperiores corporis aliquam cumque nulla id? Fugit beatae a fugiat voluptate, quod, dolorum tempore repellendus rerum vitae illo neque! Dicta hic dolorem similique facilis? Laboriosam commodi ducimus nisi laborum ullam cupiditate similique, quo harum vero velit asperiores quibusdam, praesentium natus saepe? Exercitationem libero ratione eveniet eos accusantium error velit aut, cumque rerum illum soluta vitae sequi temporibus tempore explicabo. Eos ut consequuntur deleniti vero deserunt repudiandae sed possimus dicta iste est ipsa ipsam porro, architecto magni cum repellendus. Vitae inventore dolorum quas corporis? Harum laudantium sequi aperiam unde illo voluptatum ratione expedita, recusandae, magni deserunt nemo veritatis quos, consequuntur odio est cum libero distinctio provident quibusdam explicabo at non maiores reiciendis quaerat!</p>
            <p className="text-gray-300 text-sm xs:text-base xl:text-lg font-semibold">
                Quia laudantium voluptates quo minima deserunt laborum expedita, nemo fugit natus officiis autem. Veritatis placeat praesentium aut esse neque a aspernatur dicta voluptas atque tempore, reiciendis recusandae at perferendis eaque voluptate temporibus? Accusamus tempora, corporis itaque nesciunt, quia mollitia quo quidem atque deserunt sed pariatur recusandae ex voluptates vel eaque officiis illo aperiam laudantium veritatis! Hic magni quia perspiciatis blanditiis. Non totam, a nulla odit nam dignissimos. Accusamus, commodi maiores? Nihil nam vel, vero, facere autem soluta optio, officiis ad at deserunt aperiam! Ut cumque explicabo quis beatae doloremque. Molestias praesentium est vel nemo labore ipsum quaerat at soluta vero minus ex sint, reiciendis perspiciatis veniam culpa incidunt architecto saepe nobis ad dicta molestiae. Commodi rerum ducimus quidem, quas, numquam minima nostrum suscipit, obcaecati soluta nesciunt ab consequuntur culpa ea. Unde fugit maxime laboriosam quam, iusto molestias. Laborum quam accusamus delectus in veritatis possimus quae aspernatur ducimus! Accusantium ex commodi nemo est voluptas nostrum, necessitatibus, animi sequi possimus ab perferendis voluptatum, tempora voluptatem vel atque. Architecto ipsam minus, nam ex, molestias, libero facere eum repellendus atque sit sed voluptatem odit quibusdam tempora voluptates. Rem voluptatem aperiam iure molestiae alias repellat. Deleniti excepturi amet, aperiam numquam sit accusantium deserunt voluptas minima assumenda veritatis corrupti velit quisquam molestiae repellat cum vel praesentium omnis ab laudantium eos ipsam perspiciatis in itaque officia! Pariatur esse facilis omnis nihil at in, rerum accusamus est veritatis aut ad aliquid error saepe, aliquam a obcaecati. Delectus, officia accusamus? Obcaecati quasi repudiandae est deserunt facere.
            </p>
        </div>
    );
};

const Subscription = ({ like, handleLike, dislike, handleDislike }) => {
    return (
        <div className='flex flex-col gap-3 border border-gray-600 rounded-2xl w-full p-3'>
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
                <div className='space-y-5  p-2 w-full '>
                    {/* likebox  */}
                    <div className='flex items-center gap-3 rounded-md '>
                        {/* like  */}
                        <div className='flex items-center gap-1 p-1 bg-green-600  rounded-md tooltip tooltip-accent' data-tip='Upvote'>
                            <div onClick={handleLike} className='p-1 bg-sky-500 rounded-md cursor-pointer hover:bg-sky-400 transition duration-300 delay-75'>
                                <ArrowBigUp size={24} />
                            </div>
                            <span className='font-semibold'>{like}k</span>
                        </div>
                        {/* dislike  */}

                        <div className='flex items-center gap-1 p-1 bg-green-600  rounded-md  tooltip tooltip-accent ' data-tip='Downvote'>
                            <div onClick={handleDislike} className='p-1 bg-sky-500 rounded-md cursor-pointer hover:bg-sky-400 transition duration-300 delay-75'>
                                <ArrowBigDown size={24} />
                            </div>
                            <span className='font-semibold'>{dislike}k</span>
                        </div>

                    </div>

                    {/* channel  */}
                    <div className='flex items-center gap-8'>
                        <div className='flex items-center gap-1.5'>
                            <div className='size-10 bg-amber-200 rounded-full'></div>
                            <h1 className='font-bold'>Neura</h1>
                        </div>
                        <button className='btn btn-sm btn-primary'>
                            Follow
                        </button>
                    </div>

                </div>
                <div className='w-full sm:hidden border border-green-700' />

                {/* comment box  */}

                <div className='w-full sm:w-[100%] '>
                    <div className='w-full rounded-sm px-3 py-1 grid grid-cols-1 gap-3 pb-4'>
                        <textarea spellCheck={false} className='w-full outline-none h-24 xs:h-32 resize-none border border-green-500 rounded-sm p-2' type='text' placeholder='Put your comment here..' />
                        <button className='w-full sm:w-32 p-1 bg-white text-black border border-white hover:bg-transparent hover:text-white active:bg-transparent active:text-white font-bold cursor-pointer transition duration-300 text-sm'>Comment</button>
                    </div>
                </div>
            </div>


            {/* previous comment  */}
            <PrviousComment />

        </div>
    )
}

export default BlogDescription