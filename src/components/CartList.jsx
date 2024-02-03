import { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className='cart-body'>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div>
                            <div className='cart-box'>
                                <img src={cartItem.url} width={90} height={90}/>
                            <span> {cartItem.name} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button>
                            <span> {cartItem.quantity} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                                    <span> Rs. {cartItem.price * cartItem.quantity} </span>
                            </div>
                        </div>
                    )
                })
            }
            <div className='total-box'>
            <p style={{ fontSize: '25px' }}> Price Details</p>
            <p> Total  <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
            </div>
        </div >
    )
}

export default CartList