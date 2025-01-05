import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
	return (
		<main className="max-w-7xl mx-auto bg-zinc-900/50 border-x border-zinc-100/10 min-h-screen px-8 xl:px-24 pt-16">
			<h1 className="font-sans text-4xl font-black max-w-xl">
				Full Stack Web, Mobile and Cloud Engineer
			</h1>
			<p className="mt-4 max-w-3xl font-sans text-foreground/70">
				Motivated Computer Science student with experience in front-end
				development and cybersecurity. Skilled in building user-friendly web
				interfaces, implementing data visualizations, and developing scalable,
				secure applications using modern frameworks like React.js and
				technologies such as Python and JavaScript. Passionate about solving
				complex problems and contributing to innovative tech solutions.
			</p>
			<div className="mt-6 flex items-center gap-4">
				<Link
					href="https://www.linkedin.com/in/younes-laaroussi/"
					target="_blank"
				>
					<FontAwesomeIcon
						icon={faLinkedin}
						className="w-8 xl:w-5 xl:h-5 h-8 text-foreground/40 hover:text-foreground"
					/>
				</Link>
				<Link href="https://www.github.com/youneslaaroussi/" target="_blank">
					<FontAwesomeIcon
						icon={faGithub}
						className="w-8 xl:w-5 xl:h-5 h-8 text-foreground/40 hover:text-foreground"
					/>
				</Link>
			</div>

			<Link
				href="https://vidova.ai"
				target="_blank"
				className="text-blue-500 font-sans font-semibold flex items-center gap-1.5 mt-8 hover:underline"
			>
				<FontAwesomeIcon icon={faExternalLink} className="w-3 h-3" />
				<small>view personal project: vidova.ai</small>
			</Link>
		</main>
	);
}
