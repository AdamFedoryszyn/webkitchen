import logo from "@/public/logo.jpeg"
import Image from "next/image"
import { Bungee } from "next/font/google"
import Link from "next/link"
import { cn } from "@/lib/utils" 

const bungee = Bungee({
    subsets: ["latin"],
    weight: "400"
})
export default function Logo() {
  return (
    <Link 
        href="/" className={cn(
                    "flex gap-2 items-center",
                    `${bungee.className} text-3xl`
                    )}>
                    <Image className="size-8" src={logo} alt="logo"/>
                    <span>WK</span>
                    </Link>
  )
}
