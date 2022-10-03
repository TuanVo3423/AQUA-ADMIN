import routes from '../configs/routes';
// Pages
import home from '../pages/home';
import CreateProduct from '../pages/createProduct';


export const publicRoutes = [
    {path : routes.home , component : home , title : 'home'},
    {path : routes.create , component : CreateProduct , title : 'CreateProduct'},

]
export const privateRoutes = [

]