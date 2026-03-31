import { CookieSettingsButton } from "@/components/cookie-settings-button"
import {
  PiGithubLogoBold, PiCookieBold  
} from "react-icons/pi"

export function LandingFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2 justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-muted-foreground text-xs">
             <span>© {new Date().getFullYear()} Gleem Project</span>
              <span className="hidden sm:inline mx-1">•</span>
              <span>Created by <a href="#" target='_blank' className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                Vasilis Gourgourinis</a></span>
            <span className="hidden sm:inline">•</span>

            <div className="flex flex-row items-center justify-center gap-1.5">
            <span className="inline-flex justify-center items-center">
              <a href="https://github.com/vasilisgee" target='_blank' className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer inline-flex "><PiGithubLogoBold className="inline size-4 mr-1"/> Github </a>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex justify-center items-center">
              <PiCookieBold  className="inline size-4 text-white mr-1"/>
              <CookieSettingsButton className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer" />
            </span>
</div>

          </div>
        </div>
      </div>
    </footer>
  )
}
