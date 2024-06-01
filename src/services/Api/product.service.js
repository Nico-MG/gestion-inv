import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/product`;

const ProductApi = {
  async getAllProducts() {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener productos:", error);
      throw error;
    }
  },

  async getProduct(productId) {
    try {
      const response = await axios.get(`${API_URL}/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener producto:", error);
      throw error;
    }
  },

  async createProduct(productData) {
    console.log("Data:", productData)
    const {id_producto, nombre, categoria, cantidad, min_cantidad, precio_venta} = productData
    if (typeof id_producto !== "string" || typeof nombre !== "string" || typeof categoria !== "string" || Number.isNaN(cantidad) || Number.isNaN(min_cantidad) || Number.isNaN(precio_venta)) {
      alert("valores incorrectos")
      throw new Error('Los datos no son validos')
    }

    const cantidadNumero = Number(cantidad)
    const min_cantidadNumero = Number(min_cantidad)
    const precio_ventaNumero = Number(precio_venta)

    productData.cantidad = cantidadNumero
    productData.min_cantidad = min_cantidadNumero
    productData.precio_venta = precio_ventaNumero

    try {
      const response = await axios.post(`${API_URL}`, productData, {
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

    const {id_producto, nombre, categoria, cantidad, min_cantidad, precio_venta} = updatedProductData
    if (typeof id_producto !== "string" || typeof nombre !== "string" || typeof categoria !== "string" || Number.isNaN(cantidad) || Number.isNaN(min_cantidad) || Number.isNaN(precio_venta)) {
      alert("valores incorrectos")
      throw new Error('Los datos no son validos')
    }

    const cantidadNumero = Number(cantidad)
    const min_cantidadNumero = Number(min_cantidad)
    const precio_ventaNumero = Number(precio_venta)

    updatedProductData.cantidad = cantidadNumero
    updatedProductData.min_cantidad = min_cantidadNumero
    updatedProductData.precio_venta = precio_ventaNumero

    try {
      const response = await axios.put(
        `${API_URL}/${productId}`,
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
      const response = await axios.delete(`${API_URL}/${productId}`, {
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

export default ProductApi;