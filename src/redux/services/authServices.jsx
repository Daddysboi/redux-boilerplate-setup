import axios from "axios";
import { SEND_OTP, REGISTER, LOGIN } from "./CONSTANTS";

export const SendOtp = async ({ email }) => {
  resp = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/${SEND_OTP}`,
    {
      email,
    },
    {
      headers: {
        "Allow-Control-Allow-Origin": "*",
      },
    }
  );
  return resp.data;
};

export const Register = async ({ email, password, role }) => {
  const data = { email, password, role };

  resp = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/${REGISTER}`,
    data,
    {
      headers: {
        "Allow-Control-Allow-Origin": "*",
      },
    }
  );
};

export const Login = async ({ email, password }) => {
  const data = { email, password };
  console.log(data);

  resp = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/${LOGIN}`,
    data,
    {
      headers: {
        "Allow-Control-Allow-Origin": "*",
      },
    }
  );
};
