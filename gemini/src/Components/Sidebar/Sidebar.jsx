import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBars, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion, faClockRotateLeft, faGear } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"

const Sidebar = () => {

    const [extended, setExtended] = useState(false);




    return (
        <motion.div animate={{ width: extended ? 300 : null }} className='sidebar'>
            <div className="top">
                <FontAwesomeIcon icon={faBars} onClick={() => setExtended(prev => !prev)} className='font-icon menu' />
                <div className="new-chat">
                    <FontAwesomeIcon icon={faPlus} className='font-icon' />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended
                    ? <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className='recent-entry'>
                            <FontAwesomeIcon icon={faMessage} />
                            <p>What is react ...</p>
                        </div>
                    </div>
                    : null
                }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <FontAwesomeIcon icon={faCircleQuestion} className='font-icon' />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <FontAwesomeIcon icon={faClockRotateLeft} className='font-icon' />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <FontAwesomeIcon icon={faGear} className='font-icon' />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar