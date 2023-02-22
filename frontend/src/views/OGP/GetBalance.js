import { Button, Card, Space, Typography } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import MainLayout from '../../components/MainLayout'
import BNICard from "../../assets/images/bni-debit-card.jpg"
import { getBalance } from '../../stores/actions/one-gate-payment'

const { Title } = Typography
const GetBalance = () => {
    const dispatch = useDispatch()
    const [hit, setHit] = useState(false)
    const money = 1000000
    const onGetBalance = () => {
        dispatch(getBalance())
    }
    const clear = () => {
        setHit(false)
    }
    return (
        <MainLayout>
            <div style={cardContent}>
                <Card
                title="Get Balance"
                hoverable
                cover={<img alt="bni-debit-card" src={BNICard} style={imgCard}/>}
                style={{
                    width: 300,
                    textAlign: "center"
                }}>
                    <Space direction="vertical">
                        <Title level={3}>Rp. {!hit ? 0 : money.toLocaleString()} </Title>
                        {!hit ? <Button onClick={onGetBalance}>Get Balance</Button> : <Button onClick={clear}>Clear</Button>}
                    </Space>
                </Card>
            </div>
        </MainLayout>
    )
}

const cardContent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px auto"
}

const imgCard = {
    height: "200px" 
}

export default GetBalance
