const initState = {
    //创建变量以便在.tsx中接收
    topics: [],
}

interface Action {
    type: string,
    data: any
}

const userReducers = (state = initState, action: Action) => {
    if (action.type === 'postRegister') {
        return {
            ...state,
            topics: action.data
        }
    }
    return {
        ...state
    }
}

export default userReducers