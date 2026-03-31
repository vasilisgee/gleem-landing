import { CookieSettingsButton } from "@/components/cookie-settings-button"
import {
  PiGithubLogoBold  
} from "react-icons/pi"

export function LandingFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2 justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-muted-foreground text-xs">
             <span>© {new Date().getFullYear()} Gleem</span>
              <span className="hidden sm:inline mx-1">•</span>
              <span>Created by <a href="#" target='_blank' className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                Vasilis Gourgourinis</a></span>
            <span className="hidden sm:inline">•</span>
            <span>Illustrations by <a href="https://www.openpeeps.com/" rel="nofollow" target='_blank' className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">OpenPeeps</a></span>
            <span className="hidden sm:inline">•</span>
            <span>View project on <a href="https://github.com/vasilisgee" target='_blank' className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer inline-flex ">Github <PiGithubLogoBold className="inline size-4 ml-1"/></a></span>
            <span className="hidden sm:inline">•</span>
            <CookieSettingsButton className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
