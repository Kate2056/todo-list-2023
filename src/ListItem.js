import React from 'react';
import "./ListItem.css";


const ListItem = (props) => {

    const {item, index, listItems, setListItems} = props
    const removeListItem = (index) => {
        console.log(index)
        //const removedItem = listItems.splice(index, 1)
        //console.log(removedItem);

        setListItems([
            ...listItems.slice(0, index),
            ...listItems.slice(index + 1)
        ])


    }

    return(
        <>
        <li>
            <div value={index}>{item}</div>
            <button onClick={
                () => {
                    removeListItem(index)
                }
            }>Delete</button>
        </li>
        </>
    )
}
export default ListItem;