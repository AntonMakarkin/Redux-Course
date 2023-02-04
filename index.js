const CAKE_ORDERED = 'CAKE_ORDERED';

const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}