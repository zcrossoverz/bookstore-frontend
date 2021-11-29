import http from "../common/http";
import store from "../store";

class ProductService {
  constructor() {
    http.interceptors.request.use(config => {
        const user = store.getters.loggedInUser;
        if (user && user.accessToken) {
            config.headers.authorization = `Bearer ${user.accessToken}`;
        }
        return config;
    });     
  }
  
  addProduct(data) {
    return http.post(`/product/add`, data);
  }
  getAllProduct() {
      return http.get('/product');
  }
  deleteProduct(id){
    return http.delete(`/product/${id}`);
  }
  setHot(id, hot){
    return hot ? http.put(`product/unset_hot/${id}`) : http.put(`product/hot/${id}`);
  }
  
}
export default new ProductService();