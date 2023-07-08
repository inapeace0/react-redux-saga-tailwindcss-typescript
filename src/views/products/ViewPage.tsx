import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useContext, useMemo } from 'react'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'

import Types from '@/actionTypes/index'
import { productState } from '@/types/index'

import RoundButton from '@/components/RoundButton'

import { ThemeContext } from '@/context/index'

import Overlay from '@/components/Overlay'

const Tag = ({ children }: { children: string }) => (
   <span className='bg-slate-300 m-1 p-1 rounded-md'>{children}</span>
)

interface ModelType {
   id: number
   name: string
}

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY

export default function ViewProduct() {
   const dispatch = useDispatch()
   const { loading, product } = useSelector((state: productState) => state.product)

   useEffect(() => {
      dispatch({ type: Types.GET_PRODUCT, payload: 6781 })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const videoOptions = {
      controls: true,
      autoPlay: false,
      muted: false,
   }

   const theme = useContext(ThemeContext)

   const center = useMemo(
      () => ({
         lat: Number(product ? product.company.address.latitude : 0),
         lng: Number(product ? product.company.address.longitude : 0),
      }),
      [product],
   )

   return (
      <div className='my-4'>
         {loading ? (
            <Overlay />
         ) : (
            product && (
               <div>
                  <div>
                     <Link to={'/product/' + product.id + '/edit'}>
                        <RoundButton color={theme}>Edit</RoundButton>
                     </Link>
                  </div>
                  <div className='flex flex-col lg:flex-row bg-white rounded-md border-2 border-gray-300 p-4 my-2'>
                     <div className='flex-3 m-2'>
                        <div className='relative'>
                           <img
                              src={product.picture}
                              className='h-auto max-w-full'
                              alt='product_picture'
                           />
                           <span className='bg-blue-600 text-white p-2 rounded-md absolute top-0'>
                              {product.type.name}
                           </span>
                        </div>
                        <div>
                           <p className='font-bold'>{product.name}</p>
                           <p>{parse(product.description)}</p>
                        </div>
                     </div>
                     <div className='flex flex-1 flex-col m-2'>
                        <div className='my-2'>
                           <p>Offered By</p>
                           <img
                              src={product.company.logo}
                              alt='logo'
                              className='h-auto max-w-full'
                           />
                        </div>
                        <div className='flex items-center my-2'>
                           <div>
                              <img
                                 src={product.user.profilePicture}
                                 className='rounded-full w-20'
                                 alt='profile_picture'
                              />
                           </div>
                           <div className='flex-1'>
                              <p>{product.user.firstName + ' ' + product.user.lastName}</p>
                              <p>{product.user.position}</p>
                           </div>
                        </div>
                        <div className='my-2'>
                           <p>
                              {product.company.address.street +
                                 ' ' +
                                 product.company.address.house +
                                 ', ' +
                                 product.company.address.city.name +
                                 ' ' +
                                 product.company.address.zipCode +
                                 ', ' +
                                 product.company.address.country.name}
                           </p>
                        </div>
                        <div className='md:flex-1 my-2 w-full h-48'>
                           <GoogleMapReact
                              bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
                              defaultCenter={center}
                              defaultZoom={10}
                           ></GoogleMapReact>
                        </div>
                     </div>
                  </div>
                  <div className='bg-white rounded-md border-2 border-gray-300 p-4 my-2'>
                     <h1>Video</h1>
                     <div className='mx-2 sm:mx-5 md:mx-10 lg:mx-20 my-4'>
                        <video src={product.video} {...videoOptions} className='w-full'></video>
                     </div>
                  </div>
                  <div className='bg-white rounded-md border-2 border-gray-300 p-4 my-2'>
                     <h1>Offer details</h1>
                     <div className='flex flex-wrap'>
                        <div className='w-full lg:w-1/2'>
                           <p>Technology</p>
                           <div className='flex flex-wrap'>
                              {product.categories.map((category: ModelType) => (
                                 <Tag key={category.id}>{category.name}</Tag>
                              ))}
                           </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                           <p>Business Model</p>
                           <div className='flex flex-wrap'>
                              {product.businessModels.map((model: ModelType) => (
                                 <Tag key={model.id}>{model.name}</Tag>
                              ))}
                           </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                           <div className='my-2'>
                              <p>TRL</p>
                              <div className='flex flex-wrap'>
                                 <Tag>{product.trl.name}</Tag>
                              </div>
                           </div>
                        </div>
                        <div className='w-full lg:w-1/2'>
                           <div className='my-2'>
                              <p>Costs</p>
                              <div className='flex flex-wrap'>
                                 <Tag>{product.investmentEffort}</Tag>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )
         )}
      </div>
   )
}
