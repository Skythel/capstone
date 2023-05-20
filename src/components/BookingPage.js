import BookingForm from "./BookingForm";

const BookingPage = (props) => {
    return (
        <BookingForm availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes} submitForm={props.submitForm} />
    );
}
export default BookingPage;