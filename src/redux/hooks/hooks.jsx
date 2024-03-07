import { useSelector, useDispatch } from "react-redux";

export const useAppSelector = (selector) => useSelector(selector);
export const useAppDispatch = () => useDispatch();
