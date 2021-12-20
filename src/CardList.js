import React from 'react';
import Card from './Card';

const CardList = (props) => {
const CardComponent = props.robots.map((user, i) => {
    return (
    <Card id = {props.robots[i].id} 
    name = {props.robots[i].name} 
    mail = {props.robots[i].email} />
    );
})
  return(
    <div>
        {CardComponent}     
     </div>
    );    
}

export default CardList;