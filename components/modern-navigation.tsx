"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Wrench } from "lucide-react"

export function ModernNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/20 backdrop-blur-xl border-b border-white/10 h-12" : "bg-transparent h-14"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className={`p-1.5 bg-amber-600/20 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            >
              <Wrench className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-white">
              <h1
                className={`font-heading font-semibold tracking-tight transition-all duration-300 ${
                  isScrolled ? "text-sm" : "text-base"
                }`}
              >
                Northern Viking Woodworks
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-heading text-sm font-medium text-white/80 hover:text-white transition-colors hover-underline tracking-wide"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-heading text-sm font-medium text-white/80 hover:text-white transition-colors hover-underline tracking-wide"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="font-heading text-sm font-medium text-white/80 hover:text-white transition-colors hover-underline tracking-wide"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="font-heading text-sm font-medium text-white/80 hover:text-white transition-colors hover-underline tracking-wide"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-heading text-sm font-medium text-white/80 hover:text-white transition-colors hover-underline tracking-wide"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="font-heading bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white/80 hover:text-white transition-colors p-2">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 rounded-b-2xl mt-2">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <button
                onClick={() => scrollToSection("hero")}
                className="font-heading block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 tracking-wide"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="font-heading block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 tracking-wide"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="font-heading block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 tracking-wide"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="font-heading block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 tracking-wide"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="font-heading block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 tracking-wide"
              >
                Contact
              </button>
              <div className="pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="font-heading w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full font-medium"
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
