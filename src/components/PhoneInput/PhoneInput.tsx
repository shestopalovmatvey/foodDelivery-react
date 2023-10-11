import  { useState } from 'react';
import InputMask from 'react-input-mask';

type PhoneInputProps = {
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PhoneInput({ setIsValid }: PhoneInputProps) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const phonePattern = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.currentTarget.value;
    setPhoneNumber(value);
    if (phonePattern.test(value)) {
      setIsValid((prev) => !prev)
    }
  };

  return (
    <div className="phoneInput">
      <p>Введите номер телефона:</p>
      <InputMask
        mask="+7 (999) 999-99-99"
        maskChar="_"
        className="phoneNum"
        placeholder="+7 (999) 999-99-99"
        value={phoneNumber}
        onChange={handleChange}
      />
    </div>
  );
}
