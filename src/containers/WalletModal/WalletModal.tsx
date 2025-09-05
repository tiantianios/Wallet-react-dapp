/*
 * @Author: tiantian
 * @Date: 2025-09-04 09:40:59
 * @LastEditTime: 2025-09-05 20:06:09
 * @Description:
 */
"use client";
import { Col, Modal, Row } from "antd";
import React, { useEffect } from "react";
import styles from "./WalletModal.module.scss";
import connectors, {
  ConnectorNames,
  walletLocalStorageKey,
  connectorLocalStorageKey,
} from "@src/types/Connector";
import {  hooks,metaMask } from "../../connectors/metaMask";
import { connectWithSelect } from "@src/utils/web3React";
const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;


export default function WalletModal(props: any) {
  const open = props.open || false;
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActive = useIsActive();
  const isActivating = useIsActivating();
  const provider = useProvider()
  const ENSNames = useENSNames(provider)
  console.log(chainId, accounts, isActive,isActivating,provider,ENSNames);
  const connectPanel = (
    <div>
      <Row justify="start">
        <div className={styles["title"]}>Connect wallet</div>
      </Row>
      <Row
        className={styles["connect-panel"]}
        justify="center"
        gutter={[16, 24]}
      >
        {connectors.map((connector, index) => {
          return (
            <Col
              className={styles["connect-button"]}
              span={24}
              key={index}
              onClick={() => {
                connectWallet(connector.connectorId);
              }}
            >
              <connector.icon
                className={[styles["icon"]].join(" ")}
              ></connector.icon>
              <span
                style={{
                  fontSize: "18px",
                  color: "#000000",
                  marginLeft: "12px",
                }}
              >
                {connector.title}
              </span>
            </Col>
          );
        })}
      </Row>
    </div>
  );

  //连接钱包
  async function connectWallet(_conconnectorId: string) {
    const error = (error: any) => {
      if (error) {
        console.log(error);
      }
    };
    connectWithSelect(metaMask, 1, error);
    props.handleCancel();
    // void metaMask.connectEagerly().catch(() => {
    //   console.debug("Failed to connect eagerly to metamask");
    // });
  }
  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.activate().catch(() => {
      console.debug('Failed to connect to network')
    })
  }, [])
  return (
    <>
      <Modal title="" open={open} footer={null} onCancel={props.handleCancel}>
        {connectPanel}
      </Modal>
    </>
  );
}
