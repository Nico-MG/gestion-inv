import React, { useState, useEffect } from "react";
import { ApiOrders } from "../../services/apiService";
import Table from "../Organisms/Tables/Table";

const Pedidos = () => {
  const [tableData, setTableData] = useState([]);
  const [tableDetailData, setTableDetailData] = useState([])

  const fetchData = async () => {
    try {
      const pedidos = await ApiOrders.getAllOrders();
      const detalle_pedidos = await ApiOrders.getAllDetailOrders();
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
        createTableRow={ApiOrders.createOrder}
        updateTableRow={ApiOrders.updateOrder}
        deleteTableRow={ApiOrders.deleteOrder}
        createDetailTableRow={ApiOrders.createDetailOrder}
        updateDetailTableRow={ApiOrders.updateDetailOrder}
      />
    </>
  );
};

export default Pedidos;
