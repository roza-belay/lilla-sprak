import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'quiet'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  icon?: ReactNode
  variant?: ButtonVariant
}

const Button = ({
  label,
  icon,
  variant = 'primary',
  className = '',
  type = 'button',
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...buttonProps}
    >
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <span>{label}</span>
    </button>
  )
}

export default Button
