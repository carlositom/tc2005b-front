import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const loginForm = useRef(null);
  const navigate = useNavigate();

  const login = async (evt) => {
    evt.preventDefault();
    const form = new FormData(loginForm.current);

    const response = await fetch(
      "http://tc2005b-env.eba-vjjfaui4.us-east-1.elasticbeanstalk.com/loginAdmin",
      {
        method: "POST",
        body: form,
      }
    );

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } else {
      alert("incorrect user or password");
    }
  };

  return (
    <div
      className="bg-cover bg-no-repeat bg-center flex flex-col w-full h-screen items-center justify-center"
      style={{ backgroundImage: `url(src/assets/Background1.png)` }}
    >
      <img src="src/assets/AulifyLogo.png" alt="" className="w-1/3" />
      <form
        onSubmit={login}
        ref={loginForm}
        className="py-6 flex flex-col justify-center w-1/2 items-center"
      >
        <input
          type="text"
          name="email"
          placeholder="Username"
          className="my-4 bg-white/50 placeholder-red-900 rounded-xl w-full p-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="my-4 bg-white/50 placeholder-red-900 rounded-xl w-full p-4"
        />
        <input
          type="submit"
          value="Iniciar"
          className="my-4 bg-white text-gray-900 rounded-3xl w-1/2 p-4"
        />
      </form>
    </div>
  );
};

export default Login;
