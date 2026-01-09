import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import AWSExpertise from '../components/AWSExpertise';
import Services from '../components/Services';

const Home = () => {
    return (
        <div id="home">
            <Hero />
            <About />
            <AWSExpertise />
            <Skills />
            <Projects />
            <Services />
            <Contact />
        </div>
    );
};

export default Home;
