import "./App.css";

import resume from "./resume/resume.pdf";

function App() {
	return (
		<>
			<div className="w-screen h-screen bg-blue-100">
				<p> I made a change </p>
				<a href={resume} download>
					<button className="px-4 rounded-md hover:bg-white ">
						Download Resume
					</button>
				</a>
			</div>
		</>
	);
}

export default App;
