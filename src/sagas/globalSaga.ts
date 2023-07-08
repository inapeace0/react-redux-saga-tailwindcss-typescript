import { all, call, put, takeLatest, Effect } from 'redux-saga/effects'
import Types from '@/actionTypes/index'
import API from '@/services/index'
import { ActionType } from '@/types/index'

const { getAppConfiguration } = API

function* GetAppConfiguration(action: ActionType): Generator<Effect, void, any> {
   try {
      const res = yield call(getAppConfiguration, action.payload)
      if (res) {
         yield put({
            type: Types.GET_APP_CONFIGURATION_SUCCESS,
            payload: res,
         })
      }
   } catch (error) {
      yield put({
         type: Types.GET_APP_CONFIGURATION_FAILURE,
         error: 'Network Connection Failed',
      })
   }
}

function* watchRequest() {
   yield takeLatest(Types.GET_APP_CONFIGURATION, GetAppConfiguration)
}

export default function* sagas() {
   yield all([watchRequest()])
}
