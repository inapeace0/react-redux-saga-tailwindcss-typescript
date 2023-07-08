import Types from '@/actionTypes/index'
import { ActionType } from '@/types/index'
import { productState } from '@/types/index'

const initialState: productState = {
   loading: false,
   product: null,
   error: null,
   trls: [],
}

const productReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
      case Types.GET_PRODUCT:
         return {
            ...state,
            loading: true,
         }
      case Types.GET_PRODUCT_SUCCESS:
         return {
            ...state,
            product: action.payload,
            loading: false,
         }
      case Types.GET_PRODUCT_FAILURE:
         return {
            ...state,
            loading: false,
            error: action.error,
         }
      case Types.GET_TRL_LIST_SUCCESS:
         return {
            ...state,
            trls: action.payload,
         }
      default:
         return state
   }
}

export default productReducer
