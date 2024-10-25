import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { AnimatedTooltipPreview } from "../common/AnimatedPreview"
import OIP from "../../../public/OIP.jpeg"
export default function Hero2() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            Make your dashboard
            <br />
            10x more optimized.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            With our expert dashboard solutions, you'll have no trouble tracking your leads, campaigns, and more.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
               <AnimatedTooltipPreview/>
            </div>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500">Trusted by 27,000+ creators</p>
          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
              Book a demo →
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-800 px-6 py-3">
              Know more
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={OIP}
            alt="Dashboard preview"
            width={600}
            height={600}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}