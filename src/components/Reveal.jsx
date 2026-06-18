import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const Reveal = forwardRef(function Reveal({ children, className, delay = 0, as = 'div', ...rest }, ref) {
  const Component = motion[as] || motion.div

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Component>
  )
})

export default Reveal
