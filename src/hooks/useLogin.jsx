import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

const useLogin = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
    setUsername(getUsername(token));
    // window.location.href = "/products";
  }, []);

  return username;
};

export default useLogin;
