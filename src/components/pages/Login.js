import classes from "../../styles/Login.module.css";
import LoginImage from '../../assets/images/login.svg';
import Form from "../Form";
import Illustration from '../Illustration';
import TextInput from "../Textnput";
import Button from "../Button";
import { Link } from "react-router-dom";
export default function Login(){
    return (
        <>
        <h1>Create An Account</h1>
        <div className="column">
          <Illustration Image={LoginImage}></Illustration>
          <Form className={`${classes.login}`}>
            <TextInput type="text" placeholder="Enter Email" icon="alternate_email"></TextInput>
            <TextInput type="password" placeholder="Enter password" icon="lock"></TextInput>
            <Button><span>Submit Now</span></Button>
          <div className="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
          </Form>
      </div>
      </>
    )
}