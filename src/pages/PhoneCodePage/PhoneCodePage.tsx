import {useState, useEffect} from 'react'
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

export default function PhoneCodePage() {
    const [codeValue, setCodeValue] = useState<string>('')
    const navigate = useNavigate()
    useEffect(() => {
        if(codeValue === '0000') {
            setTimeout(() => {
                navigate('/orderPage')
            }, 1500)
        }
    }, [codeValue, navigate])
    return (
        <div className='phoneCodePage'>
            <div>
                <p className='phoneCodePage__title'>Введите код:</p>
                <InputMask
                    mask="9999"
                    maskPlaceholder=""
                    type="text"
                    placeholder="____"
                    className='phoneCodePage__input'
                    onChange={(evt) => setCodeValue(evt.currentTarget.value)}
                />
            </div>
            
        </div>
    )
}
