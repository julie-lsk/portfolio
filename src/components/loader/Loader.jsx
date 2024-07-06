// Aide pour Loader : https://github.com/wrongakram/pageloader/blob/main/src/App.js + https://www.youtube.com/watch?v=BtsVMvds3P0&ab_channel=WrongAkram

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

import "./loader.scss";


const containerVariants = 
{
    // visible: {
    //     transition: {
    //         staggerChildren: 0.35,
    //     },
    // },


    hidden: {
        opacity: 0,
        y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: { 
        ease: "easeInOut",
        duration: 0.5 
        }
    }
};

const itemVariants = 
{
    hidden: {
        opacity: 0,
        y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      }
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 2,
    }
    }
};


function Loader({setLoading})
{
    return (
        <AnimatePresence>
        {/* // {setLoading && ( */}
        <motion.aside 
            className="body-loader"
            variants={itemVariants}
            onAnimationComplete={() => setLoading(false)}
            initial="hidden"
            animate="visible"
            exit="exit"
            >

            <motion.div className="container"/*  variants={itemVariants} */>
                
                <div className="h1-container">

                    <div className="cube h1 w1 l1">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h1 w1 l2">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h1 w1 l3">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h1 w2 l1">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h1 w2 l2">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h1 w2 l3">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h1 w3 l1">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h1 w3 l2">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h1 w3 l3">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                </div>

                <div className="h2Container">

                    <div className="cube h2 w1 l1">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h2 w1 l2">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h2 w1 l3">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h2 w2 l1">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h2 w2 l2">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h2 w2 l3">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h2 w3 l1">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h2 w3 l2">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h2 w3 l3">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                </div>

                <div className="h3Container">

                    <div className="cube h3 w1 l1">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h3 w1 l2">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h3 w1 l3">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h3 w2 l1">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h3 w2 l2">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h3 w2 l3">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h3 w3 l1">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h3 w3 l2">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                    <div className="cube h3 w3 l3">
                        <div className="face top"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                    </div>

                </div>
                
            </motion.div>
        </motion.aside>
        {/* )} */}
        </AnimatePresence>
    )
};

export default Loader;