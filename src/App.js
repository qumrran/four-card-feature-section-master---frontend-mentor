import './App.scss';
import FeatureList from './components/FeaturesList/FeaturesList.js';
import Header from './components/Header/Header.js';

const featureData = [
	{
		name: 'Supervisor',
		class: 'feature Num1',
		description: 'Monitors activity to identify project roadblocks',
		image: '/src/assets/images/icon-supervisor.svg',
		color: 'hsl(180, 62%, 55%)',
	},
	{
		name: 'Team Builder',
		class: 'feature Num2',
		description: 'Scans our talent network to create the optimal team for your project',
		image: './assets/images/icon-team-builder.svg',
		color: 'hsl(0, 78%, 62%)',
	},
	{
		name: 'Karma',
		class: 'feature Num3',
		description: 'Regularly evaluates our talent to ensure quality',
		image: './assets/images/icon-karma.svg',
		color: 'hsl(34, 97%, 64%)',
	},
	{
		name: 'Calculator',
		class: 'feature Num4',
		description: 'Uses data from past projects to provide better delivery estimates',
		image: './assets/images/icon-calculator.svg',
		color: 'hsl(212, 86%, 64%)',
	},
];

function App() {
	return (
		<div className='App'>
			<Header />
			<FeatureList data={featureData} />
		</div>
	);
}

export default App;
