import classes from "../../styles/Signup.module.css";
import SignupImage from "../../assets/images/signup.svg";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../Textnput";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <h1>Create An Account</h1>
      <div className="column">
      <Illustration Image={SignupImage}></Illustration>
      <Form className={`${classes.signup}`}>
        <TextInput
          type="text"
          placeholder="Enter name"
          icon="person"
        ></TextInput>
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternative_email"
        ></TextInput>
        <TextInput
          type="password"
          placeholder="Enter password"
          icon="lock"
        ></TextInput>
        <TextInput
          type="password"
          placeholder="Confirm password"
          icon="lock_clock"
        ></TextInput>
        <Checkbox text="I agree to the Terms &amp; Conditions"></Checkbox>
        <Button><span>Submit Now</span></Button>

        <div className="info">
          Already have an account? <Link to="/login">Login</Link> instead.
        </div>
      </Form>
      </div>
    </>
  );
}
