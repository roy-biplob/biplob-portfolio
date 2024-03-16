
import { Link } from 'react-router-dom';
import { FaFacebook,FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Bannar = () => {
    return (
      <div className="hero min-h-screen hero-overlay bg-opacity-90" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3769.jpg?w=740&t=st=1710596177~exp=1710596777~hmac=8ef58dc1d4a119423544ba51714380bd9a0062da790eafe723ea07e0e3f64225)'}}>
            <div className=" grid  min-h-screen  ">
  <div className="hero-content justify-around flex-col lg:flex-row-reverse">
    <img  src="https://i.ibb.co/8sGX3p0/429950054-1089135052304048-4070605959564964644-n-removebg-preview-1.png" className=" w-full h-76 rounded-full" />
    <div className='w-full text-center '>
      <h1 className="text-6xl font-bold italic text-blue-400">Hi There👋</h1>
      <h1 className="text-6xl font-bold italic">I am <span className='text-red-600'>BIPLOB KUMAR </span></h1>
      <p className="py-3 text-xl">I am Into <span className='font-bold'>Frontend-Devlopment</span></p>

     <button className="btn px-5 btn-warning text-center">Download CV</button>
     <div className='flex gap-2 text-3xl my-2 text-yellow-700 mt-3 '>
        <Link to=""><FaFacebook /></Link>
        <Link to=""><FaInstagram /></Link>
        <Link to=""><FaLinkedin></FaLinkedin></Link>
        <Link to=""><FaTwitter></FaTwitter></Link>
     </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Bannar;