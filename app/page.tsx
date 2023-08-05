import Slider from "@/components/slider"
import Games from "@/pages/games"

export default function Home() {
  return (
    <>
      <link rel="icon" href="/icon/logo.jpeg" className="rounded-box" sizes="any" />
      <div className="bg-gradient-to-t from-base-100 to-indigo-900">
        <Slider />
        <Games />
      </div>
    </>
  )
}
