import ClientApi from "../services/Api/client.service"
import NotificationApi from "../services/Api/notification.service";
import OrderApi from "../services/Api/order.service";
import ProductApi from "../services/Api/product.service";
import ProviderApi from "../services/Api/provider.service";
import RefundApi from "../services/Api/refund.service";
import SaleApi from "../services/Api/sale.service";
import UserApi from "../services/Api/user.service";

export const auxDelete = ({ currentTable }) => {
  switch (currentTable) {
    case 'clients':
      return ClientApi.deleteClient;
    case 'notifications':
      return NotificationApi.deleteNotification;
    case 'orders':
      return OrderApi.deleteOrder;
    case 'products':
      return ProductApi.deleteProduct;
    case 'providers':
      return ProviderApi.deleteProvider;
    case 'refunds':
      return RefundApi.deleteRefund;
    case 'sales':
      return SaleApi.deleteSale;
    case 'users':
      return UserApi.deleteUser;
    default:
      return null;
  }
};