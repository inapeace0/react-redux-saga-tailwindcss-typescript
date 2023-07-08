import { GET_APP_CONFIGURATION } from '@/constants/urls'

export const getAppConfiguration = (id: number) => {
   return fetch(GET_APP_CONFIGURATION + id, { method: 'GET' }).then((res) => res.json())
}
