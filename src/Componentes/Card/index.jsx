import { useContext } from 'react'
import { CartContext } from '../../Context'
import './style.css'

const Card = (data) => {
    //lee el estado global
    const context = useContext(CartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    return (
        <div className='card'
        onClick={()=>showProduct(data)}>
            <figure>
                <img src={data.images[0]} alt={data.title} />
            </figure>
            <p>
                <span>{data.category}</span>
                <span>{data.title}</span>
                <span>{data.price}</span>
                <span className='plus'
                onClick={()=> context.setCount(context.count + 1)}>+</span>

            </p>
        </div>
    )
}
export default Card