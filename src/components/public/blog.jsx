import { useNavigate } from 'react-router';
import img from '../../assets/images/start-up.jpg'

const Blog = ({ data }) => {
    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
                data.map((item, index) => (
                    <BlogCard image={item.image} title={item.title} description={item.description} key={index} item={item} />
                ))
            }
        </div>
    )
}

const BlogCard = ({ image, title, description, item }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/blogs/${title}`, { state: item })} className="w-full rounded-md overflow-hidden shadow-sm  hover:shadow-md shadow-black/50 transition-shadow cursor-pointer duration-300">
            <img className="w-full h-48 bg-amber-50 object-cover" src={img} />
            <div className="p-5">
                <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
                <p className="text-gray-400 text-sm">{description.length > 40 ? description.slice(0, 60) + '...' : description}</p>
            </div>
        </div>
    );
};

export default Blog