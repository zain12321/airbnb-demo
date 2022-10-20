import Image from "next/image"
import {AiOutlineHeart, AiFillStar} from 'react-icons/ai'
function InfoCard({img, location, title, description, lat,
  star, total, long, price }) {

  return (

    <div className="sm:flex py-7 px-2 border-b-2 first:border-t cursor-pointer
    ease-out duration-200 transition transform hover:shadow-lg">
      <div className="relative h-24 w-40 md:h-52 md:w-96 flex-shrink-0">
        <Image 
        src={img}
        layout='fill'
        objectFit="cover"
        className="rounded-lg hover:opacity-80"
        />
      </div>
      <div className="flex flex-col sm:pl-5 flex-grow  ">
        <div className="flex justify-between ">
          <p className="text-[16px] font-semibold">{location}</p>
          <AiOutlineHeart className="h-6 w-6 cursor-pointer"/>
        </div>
        <h3 className="text-sm">{title}</h3>
        <div className="w-10 pt-2 border-b" />
          <p className="pt-2 flex-grow text-gray-500 text-sm">{description}</p>
            <div className="flex justify-between">
         <p className="flex items-center space-x-2 ">
           <AiFillStar className="h-5 w-5 text-red-500 mr-1"/>
          {star}</p>
         
          <div>
            <p className="text-xl lg:text-2xl font-semibold pb-2 ">{total}</p>
            <p className="font-extralight text-right">{price}</p>

            </div>
            </div>
      </div>
     
    </div>
  )
}

export default InfoCard