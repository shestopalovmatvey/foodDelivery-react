import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartItems/cartItems.slice'
import { IDish } from '../../type'

export default function MenuCard({menuElement}: {menuElement: IDish}) {
    const dispatch = useDispatch()
    return (
        <div className='menu__card'>
            <div className='menu__img'>
                <img src={menuElement.photo_link} alt="" />
            </div>
            <div className='menu__card__text'>
                <h3>{menuElement.price}₽</h3>
                <h4>{menuElement.name}</h4>
                <p>{menuElement.grams}г</p>
            </div>
            <button className='Btn__addToCard' onClick={() => dispatch(addToCart(menuElement))}>
                <img width={11} height={11} src="/images/plus.svg" alt="" />
                <span>Добавить</span>
            </button>
        </div>
    )
}
