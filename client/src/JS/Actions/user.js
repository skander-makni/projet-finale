import { USER_FAIL, USER_LOAD, USER_SUCC } from "../Actionstype/user";
import axios from "axios";

export const register = (newUser) => async (dispatch) => {
  dispatch({ type: USER_LOAD });
  try {
    let result = await axios.post("/api/user/register", newUser);
    dispatch({ type: USER_SUCC, payload: result.data });
  } catch (error) {
    dispatch({ type: USER_FAIL, payload: error.response.data });
  }
};
export const login = (user) => async (dispatch) => {
  dispatch({ type: USER_LOAD });
  try {
    let result = await axios.post("/api/user/login", user);
    console.log(result.data.user);
    dispatch({ type: USER_SUCC, payload: result.data });
  } catch (error) {
    dispatch({ type: USER_FAIL, payload: error.response.data });
  }
};
