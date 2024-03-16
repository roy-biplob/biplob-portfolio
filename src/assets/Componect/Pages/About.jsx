


const About = () => {
  return (
    <div className="bg-base-200">
      <h1 className='text-5xl text-center pt-8'>About Me</h1>
      <div className="hero h-[70vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="h-full">
          <img src="https://i.ibb.co/8sGX3p0/429950054-1089135052304048-4070605959564964644-n-removebg-preview-1.png" className=" rounded-lg h-full " />
          </div>
          <div className="w-full p-10">
            <h1 className="text-2xl  italic ">I am Biplob Kumar Roy</h1>
            <h3 className="text-xl">  -- Frontend web devloper</h3>
            <p className="py-6">Greetings, I am Biplob, a dedicated Frontend Web Developer hailing from Bangladesh. With a fervent commitment to crafting professional-grade websites, I specialize in delivering dynamic and captivating online experiences. Leveraging my expertise in web development, I strive to bring innovation and excellence to every project I undertake. Let collaborate to elevate your digital presence and achieve your goals effectively. <br />

              <span className="text-blue-500">Email</span>: coderbiplobkumar@gmail.com <br />
              <span className="text-blue-500">Place</span>:Thakurgaon, Bangladesh</p>
            <button className="btn btn-warning px-5 rounded-lg h-2">Hire Me</button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default About;