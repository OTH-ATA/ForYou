import style from './header.module.css'
import Image from "next/image";
import {Drawer} from "@material-ui/core";
import CartItems from "./CartItems";
import {useState} from "react";

const Header = () => {
    const [showCart, setShowCart] = useState(false)
    return (
        <div className={style.container}>
            <div>For You</div>
            <Image className={style.cartIcon} width="50px" height="50px" src={'/icons/cart.png'}
                   onClick={() => setShowCart(true)}/>

          
            {showCart && <Drawer anchor={"right"} open={true}>
                <div className={style.cartItemsContainer}>
                    <CartItems setShowCart={setShowCart}/>
                </div>

            </Drawer>}
        </div>
    )
}
export default Header