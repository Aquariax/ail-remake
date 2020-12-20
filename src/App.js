import './App.css';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './components/layout/styles/compiled/main.css';
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Header />
			<h4>Hello World</h4>
			<Footer />
		</div>
	);
}

export default App;
