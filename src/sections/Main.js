import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "../components/BookingPage.js";
import ConfirmedBooking from "../components/confirmedBooking.js";
import Homepage from "../components/Home.js"
import React, {useState, useReducer, useEffect} from "react";
import { fetchAPI, submitAPI } from "./api.js";

const updateTimes = (availableTimes, date) => {
    // return a different array based on the date given e.g. "2023-05-30"
    return fetchAPI(new Date(date));
};

const initialiseTimes = () => {
    const today = new Date();
    return fetchAPI(today);
}

const Main = () => {
    const navigate = useNavigate();
    const initialTimes = initialiseTimes();
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initialTimes);
    const submitForm = (formData) => {
        if(submitAPI(formData)) {
            console.log(formData);
            return navigate("/confirmed");
        }
    }

    return (
        <>
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm} />}></Route>
            <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
        </Routes>
        </>
    );
};
export default Main;

export const exportTesting = {
    updateTimes,
    initialiseTimes
}