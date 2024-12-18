"use client"
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsTitle() {
  const words = ["Hello", "Salam", "안녕하세요", "Hola", "Bonjour", "Ciao", "Guten Tag"];

  return (
    <div>
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 mb-10">
        <FlipWords words={words} />
      </div>
    </div>
  );
}
