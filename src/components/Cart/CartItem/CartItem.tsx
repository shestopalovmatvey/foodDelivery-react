import { useDispatch } from 'react-redux';
import { addToCart, removeCartElement } from '../../../redux/cartItems/cartItems.slice';
import { IDish } from '../../../type';

export default function CartItem({ info }: { info: IDish }) {
    const dispatch = useDispatch();
    return (
        <div className='cart__element'>
        <img width={100} height={100} src={info.photo_link} alt='' />
        <div className='cart__element__text'>
            <p className='cart__element__title'>{info.name}</p>
            <div>
            <p className='cart__element__price'>{info.countDish ? info.price * info.countDish : info.price}₽</p>
            <p className='cart__element__grams'>{info.grams}г</p>
            </div>
        </div>
        <div className='cart__element__amount'>
            <button className='changeCountItems' onClick={() => dispatch(addToCart(info))}>
            <img src='images/plusCart.svg' alt='' />
            </button>
            <p>{info.countDish}</p>
            <button className='changeCountItems' onClick={() => dispatch(removeCartElement(info))}>
            <img src='images/minusCart.svg' alt='' />
            </button>
        </div>
        {/* <button onClick={() => dispatch(removeCartElement(info))}>
            <img width={32} height={32} src='images/delete.svg' alt='deleteItem' />
        </button> */}
        </div>
    );
}
