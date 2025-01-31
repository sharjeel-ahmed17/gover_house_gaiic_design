"use client";

import { useState } from "react";
import { Menu, ShoppingCart, Heart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { navLinks } from "@/app/data/navData";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center space-x-2">
          <span className="text-yellow-600">△</span>
          <span className="text-black">Furniro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-600">
        {navLinks.map((link, index) => (
        <Link key={index} href={link.href} className="hover:text-black">
          {link.label}
        </Link>
      ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-gray-600">
          <Link href="/account">
            <User className="w-5 h-5 hover:text-black cursor-pointer" />
          </Link>
          <Search className="w-5 h-5 hover:text-black cursor-pointer" />
          <Heart className="w-5 h-5 hover:text-black cursor-pointer" />
          <Link href="/cart">
            <ShoppingCart className="w-5 h-5 hover:text-black cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu (Sheet from ShadCN) */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6">
            <nav className="flex flex-col space-y-4 text-gray-600">
            {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="hover:text-black"
          onClick={() => setOpen(false)}
        >
          {link.label}
        </Link>
      ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
