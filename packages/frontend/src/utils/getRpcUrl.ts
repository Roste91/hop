import { L1_NETWORK } from 'src/utils'
import { networks } from 'src/config'
import { ChainSlug } from '@hop-protocol/sdk'

export const getRpcUrl = (network: string) => {
  if (!network) {
    throw new Error('expected argument: network')
  }
  let networkRpcUrl = networks?.[network]?.rpcUrl
  // make goerli rpc available when react app network is mainnet
  if (!networkRpcUrl && network === 'goerli') {
    networkRpcUrl = 'https://goerli.infura.io/v3/84842078b09946638c03157f83405213' // infura id is from ethers
  }
  if (typeof networkRpcUrl !== 'string') {
    throw new Error(`rpcUrl could not be found for network: ${network}`)
  }

  return networkRpcUrl
}

export const getRpcUrls = (network: string) => {
  const rpcUrl = getRpcUrl(network)
  const fallbackRpcUrls = networks?.[network]?.fallbackRpcUrls ?? []
  return [rpcUrl, ...fallbackRpcUrls]
}
