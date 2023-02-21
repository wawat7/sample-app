import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { SettingOutlined } from '@ant-design/icons';
import logoBNI from "../assets/images/bni.png"

const { Header } = Layout
const Headers = () => {
    const [current, setCurrent] = useState("ogp")
    const items = [
        {
            label: 'One Gate Payment',
            key: 'ogp',
            icon: <SettingOutlined />,
            children: [
                {
                    key: "get_balance",
                    label: "Get Balance"
                },
                {
                    key: "do_payment",
                    label: "Do Payment"
                },
                {
                    key: "get_payment_status",
                    label: "Get Payment Status"
                }
            ]
        },
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
