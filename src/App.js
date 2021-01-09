import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Radio from './pages/Radio';
import Artists from './pages/Artists';
import Contact from './pages/Contact';

function App() {
	return (
		<div>
			<Router>
				<div>
					<Navbar />
					<Route path="/home" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/radio" component={Radio}/>
					<Route path="/artists" component={Artists}/>
					<Route path="/contact" component={Contact}/>
				</div>
			</Router>
		</div>
	);
}

export default App;
