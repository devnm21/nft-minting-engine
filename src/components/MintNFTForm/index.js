import "./nftFormStyles.scss";
import GradientButton from "../GradientButton";
const MintNFTForm = () => {
  return (
    <div className={"form-container"}>
      <img
        src={
          "https://cdn.myanimelist.net/r/360x360/images/characters/9/310307.jpg?s=56335bffa6f5da78c3824ba0dae14a26"
        }
      />
      <input placeholder={"Title"} />
      <textarea placeholder={"Description"} />
      <GradientButton buttonText={"MINT NFT"} />
    </div>
  );
};

export default MintNFTForm;
