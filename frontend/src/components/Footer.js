import { Layout } from 'antd'
import React from 'react'

const { Footer } = Layout
const Footers = () => {
    return (
        <Footer>
            <hr />
            <div style={footerStyle}>
                <h4 style={{color:'black'}}>Ant Design ©2022 Created by APM DOWER</h4>
            </div>
        </Footer>
    )
}

const footerStyle = {
    textAlign:'center',
    background:'lightGrey',
    opacity:0.6
}

export default Footers
