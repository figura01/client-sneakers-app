import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.REACT_APP_BACKEND_LOCAL_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    console.log(error.response)
    return error.response
    throw error;
  }
  throw error;
}

export default {
  service,

  // signup(userInfo) {
  //   return service
  //     .post("/api/auth/signup", userInfo)
  //     .then((res) => res.data)
  //     .catch(errorHandler);
  // },

  login(url, userInfo) {
    console.log('login api handler');
    console.log(url)
    console.log(userInfo)
    return service
      .post(url, userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // isLoggedIn() {
  //   return service
  //     .get("/api/auth/isLoggedIn")
  //     .then((res) => res.data)
  //     .catch(errorHandler);
  // },

  // logout() {
  //   return service
  //     .get("/api/auth/logout")
  //     .then((res) => res.data)
  //     .catch(errorHandler);
  // },

  // getItems() {
  //   return service
  //     .get("/api/items")
  //     .then((res) => res.data)
  //     .catch(errorHandler);
  // },

  getAll(endPoint) {
    console.log(endPoint)
    return service
      .get(endPoint)
      .then((res) => {
        console.log('res: ', res)
        res.data
      })
      .catch(errorHandler);
  },

  createOne(endPoint, data) {
    console.log('apihandler', data)
    return service
      .post(endPoint, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOne(endPoint) {
    return service
      .get(endPoint)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  updateOne(endPoint, data) {
    console.log('api handler');
    console.log(endPoint);
    console.log(data);
    return service
      .patch(endPoint, data)
      .then((res) => res.data)
      .catch(errorHandler)
  },

  deleteOne(endPoint) {
    return service
      .delete(endPoint)
      .then((res) => res.data)
      .catch(errorHandler)
  },

}