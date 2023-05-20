import { fireEvent, render, screen } from "./test-utils.jsx";
import Main, { exportTesting } from './sections/Main.js';

const { updateTimes, initialiseTimes } = exportTesting;

test('Renders the BookingForm heading', () => {
    render(<Main />, {initialRoutes: ["/reservations"]});
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})

test('initialiseTimes returns the correct value', () => {
    const result = initialiseTimes();
    expect(result).toBeInstanceOf(Array);
    expect(result).not.toHaveLength(0);
})

test('updateTimes returns the same value provided in the state', () => {
    render(<Main />, {initialRoutes: ["/reservations"]});
    const dateElement = screen.getByLabelText("Choose date");
    fireEvent.change(dateElement, {target: {value: "2023-05-30"}});
    const timeElement = screen.getByLabelText("Choose time");
    const arrayOfTimeOptions = [...timeElement.childNodes]
    updateTimes().forEach((time, i) => {
      expect(time).toEqual(arrayOfTimeOptions[i].innerHTML);
    }) 
})