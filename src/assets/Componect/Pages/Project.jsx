



const Project = () => {
    return (
        <div className="bg-base-200 mb-5 px-4">
            <h1 className="text-5xl text-center py-10">My projects </h1>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
            <div className="p-5">
                <iframe className="w-full h-80" src="https://roy-biplob.github.io/B8A2-Gamer-Zone/" ></iframe>
                <div className="space-y-1">
                <h1 className="text-3xl mt-1">Gamer zone</h1>
                <p className="font-bold">HTML,CSS</p>
                
                </div>
                <button className="btn m-3 text-xl btn-warning"><a href="https://roy-biplob.github.io/B8A2-Gamer-Zone/">Live Demo</a></button>
            </div>
            <div className="p-5">
                <iframe className="w-full h-80 scroll-m-11" src="https://roy-biplob.github.io/fruit-brust/#slide1" ></iframe>
                <div className="space-y-1">
                <h1 className="text-3xl mt-1">Fruit Brust</h1>
                <p className="font-bold uppercase">HTML,CSS,tailwindcss</p>
                
                </div>
                <button className="btn m-3 text-xl btn-warning"><a href="https://roy-biplob.github.io/B8A2-Gamer-Zone/">Live Demo</a></button>
            </div>
            <div className="p-5">
                <iframe className="w-full h-80 scroll-m-11" src="https://pherotubevideo.surge.sh/" ></iframe>
                <div className="space-y-1">
                <h1 className="text-3xl mt-1">PheHerotube Video</h1>
                <p className="font-bold uppercase">HTML,CSS,tailwindcss, Javascript</p>
                
                </div>
                <button className="btn m-3 text-xl btn-warning"><a href="https://roy-biplob.github.io/B8A2-Gamer-Zone/">Live Demo</a></button>
            </div>
          
          
            

            </div>
         
        </div>
    );
};

export default Project;