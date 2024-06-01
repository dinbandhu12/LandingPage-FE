import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  
  return (
    <div className="border-b sticky">
      <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
          <Link href="/" className="font-bold text-blue-70">
              <Image src="/logo.png" alt="logo" width={100} height={100} />
          </Link>
          
          <ul className="hidden h-full gap-4 lg:gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
              </Link>
            ))}
          </ul>

          <div className="lg:flexCenter hidden">
            <Button 
              type="button"
              title="Contact"
              variant="btn_dark_green"
            />
          </div>

          <Image 
            src="/hamburger.png"
            alt="hamburger"
            width={20}
            height={20}
            className="inline-block cursor-pointer lg:hidden"
          />

      </nav>
    </div>
  )
}

export default Navbar