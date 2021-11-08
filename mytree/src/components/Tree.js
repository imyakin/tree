import React, { useState } from "react";
import Modal from "./Modal/Modal";
import ModalChange from "./ModalChange/ModalChange";
import TreeItem from "./TreeItem";


const Tree = ({items}) => {
    let allitems;
    localStorage.hasOwnProperty('items') && localStorage.getItem('items').length > 0 ?
    allitems = JSON.parse(localStorage.getItem('items'))
    : allitems = items

    const [elements, setElements] = useState(allitems)
    const [modal, setModal] = useState(false)
    const [modalChange, setModalChange] = useState(false)
    const [newElement, setNewElement] = useState('')
    const [currentIndex, setIndex] = useState(null)
    
    const handleChangeInput = (event) => {
        setNewElement(event.target.value)
    }
    
    const removeItem = (node) => {
        let index = elements.indexOf(node)
        let newElements = [...elements]
        newElements.splice(index, 1)
        // localStorage.setItem('items', JSON.stringify(newElements))
        setElements(newElements)
    }

    const addItem = () => {
        let allElements =[...elements]
        const newItem = {
            title: newElement,
            id: Date.now().toString()
        }
        allElements.splice(currentIndex, 0, newItem)
        // localStorage.setItem('items', JSON.stringify(allElements))
        setElements(allElements)
        setModal(false)
        setNewElement('')
    }

    const changeItem = () => {
        let allElements = [...elements]
        allElements[currentIndex].title = newElement
        // localStorage.setItem('items', JSON.stringify(allElements))
        setElements(allElements)
        setModalChange(false)
    }

    const openModal = (node) => {
        setModal(true)
        let index = elements.indexOf(node)
        setIndex(index)
    }

    const openModalChange = (node) => {
        setModalChange(true)
        let index = elements.indexOf(node)
        setIndex(index)
    }

    return (
    <>   
        {modalChange ? 
           <ModalChange
            closeModal={()=>setModalChange(false)}
            value={newElement}
            handleChange={handleChangeInput}
            changeItem={changeItem}
            /> 
        : null}
        {modal ? 
           <Modal
            closeModal={()=>setModal(false)}
            value={newElement}
            handleChange={handleChangeInput}
            addItem={addItem}
            /> 
        : null}
        <ul>
            {elements.map(node => {
                    return (
                    <TreeItem 
                        key={node.id} 
                        title={node.title}
                        remove={()=>removeItem(node)}
                        openModal={()=>openModal(node)}
                        openModalChange={()=>openModalChange(node)}
                    >
                        {node.children && 
                            <Tree items={node.children}/>
                        }
                    </TreeItem>)
            })}
        </ul>
    </>)
}

export default Tree


