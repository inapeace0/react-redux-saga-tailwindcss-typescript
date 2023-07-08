export interface ActionType {
   type: string
   payload?: any
   error?: null | string
}

export interface globalState {
   loading: boolean
   id: number
   logo: string
   mainColor: string
   hasUserSection: boolean
}

// interface Product {

// }

export interface productState {
   loading: boolean
   product: any
   error: null | string
   trls: string[]
}

export interface RootState {
   global: globalState
   product: productState
}
