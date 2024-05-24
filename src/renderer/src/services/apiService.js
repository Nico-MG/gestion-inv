import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const ApiProducts = {
  async getAllProducts() {
    try {
      const response = await axios.get(`${API_URL}/producto`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener productos:", error);
      throw error;
    }
  },

  async getProduct(productId) {
    try {
      const response = await axios.get(`${API_URL}/producto/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener producto:", error);
      throw error;
    }
  },

  async createProduct(productData) {
    try {
      const response = await axios.post(`${API_URL}/producto`, productData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al crear producto:", error);
      throw error;
    }
  },

  async updateProduct(productId, updatedProductData) {
    try {
      const response = await axios.put(
        `${API_URL}/producto/${productId}`,
        updatedProductData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      throw error;
    }
  },

  async deleteProduct(productId) {
    try {
      const response = await axios.delete(`${API_URL}/producto/${productId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      throw error;
    }
  },
};

export const ApiOrders = {
  async getAllOrders() {
    try {
      const response = await axios.get(`${API_URL}/pedido`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener pedidos:", error);
      throw error;
    }
  },

  async getOrder(orderId) {
    try {
      const response = await axios.get(`${API_URL}/pedido/${orderId}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener pedido:", error);
      throw error;
    }
  },

  async createOrder(orderData) {
    try {
      const response = await axios.post(`${API_URL}/pedido`, orderData, {
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
        `${API_URL}/pedido/${orderId}`,
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
      const response = await axios.delete(`${API_URL}/pedido/${orderId}`, {
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

  async getAllDetailOrders() {
    try {
      const response = await axios.get(`${API_URL}/detalle_pedido`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener detalle de pedido:", error);
      throw error;
    }
  },

  async getDetailOrder(orderId, productId) {
    try {
      const response = await axios.get(
        `${API_URL}/detalle_pedido/${orderId}/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error al obtener detalle de pedido:", error);
      throw error;
    }
  },

  async createDetailOrder(detailOrderData) {
    try {
      const response = await axios.post(`${API_URL}/detalle_pedido`, detailOrderData, {
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

  async updateDetailOrder(orderId, productId, updatedDetailOrderData) {
    try {
      const response = await axios.put(
        `${API_URL}/detalle_pedido/${orderId}/${productId}`,
        updatedDetailOrderData,
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

  async deleteDetailOrder(orderId, productId) {
    try {
      const response = await axios.delete(
        `${API_URL}/detalle_pedido/${orderId}/${productId}`,
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

export const ApiUsers = {
  async logUsers(credentials) {
    try {
      const response = await axios.post(`${API_URL}/usuario/login`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      throw error;
    }
  },
  //getInfo
  //deleteUser
  //updateUser
  //regsiterUser
};
