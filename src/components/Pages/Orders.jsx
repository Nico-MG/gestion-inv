import React, { useState, useEffect } from "react";
import OrderApi from "../../services/Api/order.service";
import MainLayout from "../Templates/MainLayout";

const Orders = () => {
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    const orders = await OrderApi.getAllOrders();
    setTableData(orders);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainLayout currentTable="orders" data={tableData} fetchData={fetchData} />
  );
};

export default Orders;
