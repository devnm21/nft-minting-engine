import "./minterNFT.scss";
const MintedNFT = (props) => {
  return (
    <div className={"nft-container"}>
      <img
        src={
          "https://cdn.myanimelist.net/r/360x360/images/characters/9/310307.jpg?s=56335bffa6f5da78c3824ba0dae14a26"
        }
      />
        <div className={'nft-details'}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </div>
  );
};

export default MintedNFT;
