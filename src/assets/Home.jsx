import Bannar from "./Componect/Bannar";


import About from "./Componect/Pages/About";
import Contact from "./Componect/Pages/Contact";
import Project from "./Componect/Pages/Project";
import Service from "./Componect/Pages/Service";
import Skills from "./Componect/Pages/Skills";


const Home = () => {
    return (
        <div className="">
            <Bannar></Bannar>
            <About></About>
            <Service ></Service>
            <Skills ></Skills>
            <Project></Project>
            <Contact></Contact>
           
            
        </div>
    );
};

export default Home;