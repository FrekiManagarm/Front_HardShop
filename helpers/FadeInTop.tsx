"use client"
import { useAnimation, motion } from "framer-motion";
import { useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export const FadeInTop = ({fromBottom = false, children, delay = 0}: { fromBottom: boolean, children: ReactNode, delay: number }) => {
    const squareVariants = {
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: fromBottom ? 0 : 100},
    }

    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
       if (inView) {
        controls.start('visible')
       } else {
        controls.start('hidden')
       }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            variants={squareVariants}
            initial="hidden"
            exit="hidden"
            transition={{ duration: 0.4, delay: delay }}
        >
            {children}
        </motion.div>
    )
}