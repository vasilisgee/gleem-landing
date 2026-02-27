import * as React from "react"

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export function Logo({ size = 20, className, ...props }: LogoProps) {
  return (
    <img className="w-[20px]" src={"/logo-gleem.webp"}/>
  )
}
