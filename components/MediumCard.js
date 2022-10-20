import Image from 'next/image';

function MediumCard({img, title}) {
	return (
		<div className="cursor-pointer hover:scale-105
        transition transform duration-300 ease-out">
			<div className="relative h-[340px] w-80 ">
				<Image src={img} className="rounded-lg" layout="fill" alt="mediumCard"/>
			</div>
            <h2 className='text-md my-1 ml-2'>{title}</h2>
		</div>
	);
}

export default MediumCard;
