import { Layout } from 'antd'
import React from 'react'
import Footers from './Footer'
import Headers from './Header'
import 'antd/dist/reset.css';
import "../styles/main.css"

const { Content } = Layout;
const MainLayout = ({ children }) => {
    return (
        <Layout className="layout">
            <Headers />
            <Content className="layout-content">{children}</Content>
            <Footers />
        </Layout>
    )
}

export default MainLayout
