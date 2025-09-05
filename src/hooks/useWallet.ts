/*
 * @Author: tiantian
 * @Date: 2025-09-04 09:47:13
 * @LastEditTime: 2025-09-04 10:48:55
 * @Description:
 */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import { Provider, Contract } from "ethers";
import {
  setAccount,
  setWallet,
  setConnecting,
  showWallet,
  setChain,
  setEthToUsd,
  setisWalletInstalled,
  initAccount,
  initWallet,
} from "@src/redux/features/walletSlice";

//监听钱包
export function listenToWallet() {


}

export const useWallet = () => {



};
