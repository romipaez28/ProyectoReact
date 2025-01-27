import CartWidget from "./CartWidget"

function Navbar(){
    
    //logo de la tienda
    //categorias de los productos
    //muestra el CartWidget
    return (
       <div>
            <p>LAIKA</p>
            <p>Juguetes</p>
            <p>Alimento</p>
            <p>Farmacia</p>
            <CartWidget/>

       </div>
    )

}

export default Navbar