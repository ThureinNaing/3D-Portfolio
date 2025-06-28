import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";

const ShowcaseSection = () => {
	// GSAP Animation
	const sectionRef = useRef<HTMLDivElement>(null);
	const project1Ref = useRef<HTMLDivElement>(null);
	const project2Ref = useRef<HTMLDivElement>(null);
	const project3Ref = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(ScrollTrigger);
	useGSAP(() => {
		const projects = [
			project1Ref.current,
			project2Ref.current,
			project3Ref.current,
		];
		projects.forEach((p, index) => {
			gsap.fromTo(
				p,
				{ opacity: 0, y: 50 }, // starting values
				{
					opacity: 1,
					y: 0,
					duration: 1,
					delay: 0.3 * (index + 1),
					scrollTrigger: {
						trigger: p,
						start: "top bottom",
					},
				} // ending values
			);
		});

		gsap.fromTo(
			sectionRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 1.5 }
		);
	}, []);

	return (
		<section id="work" ref={sectionRef} className="app-showcase">
			<div className="w-full">
				<div className="showcaselayout">
					{/* Left Showcase Content */}
					<div className="first-project-wrapper" ref={project1Ref}>
						<div className="image-wrapper w-full  ">
							<img
								src="/images/library.png"
								alt="project1"
								className="w-full h-auto object-cover"
							/>
						</div>
						<div className="text-content  mt-[-100px]">
							<h2>Library Management</h2>
							<p className="text-white-50 md:text-xl">
								An app build with React, Firebase & TailwindCSS
								for a fast, user friendly experience.
							</p>
							<a
								href="https://github.com/ThureinNaing/BookStoreViteReact-Firebase"
								className="flex  items-center border space-x-2 px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition-colors duration-300 max-w-fit text-sm"
							>
								<FaGithub />
								<span className="font-semibold">
									View on GitHub
								</span>
							</a>
						</div>
					</div>
					{/* Right Showcase Content */}
					<div className="project-list-wrapper overflow-hidden">
						<div className="project" ref={project2Ref}>
							<div className="image-wrapper bg-[#C4C4C4]">
								<img
									src="/images/ecommerce.png"
									alt="project2"
								/>
							</div>
							<div className="flex justify-between items-center mt-5">
								<h2>Ecommerce Website</h2>
								<a
									href="https://github.com/ThureinNaing/React-Laravel"
									className="flex  items-center border space-x-2 px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition-colors duration-300 w-fit text-sm"
								>
									<FaGithub />
									<span className="font-semibold">
										View on GitHub
									</span>
								</a>
							</div>
						</div>
						<div className="project" ref={project3Ref}>
							<div className="image-wrapper bg-[#ffe5e5]">
								<img
									src="/images/SaaS-App.png"
									alt="project2"
								/>
							</div>
							<div className="flex justify-between items-center mt-5">
								<h2>SaaS Application</h2>
								<a
									href="https://github.com/ThureinNaing/saas-app"
									className="flex  items-center border space-x-2 px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition-colors duration-300  w-fit text-sm"
								>
									<FaGithub />
									<span className="font-semibold">
										View on GitHub
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ShowcaseSection;
