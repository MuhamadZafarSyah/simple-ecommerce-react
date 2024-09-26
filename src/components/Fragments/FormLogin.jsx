import { useEffect, useRef, useState } from "react";
import Button from "../buttons";
import InputForm from "../Elements/input";
import { login } from "../../services/auth.service";
import { ClipLoader } from "react-spinners"; // Import loader

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, res) => {
      setIsLoading(false);

      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form className="mt-8 space-y-4" onSubmit={handleLogin}>
      {loginFailed && <p className="text-red-500">{loginFailed}</p>}
      <InputForm
        htmlFor="username"
        label="Username"
        placeholder="Zafar syah...."
        type="text"
        name="username"
        ref={usernameRef}
      >
        Username
      </InputForm>
      <InputForm
        htmlFor="password"
        label="Password"
        placeholder="*******"
        type="password"
        name="password"
      >
        Password
      </InputForm>
      <div className="!mt-8">
        <Button type="submit" color="bg-blue-600" disabled={isLoading}>
          {isLoading ? (
            <ClipLoader size={20} color={"#ffffff"} loading={isLoading} /> // Custom spinner
          ) : (
            "Sign In"
          )}
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
