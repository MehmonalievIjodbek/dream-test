import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import MobileMenuIcon from "./../../common/Icons/MobileMenuIcon";
const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="mobile-menu">
      <Space>
        <Button type="primary" onClick={showDrawer}>
          <MobileMenuIcon />
        </Button>
      </Space>
      <Drawer
        title="UZBIOPRODUCT"
        //    footer={<FooterOpen />}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        //    closeIcon={<CloseOutlined />}
        key={placement}
        extra={
          <Space>
            <Button onClick={onClose}>{/* <CloseOutlined /> */}sdfsd</Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};
export default MobileMenu;
