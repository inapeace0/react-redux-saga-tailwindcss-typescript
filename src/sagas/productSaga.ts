import { all, call, put, takeLatest, Effect } from 'redux-saga/effects'
import Types from '@/actionTypes/index'
import API from '@/services/index'
import { ActionType } from '@/types/index'

const { getProduct, getTrlList } = API

function* GetProduct(action: ActionType): Generator<Effect, void, any> {
   try {
      const res = yield call(getProduct, action.payload)
      if (res) {
         yield put({
            type: Types.GET_PRODUCT_SUCCESS,
            payload: res,
         })
      }
   } catch (error) {
      yield put({
         type: Types.GET_PRODUCT_FAILURE,
         error: 'Network Connection Failed',
      })
   }
}

function* UpdateProduct(action: ActionType): Generator<Effect, void, any> {
   try {
      const res = yield call(getProduct, action.payload)
      if (res) {
         yield put({
            type: Types.GET_PRODUCT_SUCCESS,
            payload: res,
         })
      }
   } catch (error) {
      yield put({
         type: Types.GET_PRODUCT_FAILURE,
         error: 'Network Connection Failed',
      })
   }
}

function* GetTrlList(): Generator<Effect, void, any> {
   try {
      const res = yield call(getTrlList)
      if (res) {
         yield put({
            type: Types.GET_TRL_LIST_SUCCESS,
            payload: res,
         })
      }
   } catch (error) {
      yield put({
         type: Types.GET_TRL_LIST_FAILURE,
         error: 'Network Connection Failed',
      })
   }
}

function* watchRequest() {
   yield takeLatest(Types.GET_PRODUCT, GetProduct)
   yield takeLatest(Types.UPDATE_PRODUCT, UpdateProduct)
   yield takeLatest(Types.GET_TRL_LIST, GetTrlList)
}

export default function* sagas() {
   yield all([watchRequest()])
}
