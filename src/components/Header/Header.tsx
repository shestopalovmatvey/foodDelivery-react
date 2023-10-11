import { useEffect } from 'react'
import { Link } from "react-router-dom"
import style from './Header.module.scss'
import MainCart from '../Cart/MainCart/MainCart'
import { useDispatch, useSelector } from 'react-redux'
import { toggleValue } from '../../redux/cartDrawer/cartDrawer.slice'

export default function Header() {
    const {cartIsOpen} = useSelector(store => store)
    const dispatch = useDispatch()

    const handlerCart = () => {
        dispatch(toggleValue())
    }

    useEffect(() => {
        cartIsOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [cartIsOpen]);

    return (
        <header className={style.header}>
            <div className={style.header__logo}>
                <Link to={'/'}>
                    <img width={60} height={60} src="/images/logo.svg" alt="header__logo" />
                    <div>
                        <h2>Fudo</h2>
                        <p>Доставка вкуснейшей еды</p>
                    </div>
                </Link>
            </div>
            <nav className={style.header__nav}>
                <div className={style.header__link} onClick={handlerCart}>
                    <span>Корзина</span>
                    <img width={20} height={20} src="/images/cartIcon.svg" alt="" />
                </div>
                {cartIsOpen && <MainCart/>}
                
            </nav>
        </header>
    )
}
