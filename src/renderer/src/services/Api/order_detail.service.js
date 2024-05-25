import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/detalle_pedido`;

const OrderDetailApi = {
  async getAllOrdersDetail() {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener detalle de pedido:", error);
      throw error;
    }
  },

  async getOrderDetail(orderId, productId) {
    try {
      const response = await axios.get(`${API_URL}/${orderId}/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener detalle de pedido:", error);
      throw error;
    }
  },

  async createOrderDetail(orderDetailData) {
    try {
      const response = await axios.post(`${API_URL}`, orderDetailData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al crear detalle de pedido:", error);
      throw error;
    }
  },

  async updateOrderDetail(orderId, productId, updatedOrderDetailData) {
    try {
      const response = await axios.put(
        `${API_URL}/${orderId}/${productId}`,
        updatedOrderDetailData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al actualizar detalle de pedido:", error);
      throw error;
    }
  },

  async deleteOrderDetail(orderId, productId) {
    try {
      const response = await axios.delete(
        `${API_URL}/${orderId}/${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al eliminar detalle de pedido:", error);
      throw error;
    }
  },
};

export default OrderDetailApi;
