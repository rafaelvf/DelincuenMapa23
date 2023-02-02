import { updateRobos, updateRobosOriginal } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

export const updateRobosAction = async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3000/api/customer");
    console.log(res.data, "resdata");
    dispatch(updateRobosOriginal(res.data));
  } catch (err) {
    console.log(err);
  }
};
