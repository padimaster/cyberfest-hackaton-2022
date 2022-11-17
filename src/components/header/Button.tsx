import React from 'react'

interface ButtonProps {
  children?: JSX.Element
  variant?: ButtonVariants
}

const commonStyles = `px-6 py-2 border font-medium rounded-full transition-all
  hover:border-green-400/90 hover:text-green-400/90`

export enum ButtonVariants {
  primary = 'primary',
  active = 'active',
}

export default function Button ({ children, variant = ButtonVariants.active }: ButtonProps): JSX.Element {
  const variants = {
    [ButtonVariants.primary]: `${commonStyles} border-[#000B20] text-white`,
    [ButtonVariants.active]: `${commonStyles} border-green-400/90 text-green-400/90`
  }

  return (
    <button className={variants[variant]}>
      {children}
    </button>
  )
}
