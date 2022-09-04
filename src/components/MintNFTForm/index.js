import "./nftFormStyles.scss";
import GradientButton from "../GradientButton";
import {AiOutlinePlusSquare} from 'react-icons/ai'
import {useRef, useState} from "react";
import ethers from 'ethers';
// UTILS
import {PinFilesToIPFS} from '../../utils/pinFilesToIPFS'
import {contracts} from "../../configs";
// import {ContractInstance} from "../../utils/contracts";
// import {contracts} from "../../configs";

const MintNFTForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState({
      preview: '',
      raw: null
  });

  const uploadImageRef = useRef();

  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleImageChange = (e) => {
      const file = e.target.files[0]
      const preview = URL.createObjectURL(file);
      setImage({
          preview,
          raw: file
      })
  }

  const openFileSystem = (e) => {
      e.preventDefault();
      uploadImageRef.current.click()
  }

  const mintHandler = async () => {
      try {
          const image_formData = new FormData();
          const metadata_formData = new FormData();

          image_formData.append('file', image.raw, image.raw?.name)

          const imageUploadResut = await PinFilesToIPFS(image_formData);

          const metadataBlob = new Blob(
              [JSON.stringify(
                  {title, description, image: `ipfs://${imageUploadResut.data?.IpfsHash}`},
                  null,
                  2
              )], {type: 'application/json'});

          metadata_formData.append('file', metadataBlob, title);

          const metadataUploadResut = await PinFilesToIPFS(metadata_formData);
          // console.log(metadataUploadResut.data?.IpfsHash);

          const ethers = require('ethers')
          const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
          const signer = provider.getSigner();

          const contract = new ethers.Contract(
              contracts[0].address,
              contracts[0].abi,
              signer
          )
          const accounts = await window.ethereum.request({
              method: 'eth_requestAccounts'
          });

          const txn = await contract.mint(
              accounts[0],
              4,
              `ipfs://${metadataUploadResut.data?.IpfsHash}`
          )

          setImage({
              preview: '',
              raw: null
          });
          setTitle('');
          setDescription('')
          alert('Mint success')

      } catch (err) {
          console.log(err)
      }
  }

  return (
    <div className={"form-container"}>
        <input type={'file'} style={{display: 'none'}} ref={uploadImageRef} onChange={handleImageChange} />
        <div className={'image-upload-container'} onClick={openFileSystem}>
            {
                image?.preview ?
                    <div className={'image-holder'}>
                        <img
                            src={image?.preview}
                            alt={'NFT-image'}
                        />
                    </div>
                    : <div className={'upload-image'} >
                        <AiOutlinePlusSquare size={'2em'} />
                        <strong>Upload an image</strong>
                    </div>
            }
        </div>

      <input placeholder={"Title"} value={title} onChange={handleTitleChange} />
      <textarea placeholder={"Description"} rows={5} value={description} onChange={handleDescriptionChange} />
      <GradientButton buttonText={"MINT NFT"} onClick={mintHandler} />
    </div>
  );
};

export default MintNFTForm;