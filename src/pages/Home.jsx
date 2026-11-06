import Navbar from "../components/organisms/Navbar";
import Hero from "../components/organisms/Hero";
import About from "../components/organisms/About";
import Footer from "../components/organisms/Footer";
import Statistics from "../components/organisms/Statistics";
import Services from "../components/organisms/Services";
import Reveal from "../components/molecules/Reveal";

function Home() {
    return (
        <>
            <Navbar />

            <Hero />

            <Reveal>
                <About />
            </Reveal>

            <Reveal direction="up" delay={0.1}>
                <Statistics />
            </Reveal>

            <Reveal direction="up" delay={0.1}>
                <Services />
            </Reveal>

            <Footer />
        </>
    )
}
export default Home;