import React, { useState, useEffect } from "react";


const TreeItem = (props) => {
    const [showIcons, setIcons] = useState(false)
    const showMenu = () => {
        setIcons(true)
        setTimeout(()=>{
            setIcons(false)
        }, 5000)
    }

    useEffect(()=>{
        return setTimeout(()=>{
            setIcons(false)
        }, 5000)
    })
    return (
            <li>
                {showIcons &&
                <>
                <i className="fas fa-plus me-2"
                    onClick={props.openModal}></i>
                <i className="far fa-edit me-2"
                    onClick={props.openModalChange}></i>
                <i className="far fa-trash-alt me-2" 
                    onClick={props.remove}></i>
                </>
                }
                <span onClick={showMenu}>{props.title}</span>
                {props.children}
            </li>
    )
}

export default TreeItem