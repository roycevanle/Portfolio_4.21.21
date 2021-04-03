import React from 'react';
import CardInfo from '../components/CardInfo';

function Card(props) {
    return (
        // the r-card & r-card-image is linked in class name to size the iamge in index.css
        <div className="d-inline-block r-card" onClick={(e) => props.click(props)}>
            <img className="r-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );
}

export default Card;