/*
 * @Author: tiantian
 * @Date: 2025-06-05 15:08:15
 * @LastEditTime: 2025-09-05 16:12:40
 * @Description:
 */
import type { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import type { Web3ReactHooks } from "@web3-react/core";
import { GnosisSafe } from "@web3-react/gnosis-safe";
import type { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import { WalletConnect } from "@web3-react/walletconnect";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";

import { CHAINS, getAddChainParameters } from "chains";

export async function connectWithSelect(
  connector:
    | MetaMask
    | WalletConnect
    | WalletConnectV2
    | CoinbaseWallet
    | Network
    | GnosisSafe,
  desiredChainId: number,
  setError: (error: Error | undefined | unknown) => void
) {
  try {
    if (connector instanceof GnosisSafe) {
      await connector.activate();
    } else if (
      connector instanceof WalletConnectV2 ||
      connector instanceof WalletConnect ||
      connector instanceof Network
    ) {
      await connector.activate(desiredChainId);
    } else {
      await connector.activate(getAddChainParameters(desiredChainId));
    }
    setError(undefined);
  } catch (error) {
    setError(error);
  }
}
