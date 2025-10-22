const timeSlots = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
];

const occasions = [
    'Birthday',
    'Anniversary',
];


function BookingForm(props) {
    return (
        <>
            <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={props.formSubmit}>
                <label for="res-date">Choose date</label>
                <input value={props.date} onChange={(event) => props.setDate(event.target.value)} type="date" id="res-date"/>

                <label for="res-time">Choose time</label>
                <select value={props.time} onChange={(event) => props.setTime(event.target.value)} id="res-time">
                    {timeSlots.map((time) => (<option>{time}</option>))}
                </select>

                <label for="guests">Number of guests</label>
                <input value={props.guests} onChange={(event) => props.setGuests(event.target.value)} type="number" placeholder="1" min="1" max="10" id="guests"/>

                <label for="occasion">Occasion</label>
                <select value={props.occasion} onChange={(event) => props.setOccasion(event.target.value)} id="occasion">
                    {occasions.map((occasion) => (<option>{occasion}</option>))}
                </select>

                <input type="submit" value="Make Your reservation"/>
            </form>
        </>
    );
}

export default BookingForm;
