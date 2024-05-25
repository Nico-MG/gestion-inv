import OrderForm from "../../Organisms/Forms/Order/OrderForm";
import ProductForm from "../../Organisms/Forms/Product/ProductForm";
import SalesForm from "../../Organisms/Forms/Sales/SalesForm";
import ClientApi from "../../../services/Api/client.service";
import NotificationApi from "../../../services/Api/notification.service";
import OrderApi from "../../../services/Api/order.service";
import ProductApi from "../../../services/Api/product.service";
import ProviderApi from "../../../services/Api/provider.service";
import RefundApi from "../../../services/Api/refund.service";
import SaleApi from "../../../services/Api/sale.service";
import UserApi from "../../../services/Api/user.service";

const Switch = {
  renderForm: (currentTable, formProps) => {
    switch (currentTable) {
      case "products":
        return <ProductForm {...formProps} />;
      case "orders":
        return <OrderForm {...formProps} />;
      case "sales":
        return <SalesForm {...formProps} />;
      default:
        return null;
    }
  },

  apiDelete: (currentTable) => {
    switch (currentTable) {
      case "clients":
        return ClientApi.deleteClient;
      case "notifications":
        return NotificationApi.deleteNotification;
      case "orders":
        return OrderApi.deleteOrder;
      case "products":
        return ProductApi.deleteProduct;
      case "providers":
        return ProviderApi.deleteProvider;
      case "refunds":
        return RefundApi.deleteProvider;
      case "sales":
        return SaleApi.deleteSales;
      case "users":
        return UserApi.deleteUser;
      default:
        return null;
    }
  }
};

export default Switch;
