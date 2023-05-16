import { useContext } from "react"
import { CartContext } from "../../Context"


const ProductDetail = () => {

 
    const context = useContext(CartContext)
    console.log('PRODUCT TO SHOW: ', context. productToShow)
    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'}`}>
            <div >
                <h2>Detail</h2>
                <div onClick={() => context.closeProductDetail()}>
                        
                </div> 
            </div>
            <figure>
                <img 
                src={context.productToShow.images} 
                alt={context.productToShow.title}/>
            </figure>
            <p >
            <span>{context.productToShow.price}</span>
            <span>{context.productToShow.title}</span>
            <span >{context.productToShow.description}</span>
            </p>
        </aside>


    )

}

export default ProductDetail