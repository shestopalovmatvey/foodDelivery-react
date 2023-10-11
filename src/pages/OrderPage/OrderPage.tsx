import { useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../../components/Cart/CartItem/CartItem'
import DeliveryTimePicker from '../../components/DeliveryTimePicker/DeliveryTimePicker'
import { Link } from 'react-router-dom'
import { IDish } from '../../type'
import { RootState } from '../../redux/store'

export default function OrderPage() {
    const {cartItems, timeOrder} = useSelector((store: RootState) => store)
    const finallPrice: number = cartItems.reduce((sum: number, elem: IDish) => sum += elem.price, 0)
    const [orderPlaced, setOrderPlaced] = useState<boolean>(false)
    const handlerCreateOrder = () => {
        if (cartItems.length > 0 && timeOrder !== null) {
            setOrderPlaced((prev) => !prev)
        }
    }
    return (
        <section className='orderPage'>
            {orderPlaced === false ? <>
            <h2>Ваш заказ:</h2>
            <div>
                <div className='orderList'>
                    {cartItems.map((item: IDish) => <CartItem info={item}/>)}
                </div>
                <div>
                    <p className='orderPrice'>Итого: <span>{finallPrice}₽</span></p>
                    <div className='timeOfDelivery'>
                        <p>Время доставки:</p>
                        <DeliveryTimePicker/>
                    </div>
                </div>
                <div className='block__createOrder'>
                    <button className='btn__createOrder'  onClick={handlerCreateOrder}>
                        <>Оформить заказ</>
                    </button>
                </div>
            </div>
            </> : <>
            <div className='orderPlaced__block'>
                <div className='orderPlaced'>
                    <img src="/images/orderSucsess.svg" alt="" />
                    <h2>Заказ оформлен!</h2>
                    <p>Ваш заказ скоро будет передан курьерской доставке</p>
                </div>

                <Link to={'/'} className='btn__createOrder'>
                    <p>Вернуться назад</p>
                </Link>
                
            </div> 
            </>}
            
        </section>
    )
}
