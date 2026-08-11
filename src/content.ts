export type Project = {
  name: string
  description: string
  stack: string[]
  href: string
  year: string
}

export type Experience = {
  role: string
  company: string
  period: string
  summary: string
}

export type SocialLink = {
  label: string
  href: string
}

export const profile = {
	name: "Taiye Akinlade",
	role: "Frontend Engineer",
	location: "Lagos, Nigeria",
	email: "taiye.akinlade1@gmail.com",
	tagline:
		"Frontend engineer with 3+ years experience of creating fast, modern, and delivering high quality digital products.",
	about: [
		"I am a Frontend engineer with over 3 years experience of building and shipping responsive web applications for startups and fast-growing platforms. Focused on writing clean, reusable component architectures, optimizing Core Web Vitals, and bridging the gap between complex UI designs and high-performance code. Experienced working inside cross-functional agile teams and breaking down complex technical goals into practical development steps. ",
	],
};

export const skills: string[] = [
	"TypeScript",
	"React",
	"NextJs",
	"PostgreSQL",
	"Tailwind CSS",
	"Node.js", 
  "Firebase", 
  "Supabase", 
  "MongoDB", 
  "ExpressJs",
];

export const projects: Project[] = [
	{
		name: "Otuobiri",
		description:
			"OTUOBIRI is an all-in-one platform designed to help organizations, educators, communities, and event organizers connect, engage, and grow. From hosting events and courses to managing communities and monetization, OTUOBIRI centralizes all tools you need in one place.",
		stack: [
			"React",
			"Tailwind CSS",
			"Firebase",
			"Socket.IO",
			"Redux",
			"Tanstack",
			"Shadcn UI",
			"Google Maps",
		],
		href: "https://www.otuobiri.com",
		year: "2026",
	},
	{
		name: "Withjara Flex",
		description: "One Platform for Shopping, Selling, and Delivery",
		stack: [
			"React",
			"Tailwind CSS",
			"Typescript",
			"Tanstack",
			"API Integration",
		],
		href: "https://www.withjara.com",
		year: "2026",
	},
	{
		name: "WithJara",
		description:
			"A custom CRM system to streamline customer interactions, sales tracking, and lead management. Developed dashboard analytics to track KPIs such as customer engagement, conversion rates, vendors, delivery riders and sales performance.",
		stack: ["NextJs", "Redux", "Tailwind CSS", "Api Integration"],
		href: "https://vendor.withjara.com",
		year: "2025",
	},
	{
		name: "LASMAB",
		description:
			"A comprehensive platform designed to streamline operations for teachers, students, administrators, and parents in Anglican schools across Lagos State. The platform offers a range of features, including student performance tracking, attendance management, and communication tools.",
		stack: [
			"React",
			"Redux",
			"API Integration",
			"Axios",
			"Tailwind CSS",
			"Socket.IO",
		],
		href: "https://lasmab.org",
		year: "2025",
	},
	{
		name: "Sales Track",
		description:
			"Sales Track is a multi-store Point of Sales(POS) and e-commerce website. Where user can Upload products, inventory control, expenses, manage sales, suppliers and customers. Generate extensive real time reporting and Analytics",
		stack: ["React", "Radix", "Tailwind"],
		href: "https://subscribe.salestrack.app",
		year: "2024",
	},
];

export const experience: Experience[] = [
	{
		role: "Frontend Engineer",
		company: "Kaybill Technologies",
		period: "2025 — Present",
		summary:
			"Lead front-end work on the core product surface. Rebuilt the design system and cut median page load time by half.",
	},
	{
		role: "Frontend Engineer",
		company: "Digitstem",
		period: "2023 — 2024",
		summary:
			"Enhanced LMS task-management efficiency by 65% by designing a task management feature that enabled users to update multiple learning tasks simultaneously, reducing repetitive administrative operations",
	},
	{
		role: "Frontend Engineer",
		company: "SpringBall Technology",
		period: "2022 — 2023",
		summary:
			"Maintained and built 10+ responsive webpages, for both company and clients. Collaborated with the design team to implement UI/UX designs and ensure a seamless user experience.",
	},
];

export const socials: SocialLink[] = [
	{ label: "GitHub", href: "https://github.com/TeeAkinlade" },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/akinlade-taiye-733a8120a",
	},
	{ label: "X", href: "https://x.com/THarkinlade" },
];
