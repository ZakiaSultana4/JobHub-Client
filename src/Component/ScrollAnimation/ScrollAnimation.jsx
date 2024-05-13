import { motion, useInView, useAnimation } from "framer-motion"
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const ScrollAnimation = ({children, className}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView,mainControls,slideControls]);

    return (
        <div ref={ref} className={`relative overflow-hidden`}>
            <motion.div
            className={className}
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial= "hidden"
            animate= {mainControls}
            transition={{duration: 0.5, delay: 0.25}}
            >
                {children}
            </motion.div>
            <motion.div
            variants={{
                hidden: {left: 0},
                visible: {left: "100%"}
            }}
            initial= "hidden"
            animate= {slideControls}
            transition={{duration: 0.5, ease: "easeIn"}}
            style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: "#00a8ff",
                zIndex: 100
            }}
            >
            
            </motion.div>
        </div>
    );
};

export default ScrollAnimation;

ScrollAnimation.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}