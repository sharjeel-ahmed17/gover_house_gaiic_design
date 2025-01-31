
import Link from 'next/link'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/app/data/navData'



const Footer = () => {
  return (
    <footer className="bg-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4">Furniro.</h3>
          <p className="text-[#9F9F9F] mb-4">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>
        <div>
          <h4 className="text-[#9F9F9F] mb-4">Links</h4>
          <nav className="space-y-2">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="block text-black hover:text-[#B88E2F]"
        >
          {link.label}
        </Link>
      ))}
    </nav>
        </div>
        <div>
          <h4 className="text-[#9F9F9F] mb-4">Help</h4>
          <nav className="space-y-2">
            <Link href="/payment" className="block text-black hover:text-[#B88E2F]">
              Payment Options
            </Link>
            <Link href="/returns" className="block text-black hover:text-[#B88E2F]">
              Returns
            </Link>
            <Link href="/privacy" className="block text-black hover:text-[#B88E2F]">
              Privacy Policies
            </Link>
          </nav>
        </div>
        <div>
          <h4 className="text-[#9F9F9F] mb-4">Newsletter</h4>
          <form className="space-y-4">
            <Input type="email" placeholder="Enter Your Email Address" className="w-full" />
            <Button className="w-full bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white">SUBSCRIBE</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-12 pt-8 text-center text-[#9F9F9F]">
        2023 furino. All rights reserved
      </div>
    </div>
  </footer>
  )
}

export default Footer