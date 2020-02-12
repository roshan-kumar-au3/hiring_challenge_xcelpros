import React from 'react';
import { ReactComponent as Threedot } from '../../assests/Icon-awesome-ellipsis-v.svg';
import { ReactComponent as Star } from '../../assests/Icon-ionic-md-star-outline.svg';
import { ReactComponent as Phone } from '../../assests/Icon-feather-phone.svg';
import { ReactComponent as Group } from '../../assests/Group-11235.svg';
import './card.styles.scss';

export const Card = (props) => (
    <div className="card-container">
        <div className="icon-container">
            <Threedot className="threedot" />
            <Star className="star" />
        </div>
        <div style={{
            borderColor: props.user.color
        }} className="half-circle"></div>
        <img alt={props.user.name} src={props.user.imageUrl} />
        <h2><strong>{props.user.name}</strong></h2>
        <p>{props.user.role}</p>
        <div className="icon-container-one">
            <Group className="group" />
            <p>{props.user.email}</p>
        </div>
        <div className="icon-container-two">
            <Phone className="phone" />
            <p>{props.user.phone}</p>
        </div>
    </div>
)