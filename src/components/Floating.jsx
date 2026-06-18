import { motion } from 'framer-motion'

export default function Floating({ children, className, ...rest }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -14, 0], rotate: [-2, 1.2, -2] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
