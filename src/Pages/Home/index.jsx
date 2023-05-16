import { useEffect, useState } from 'react'
import Card from '../../Componentes/Card'
import './style.css'
import BarrNav from './Componentes/BarrNav'

const Home = () => {
    const [items, setItems] = useState(null)

    //consulta API
    useEffect(() => {
        const url = 'https://dummyjson.com/products'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setItems(data.products)
                console.log(data.products)
            })
            .catch((e) => console.log(e))
    }, []);

    return (
        <div>
            <BarrNav/>
            <div className='contenido'>
                {
                    //cambio items por results
                    items?.map(item =>
                        <Card
                            key={item.id}
                            images={item.images}
                            title={item.title}
                            price={item.price}
                            discount={item.discountPercentage}
                            description={item.description}
                        ></Card>)
                }
            </div>
        </div>

    )
}
export default Home