import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { setTime } from '../../redux/timeOfOrder/timeOfOrder.slice';


export default function DeliveryTimePicker() {
    const dispatch = useDispatch()
    const [selectedTime, setSelectedTime] = useState(null);
    const currentTime = new Date();
    const minTime = new Date(currentTime);
    const maxTime = new Date(currentTime);
  
    minTime.setHours(12, 0, 0); 
    maxTime.setHours(22, 0, 0);
  
    const handleTimeChange = (time) => {
      dispatch(setTime(time))
      setSelectedTime(time);
    };
  
    return (
      <div className="deliveryTimePicker">
        <DatePicker
          selected={selectedTime}
          onChange={handleTimeChange}
          showTimeSelect
          timeIntervals={60}
          timeCaption="Время"
          dateFormat="MMMM d, yyyy h:mm aa"
          minTime={minTime}
          maxTime={maxTime}
          timeFormat="HH:mm"
        />
      </div>
    );
  }
