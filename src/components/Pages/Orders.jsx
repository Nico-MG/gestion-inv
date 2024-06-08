import React, { useState, useEffect } from "react";
import OrderApi from "../../services/api/order.service";
import MainLayout from "../templates/MainLayout";

const Orders = () => {
  const [tableData, setTableData] = useState(null);

  const fetchData = async () => {
    const orders = await OrderApi.getAllOrders();
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
