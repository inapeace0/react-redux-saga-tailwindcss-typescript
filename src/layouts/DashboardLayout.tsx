import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Types from '@/actionTypes/index'

import { ThemeContext } from '@/context/index'

import { RootState } from '@/types/index'

import Overlay from '@/components/Overlay'

const APP_ID = import.meta.env.VITE_APP_ID === undefined ? '1' : import.meta.env.VITE_APP_ID

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
   const dispatch = useDispatch()

   const { id, mainColor, hasUserSection, logo, loading } = useSelector(
      (state: RootState) => state.global,
   )

   const theme = useMemo(() => mainColor, [mainColor])

   useEffect(() => {
      if (id != APP_ID) dispatch({ type: Types.GET_APP_CONFIGURATION, payload: APP_ID })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <ThemeContext.Provider value={theme}>
         {loading ? (
            <Overlay />
         ) : (
            <div>
               <div
                  className='flex items-center justify-between px-4 py-2'
                  style={{ backgroundColor: mainColor }}
               >
                  <div className='flex items-center'>
                     <Link to='/'>
                        <img src={logo} alt='logo' className='w-40' />
                     </Link>
                  </div>
                  <div>
                     {hasUserSection && <div className='rounded-full w-16 h-16 bg-blue-200'></div>}
                  </div>
               </div>
               <div className='flex flex-col sm:flex-row'>
                  <div className='w-48 h-full'>
                     <ul className='my-8 mx-1'>
                        <li className='m-2'>
                           <Link to='/'>Home</Link>
                        </li>
                        <li className='m-2'>
                           <Link to='/product/6781'>Product</Link>
                        </li>
                     </ul>
                  </div>
                  <div className='flex-1 m-4'>{children}</div>
               </div>
            </div>
         )}
      </ThemeContext.Provider>
   )
}
