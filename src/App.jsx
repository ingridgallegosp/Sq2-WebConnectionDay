import { BrowserRouter, useRoutes } from 'react-router-dom'
import { CartContextProvider } from './Context'
import Home from './Pages/Home'
import Error404 from './Pages/Error404'
import Promociones from './Pages/Promociones'
import './App.css'

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/promociones', element: <Promociones /> },
        { path: '/*', element: <Error404 /> },
    ])
    return routes
}
const App = () => {

    return (
    
        <BrowserRouter>
            <CartContextProvider>
                <AppRoutes
                </AppRoutes>
            </CartContextProvider>
       </BrowserRouter>
    ) 
}

export default App
