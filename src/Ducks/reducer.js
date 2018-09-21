

const initialState = {
    cart: [],
    user: {},
    username: '',
    email: '',
    user_pic: '',
    
}


//Action Types
    const ADD_TO_CART = 'ADD_TO_CART';
    const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
    const SET_CART = 'SET_CART';
    const USER_DATA = 'USER_DATA';
    const USERNAME = 'USERNAME';
    const EMAIL = 'EMAIL';
    const USER_PIC = 'USER_PIC';
    

//Reducer Function

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return Object.assign({}, state, { cart: action.payload });

        case REMOVE_FROM_CART:
            return Object.assign({}, state, { cart: action.payload });

        case SET_CART: 
            return Object.assign({}, state, { cart: action.payload });

        case USER_DATA: 
            return Object.assign({}, state, {user: action.payload});

        case USERNAME:
            return Object.assign({}, state, {username: action.payload});

        case EMAIL:
            return Object.assign({}, state, {email: action.payload});

        case USER_PIC:
            return Object.assign({}, state, {user_pic: action.payload});

        default:
            return state;
    }
}

//Action Creators
export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function removeFromCart(id, product) {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export function setCart(cart) {
    return{
        type: SET_CART,
        payload: cart
    }
}

export function getUserData(user) {
    return{
        type: USER_DATA,
        payload: user
    }
}

export function updateUsername(username){
    return{
        type:USERNAME,
        payload: username
    }
}

export function updateEmail(email){
    return{
        type:EMAIL,
        payload: email
    }
}

export function updateUser_Pic(user_pic){
    return{
        type:USER_PIC,
        payload: user_pic
    }
}





