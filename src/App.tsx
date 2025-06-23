import Hero from "./section/Hero";
// import MouseTrail from "./MouseTrial";
import ShowcaseSection from "./section/ShowcaseSection";
import Navbar from "./components/Navbar";
import FeatureCard from "./section/FeatureCard";
import ExperienceSection from "./section/ExperienceSection";
import TechStack from "./section/TechStack";
// import Testimonial from "./section/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			{/* <MouseTrail /> */}
			<Navbar />
			<Hero />
			<ShowcaseSection />
			<FeatureCard />
			<ExperienceSection />
			<TechStack />
			{/* <Testimonial /> */}
			<Contact />
			<Footer />
		</>
	);
};

export default App;
