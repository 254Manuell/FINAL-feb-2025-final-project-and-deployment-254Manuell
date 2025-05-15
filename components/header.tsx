"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingCart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/components/cart-provider"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { items } = useCart()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/plugins-hub-logo.png"
                alt="Plugins Hub Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-slate-900 ${
                    isActive(link.href) ? "text-slate-900" : "text-slate-500"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <Input type="search" placeholder="Search plugins..." className="w-[200px] pl-8" />
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {items.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center">
                      {items.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <CartPanel />
              </SheetContent>
            </Sheet>

            <Button>Sign In</Button>
          </div>

          {isMobile && (
            <div className="flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="relative mr-2">
                    <ShoppingCart className="h-5 w-5" />
                    {items.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center">
                        {items.length}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <CartPanel />
                </SheetContent>
              </Sheet>

              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          )}
        </div>

        {isMobile && isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-slate-900 ${
                    isActive(link.href) ? "text-slate-900" : "text-slate-500"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                  <Input type="search" placeholder="Search plugins..." className="w-full pl-8" />
                </div>
              </div>
              <Button className="w-full">Sign In</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function CartPanel() {
  const { items, removeItem, clearCart } = useCart()
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between pb-4 border-b">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
        {items.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearCart}>
            Clear Cart
          </Button>
        )}
      </div>

      <div className="flex-1 overflow-auto py-4">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <ShoppingCart className="h-12 w-12 text-slate-300 mb-4" />
            <p className="text-slate-500 mb-4">Your cart is empty</p>
            <Link href="/shop">
              <Button>Browse Plugins</Button>
            </Link>
          </div>
        ) : (
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex items-start gap-4 pb-4 border-b last:border-0">
                <div className="bg-slate-100 rounded w-16 h-16 flex items-center justify-center">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-12 h-12 object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-slate-500">
                      KES {item.price.toLocaleString()} × {item.quantity}
                    </p>
                    <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {items.length > 0 && (
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium">Total</span>
            <span className="font-bold">KES {total.toLocaleString()}</span>
          </div>
          <Button className="w-full">Checkout</Button>
        </div>
      )}
    </div>
  )
}
