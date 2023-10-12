import React, { useState, useEffect } from 'react'
import style from '../Cart.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggleValue } from '../../../redux/cartDrawer/cartDrawer.slice'
import CartItem from '../CartItem/CartItem'
import { IDish } from '../../../type'
import PhoneInput from '../../PhoneInput/PhoneInput'
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../redux/store'

export default function MainCart() {
    const {cartItems} = useSelector((store: RootState) => store)
    const [isValid, setIsValid] = useState<boolean>(true);
    const dispatch = useDispatch()
    const navigate  = useNavigate()
    
    return (
        <div className={style.overlay}>
                    <div className={(cartItems.length === 0 ? style.cartEmpty : style.cart)}>
                        <div className={style.cart__title}>
                            <h3>Корзина</h3>
                            <button onClick={() => 
                                dispatch(toggleValue())
                            }>
                                <img width={32} height={32} src="images/delete.svg" alt="deleteItem" />
                            </button>
                        </div>

                        {cartItems.length === 0 ? <section className={style.cart__empty__main}>
                            <div className={style.cart__empty__block}>
                                <p className={style.cart__empty__title}>Ваша корзина еще пуста</p>
                                <p className={style.cart__empty__descrip}>Для оформления заказа необходимо добавить блюда в корзину.</p>
                                <button onClick={() => dispatch(toggleValue())}>
                                    Добавить блюда
                                </button>
                            </div>
                        </section> : (
                            <div className={style.cartMain}>
                            <div className={style.cart__elements}>
                                {cartItems.map((item: IDish) => <CartItem key={item.id_dish} info={item}/>)}
                            </div>

                            <div className={style.cart__footer}>
                                <PhoneInput setIsValid={setIsValid}/>
                            </div>

                            <div className={style.btnBlock}>
                                <button className={style.Btn__CreateOrder} disabled={isValid} onClick={() => {
                                    navigate('/validationPhoneCode')
                                    dispatch(toggleValue())
                                }}>
                                    <span>Подтвердить номер телефона</span>
                                </button>
                            </div>
                        </div>
                        )}
                    </div> 
                </div>
    )
}
