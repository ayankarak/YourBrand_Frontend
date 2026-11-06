import Navbar from "../components/organisms/navbar";
import Hero from "../components/organisms/Hero";
import About from "../components/organisms/About";
import Footer from "../components/organisms/Footer";
import Statistics from "../components/organisms/Statistics";
import Services from "../components/organisms/Services";

function Home() {
    return(
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Statistics />
                <Services />
            </main>
            <Footer />
        </>
    )
}
 export default Home;