const navLinks = [
	{
		name: "Work",
		link: "#work",
	},
	{
		name: "Experience",
		link: "#experience",
	},
	{
		name: "Skills",
		link: "#skills",
	},
	// {
	// 	name: "Testimonials",
	// 	link: "#testimonials",
	// },
];

const words = [
	{ text: "Ideas", imgPath: "/images/ideas.svg" },
	{ text: "Concepts", imgPath: "/images/concepts.svg" },
	{ text: "Designs", imgPath: "/images/designs.svg" },
	{ text: "Code", imgPath: "/images/code.svg" },
	{ text: "Ideas", imgPath: "/images/ideas.svg" },
	{ text: "Concepts", imgPath: "/images/concepts.svg" },
	{ text: "Designs", imgPath: "/images/designs.svg" },
	{ text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
	{ value: 2, suffix: "+", label: "Years of Experience" },
	{ value: 5, suffix: "+", label: "Satisfied Clients" },
	{ value: 7, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [
	{
		imgPath: "/images/logos/company-logo-1.png",
	},
	{
		imgPath: "/images/logos/company-logo-2.png",
	},
	{
		imgPath: "/images/logos/company-logo-3.png",
	},
	{
		imgPath: "/images/logos/company-logo-4.png",
	},
	{
		imgPath: "/images/logos/company-logo-5.png",
	},
	{
		imgPath: "/images/logos/company-logo-6.png",
	},
	{
		imgPath: "/images/logos/company-logo-7.png",
	},
	{
		imgPath: "/images/logos/company-logo-8.png",
	},
	{
		imgPath: "/images/logos/company-logo-9.png",
	},
	{
		imgPath: "/images/logos/company-logo-10.png",
	},
	{
		imgPath: "/images/logos/company-logo-11.png",
	},
];

const abilities = [
	{
		imgPath: "/images/seo.png",
		title: "Quality Focus",
		desc: "Delivering high-quality results while maintaining attention to every detail.",
	},
	{
		imgPath: "/images/chat.png",
		title: "Reliable Communication",
		desc: "Keeping you updated at every step to ensure transparency and clarity.",
	},
	{
		imgPath: "/images/time.png",
		title: "On-Time Delivery",
		desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
	},
];

const techStackImgs = [
	{
		name: "React",
		imgPath: "/images/logos/React.svg",
	},
	{
		name: "Next.js",
		imgPath: "/images/logos/Nextjs.svg",
	},
	{
		name: "Node.js",
		imgPath: "/images/logos/node.svg",
	},
	{
		name: "Express.js",
		imgPath: "/images/logos/express.svg",
	},
	{
		name: "MongoDB",
		imgPath: "/images/logos/mongodb.svg",
	},
	{
		name: "Firebase",
		imgPath: "/images/logos/firebase.svg",
	},
	{
		name: "PostgreSQL",
		imgPath: "/images/logos/postgres.svg",
	},
];

export type TechModel = {
	name?: string;
	modelPath: string;
	scale?: number;
	rotation?: [number, number, number];
};

const techStackIcons: TechModel[] = [
	{
		name: "React Developer",
		modelPath: "/models/react_logo-transformed.glb",
		scale: 1,
		rotation: [0, 0, 0],
	},
	// {
	// 	name: "Python Developer",
	// 	modelPath: "/models/python-transformed.glb",
	// 	scale: 0.8,
	// 	rotation: [0, 0, 0],
	// },
	{
		name: "Backend Developer",
		modelPath: "/models/node-transformed.glb",
		scale: 5,
		rotation: [0, -Math.PI / 2, 0],
	},
	// {
	// 	name: "Interactive Developer",
	// 	modelPath: "/models/three.js-transformed.glb",
	// 	scale: 0.05,
	// 	rotation: [0, 0, 0],
	// },
	{
		name: "Project Manager",
		modelPath: "/models/git-svg-transformed.glb",
		scale: 0.05,
		rotation: [0, -Math.PI / 4, 0],
	},
];

const expCards = [
	{
		review: "Thurein Naing brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
		imgPath: "/images/logos/MetaLogo.png",
		logoPath: "/images/logos/react.png",
		title: "Frontend Developer ",
		date: "June 2023",
		responsibilities: [
			"Developed and maintained user-facing features using React.",
			"Collaborated closely with UI/UX designers to ensure seamless user experiences in React-based components.",
			"Optimized React applications for maximum speed and scalability using tools like lazy loading, and code splitting.",
		],
	},
	{
		review: "Thurein Naing demonstrated deep expertise in backend development with Node.js, consistently delivering scalable and reliable solutions for our web applications.",
		imgPath: "/images/Nodejs.png",
		logoPath: "/images/logos/NodeJSLogo.png",
		title: "Node.js",
		date: "December 2024 - February 2025",
		responsibilities: [
			"Developed and maintained scalable backend services and APIs using Node.js and Express.",
			"Integrated MongoDB for efficient data management and optimized database queries for performance.",
			"Collaborated with frontend developers to design clean, RESTful APIs and ensure seamless integration.",
		],
	},
	{
		review: "Thurein Naing's work on Next.js projects brought a high level of quality and efficiency. He delivered solutions that enhanced our user experience and meet our product goals.",
		imgPath: "/images/NextJSImg.avif",
		logoPath: "/images/logos/NextJSLogo.webp",
		title: "Next.js Full Stack Developer",
		date: "March 2025 - Present",
		responsibilities: [
			"Built cross-platform mobile apps using Next.js, integrating with backend services.",
			"Enhanced app performance and user experience through code optimization, debugging, and testing.",
			"Collaborated with the product team to implement features and improvements based on user feedback.",
		],
	},
];

const expLogos = [
	{
		name: "logo1",
		imgPath: "/images/logo1.png",
	},
	{
		name: "logo2",
		imgPath: "/images/logo2.png",
	},
	{
		name: "logo3",
		imgPath: "/images/logo3.png",
	},
];

const testimonials = [
	{
		name: "Esther Howard",
		mentions: "@estherhoward",
		review: "I can’t say enough good things about Thurein Naing. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
		imgPath: "/images/client1.png",
	},
	{
		name: "Wade Warren",
		mentions: "@wadewarren",
		review: "Working with Thurein Naing was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
		imgPath: "/images/client3.png",
	},
	{
		name: "Guy Hawkins",
		mentions: "@guyhawkins",
		review: "Collaborating with Thurein Naing was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Thurein Naing's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Thurein Naing is the ideal partner.",
		imgPath: "/images/client2.png",
	},
	{
		name: "Marvin McKinney",
		mentions: "@marvinmckinney",
		review: "Thurein Naing was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
		imgPath: "/images/client5.png",
	},
	{
		name: "Floyd Miles",
		mentions: "@floydmiles",
		review: "Thurein Naing's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
		imgPath: "/images/client4.png",
	},
	{
		name: "Albert Flores",
		mentions: "@albertflores",
		review: "Thurein Naing was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
		imgPath: "/images/client6.png",
	},
];

const socialImgs = [
	{
		name: "fb",
		imgPath: "/images/fb.png",
		link: "https://www.facebook.com/share/1GQXUuyEto/?mibextid=wwXIfr",
	},

	{
		name: "linkedin",
		imgPath: "/images/linkedin.png",
		link: "",
	},
];

export {
	words,
	abilities,
	logoIconsList,
	counterItems,
	expCards,
	expLogos,
	testimonials,
	socialImgs,
	techStackIcons,
	techStackImgs,
	navLinks,
};
