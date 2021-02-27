import './App.css';
import PricingComponent from './components/PricingComponent';

function App() {
	return (
		<div className='App'>
			<div className='intro'>
				<p className='large-text'>Simple, traffic-based pricing</p>
				<p className='small-text'>
					Sign-up for our 30-day trial. No credit card required.{' '}
				</p>
			</div>
			<PricingComponent />
		</div>
	);
}

export default App;
