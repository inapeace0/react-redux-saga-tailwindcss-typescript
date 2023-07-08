import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '@/reducers/index'
import rootSagas from '@/sagas/index'

// Create sagas middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
   typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

export default function configureStore() {
   const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
   // Running sagas
   sagaMiddleware.run(rootSagas)
   return store
}
