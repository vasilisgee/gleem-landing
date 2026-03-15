import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiTiktokLogo 
} from "react-icons/pi"

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com", icon: PiFacebookLogo },
  { name: "Instagram", href: "https://www.instagram.com", icon: PiInstagramLogo },
  { name: "TikTok", href: "https://www.instagram.com", icon: PiTiktokLogo },
]

export function LandingFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-7">

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-muted-foreground text-xs">
            <div className="flex items-center gap-1">
              <span>© {new Date().getFullYear()} Gleem Project</span>
              <span className="hidden sm:inline mx-1">•</span>
              <span>Created by <a href="#" target='_blank' className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                Vasilis Gourgourinis</a></span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Illustrations by <a href="#" target='_blank' className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">OpenPeeps</a></span>
          </div>
          <div className="mt-4 flex items-center gap-1 md:mt-0">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors  hover:bg-muted/70 hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
