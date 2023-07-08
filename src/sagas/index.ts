import { all } from 'redux-saga/effects'
import GlobalSaga from './globalSaga'
import productSaga from './productSaga'

export default function* rootSaga() {
   yield all([GlobalSaga(), productSaga()])
}
