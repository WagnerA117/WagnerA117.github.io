import resume from "../resume/resume.pdf";
import {ThemeToggle} from "../components/ThemeToggle/ThemeToggle";

export const Home = () => {
	return (
		<div className="w-screen h-screen bg-blue-100">
			<p> I made a change </p>
			<a href={resume} download>
				<ThemeToggle />
				<button className="px-4 rounded-md hover:bg-white ">
					Download Resume
				</button>
			</a>
		</div>
	);
};
