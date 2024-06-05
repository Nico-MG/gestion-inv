import ClientApi from "../services/Api/client.service"
import NotificationApi from "../services/Api/notification.service";
import OrderApi from "../services/Api/order.service";
import ProductApi from "../services/Api/product.service";
import ProviderApi from "../services/Api/provider.service";
import RefundApi from "../services/Api/refund.service";
import SaleApi from "../services/Api/sale.service";
import UserApi from "../services/Api/user.service";

export const auxDelete = async ({ currentTable, id }) => {
  switch (currentTable) {
    case 'clients':
      await ClientApi.deleteClient(id);
    case 'notifications':
      await NotificationApi.deleteNotification(id);
    case 'orders':
      await OrderApi.deleteOrder(id);
    case 'products':
      await ProductApi.deleteProduct(id);
    case 'providers':
      await ProviderApi.deleteProvider(id);
    case 'refunds':
      await RefundApi.deleteRefund(id);
    case 'sales':
      await SaleApi.deleteSale(id);
    case 'users':
      await UserApi.deleteUser(id);
    default:
      return null;
  }
};