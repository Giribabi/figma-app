import './Cards.css'
import Card from '../Card/Card'
// Reusing react components (Card) 🤩
function Cards(){
    return (
        <div className='cardsContainer'>
            <Card type="People" className='card'/>
            <Card type="Place" className='card'/>
            <Card type="Product" className='card'/>
            <Card type="Program" className='card'/>
        </div>
    )
}

export default Cards