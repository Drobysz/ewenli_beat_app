import { ServiceCard } from "@/components";
import service from '@/public/serviceInfo.json';

export const Cards = ()=> {
	return (
		<ul className="w-full flex justify-center items-center gap-7 px-3 max-[795px]:flex-col">
      {service.map( c =>
				<ServiceCard 
          key={c.key}
          title={c.title} 
          description={c.description} 
          img={c.image} 
        /> )
      }
    </ul>
	)
}