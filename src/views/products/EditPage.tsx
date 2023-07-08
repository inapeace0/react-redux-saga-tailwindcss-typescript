import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { productState } from '@/types/index'

import Types from '@/actionTypes/index'

import Overlay from '@/components/Overlay'

const EditProductPage = () => {
   const dispatch = useDispatch()
   const { id } = useParams()
   const { loading, product, trls } = useSelector((state: productState) => state.product)
   const [value, setValue] = useState(product ? product.description : '')
   const [title, setTitle] = useState(product ? product.name : '')

   useEffect(() => {
      dispatch({
         type: Types.GET_PRODUCT,
         payload: id,
      })
      dispatch({
         type: Types.GET_TRL_LIST,
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   useEffect(() => {
      setValue(product ? product.description : '')
      setTitle(product ? product.name : '')
   }, [product])

   return (
      <>
         {loading ? (
            <Overlay />
         ) : (
            product && (
               <div className='bg-white rounded-md border-2 border-gray-300 p-4 my-2'>
                  <div className='my-2'>
                     <img
                        src={product.picture}
                        className='h-auto max-w-full'
                        alt='product_picture'
                     />
                  </div>
                  <div className='my-2'>
                     <input
                        type='text'
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='w-full border-2 border-gray-300 rounded-sm p-1'
                     />
                  </div>
                  <div className='my-2'>
                     <ReactQuill theme='snow' value={value} onChange={setValue} />
                  </div>
                  <div className='my-2'>
                     <select className='w-full border-2 border-gray-300 rounded-sm p-1'>
                        {trls.map((trl: { id: number; name: string }) => (
                           <option key={trl.id} value={trl.id}>
                              {trl.name}
                           </option>
                        ))}
                     </select>
                  </div>
               </div>
            )
         )}
      </>
   )
}

export default EditProductPage
