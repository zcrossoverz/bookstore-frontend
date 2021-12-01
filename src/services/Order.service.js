import http from "../common/http";
import store from "../store";

class OrderService {
  constructor() {
    http.interceptors.request.use(config => {
        const user = store.getters.loggedInUser;
        if (user && user.accessToken) {
            config.headers.authorization = `Bearer ${user.accessToken}`;
        }
        return config;
    });     
  }
  
  addOrder(data) {
    return http.post(`/cart/checkout`, data);
  }
  getOrder(username) {
    return http.post(`/cart/get_order`, username);
  }
  clearOrder(username) {
    return http.post(`/cart/clear`, username);
  }
  getAllOrder() {
    return http.get(`/cart/get_all_order`);
  }
  
}
export default new OrderService();