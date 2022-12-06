import classes from "../styles/Layout.module.css";
import Nav from "./Nav";
function Layout({children}) {
  return (
    <div className="App">
      <Nav></Nav>
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </div>
  );
}

export default Layout;
