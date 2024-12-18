"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CustomCardProps {
  title: string;
  content: string;
  description: string;
  image: string | StaticImageData;
  link?: string;
}

export function CardWithForm({
  title,
  description,
  content,
  image,
  link,
}: CustomCardProps) {
  return (
    <Link href={link || "#"}>
      <Card className="w-auto h-80">
        <CardHeader>
          <Image src={image} height={100} width={100} alt={title}></Image>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-2">
            <div className="flex flex-col">
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
            <div>
              <p className="">{content}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
