import { useEffect,useState } from 'react'
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

    
    return (<>  
     <BarrNav/>
    </>
     

    )
}
export default Home