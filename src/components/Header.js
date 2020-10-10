import React from "react"
import { PageHeader, Divider, Button, Dropdown, Menu } from "antd"
import { DownOutlined } from "@ant-design/icons"
import "antd/dist/antd.css"

export default function Header(props) {
  function handleMenuClick(e) {
    console.log("Vous avez sélectionnez", e)
    props.setBatiment(e.key)
    localStorage.setItem('batiment', e.key);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="Lavoisier">Lavoisier</Menu.Item>
      <Menu.Item key="Descartes">Descartes</Menu.Item>
    </Menu>
  )

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="JAM Session"
        extra={[
          <Menu>
            <Dropdown overlay={menu}>
              <Button>
                {props.batiment} <DownOutlined />
              </Button>
            </Dropdown>
          </Menu>,
        ]}
      />
      <Divider style={{ marginTop: 0 }} />
    </div>
  )
}
