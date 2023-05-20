import BookingForm from "./BookingForm";
import CoverImg from "../restaurant.jpg";

const BookingPage = (props) => {
    return (
        <>
        <div class="imagecontain">
            <div class="cover" style={{backgroundImage: "url("+CoverImg+")"}}></div>
        </div>
        <BookingForm availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes} submitForm={props.submitForm} />
        </>
    );
}
export default BookingPage;