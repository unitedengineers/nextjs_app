"use client";
import React from "react";
import { Layout, Menu, theme } from "antd";
import Image from "next/image";
import Icon from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}></Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};

export default App;
