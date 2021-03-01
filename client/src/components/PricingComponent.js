import { React, useState } from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Slider from '@material-ui/core/Slider';
import SliderIcon from '../images/icon-slider.svg';

function PricingComponent(props) {
	const views = {
		0: { name: '10K', price: '8' },
		1: { name: '50K', price: '12' },
		2: { name: '100K', price: '16' },
		3: { name: '500K', price: '24' },
		4: { name: '1M', price: '36' },
	};

	const [pageViews, setPageViews] = useState(2);
	const [checked, setChecked] = useState(false);
	const [value, setValue] = useState(20);

	const IOSSwitch = withStyles((theme) => ({
		root: {
			width: 48,
			height: 24,
			padding: 0,
			margin: theme.spacing(1),
		},
		switchBase: {
			padding: 4,
			'&$checked': {
				transform: 'translateX(23px)',
				color: theme.palette.common.white,
				'& + $track': {
					backgroundColor: 'hsl(174, 77%, 80%)',
					opacity: 1,
					border: 'none',
				},
			},
			'&$focusVisible $thumb': {
				color: 'hsl(174, 77%, 80%)',
				border: '6px solid #fff',
			},
		},
		thumb: {
			width: 16,
			height: 16,
		},
		track: {
			borderRadius: 24 / 2,
			backgroundColor: 'hsl(223, 50%, 87%)',
			border: 'none',
			opacity: 1,
			transition: theme.transitions.create([
				'background-color',
				'border',
			]),
		},
		checked: {},
		focusVisible: {},
	}))(({ classes, ...props }) => {
		return (
			<Switch
				focusVisibleClassName={classes.focusVisible}
				disableRipple
				classes={{
					root: classes.root,
					switchBase: classes.switchBase,
					thumb: classes.thumb,
					track: classes.track,
					checked: classes.checked,
				}}
				{...props}
			/>
		);
	});

	const CyanSlider = withStyles({
		root: {
			color: 'hsl(174, 77%, 80%)',
			height: 8,
		},
		thumb: {
			height: 35,
			width: 35,
			backgroundColor: 'hsl(174, 86%, 45%)',
			border: '2px solid hsl(174, 86%, 45%)',
			marginTop: -14,
			marginLeft: -12,
			'&:focus, &:hover, &$active': {
				boxShadow: 'inherit',
			},
		},
		active: {},
		valueLabel: {
			left: 'calc(-50% + 4px)',
		},
		track: {
			height: 8,
			borderRadius: 4,
		},
		rail: {
			height: 8,
			borderRadius: 4,
			color: 'hsl(224, 65%, 95%)',
		},
	})(Slider);

	function SliderThumbComponent(props) {
		return (
			<span {...props}>
				<img src={SliderIcon} alt='SliderIcon' />
			</span>
		);
	}

	const handleSliderChange = (event, newValue) => {
		setValue(newValue);
		setPageViews(newValue / 10);
	};

	return (
		<div className='card'>
			<form action=''>
				<div className='s1'>
					<div>{views[pageViews].name} PAGEVIEWS</div>
					<CyanSlider
						min={0}
						max={40}
						step={10}
						marks
						value={value}
						ThumbComponent={SliderThumbComponent}
						onChange={handleSliderChange}
						className='slider'
					/>
					<div className='money'>
						<span className='moneyText'>
							$
							{!checked
								? views[pageViews].price
								: views[pageViews].price * 0.75}
							.00
						</span>
						/ month
					</div>
				</div>
				<div className='billing-text'>
					<div>
						Monthly Billing
						<IOSSwitch
							checked={checked}
							onChange={(e) => setChecked(e.target.checked)}
						/>
						Yearly Billing
					</div>
					<span className='discountLabel'>-25%</span>
				</div>
				<div className='s2'>
					<div className='tickText'>
						<div>
							<FontAwesomeIcon
								className='checkIcon'
								icon={faCheck}
								color='hsl(174, 86%, 45%)'
							/>{' '}
							Unlimited websites
						</div>
						<div>
							<FontAwesomeIcon
								className='checkIcon'
								icon={faCheck}
								color='hsl(174, 86%, 45%)'
							/>{' '}
							100% data ownership
						</div>
						<div>
							{' '}
							<FontAwesomeIcon
								className='checkIcon'
								icon={faCheck}
								color='hsl(174, 86%, 45%)'
							/>{' '}
							Email reports
						</div>
					</div>
					<div className='submitButton'>
						<button>Start my trial</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default PricingComponent;
