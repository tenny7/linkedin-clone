const login = (state = false, action) => {
    switch(action.type){
        case 'loggedIn':
            return state = !state
        case 'loggedOut':
            return state
        default:
            return state
    }
}

export default login