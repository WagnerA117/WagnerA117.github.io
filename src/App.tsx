import "./App.css";

import {Home} from "./pages";
import {ThemeProvider} from "./theme/ThemeProvider";

function App() {
	return (
		<>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<Home />
			</ThemeProvider>
		</>
	);
}

export default App;
