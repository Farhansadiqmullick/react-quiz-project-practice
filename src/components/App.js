import "../styles/App.css";
import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { AuthProvider } from "../contexts/AuthContext";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home></Home>} />

                <Route path="/signup" element={ <PublicRoute><Signup /></PublicRoute>} />
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />

                <Route path="/quiz/:id" element={<PrivateRoute><Quiz></Quiz></PrivateRoute>} />
                <Route path="/result/:id" element={<PrivateRoute><Result></Result></PrivateRoute>} />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </>
  );
}
export default App;
