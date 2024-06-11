import React, { useState, useEffect } from "react";
import OrderApi from "../../services/api/order.service";
import MainLayout from "../templates/MainLayout";
import mockOrders from "../../../mock/orderMocks";

const Orders = () => {
  const [tableData, setTableData] = useState(null);

  const fetchData = async () => {
    // const orders = await OrderApi.getAllOrders();
    const orders = mockOrders;
    setTableData(orders);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MainLayout
        currentTable="orders"
        data={tableData}
        fetchData={fetchData}
      />
    </>
  );
};

export default Orders;
