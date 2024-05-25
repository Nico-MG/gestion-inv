import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/venta`;

const SalesApi = {
  async getAllSales() {
    try { 
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener ventas:", error);
      throw error;
    }
  },

  async getSales(salesId) {
    try {
      const response = await axios.get(`${API_URL}/${salesId}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener venta:", error);
      throw error;
    }
  },

  async createSales(salesData) {
    try {
      const response = await axios.post(`${API_URL}`, salesData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al crear venta:", error);
      throw error;
    }
  },

  async updateSales(salesId, updatedSalesData) {
    try {
      const response = await axios.put(
        `${API_URL}/${salesId}`,
        updatedSalesData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al actualizar venta:", error);
      throw error;
    }
  },

  async deleteSales(salesId) {
    try {
      const response = await axios.delete(`${API_URL}/${salesId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al eliminar venta:", error);
      throw error;
    }
  },
};

export default SalesApi;
