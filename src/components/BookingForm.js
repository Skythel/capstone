import React from "react";
import { useFormik } from "formik";
// import {useAlertContext} from "../context/alertContext.js";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import * as Yup from 'yup';

const BookingForm = (props) => {
    const formik = useFormik({
        validateOnMount: true,
        initialValues: {date: "", time: props.availableTimes[0], guests: "4", occasion: ""},
        onSubmit: (values) => {
          props.submitForm(values);
        },
        validationSchema: Yup.object({
          date: Yup.date("Invalid date").required("Required"),
          time: Yup.string().matches(/[0-9]{2}:[0-9]0/, "Invalid time").required("Required"),
          guests: Yup.number("Please enter a number").min(1, "You need at least 1 guest to reserve a table").required("Required"),
          occasion: Yup.string().matches(/Birthday|Anniversary/, "Invalid occasion").required("Required"),
        }),
    });

    return (
        <>
        <Heading>Reserve a Table</Heading>
        <Box p={6} rounded="md" w="100%">
            <form onSubmit={formik.handleSubmit}>
                <FormControl isInvalid={formik.errors.date && formik.touched.date}>
                    <FormLabel htmlFor="res-date">Choose date</FormLabel>
                    <Input id="res-date" type="date" name="res-date" {...formik.getFieldProps("date")} onChange={(e) => {
                        formik.handleChange(e);
                        props.setAvailableTimes(e.target.value);
                    }}/>
                    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.time && formik.touched.time}>
                    <FormLabel htmlFor="res-time">Choose time</FormLabel>
                    <Select id="res-time" name="res-time" {...formik.getFieldProps("time")}>
                        {props.availableTimes.map((time) => 
                            <option key={time}>{time}</option>
                        )}
                    </Select>
                    <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
                    <FormLabel htmlFor="guests">Number of guests</FormLabel>
                    <Input id="guests" type="number" name="guests" min="1" max="10" {...formik.getFieldProps("guests")} />
                    <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.occasion && formik.touched.occasion}>
                    <FormLabel htmlFor="occasion">Occasion</FormLabel>
                    <Select id="occasion" name="occasion" {...formik.getFieldProps("occasion")}>
                        <option>Choose one</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </Select>
                    <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                </FormControl>
                <Button aria-label="On Click" type="submit" disabled={(formik.errors.length > 0)}>Make Your Reservation</Button>
                {console.log(formik.isValid)}
            </form>
        </Box>
        </>
    );
}
export default BookingForm;