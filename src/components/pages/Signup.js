import SignupImage from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

export default function Signup() {
  return (
    <>
      <h1>Create An Account</h1>
      <div className="column">
        <Illustration Image={SignupImage}></Illustration>
        <SignupForm></SignupForm>
      </div>
    </>
  );
}
