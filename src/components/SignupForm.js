import TextInput from "./Textnput";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password Don't Match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
        setLoading(false);
      console.log(err);
      setError("There has a problem on Signup");
      setLoading(false);
    }
  }
  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text" required
        placeholder="Enter name"
        icon="person"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></TextInput>
      <TextInput
        type="text" required
        placeholder="Enter email"
        icon="alternative_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>
      <TextInput
        type="password" required
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>
      <TextInput
        type="password" required
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></TextInput>
      <Checkbox
        text="I agree to the Terms &amp; Conditions" required
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      ></Checkbox>
      <Button type="submit" disabled={loading}>
        <span>Submit Now</span>
      </Button>

      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
