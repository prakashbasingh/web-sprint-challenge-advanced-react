import React from "react";
import { render, fireEvent } from "@testing-library/react";

import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
 const {getByText} = render(<CheckoutForm/>);
 const header = getByText(/checkout form/i);
 expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
const {getByText, getByTestId, getByLabelText} = render(<CheckoutForm/>);

const button = getByTestId(/checkoutButton/i);
    fireEvent.click(button);
    expect(getByTestId('checkoutButton')).toBeInTheDocument();

    const successMessage = getByTestId(/successMessage/i);
    expect(getByTestId('successMessage')).toBeInTheDocument();

const firstName = getByLabelText(/first name:/i);
const lastName = getByLabelText(/last name:/i);
const address = getByLabelText(/address:/i);
const city = getByLabelText(/city:/i);
const state = getByLabelText(/state:/i);
const zip = getByLabelText(/zip:/i);


});
