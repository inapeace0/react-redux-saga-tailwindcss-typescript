import { useMemo } from 'react'

import babyImage1 from '@/assets/baby_1.gif'
import babyImage2 from '@/assets/baby_2.gif'
import babyImage3 from '@/assets/baby_3.gif'
import babyImage4 from '@/assets/baby_4.png'

const random = (length: number) => Math.floor(Math.random() * length)
const Overlay = () => {
   const images = [babyImage1, babyImage2, babyImage3, babyImage4]

   const index = useMemo(() => random(images.length), [images.length])

   return (
      <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-90 bg-black'>
         <img src={images[index]} className='rounded-full w-52 h-52' />
         <div className='absolute border-4 border-white w-52 h-52 rounded-full animate-ping'></div>
      </div>
   )
}

export default Overlay
