import './App.css';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Top from './components/layout/Top';
import Bottom from './components/layout/Bottom';
import Access from './components/layout/Access';
import Card from './components/layout/Card';
import './components/layout/styles/compiled/main.css';
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Header />
			<Top />
			<Access />
			<Bottom />
			<Card />
			<Footer />
		</div>
	);
}

export default App;
