import CareScale from './CareScale'
import monstera from '../assets/monstera.jpg'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item'>
			<img className='lmj-plant-item-cover' src={monstera} alt={`monstera cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
