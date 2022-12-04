import classes from "../styles/Nav.module.css";
import Logo from "../assets/images/logo-bg.png";
import Account from "./Account";
export default function Nav(){
    return (
        <nav class={classes.nav}>
        <ul>
          <li>
            <a href="index.html" className={classes.brand}>
              <img src={Logo} alt="Header Logo" />
              <h3>Learn with Sumit</h3>
            </a>
          </li>
        </ul>
       <Account />
      </nav>
    );

}

