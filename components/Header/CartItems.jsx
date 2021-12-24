import {useMainContext} from "../../config/mainContext";
import style from './header.module.css'
import Image from "next/image";
import {Button} from "@material-ui/core";

const CartItems = ({setShowCart}) => {
    const {state} = useMainContext()
    const sum = 0
    state.orders.map(
        (e) => {
            sum = sum + (e.price * e.count)
        }
    )
    return (
        <div className={style.menuMainContainer}>
            <Image width="40px" height="40px" src={'/icons/close.png'} onClick={() => setShowCart(false)}/>
            <div className={style.ietmsContainer}>
                {
                    state.orders.length < 1 ?
                        <span className={style.itemsName}> You have no selected any items yet</span>
                        :
                        <>
                            <ul>
                                {
                                    state.orders.map(
                                        e => (

                                            <li key={'order-' + e.name} className={style.item}>
                                                <span className={style.itemsName}>{e.name} * {e.count}</span>
                                                <span className={style.itemsName}>{e.price * e.count} DH</span>
                                            </li>


                                        )
                                    )
                                }
                            </ul>
                            <div className={style.totalContainer}>
                                <span className={style.itemsName}>Total</span>
                                <span className={style.itemsName}>{sum} DH</span>
                            </div>

                            <div className={style.buttonContainer}>
                                <Button variant="contained" color="primary">
                                    Checkout
                                </Button>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default CartItems