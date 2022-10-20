import Image from "next/image"

function LargeCard({img, description, buttonText, title }) {
  return (
    <div className="py-16 relative">
      <div className="relative h-96 min-w-[250px]  ">
        <Image
        src={img}
        objectFit='cover'
        layout='fill'
        alt=''
        className="rounded-lg"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="bg-gray-900 text-white 
        text-sm px-4 py-2 rounded-lg mt-5">{buttonText}</button>
      </div>
    </div>
  )
}

export default LargeCard