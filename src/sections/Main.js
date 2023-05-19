import { Routes, Route } from "react-router-dom";
import BookingPage from "../components/BookingPage.js";
import Homepage from "../components/Home.js"
import React, {useState, useReducer} from "react";

const updateTimes = (availableTimes, date) => {
    // return a different array based on the date given e.g. "2023-05-30"
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const Main = () => {

    const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initialTimes);

    return (
        <Routes> 
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />}></Route>
        </Routes>
    );
};
export default Main;