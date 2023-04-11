import React from 'react';
import "./ListItem.css";


const ListItem = (props) => {

    const {item, index, listItems, setListItems} = props;
    const [showDeleteButton, setShowDeleteButton] = React.useState(false);

    const removeListItem = (index) => {
        console.log(index)
        //const removedItem = listItems.splice(index, 1)
        //console.log(removedItem);

        setListItems([
            ...listItems.slice(0, index),
            ...listItems.slice(index + 1)
        ])
    }

        const handleMouseEnter = () => {
            console.log('test');

            setShowDeleteButton(true);

        }

        const handleMouseLeave = () => {
            console.log('test');

            setShowDeleteButton(false);

        }

    
    return(
        <>
        <li 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div value={index}>{item}</div>


            {
                showDeleteButton ?
                    <button onClick={
                        () => {
                            removeListItem(index)
                        }
                    }>
                        Delete
                    </button>
                : null
            }

            
        </li>
        </>
    )
        }
export default ListItem;