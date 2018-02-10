const initialState = {
    chosenItem: 'okay',
    chosenPrice: '$5',
    chosenImage: ''
}

const CHOSEN = "CHOSEN"
const PRICE = "PRICE"
const IMAGE = "IMAGE"

function reducer(state = initialState, action) {
    switch (action.type) {
        case CHOSEN:
            let { item } = action
            return { ...state, chosenItem: action.payload }
        case PRICE:
            let { price } = action
            return { ...state, chosenPrice: action.payload }
        case IMAGE:
            let { image } = action
            return { ...state, chosenImage: action.payload }

        default: return state;
    }

}


export function choose(item) {
    return {
        type: CHOSEN,
        payload: item
    }
}

export function price(price) {
    return {
        type: PRICE,
        payload: price
    }
}

export function image(image) {
    return {
        type: IMAGE,
        payload: image
    }
}

export default reducer;  