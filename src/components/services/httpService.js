import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    alert("An expected error accurred");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch: axios.patch,
};
