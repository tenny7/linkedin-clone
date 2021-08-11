export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type:'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}

export const login = (status) => {
    return (dispatch) => {
        dispatch({
            type: 'login',
            payload:status
        })
    }
}
export const logout = (status) => {
    return (dispatch) => {
        dispatch({
            type: 'logout',
            payload:status
        })
    }
}