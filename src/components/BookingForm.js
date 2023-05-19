import React, {useState, useEffect} from "react";
import { useFormik } from "formik";
import useSubmit from "../hooks/useSubmit.js";
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
    const {isLoading, response, submit} = useSubmit();
    // const { onOpen } = useAlertContext();
    const formik = useFormik({
        initialValues: {date: "", time: "17:00", guests: "", occasion: ""},
        onSubmit: (values) => {
          submit("", values);
        },
        validationSchema: Yup.object({
          date: Yup.date("Invalid date").required("Required"),
          time: Yup.string().required("Required"),
          guests: Yup.number("Please enter a number").required("Required"),
          occasion: Yup.string().required("Required")
        }),
    });
    useEffect(() => {
    if (response) {
    //   onOpen(response.type, response.message);
        if (response.type === "success")
        formik.resetForm();
    }
    }, [response]);

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
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </Select>
                    <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                </FormControl>
                <Button type="submit">Make Your Reservation</Button>
            </form>
        </Box>
        </>
    );
}
export default BookingForm;