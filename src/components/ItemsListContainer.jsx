/* eslint-disable react/prop-types */
function ItemListContainer({text}){
    //solo muestra el texto que recibe desde app como props
    //renderiza un texto.
    return(
        <div>
            <p>{text}</p>
        </div>
    )
}

export default ItemListContainer;