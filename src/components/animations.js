// container: للعناصر اللي جواها كذا item
export const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

// item: أنيميشن أساسي (Fade + Up)
export const fadeUp = {
    hidden: {opacity: 0, y: 50, filter: "blur(6px)",},
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6, ease: "easeOut",},
    },
};

// من الشمال
export const fadeLeft = {
    hidden: { opacity: 0, x: -50, filter: "blur(6px)", },
    visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

// من اليمين
export const fadeRight = {
    hidden: { opacity: 0, x: 50, filter: "blur(6px)", },
    visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

// من الاسفل
export const fadeDown = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};
