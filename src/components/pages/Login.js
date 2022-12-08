import LoginImage from '../../assets/images/login.svg';
import Illustration from '../Illustration';
import LoginForm from '../LoginForm';
export default function Login(){
    return (
        <>
        <h1>Create An Account</h1>
        <div className="column">
          <Illustration Image={LoginImage}></Illustration>
          <LoginForm></LoginForm>
      </div>
      </>
    )
}