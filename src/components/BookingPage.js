import BookingForm from './BookingForm.js';
import { useState, useRef, useEffect } from 'react';


function BookingPage() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('Anniversary');

    useEffect(() => {
        setTimeout(() => {
        }, 1000);
    }, []);

    const formSubmit = (event) => {
        event.preventDefault();
        // debugger;
    };

    return (
        <>
            <BookingForm date={date} time={time} guests={guests} occasion={occasion} setDate={setDate} setTime={setTime} setOccasion={setOccasion} setGuests={setGuests} formSubmit={formSubmit}/>
            <div></div>
        </>
    );
}

export default BookingPage;