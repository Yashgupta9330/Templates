import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button"

export function Hero3() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Idea to website in
          <br />
          minutes, not hours.
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-8">
          Get the best beam tracking services in the world with our state
          of the art, cutting edge beam detection technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 text-lg font-semibold">
            Buy now
          </Button>
          <Button variant="outline" className="bg-white text-black border-2 border-black hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-semibold">
            Explore beams
          </Button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
