import DuoNFTAbi from './abi/DuoNFT.json'

export const ContractAddress = {
    duoNft: '0x296a2042cF44Bc480F3F7b66C867Fb95F40500a0',
}

export const contracts = [
    {
        name: 'DuoNFT',
        abi: DuoNFTAbi.abi,
        address: ContractAddress.duoNft
    }
]