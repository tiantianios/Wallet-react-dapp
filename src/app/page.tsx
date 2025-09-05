/*
 * @Author: tiantian
 * @Date: 2025-09-01 17:51:27
 * @LastEditTime: 2025-09-04 14:31:33
 * @Description:
 */
"use client";
import { Providers } from "@src/app/Providers";
import AppHeader from "@src/containers/Header/Header";
import AppContent from "@src/containers/Content/Content";
import AppFooter from "@/containers/Footer/Footer";
import { Flex, Layout } from "antd";
const { Header, Footer, Content } = Layout;
declare global {
  interface Window {
    TWidgetLogin: any;
    message: any;
    Telegram: any;
    addRegisterAmount: any;
    MSStream: any;
    BinanceChain: any;
  }
}

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#000",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "320px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  width: "100%",
  backgroundColor: "#202020",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
};

export default function Home() {
  return (
    <Providers>
      <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            <AppHeader></AppHeader>
          </Header>
          <Content style={contentStyle}>
            <AppContent></AppContent>
          </Content>
          <Footer style={footerStyle}>
            <AppFooter></AppFooter>
          </Footer>
        </Layout>
      </Flex>
    </Providers>
  );
}
