import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/detalle_devolucion`;

const RefundDetailApi = {
  async getAllRefundsDetail() {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener detalle de devolucion:", error);
      throw error;
    }
  },

  async getRefundDetail(refundId, productId) {
    try {
      const response = await axios.get(`${API_URL}/${refundId}/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener detalle de devolucion:", error);
      throw error;
    }
  },

  async createRefundDetail(refundDetailData) {
    try {
      const response = await axios.post(`${API_URL}`, refundDetailData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al crear detalle de devolucion:", error);
      throw error;
    }
  },

  async updateRefundDetail(refundId, productId, updatedRefundDetailData) {
    try {
      const response = await axios.put(
        `${API_URL}/${refundId}/${productId}`,
        updatedRefundDetailData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al actualizar detalle de devolucion:", error);
      throw error;
    }
  },

  async deleteRefundDetail(refundId, productId) {
    try {
      const response = await axios.delete(
        `${API_URL}/${refundId}/${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al eliminar detalle de devolucion:", error);
      throw error;
    }
  },
};

export default RefundDetailApi;
