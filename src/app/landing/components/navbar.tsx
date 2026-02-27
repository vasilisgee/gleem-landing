"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Github, X, Moon, Sun, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { useTheme } from '@/hooks/use-theme'
import { MegaMenu, megaMenuSections } from '@/components/landing/mega-menu'

const navigationItems: Array<{ name: string; href: string; hasMegaMenu?: boolean }> = [
  { name: 'Home', href: '#hero' },
  // { name: 'How it works', href: '#how-it-works' },
  // { name: 'Why us', href: '#gleem-way' },
  { name: "Services", href: '#what-included', hasMegaMenu: true },
  { name: 'Pricing', href: '#pricing' },
  // { name: "What's included", href: '#features' },
  { name: 'Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
]

// Smooth scroll function
const smoothScrollTo = (targetId: string) => {
  if (targetId.startsWith('#')) {
    const element = document.querySelector<HTMLElement>(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link
            href="#hero"
            className="flex items-center space-x-2 cursor-pointer"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              smoothScrollTo("#hero")
            }}
          >
            <span
              className="font-extrabold font-display leading-tight text-3xl -mt-1"
              style={{ letterSpacing: "-0.02em" }}
            >
              gleem<span className="logo-dot-glow ml-1 text-3xl!">.</span>
            </span>
          </Link>
        </div>

        <NavigationMenu className="hidden xl:flex">
          <NavigationMenuList className="gap-1">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={`${item.href}-${index}`}>
                {item.hasMegaMenu ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent px-4 py-2 text-sm font-bold transition-colors hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent cursor-pointer">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <MegaMenu />
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-bold transition-colors hover:text-primary focus:text-primary focus:outline-none cursor-pointer"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      if (item.href.startsWith('#')) {
                        smoothScrollTo(item.href)
                      } else {
                        window.location.href = item.href
                      }
                    }}
                  >
                    {item.name}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden xl:flex items-center space-x-2">
          <ModeToggle variant="ghost" />
          <Button asChild className="cursor-pointer">
            <a
              href="#pricing"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                smoothScrollTo("#pricing")
              }}
            >
              Get Started
            </a>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] p-0 gap-0 [&>button]:hidden overflow-hidden flex flex-col">
            <div className="flex flex-col h-full">
              <SheetHeader className="space-y-0 p-4 pb-2 border-b">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Logo size={16} />
                  </div>
                  <SheetTitle className="text-lg font-semibold">ShadcnStore</SheetTitle>
                  <div className="ml-auto flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="cursor-pointer h-8 w-8"
                    >
                      <Moon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Sun className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="cursor-pointer h-8 w-8">
                      <a href="https://github.com/vasilisgee/gleem-landing" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="cursor-pointer h-8 w-8">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto">
                <nav className="p-6 space-y-1">
                  {navigationItems.map((item, index) => (
                    <div key={`${item.href}-${index}`}>
                      {item.hasMegaMenu ? (
                        <Collapsible open={megaMenuOpen} onOpenChange={setMegaMenuOpen}>
                          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                            {item.name}
                            <ChevronDown className={`h-4 w-4 transition-transform ${megaMenuOpen ? 'rotate-180' : ''}`} />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-4">
                            {megaMenuSections.map((section) => (
                              <div key={section.title} className="mb-4">
                                <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
                                  {section.title}
                                </div>
                                <div className="space-y-1">
                                  {section.items.map((menuItem) => (
                                    <a
                                      key={menuItem.title}
                                      href={menuItem.href}
                                      className="flex items-center px-4 py-2 text-sm rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                                      onClick={(e) => {
                                        setIsOpen(false)
                                        if (menuItem.href.startsWith('#')) {
                                          e.preventDefault()
                                          setTimeout(() => smoothScrollTo(menuItem.href), 100)
                                        }
                                      }}
                                    >
                                      {menuItem.title}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <a
                          href={item.href}
                          className="flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                          onClick={(e) => {
                            setIsOpen(false)
                            if (item.href.startsWith('#')) {
                              e.preventDefault()
                              setTimeout(() => smoothScrollTo(item.href), 100)
                            }
                          }}
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="border-t p-6 space-y-4">
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="lg" asChild className="cursor-pointer">
                      <Link href="/auth/sign-in">Sign In</Link>
                    </Button>
                    <Button asChild size="lg" className="cursor-pointer" >
                      <a
                        href="#pricing"
                        onClick={(e: React.MouseEvent) => {
                          e.preventDefault()
                          setIsOpen(false)
                          setTimeout(() => smoothScrollTo("#pricing"), 100)
                        }}
                      >
                        Get Started
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
