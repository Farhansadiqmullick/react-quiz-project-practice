import "../styles/App.css";
import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { AuthProvider } from "../contexts/AuthContext";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route path="/signup" element={<Signup></Signup>} />
              <Route path="/login" element={<Login></Login>} />
              <Route path="/quiz" element={<Quiz></Quiz>} />
              <Route path="/result" element={<Result></Result>} />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </>
  );
}
export default App;
