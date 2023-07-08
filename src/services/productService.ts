import { GET_PRODUCT, GET_TRL_LIST } from '@/constants/urls'

export const getProduct = (id: number) => {
   return fetch(GET_PRODUCT + id, { method: 'GET' }).then((res) => res.json())
}

export const updateProduct = (id: number) => {
   return fetch(GET_PRODUCT + id, { method: 'PUT' }).then((res) => res.json())
}

export const getTrlList = () => {
   return fetch(GET_TRL_LIST, { method: 'GET' }).then((res) => res.json())
}
