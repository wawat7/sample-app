export const responseSuccessGetBalance = {
    getBalanceResponse: {
        clientId: "BNISERVICE",
        parameters: {
            responseCode: "0001",
            responseMessage: "Request has been processed successfully",
            responseTimestamp: "2017-02-24T14:12:25.871Z",
            customerName: "Bpk JONOMADE MADEMADEMADEMADE IMAMADE",
            accountCurrency: "IDR",
            accountBalance: 1000000
        }
    }
}
export const responseErrorGetBalance = {
    getBalanceResponse: {
        clientId: "BNISERVICE",
        parameters: {
            responseCode: "0007",
            errorMessage: "Request has been processed unsuccessfully, check your KEY",
        }
    }
}