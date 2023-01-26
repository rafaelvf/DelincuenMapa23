import { updateRobos } from "../redux/userSlice";
import { useDispatch } from "react-redux";

export const updateRobosAction = async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3000/api/customer");
    dispatch(updateRobos(res.data));
  } catch (err) {
    console.log(err);
  }
};
