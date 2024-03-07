import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks/hooks";
import { login } from "../redux/features/loginSlice";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    dispatch(
      login({
        email: form.email.toLocaleLowerCase(),
        password: form.password,
      })
    )
      .then((res) => {
        if (res?.payload?.status !== 201) {
          setError(res?.payload?.message);
        }
        console.log("message sent successfully", res?.payload?.message);
      })
      .catch((err) => {
        setError(err?.message || "something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="count"
          id="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {""}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>{" "}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default Login;
