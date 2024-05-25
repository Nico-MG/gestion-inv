import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/detalle_venta`;

const SalesDetailApi = {
  async getAllSalesDetail() {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener detalle de ventas:", error);
      throw error;
    }
  },

  async getSalesDetail(salesId, productId) {
    try {
      const response = await axios.get(`${API_URL}/${salesId}/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener detalle de venta:", error);
      throw error;
    }
  },

  async createSalesDetail(salesDetailData) {
    try {
      const response = await axios.post(`${API_URL}`, salesDetailData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al crear detalle de venta:", error);
      throw error;
    }
  },

  async updateSalesDetail(salesId, productId, updatedSalesDetailData) {
    try {
      const response = await axios.put(
        `${API_URL}/${salesId}/${productId}`,
        updatedSalesDetailData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al actualizar detalle de venta:", error);
      throw error;
    }
  },

  async deleteSalesDetail(salesId, productId) {
    try {
      const response = await axios.delete(
        `${API_URL}/${salesId}/${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al eliminar detalle de venta:", error);
      throw error;
    }
  },
};

export default SalesDetailApi;
