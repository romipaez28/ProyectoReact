import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget(){
    return(
        <div>
            <p><FontAwesomeIcon icon={faCartShopping} />3</p>
        </div>
    )

}

export default CartWidget;