import Logo from "../../assets/duo_logo.png";
import "./Navbar.css";
import GradientButton from "../GradientButton";

const Index = (props) => {
  return (
    <div className={"navbar-container"}>
      <img className={"logo-container"} src={Logo} />
      <GradientButton buttonText={"Connect Wallet"} />
    </div>
  );
};

export default Index;
