import React, { useState, useEffect } from "react";
import { ApiOrders } from "../services/apiService";
import Banner from "../components/Banner";
import Table from "../components/Table";

const Pedidos = () => {
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    try {
      const pedidos = await ApiOrders.getAllOrders();
      setTableData(pedidos);
    } catch (error) {
      console.error("Error al obtener pedidos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <Banner page="Pedidos" />
      <Table
        currentTable="pedidos"
        data={tableData}
        fetchData={fetchData}
        createTableRow={ApiOrders.createOrder}
        updateTableRow={ApiOrders.updateOrder}
        deleteTableRow={ApiOrders.deleteOrder}
      />
    </>
  );
};

export default Pedidos;