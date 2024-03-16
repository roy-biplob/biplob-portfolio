

const Service = () => {
    return (
        <div className="mb-3">
            <h1 className="text-5xl text-center  my-7 ">Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 md:py-0 justify-center ">
                <div className="card w-full  bg-base-100 shadow-xl ">
                    <figure><img className="h-60 rounded-2xl" src="https://my-personal-site-c3e85.web.app/assets/frontend-hQNQEZRO.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Front-End developer</h2>
                        <p>I develop the websites. create high performance website with blazing fast speed.</p>
                        
                    </div>
                </div>
                <div className="card w-full  bg-base-100 shadow-xl">
                    <figure><img className="h-60 rounded-2xl" src="https://my-personal-site-c3e85.web.app/assets/marnstark-8DN5Z0GF.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">MERN stack developer</h2>
                        <p>I develop the websites. create high performance website with blazing fast speed.</p>
                        
                    </div>
                </div>
                <div className="card  w-full bg-base-100 shadow-xl">
                    <figure><img className="h-60 rounded-2xl" src="https://my-personal-site-c3e85.web.app/assets/webdevlopment-nNn6Vl2T.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Web Development</h2>
                        <p>I develop the websites. create high performance website with blazing fast speed.</p>
                        
                    </div>
                </div>

            </div>
          

        </div>
    );
};

export default Service;