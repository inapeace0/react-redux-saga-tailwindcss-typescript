import Types from '@/actionTypes/index'
import { ActionType } from '@/types/index'
import { globalState } from '@/types/index'

const initialState: globalState = {
   loading: false,
   id: 1,
   logo: 'https://img.innoloft.de/logo.svg',
   mainColor: '#272e71',
   hasUserSection: true,
}

const productReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
      case Types.GET_APP_CONFIGURATION:
         return {
            ...state,
            loading: true,
         }
      case Types.GET_APP_CONFIGURATION_SUCCESS:
         return {
            ...state,
            ...action.payload,
            loading: false,
         }
      case Types.GET_APP_CONFIGURATION_FAILURE:
         return {
            ...state,
            loading: false,
            error: action.error,
         }
      default:
         return state
   }
}

export default productReducer
