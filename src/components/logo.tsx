import Image from "next/image"

interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 20, className }: LogoProps) {
  return (
    <Image
      src="/logo-gleem.webp"
      alt=""
      aria-hidden
      width={size}
      height={size}
      className={className}
    />
  )
}
