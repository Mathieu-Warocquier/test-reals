import { plantList } from '../datas/plantList'
import CareScale from './CareScale'
import '../styles/ShoppingList.css'

function ShoppingList() {
  const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
            {plant.name}
            {plant.isBestSale && plant.category === "classique" && <span>🔥</span>}
            {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}

            <CareScale careType='water' scaleValue={plant.water} />
            <CareScale careType='light' scaleValue={plant.light} />
          </li>

				))}
			</ul>
		</div>
	)
}

export default ShoppingList
