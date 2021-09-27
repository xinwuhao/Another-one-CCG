const initState = {
    //创建变量以便在.tsx中接收
    topics: [],
    list: [],
    arr: [],
    arr1: [],
    arr2: [],
    obj: [],
    sdetail: [],
    onedata: []
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