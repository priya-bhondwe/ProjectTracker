import API from "../api/API";
import endpoints from "../api/endpoints";

class AuthService {
  static userLogin(user) {
    return API.post(endpoints.api.auth.userLogin, user);
  }
  static sendPasswordResetLink(email) {
    return API.post(endpoints.api.auth.passwordResetLink, { email });
  }

  static validateToken(token) {
    return API.post(endpoints.api.auth.validateToken, { token });
  }

  static refreshToken(token) {
    return API.post(endpoints.api.auth.refreshToken, { token });
  }
}

export default AuthService;
