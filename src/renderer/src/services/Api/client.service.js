import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/client`;

export const ClientApi = {
  async getAllProducts() {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener clientes:", error);
      throw error;
    }
  },

  async getClient(clientId) {
    try {
      const response = await axios.get(`${API_URL}/${clientId}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener cliente:", error);
      throw error;
    }
  },

  async createClient(clientData) {
    try {
      const response = await axios.post(`${API_URL}`, clientData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al crear cliente:", error);
      throw error;
    }
  },

  async updateClient(clientId, updatedClientData) {
    try {
      const response = await axios.put(
        `${API_URL}/${productId}`,
        updatedClientData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al actualizar cliente:", error);
      throw error;
    }
  },

  async deleteClient(clientId) {
    try {
      const response = await axios.delete(`${API_URL}/${clientId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
      throw error;
    }
  },
};

export default ClientApi;