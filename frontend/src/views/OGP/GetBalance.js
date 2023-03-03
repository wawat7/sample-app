import { Button, Card, message, Space, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import MainLayout from '../../components/MainLayout'
import BNICard from "../../assets/images/bni-debit-card.jpg"
import { getBalance, resetGetBalance } from '../../stores/actions/one-gate-payment'
import { getBalanceStackblitz, removeGetBalanceFailedStackblitz } from '../../stores/actions/stackblitz'

const { Title } = Typography
const GetBalance = () => {
    const dispatch = useDispatch()
    const { data, isLoading, success, error, messageResponse } = useSelector(state => state.get_balance)
    const [messageApi, contextHolder] = message.useMessage();
    const isStackblitz = process.env.REACT_APP_ENV_STACKBLITZ
    const onGetBalance = () => {
        isStackblitz === 'true' ? dispatch(getBalanceStackblitz()) : dispatch(getBalance())
    }
    const clear = () => {
        dispatch(resetGetBalance())
    }
    useEffect(() => {
        if(error){
            messageApi.open({
                type: 'error',
                content: data ? messageResponse === "Unauthorized" ? `${data.error}` : `${data.getBalanceResponse?.parameters?.responseCode} : ${data.getBalanceResponse?.parameters?.errorMessage}` : `Run Backend API First`,
            })
            .then(isStackblitz === 'true' && dispatch(removeGetBalanceFailedStackblitz())); 
        }
    })
    
    return (
        <MainLayout>
            {contextHolder}
            <div style={cardContent}>
                <Card
                title="Get Balance"
                hoverable
                loading={isLoading}
                cover={<img alt="bni-debit-card" src={BNICard} style={imgCard}/>}
                style={{
                    width: 300,
                    textAlign: "center"
                }}>
                    <Space direction="vertical">
                        <Title level={3}>Rp. {!success ? 0 : parseInt(data.getBalanceResponse?.parameters?.accountBalance).toLocaleString()} </Title>
                        {!success ? <Button onClick={onGetBalance}>Get Balance</Button> : <Button onClick={clear}>Clear</Button>}
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
