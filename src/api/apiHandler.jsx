import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.REACT_APP_BACKEND_LOCAL_URL,
  withCredentials: false, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    return error.response
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(url, userInfo) {
    return service
      .post(url, userInfo)
      .then((res) => {
        return res.data
      })
      .catch(errorHandler);
  },

  login(url, userInfo) {
    return service
      .post(url, userInfo)
      .then((res) => {
        return res.data
      })
      .catch(errorHandler);
  },

  getAll(endPoint) {
    return service
      .get(endPoint)
      .then((res) => {
        return res.data
      })
      .catch(errorHandler);
  },

  createOne(endPoint, data) {
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

  adminCreateOne(endPoint, data, headers) {
    return service
      .post(endPoint, data, headers)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  adminGetAll(endPoint, headers) {
    return service
      .get(endPoint, headers)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  adminGetOne(endPoint, headers) {
    return service
      .get(endPoint, headers)
      .then((res) => res.data)
      .catch(errorHandler);
  },


  adminDeleteOne(endPoint, headers) {
    return service
      .delete(endPoint, headers)
      .then((res) => res.data)
      .catch(errorHandler)
  },
}
