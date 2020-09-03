import * as actions from "../actions/actions";
import axios from "axios";
const api = ({ dispatch, getState }) => (next) => async (action) => {
  if (!action.type === actions.apiCallBegan.type) return next(action);

  const { url, data, method, onSuccess, onStart, onError } = action.payload;

  if (onStart)
    dispatch({
      type: onStart,
    });

  next(action);
  try {
    const response = await axios.request({
      baseURL: "http://localhost:3001/api",
      url,
      data,
      method,
    });
    dispatch(actions.apiCallSuccess(response.data));
    if (onSuccess)
      dispatch({
        action: onSuccess,
        payload: response.data,
      });
  } catch (error) {
    dispatch(actions.apiCallSuccess(error.message));
    if (onError)
      dispatch({
        type: onError,
        payload: error.message,
      });
  }
};

export default api;
