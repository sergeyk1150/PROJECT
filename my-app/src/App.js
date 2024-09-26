import logo from './logo.svg';
import './App.css';
const date = new Date();

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload1.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				{/* декларативный метод */}
				<div>{date.getFullYear()}</div>
			</header>
		</div>
	);
};
