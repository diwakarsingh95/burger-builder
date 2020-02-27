import React, { useState } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/Checkout/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

const Checkout = props => {
  const [ingredients, setIngredients] = useState(null);
  const [price, setPrice] = useState(0);

  const initializeIngredients = () => {
    const query = new URLSearchParams(props.location.search);
    const updatedIngredients = {};
    let updatedPrice = 0;
    for (let param of query.entries()) {
      // ['salad', '1']
      if (param[0] === "price") {
        updatedPrice = param[1];
      } else {
        updatedIngredients[param[0]] = +param[1];
      }
    }
    setIngredients(updatedIngredients);
    setPrice(updatedPrice);
  };

  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace("/checkout/contact-data");
  };

  initializeIngredients();

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
      <Route
        path={props.match.path + "/contact-data"}
        render={props => (
          <ContactData ingredients={ingredients} price={price} {...props} />
        )}
      />
    </div>
  );
};

export default Checkout;
