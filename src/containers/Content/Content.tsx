/*
 * @Author: tiantian
 * @Date: 2025-09-03 15:03:20
 * @LastEditTime: 2025-09-05 20:19:25
 * @Description: 
 */
import React from 'react'
import {  hooks } from "../../connectors/metaMask";
import {Accounts} from "../Content/Accounts"
const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;
export default function Content() {

const chainId = useChainId();
  const accounts = useAccounts();
  const isActive = useIsActive();
  const isActivating = useIsActivating();
  const provider = useProvider()
  const ENSNames = useENSNames(provider)
  return (
    <Accounts accounts ={accounts} provider ={provider} ENSNames={ENSNames}></Accounts>
  )
}
