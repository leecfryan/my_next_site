"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardWithForm } from "./custom-card";
import { StaticImageData } from "next/image";

interface CardData {
  title: string;
  content: string;
  description:string;
  image: string | StaticImageData;
  link?: string;
}

interface CustomCarouselProps {
  cards: CardData[];
}

export function CarouselSize({ cards }: CustomCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false, stopOnMouseEnter: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-4xl box rounded-md shadow-xl bg-teal-600 p-5"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {cards.map((card,index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <CardWithForm {...card}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
