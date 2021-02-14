import React, { useEffect, useState } from "react";

import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/orders.json")
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        setOrders(fetchedOrders);
      })
      .catch(err => {
      });
  });

  return (
    <div>
      {orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ))}
    </div>
  );
};

export default withErrorHandler(Orders, axios);
