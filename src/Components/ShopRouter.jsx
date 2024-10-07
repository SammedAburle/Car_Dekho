import {BrowserRouter , Routes , Route } from 'react-router-dom'
import CarSelector from './SecondPage/CarSelector';
import CarDetails from './SecondPage/CarDetails';
const ShopRouter = ()=> {
    return(
        <BrowserRouter>
        <Routes>
           <Route path='/' element={<CarSelector/>}/>
           <Route path='/car-details/:car' element={<CarDetails/>}/>

        </Routes>
        </BrowserRouter>
    );

}
export default ShopRouter;