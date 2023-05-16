import { useEffect,useState } from 'react'
import './style.css'

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
            <p>este es home</p>
        </div>
    )
}
export default Home