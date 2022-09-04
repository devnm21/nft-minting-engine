import DuoNFTAbi from './abi/DuoNFT.json'

export const ContractAddress = {
    duoNft: '0x8836CBC48cF8887AA724C3cd983d6ba86e80f063',
}

export const contracts = [
    {
        name: 'DuoNFT',
        abi: DuoNFTAbi.abi,
        address: ContractAddress.duoNft
    }
]