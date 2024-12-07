import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Store";

const IsAuthorised = () => {
  const navigate = useNavigate();
  const { isTokenAuthenticated } = useContext(Context);

  const token = localStorage.getItem("token");

  useEffect(() => {
    (async () => {
      if (!token) {
        return navigate("/login");
      } else {
        const auth = await isTokenAuthenticated(token);
        console.log("auth :" + auth);
        if (!auth) {
          return navigate("/login");
        }
      }
    })();
  }, [token, isTokenAuthenticated, navigate]);
};

export default IsAuthorised;
