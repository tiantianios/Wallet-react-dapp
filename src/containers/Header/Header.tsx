/*
 * @Author: tiantian
 * @Date: 2025-09-03 10:11:44
 * @LastEditTime: 2025-09-05 10:28:04
 * @Description:
 */
"use client";
import React ,{useState}from "react";
import { Menu, Row, Image ,Button} from "antd";
import { TransactionOutlined } from '@ant-design/icons';
import type { MenuProps } from "antd";
import WalletModal from '../WalletModal/WalletModal'

const items: MenuProps["items"] = ["Home", "Farm", "Projects", "Staking"].map(
  (key) => ({
    key,
    label: `${key}`,
  })
);
export default function Header() {

   const [open, setOpen] = useState(false);
  //连接钱包
  const showModal = () => {
    setOpen(true)
  };
  return (
    <header className="f">
      <Row>
        <Image width={150} height={50} src="/images/code_log.png" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 100 }}
        />
        <div>
          <Button type="link" icon={<TransactionOutlined />} onClick={showModal}>Connect Wallet</Button>
        </div>
      </Row>
      <WalletModal open={open}
      handleCancel={() => setOpen(false)}
      ></WalletModal>
    </header>
  );
}
