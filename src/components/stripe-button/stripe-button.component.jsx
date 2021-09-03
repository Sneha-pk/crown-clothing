import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckOutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51JV5keFp23Qn7EKoX5HrpnSxANVUGQCviKQe4xETgN6uOj4zXW03XDAmDdLjCLxPsF3NlBEUBaDBo26n0RThh7Mn00kHd0WiWX'
    const onToken = token => {
        console.log(token);
        alert('Payment Successfull')
    }
    return(
        <StripeCheckout
            label = 'Pay Now'
            name = 'CWN CLOTHING'
            billingAddress
            shippingAddress
            // image = ''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckOutButton;