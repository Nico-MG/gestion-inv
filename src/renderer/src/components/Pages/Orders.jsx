import React, { useState, useEffect } from "react";
import OrderApi from "../../services/Api/order.service";
import OrderDetailApi from "../../services/Api/order_detail.service";
import Table from "../Organisms/Tables/Table";

const Orders = () => {
  const [tableData, setTableData] = useState([]);
  const [tableDetailData, setTableDetailData] = useState([])

  const fetchData = async () => {
    try {
      const pedidos = await OrderApi.getAllOrders();
      const detalle_pedidos = await OrderDetailApi.getAllOrdersDetail();
      setTableData(pedidos);
      setTableDetailData(detalle_pedidos);
    } catch (error) {
      console.error("Error al obtener pedidos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
     
      <Table
        currentTable="orders"
        data={tableData}
        detailData={tableDetailData}
        fetchData={fetchData}
      />
    </>
  );
};

export default Orders;
