import axios from "axios";

API_URL = `${env("API_URL")}/pedido`;

const OrderApi = {
  async getAllOrders() {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener pedidos:", error);
      throw error;
    }
  },

  async getOrder(orderId) {
    try {
      const response = await axios.get(`${API_URL}/${orderId}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener pedido:", error);
      throw error;
    }
  },

  async createOrder(orderData) {
    try {
      const response = await axios.post(`${API_URL}`, orderData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al crear pedido:", error);
      throw error;
    }
  },

  async updateOrder(orderId, updatedOrderData) {
    try {
      const response = await axios.put(
        `${API_URL}/${orderId}`,
        updatedOrderData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al actualizar pedido:", error);
      throw error;
    }
  },

  async deleteOrder(orderId) {
    try {
      const response = await axios.delete(`${API_URL}/${orderId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al eliminar pedido:", error);
      throw error;
    }
  },
};

export default OrderApi;
