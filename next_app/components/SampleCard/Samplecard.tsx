import Link from "next/link";
import { CardBody, CardBackImg, CardTitle } from "./components/index";

interface CardProps{
    card: {
      title: string,
      id: number,
      link: string
    }
};

export const SampleCard = ({ card }: CardProps) => {  
  return (
    <Link 
      key={card.id}
      href={card.link}
      target="_blank"
    >
      <CardBody>
        <CardBackImg id={card.id}/>
        <CardTitle title={card.title}/>
      </CardBody>
    </Link>
  );
};