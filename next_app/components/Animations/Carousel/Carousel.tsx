'use client'

// Deps
import { motion, useTransform, useScroll } from "framer-motion";

// Hooks
import { FC, useRef } from "react";

// Components
import Link from "next/link";

// Props
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    card: {title: string, id: number, link: string}
};

export const Carousel = () => {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};


const Card: FC<CardProps> = ({ card }) => {  
  return (
    <Link 
      key={card.id}
      href={card.link}
      target="_blank"
    >
      <motion.div
        className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 cursor-pointer max-[750px]:h-[350px] max-[750px]:w-[350px]"
        whileHover={{boxShadow: '0px 0px 10px 6px white'}}
      >
        <div
          style={{
            backgroundImage: `url(/sampleImages/rab${card.id}.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br text-center w-[300px] from-white/20 to-white/0 p-8 text-3xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

const cards = [
  {
    title: "hyperpop type beat \"hrtmslf\"",
    id: 1,
    link: "https://www.youtube.com/watch?v=T6YHEOWFOyg"
  },
  {
    title: "witchhouse type beat \"nightfall\"",
    id: 2,
    link: "https://www.youtube.com/watch?v=_zGyyzHnfa4"
  },
  {
    title: "100gecs type beat \"bless\"",
    id: 3,
    link: "https://www.youtube.com/watch?v=OGMyz8aCDHU&pp=0gcJCYUJAYcqIYzv"
  },
  {
    title: "type beat \"all the things she said\"",
    id: 4,
    link: "https://www.youtube.com/watch?v=rKOt69nZc8k"
  },
  {
    title: "house type beat \"funky\"",
    id: 5,
    link: "https://www.youtube.com/watch?v=laN9jmpbDu4"
  },
  {
    title: "lady gaga type beat \"dollars\"",
    id: 6,
    link: "https://www.youtube.com/watch?v=gztN8bQjYCI"
  },
  {
    title: "scenecore type beat \"dance till i die\"",
    id: 7,
    link: "https://www.youtube.com/watch?v=qI2MT6gibtg"
  },
];
