/*
 * @Author: tiantian
 * @Date: 2025-09-02 20:18:26
 * @LastEditTime: 2025-09-04 14:29:40
 * @Description: 钱包切片
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Provider } from "ethers";

const initialState = {
  wallet: null,
  account: null,
  connecting: false,
  show: false,
  chain: undefined,
  ethToUsd: 0,
  isWalletInstalled: true,
};

// Thunk 函数初始化账号
export const initAccount = createAsyncThunk("wallet/initAccount", async () => {
  // const accounts =
  //   (await window.ethereum) &&
  //   window.ethereum.request({ method: "eth_requestAccounts" }).then((v) => v);
  // return accounts[0];
  return ""
});
//初始化钱包
export const initWallet = createAsyncThunk("wallet/initWallet", async () => {
  // const provider = await new providers.Web3Provider(window.ethereum);
  // const wallet = await provider.getSigner();
  // return wallet;
  return ""
});

const walletSlice = createSlice({
  name: "wallet",
  initialState: initialState,
  reducers: {
    //设置账号
    setAccount(state, action) {
      state.account = action.payload;
    },
    //设置钱包
    setWallet(state, action) {
      state.wallet = action.payload;
    },
    //设置连接
    setConnecting(state, action) {
      state.connecting = action.payload;
    },
    //弹出钱包
    showWallet(state, action) {
      state.show = action.payload;
    },
    //chain
    setChain(state, action) {
      state.chain = action.payload;
    },
    //
    setEthToUsd(state, action) {
      state.ethToUsd = action.payload;
    },
    //
    setisWalletInstalled(state, action) {
      state.isWalletInstalled = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initAccount.pending, (state, action) => {
        //state.status = 'loading'
      })
      .addCase(initAccount.fulfilled, (state, action) => {
       // state.account = action.payload;
        // state.status = 'idle'
      })
      .addCase(initWallet.fulfilled, (state, action) => {
       // state.wallet = action.payload;
        // state.status = 'idle'
      });
  },
});

export const {
  setAccount,
  setWallet,
  setConnecting,
  showWallet,
  setChain,
  setEthToUsd,
  setisWalletInstalled,
} = walletSlice.actions;
export default walletSlice.reducer;
