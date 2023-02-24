import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { SettingOutlined, FileOutlined } from '@ant-design/icons';
import logoBNI from "../assets/images/bni.png"

const { Header } = Layout
const Headers = () => {
    const [current, setCurrent] = useState("ogp")
    const items = [
        {
            label: <Link to={"/dashboard"}>One Gate Payment</Link>,
            key: 'ogp',
            icon: <SettingOutlined />,
        },
        {
            label: <Link to={"/"}>Documentation</Link>,
            key: 'documentation',
            icon: <FileOutlined />
        }
    ]
    const clickedMenu = (e) => {
        setCurrent(e.key)
    }
    return (
        <Header>
            <div className="logo">
                <img alt="logo-bni" src={logoBNI}/>
            </div>
            <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={{current}}
            items={items}
            onClick={clickedMenu}
            />
        </Header>
    )
}

export default Headers
