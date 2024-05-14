import React, { useState, useEffect } from "react";
import { ApiOrders } from "../services/apiService";
import Banner from "../components/Banner";
import ExtendedTable from "../components/ExtendedTable";

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

  const updateTableData = (newData) => {
    setTableData(newData);
  };

  return (
    <>
      <Banner />
      <ExtendedTable
        currentTable="pedidos"
        data={tableData}
        fetchData={fetchData}
        deleteTuple={ApiOrders.deleteOrder}
        createTuple={ApiOrders.createOrder}
        updateTuple={ApiOrders.updateOrder}
      />
    </>
  );
};

export default Pedidos;
