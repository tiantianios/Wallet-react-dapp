/*
 * @Author: tiantian
 * @Date: 2025-09-03 10:12:43
 * @LastEditTime: 2025-09-03 20:11:09
 * @Description:
 */
import React from "react";
import { Row, Col, Button, Flex, Image } from "antd";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <Row>
        <Col span={6}>
          <Image width={150} height={50} src="/images/code_log.png" />
        </Col>
        <Col span={6}>
          <div>GitHib</div>
          <Button type="link">GitHib</Button>
        </Col>
        <Col span={6}>
          <div>GitHib</div>
          <Button type="link">GitHib</Button>
        </Col>
        <Col span={6}>
          {" "}
          <div>GitHib</div>
          <Button type="link">GitHib</Button>
        </Col>
      </Row>
    </footer>
  );
}
