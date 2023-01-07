import { Route, Routes, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./components/Login";
import Home from "./container/Home";
import { useEffect } from "react";
import { fetchUser } from "./utils/fetchUser";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();

    if (!user) navigate("/login");
  }, []);
  return (
    <GoogleOAuthProvider
      // clientId={`${process.env.REACT_PUBLIC_GOOGLE_API_TOKEN}`}
      clientId="451421123770-6acr6rndi5k1eskpibveplfndnhpegn7.apps.googleusercontent.com"
    >
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
