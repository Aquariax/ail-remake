import './App.css';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import './components/layout/styles/compiled/main.css';
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Header />
			<h4>Hello World</h4>
		</div>
	);
}

export default App;
