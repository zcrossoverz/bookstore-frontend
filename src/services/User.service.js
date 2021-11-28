import http from "../common/http";
import store from "../store";

class UserService {
  constructor() {
    http.interceptors.request.use(config => {
        const user = store.getters.loggedInUser;
        if (user && user.accessToken) {
            config.headers.authorization = `Bearer ${user.accessToken}`;
        }
        return config;
    });     
  }
  
  getAll() {
    return http.get("/user/all");
  }
  update(id, data) {
    return http.post(`/user/${id}`, data);
  }
  
}
export default new UserService();