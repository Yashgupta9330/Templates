import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedTooltipPreview } from "../common/AnimatedPreview"

export default function Hero1() {
  return (
    <div className="bg-white text-black min-h-screen">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-md"></div>
          <span className="font-bold text-xl">DevStudio</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link className="text-gray-600 hover:text-black" href="#">
            Work
          </Link>
          <Link className="text-gray-600 hover:text-black" href="#">
            Services
          </Link>
          <Link className="text-gray-600 hover:text-black" href="#">
            Pricing
          </Link>
          <Link className="text-gray-600 hover:text-black" href="#">
            Contact
          </Link>
        </nav>
        <Button className="bg-black text-white rounded-full px-6 py-2 hidden md:block">Book a call</Button>
      </header>
      <main className="container mx-auto px-4 text-center mt-20">
        <div className="flex justify-center mb-12">
           <AnimatedTooltipPreview/>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Your best in class{" "}
          <span className="text-purple-600">
            design and
            <br />
            development studio
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          We provide the best in class design and development services for teams that ship with the speed of light.
        </p>
        <Button className="bg-black text-white rounded-full px-8 py-3 text-lg">Book a call</Button>
        <p className="mt-20 text-gray-600">Trusted by famous brands</p>
      </main>
    </div>
  )
}