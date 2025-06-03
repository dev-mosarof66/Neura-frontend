import React from 'react';
import Navbar from '../../components/public/nav';
import Tabs from '../../components/public/tabs';
import '../../css/public/Landing.css'
const Landing = () => {
    return (
        <div className="gradient-bg relative overflow-hidden h-screen">

            {/* Content */}
            <div className="relative z-10 min-h-screen h-screen flex flex-col">
                <Navbar />
                <div className='w-[93%] mx-auto h-[94vh] mt-16 overflow-y-scroll hide '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magni quos dicta, minima totam sequi et? Nam doloribus vero repellat, voluptates, eos ipsa reiciendis officia ex laboriosam dolore hic cumque cum maiores excepturi architecto labore quas fuga inventore provident deserunt. Ratione libero illo praesentium deserunt, consectetur, blanditiis officia sequi laborum repellat suscipit sunt excepturi aperiam. Ut velit fugit, ab ipsa magnam nesciunt id praesentium maxime, distinctio ullam accusantium deserunt delectus animi odio facere tenetur voluptate itaque. Voluptatum maxime tempore nisi, illo voluptatibus maiores molestias tenetur laudantium? Vel, fuga repellat ipsam dolore id sapiente voluptatem hic tempora voluptas quam, labore aperiam. Consectetur assumenda inventore provident optio earum magnam quae possimus ex repudiandae itaque nostrum rem nulla quia aut iste dolorum asperiores ab veritatis, illum fugit pariatur, repellat veniam, tenetur quam. Maxime voluptatum corrupti numquam? Cum odio consectetur maiores? Debitis, deserunt omnis! Explicabo harum dignissimos molestiae culpa. Sint autem laborum harum, eius ullam eum, ipsum aspernatur, molestias sed veritatis repellendus corporis quidem suscipit magni repudiandae iure officiis dignissimos. Placeat harum recusandae blanditiis quas velit vitae dicta assumenda sed sapiente consectetur. Sint, enim voluptate similique totam tenetur iste mollitia doloremque animi id accusamus. Ratione voluptatum quasi hic magni, reiciendis error aperiam adipisci quisquam iusto aut facilis modi dolores architecto, reprehenderit id rerum eos excepturi nisi earum quia, natus laudantium quaerat? Ipsum quasi omnis officiis? Eos, laborum, non, recusandae eaque aliquid amet nostrum autem ab ratione at minima expedita id blanditiis magni molestiae a cum. Nobis vero nemo architecto inventore! Odit quas dolore laborum quia nam, perferendis facilis numquam accusantium est exercitationem dignissimos dolor! Nam ullam a accusamus omnis aliquid dicta sapiente ipsa, mollitia asperiores quas excepturi pariatur quod alias repellat, aspernatur sunt. Excepturi, in iure dolorem debitis impedit iusto consequatur vel incidunt nostrum rerum, quas eos asperiores nihil veniam? Minima dolore sint deserunt harum facere, veniam est doloribus reiciendis quos adipisci perferendis laboriosam nesciunt reprehenderit eos molestiae, pariatur eligendi consequuntur labore rem? Cumque cum tempore, quia rerum molestias blanditiis alias mollitia consequuntur omnis, error sequi ipsa nisi similique nihil et debitis iure voluptatum minima expedita consectetur reiciendis, facilis odio vel? Consequatur eius sed quibusdam quidem est veniam laborum! Libero dolore a magnam cum, exercitationem voluptates sit ut! Quam iure dolore iusto, fugiat obcaecati porro, omnis temporibus accusamus pariatur nulla sapiente dolorum nisi perspiciatis officiis corporis animi ad architecto, enim minus incidunt aliquam tempore esse. Ipsam, nulla itaque fuga enim ab alias dolor, sequi delectus in doloremque sed iusto ad tenetur eum? In fugit sint dolorum sit sed iusto culpa veniam dignissimos eaque. Molestias quas quae laborum repellendus eos perspiciatis! Quam illum itaque debitis, veniam et asperiores, recusandae ipsum quisquam repellat veritatis non labore natus. In tempore deserunt adipisci officia! Expedita officia nemo possimus dolor praesentium ipsam sapiente, illum eius minima earum architecto! Eaque commodi similique tempora ea. Temporibus perspiciatis cupiditate dicta praesentium facilis corrupti, repellendus fuga, veritatis vel maiores itaque voluptas impedit similique at sunt quam eos quo fugit ad velit quibusdam vero ut illum provident. Molestias fugiat suscipit non ipsam, ducimus aliquam?0</p>
                </div>
                <div className='w-full sm:hidden '>
                    <Tabs />
                </div>
            </div>

        </div>
    );
};

export default Landing;