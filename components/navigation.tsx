"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Wrench } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Wrench className="w-6 h-6 text-amber-700" />
            </div>
            <div className="text-gray-900">
              <h1 className="font-semibold text-lg">Northern Viking Woodworks</h1>
              <p className="text-xs text-gray-600">By Carl Hanson</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("builds")}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("workbench")}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg shadow-sm"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-amber-700 transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("builds")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md transition-colors font-medium"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("workbench")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md transition-colors font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-md transition-colors font-medium"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white rounded-lg"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
