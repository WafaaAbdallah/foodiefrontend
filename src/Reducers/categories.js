import {FETCH_CATEGORIES, CATEGORY_SELECTED} from '../Actions/actionTypes'
const init_state = {
    categories : [],
    selectedCategory:null
}

export default ({state = init_state, action}){
    switch(action.type){
        case FETCH_CATEGORIES :
            return {
                ...state,
                categories:action.payload
            }
            case CATEGORY_SELECTED :
                return {
                    ...state,
                    selectedCategory:action.payload
                }
            default:
        return state;
    }
}