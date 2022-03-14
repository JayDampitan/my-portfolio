
// -----Logo animations
export const logo1Variants = {
    hidden: {
        x: -200
    },
    visible: {
        x: 0,
        transition: {
            stiffness: 50,
            duration: 1
        }
    }
};

export const logo2Variants = {
    hidden: {
        y: -150
    },
    visible: {
        y: 0,
        transition: {
            stiffness: 50,
            duration: 1
        }
    }
};

// -----Links Animation


export const linkVariants = {
    hidden: {
        opacity: 0  
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2,      
        }
    },
    hover: {
        scale: 1.2,
        textShadow: '0px 0px 8px rgb(255, 255, 255)',
    }
}