import "./GradientBtn.css";
const Index = (props) => {
  const doNothing = () => {};
  return <button className={"gradient-btn"} onClick={ props?.onClick ? props?.onClick : doNothing }>{props.buttonText}</button>;
};

export default Index;
