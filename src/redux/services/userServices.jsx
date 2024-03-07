import axios from "axios";
import { GET_USER_BY_ID, USER_TOKEN } from "../services/CONSTANTS.jsx";

export const GetUserById = async (userId) => {
  const token = localStorage.getItem(USER_TOKEN);
  const parsedToken = JSON.parse(token);
  const id = JSON.parse(userId);

  resp = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/${GET_USER_BY_ID}/${id}`,
    {
      headers: {
        Authorization: parsedToken,
        "Aceess-Control-Allow-Origin": "*",
      },
    }
  );
  return resp.data;
};
