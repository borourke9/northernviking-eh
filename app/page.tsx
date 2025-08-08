"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ModernLightbox } from "@/components/modern-lightbox"
import { Settings, Hammer, Wrench, ChevronDown, Ruler, Cog, Zap, ChevronRight } from 'lucide-react'
import Image from "next/image"

export default function NorthernVikingWoodworks() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const featuredWork = [
    {
      title: "Bourbon Smoker",
      description:
        "This precision-machined CNC lid was created as a prototype for a custom bourbon smoker. Crafted from layered wood stock, it features engraved text, a recessed vent hole for smoke release, and a stylized crest. The piece was designed in Carveco and cut on a ONEFINITY CNC machine, showcasing clean detail and tight tolerance stacking.",
      image: "/images/b.jpg",
      category: "Custom Build",
    },
    {
      title: "Beer Tote",
      description:
        "Hand-built carrier for six-pack brews featuring ergonomic design and durable construction. Includes integrated bottle opener and weather-resistant finish for craft beer enthusiasts.",
      image:
        "/placeholder.svg?height=600&width=800&text=Beer+Tote+-+Handcrafted+wooden+six-pack+carrier+with+bottle+opener",
      category: "Lifestyle",
    },
    {
      title: "Logo Plaque",
      description:
        "Custom CNC-engraved business signage with intricate detail work. Available in various wood species with custom finishing options, perfect for businesses and personal branding.",
      image: "/placeholder.svg?height=600&width=800&text=Logo+Plaque+-+CNC+engraved+business+signage+in+premium+wood",
      category: "Commercial",
    },
    {
      title: "Wine Glass Frame",
      description:
        "Wall-mounted frame for glassware display with precision-cut slots for wine glass collections. Features anti-slip backing and adjustable mounting system for secure installation.",
      image:
        "/placeholder.svg?height=600&width=800&text=Wine+Glass+Frame+-+Wall+mounted+display+for+wine+glass+collections",
      category: "Display",
    },
  ]

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % featuredWork.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + featuredWork.length) % featuredWork.length)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Lightbox */}
      <ModernLightbox
        images={featuredWork.map((work) => ({
          src: work.image,
          alt: work.title,
          title: work.title,
          description: work.description,
          category: work.category,
        }))}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light tracking-[0.15em] transition-colors ${
                isScrolled ? "text-[#2c2c2c]" : "text-white"
              }`}
            >
              NVW
              <span className="inline-block ml-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light">→</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className={`text-sm sm:text-base md:text-lg tracking-[0.15em] hover:text-white transition-colors uppercase font-medium relative group ${
                  isScrolled ? "text-[#666] hover:text-[#2c2c2c]" : "text-white/80"
                }`}
              >
                Home
                <span
                  className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#2c2c2c]" : "bg-white"
                  }`}
                ></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-sm sm:text-base md:text-lg tracking-[0.15em] hover:text-white transition-colors uppercase font-medium relative group ${
                  isScrolled ? "text-[#666] hover:text-[#2c2c2c]" : "text-white/80"
                }`}
              >
                About
                <span
                  className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#2c2c2c]" : "bg-white"
                  }`}
                ></span>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`text-sm sm:text-base md:text-lg tracking-[0.15em] hover:text-white transition-colors uppercase font-medium relative group ${
                  isScrolled ? "text-[#666] hover:text-[#2c2c2c]" : "text-white/80"
                }`}
              >
                Services
                <span
                  className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#2c2c2c]" : "bg-white"
                  }`}
                ></span>
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className={`text-sm sm:text-base md:text-lg tracking-[0.15em] hover:text-white transition-colors uppercase font-medium relative group ${
                  isScrolled ? "text-[#666] hover:text-[#2c2c2c]" : "text-white/80"
                }`}
              >
                Gallery
                <span
                  className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#2c2c2c]" : "bg-white"
                  }`}
                ></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-sm sm:text-base md:text-lg tracking-[0.15em] hover:text-white transition-colors uppercase font-medium relative group ${
                  isScrolled ? "text-[#666] hover:text-[#2c2c2c]" : "text-white/80"
                }`}
              >
                Contact
                <span
                  className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#2c2c2c]" : "bg-white"
                  }`}
                ></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden p-2 rounded-md transition-colors ${
                isScrolled ? "text-[#2c2c2c]" : "text-white"
              }`}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="py-4 space-y-4">
              <button
                onClick={() => handleMobileNavClick("hero")}
                className={`block w-full text-left text-lg tracking-[0.15em] uppercase font-medium transition-colors ${
                  isScrolled ? "text-[#2c2c2c] hover:text-[#8B4513]" : "text-white/90 hover:text-white"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleMobileNavClick("about")}
                className={`block w-full text-left text-lg tracking-[0.15em] uppercase font-medium transition-colors ${
                  isScrolled ? "text-[#2c2c2c] hover:text-[#8B4513]" : "text-white/90 hover:text-white"
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleMobileNavClick("services")}
                className={`block w-full text-left text-lg tracking-[0.15em] uppercase font-medium transition-colors ${
                  isScrolled ? "text-[#2c2c2c] hover:text-[#8B4513]" : "text-white/90 hover:text-white"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => handleMobileNavClick("work")}
                className={`block w-full text-left text-lg tracking-[0.15em] uppercase font-medium transition-colors ${
                  isScrolled ? "text-[#2c2c2c] hover:text-[#8B4513]" : "text-white/90 hover:text-white"
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => handleMobileNavClick("contact")}
                className={`block w-full text-left text-lg tracking-[0.15em] uppercase font-medium transition-colors ${
                  isScrolled ? "text-[#2c2c2c] hover:text-[#8B4513]" : "text-white/90 hover:text-white"
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Forest Background */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6"
        style={{
          backgroundImage: "url('/images/forest-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Logo - Primary Focal Point with Fade In Animation */}
          <div
            className={`mb-12 transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Image
              src="/images/nvw-line-logo.png"
              alt="Northern Viking Woodworks - Line art logo with Viking helmet, crossed hammers, and NVW text"
              width={500}
              height={500}
              className="mx-auto opacity-90 drop-shadow-2xl"
              priority
            />
          </div>

          {/* Scroll Cue with Fade In Animation - Centered */}
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className={`group flex items-center justify-center gap-3 text-white/90 cursor-pointer mb-20 transition-all duration-1000 ease-out delay-300 hover:scale-105 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative px-8 py-4 border border-white/30 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-white/20">
                <div className="flex items-center gap-3">
                  <span className="text-sm tracking-[0.1em] uppercase font-semibold drop-shadow-md transition-all duration-300 group-hover:tracking-[0.15em]">
                    Meet Carl Smith
                  </span>
                  <ChevronDown className="w-4 h-4 transition-all duration-300 group-hover:translate-y-1 group-hover:scale-110 drop-shadow-md" />
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/60 transition-all duration-500 scale-110 group-hover:scale-100"></div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/0 to-amber-600/0 group-hover:from-amber-400/20 group-hover:to-amber-600/20 transition-all duration-500 blur-xl"></div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* About Carl Section - Editorial Style */}
      <section id="about" className="py-0">
        <div className="max-w-7xl mx-auto">
          {/* History & Craftsman Section */}
          <div className="grid lg:grid-cols-2 min-h-screen">
            {/* Left Content */}
            <div className="flex items-center justify-center p-12 lg:p-20 order-2 lg:order-1">
              <div className="max-w-lg">
                <div className="text-xs tracking-[0.3em] text-[#8B4513] uppercase font-semibold mb-8">
                  History & Craftsman
                </div>
                <div className="text-[#666] font-light leading-relaxed mb-8 space-y-4">
                  <p>
                    Carl Smith is a seasoned professional from Cheboygan, Michigan, recently retired after over 40 years in the Automotive Industry, specializing in Design, Engineering, and Manufacturing. With a lifelong passion for woodworking, Carl developed a plan to blend his industry knowledge with creative craftsmanship.
                  </p>
                  <p>
                    In 2022, he began his journey into CNC Woodworking, focusing on precision machining of wood and non-ferrous metals. In August 2024, Carl took delivery of a ONEFINITY Elite Foreman CNC machine, paired with Carveco Maker CAD software. Since then, he has designed and manufactured a range of prototypes that showcase his attention to detail and deep technical expertise.
                  </p>
                  <p>
                    Carl welcomes opportunities to collaborate with local artisans, such as Surgeon River Pottery, to support their prototyping or custom part needs. His workshop is open for reviews of past work and discussions about future projects.
                  </p>
                </div>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm tracking-[0.2em] text-[#666] hover:text-[#2c2c2c] transition-colors uppercase font-medium border-b border-[#e0e0e0] hover:border-[#2c2c2c] pb-1"
                >
                  More →
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative overflow-hidden order-1 lg:order-2">
              <div className="aspect-square lg:aspect-auto lg:h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center text-[#666]">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#8B4513]/10 rounded-full flex items-center justify-center">
                    <Settings className="w-10 h-10 text-[#8B4513]" />
                  </div>
                  <p className="text-lg font-light">Carl Smith</p>
                  <p className="text-sm text-[#999] mt-2">Master Craftsman Portrait</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CNC Capabilities Section */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-[#8B4513] uppercase font-semibold mb-8">CNC Capabilities</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#2c2c2c] mb-8 tracking-wide">
              Real Craftsmanship, Backed by Experience
            </h2>
            <p className="text-lg text-[#666] font-light max-w-3xl mx-auto">
              Small-shop CNC woodworking from a retired automotive engineer with 40+ years of hands-on design and manufacturing know-how.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#8B4513]/10 rounded-full flex items-center justify-center group-hover:bg-[#8B4513]/20 transition-colors">
                <Ruler className="w-10 h-10 text-[#8B4513]" />
              </div>
              <h3 className="font-serif text-xl font-light text-[#2c2c2c] mb-4">Clean, Accurate Cuts</h3>
              <p className="text-sm text-[#666] font-light leading-relaxed">
                Every project starts with careful setup and steady hands—delivering tight fits and smooth finishes with just the right touch.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#8B4513]/10 rounded-full flex items-center justify-center group-hover:bg-[#8B4513]/20 transition-colors">
                <Cog className="w-10 h-10 text-[#8B4513]" />
              </div>
              <h3 className="font-serif text-xl font-light text-[#2c2c2c] mb-4">Creative Carving & Detail Work</h3>
              <p className="text-sm text-[#666] font-light leading-relaxed">
                From simple outlines to more complex decorative features, Carl brings designs to life with patience and precision.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#8B4513]/10 rounded-full flex items-center justify-center group-hover:bg-[#8B4513]/20 transition-colors">
                <Zap className="w-10 h-10 text-[#8B4513]" />
              </div>
              <h3 className="font-serif text-xl font-light text-[#2c2c2c] mb-4">One-Offs & Prototypes</h3>
              <p className="text-sm text-[#666] font-light leading-relaxed">
                Need a custom part or a first-run prototype? Carl can help you shape your idea into something real—quickly and affordably.
              </p>
            </div>
          </div>

          {/* Featured Service Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/work.jpg"
              alt="Carl Smith's woodworking shop in Northern Michigan"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="font-serif text-3xl font-light mb-4">Custom CNC Solutions</h3>
                <p className="text-lg font-light opacity-90">Every project engineered to perfection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-[#8B4513] uppercase font-semibold mb-8">
              Featured Projects
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#2c2c2c] mb-8 tracking-wide">
              Precision Craftsmanship in Action
            </h2>
          </div>

          {/* Large Featured Project */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(0)}
            >
              <Image
                src="/images/b.jpg"
                alt="Bourbon Smoker - Featured Project"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-[#8B4513]/80 text-white px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                  Featured Build
                </span>
                <h3 className="font-serif text-2xl font-light">Bourbon Smoker</h3>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-3xl font-light text-[#2c2c2c] mb-6">Precision-Crafted Bourbon Smoker</h3>
              <p className="text-[#666] font-light leading-relaxed mb-6">
                This precision-machined CNC lid was created as a prototype for a custom bourbon smoker. Crafted from layered wood stock, it features engraved text, a recessed vent hole for smoke release, and a stylized crest. The piece was designed in Carveco and cut on a ONEFINITY CNC machine, showcasing clean detail and tight tolerance stacking.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#8B4513] rounded-full"></div>
                  <span className="text-sm text-[#666]">Engraved Bourbon Smoker branding</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#8B4513] rounded-full"></div>
                  <span className="text-sm text-[#666]">Crest design carved into surface</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#8B4513] rounded-full"></div>
                  <span className="text-sm text-[#666]">CNC-cut circular layering with smoke release port</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#8B4513] rounded-full"></div>
                  <span className="text-sm text-[#666]">Machined using ONEFINITY + Carveco CAD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWork.slice(1).map((work, index) => (
              <div key={index + 1} className="group cursor-pointer" onClick={() => openLightbox(index + 1)}>
                <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-sm mb-4">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/60 text-white px-2 py-1 rounded text-xs">{work.category}</span>
                  </div>
                </div>
                <h3 className="font-serif text-lg font-light text-[#2c2c2c] mb-2">{work.title}</h3>
                <p className="text-sm text-[#666] font-light leading-relaxed line-clamp-2">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process — From Concept to Cut */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-[#8B4513] uppercase font-semibold mb-8">Our Process</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#2c2c2c] mb-8 tracking-wide">
              From Concept to Cut
            </h2>
            <p className="text-lg text-[#666] font-light max-w-3xl mx-auto">
              Every project follows a systematic approach, from initial design to final delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-8 rounded-lg overflow-hidden shadow-md">
                <Image src="/images/design.jpg" alt="Initial design sketch for CNC project" fill className="object-cover" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2c2c2c] mb-2">Design & Planning</h3>
              <div className="text-sm text-[#8B4513] font-medium mb-4">Step 1</div>
              <p className="text-sm text-[#666] font-light leading-relaxed">
                Each project begins with a concept sketch or idea. Dimensions and layout are thoughtfully planned to match client needs.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-8 rounded-lg overflow-hidden shadow-md">
                <Image src="/images/cad.jpg" alt="Carveco CAD software interface for CNC toolpath setup" fill className="object-cover" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2c2c2c] mb-2">CAD Modeling & Toolpath Setup</h3>
              <div className="text-sm text-[#8B4513] font-medium mb-4">Step 2</div>
              <p className="text-sm text-[#666] font-light leading-relaxed">
                The design is imported into Carveco CAD software where Carl prepares it for cutting—refining every detail, depth, and path.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-8 rounded-lg overflow-hidden shadow-md">
                <Image src="/images/cnc.jpg" alt="ONEFINITY CNC machine in action cutting wood" fill className="object-cover" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2c2c2c] mb-2">Precision CNC Machining</h3>
              <div className="text-sm text-[#8B4513] font-medium mb-4">Step 3</div>
              <p className="text-sm text-[#666] font-light leading-relaxed">
                Using his ONEFINITY CNC machine, Carl machines each part from quality hardwood stock. Final pieces are cleaned, fit-checked, and finished by hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Project Gallery */}
      <section id="work" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#2c2c2c] mb-8 tracking-wide">
              Complete Portfolio
            </h2>
            <p className="text-lg text-[#666] font-light max-w-2xl mx-auto">
              Every project tells a story of precision, creativity, and masterful execution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWork.slice(0, 3).map((work, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => openLightbox(index)}>
                <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-sm mb-4">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-lg font-light text-[#2c2c2c] mb-2">{work.title}</h3>
                <p className="text-sm text-[#666] font-light leading-relaxed line-clamp-2">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects - Workshop Focus */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-[#8B4513] uppercase font-semibold mb-8">Workshop Updates</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-[#2c2c2c] mb-8 tracking-wide">
              Current Projects in Development
            </h2>
            <p className="text-lg text-[#666] font-light max-w-2xl mx-auto">
              A glimpse into the ongoing work at Northern Viking Woodworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#8B4513]/10 rounded-full flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-[#8B4513]" />
              </div>
              <h3 className="font-serif text-xl font-light text-[#2c2c2c] mb-4">Birds Beak Rain Gutter Support</h3>
              <p className="text-sm text-[#666] font-light leading-relaxed mb-4">
                Custom architectural water management elements designed for durability and precision fit.
              </p>
              <div className="text-xs text-[#8B4513] uppercase tracking-wide font-semibold">In Progress</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#8B4513]/10 rounded-full flex items-center justify-center mb-6">
                <Cog className="w-8 h-8 text-[#8B4513]" />
              </div>
              <h3 className="font-serif text-xl font-light text-[#2c2c2c] mb-4">Fish Mouth Gutter Brackets</h3>
              <p className="text-sm text-[#666] font-light leading-relaxed mb-4">
                Precision-engineered mounting solutions with complex geometries for optimal water flow.
              </p>
              <div className="text-xs text-[#8B4513] uppercase tracking-wide font-semibold">Design Phase</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#8B4513]/10 rounded-full flex items-center justify-center mb-6">
                <Hammer className="w-8 h-8 text-[#8B4513]" />
              </div>
              <h3 className="font-serif text-xl font-light text-[#2c2c2c] mb-4">Deck Furniture Seat Backs</h3>
              <p className="text-sm text-[#666] font-light leading-relaxed mb-4">
                Custom outdoor furniture components featuring weather-resistant design and ergonomic comfort.
              </p>
              <div className="text-xs text-[#8B4513] uppercase tracking-wide font-semibold">Prototyping</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Streamlined */}
      <section id="contact" className="py-24 px-6 bg-[#2c2c2c]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs tracking-[0.3em] text-amber-400 uppercase font-semibold mb-8">Start Your Project</div>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-white mb-8 tracking-wide">
            Ready to bring your vision to life?
          </h2>
          <p className="text-lg text-white/80 font-light mb-12 max-w-2xl mx-auto">
            From concept to completion, let's discuss how precision CNC craftsmanship can transform your ideas into
            reality.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-xs tracking-[0.2em] text-white/60 uppercase mb-2">Phone</div>
              <div className="text-xl text-white font-light">(231) 799‑5688</div>
            </div>
            <div className="text-center">
              <div className="text-xs tracking-[0.2em] text-white/60 uppercase mb-2">Email</div>
              <div className="text-xl text-white font-light">carl@cncwoodworking.com</div>
            </div>
            <div className="text-center">
              <div className="text-xs tracking-[0.2em] text-white/60 uppercase mb-2">Location</div>
              <div className="text-xl text-white font-light">Cheboygan, Michigan</div>
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Your name"
                  className="border-0 border-b border-white/20 rounded-none bg-transparent px-0 py-3 text-white focus:border-amber-400 focus:ring-0 placeholder:text-white/60"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="border-0 border-b border-white/20 rounded-none bg-transparent px-0 py-3 text-white focus:border-amber-400 focus:ring-0 placeholder:text-white/60"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={3}
                  className="border-0 border-b border-white/20 rounded-none bg-transparent px-0 py-3 resize-none text-white focus:border-amber-400 focus:ring-0 placeholder:text-white/60"
                />
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-none text-sm tracking-[0.1em] uppercase font-light">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs tracking-[0.3em] text-[#666] uppercase mb-4 font-light">
            Northern Viking Woodworks
          </div>
          <div className="text-sm text-[#666] font-light">© 2025 Carl Smith • Crafted in Northern Michigan</div>
        </div>
      </footer>
    </div>
  )
}
