import React from "react";

import './card-list.styles.scss'
import { Card } from "../card/card.component";
import Adriana from "../../assests/Ellipse-33781.png";
import Jhon from "../../assests/Ellipse-33782.png";
import Jakie from "../../assests/Ellipse-33783.png";
import Sheriff from "../../assests/Ellipse-33784.png";
import Jennie from "../../assests/Ellipse-33785.png";
import Alexa from "../../assests/Ellipse-33786.png";
import Suman from "../../assests/Ellipse-33787.png";
import Zozo from "../../assests/Ellipse-33788.png";

class CardList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    id: "1",
                    name: "Adriana Pazos",
                    role: "Adminstrator",
                    phone: "+1 987 654 3210",
                    email: "adriana.pazos@gmail.com",
                    imageUrl: Adriana,
                    color: "lawngreen"
                },
                {
                    id: "2",
                    name: "Jhon Doe",
                    role: "Adminstrator",
                    phone: "+1 987 654 3210",
                    email: "adriana.pazos@gmail.com",
                    imageUrl: Jhon,
                    color: "skyblue"
                },
                {
                    id: "3",
                    name: "Jakie Pinto",
                    role: "Adminstrator",
                    phone: "+1 987 654 3210",
                    email: "adriana.pazos@gmail.com",
                    imageUrl: Jakie,
                    color: "#e33486"
                },
                {
                    id: "4",
                    name: "Sheriff Moman",
                    role: "Adminstrator",
                    phone: "+1 987 654 3210",
                    email: "adriana.pazos@gmail.com",
                    imageUrl: Sheriff,
                    color: "#31e066"
                },
                {
                    id: "5",
                    name: "Jennie K",
                    role: "Adminstrator",
                    phone: "+1 987 654 3210",
                    email: "adriana.pazos@gmail.com",
                    imageUrl: Jennie,
                    color: "#ed6f21"
                },
                {
                    id: "6",
                    name: "Alexa M",
                    role: "Adminstrator",
                    phone: "+1 987 654 3210",
                    email: "adriana.pazos@gmail.com",
                    imageUrl: Alexa,
                    color: "#a669f0"
                },
                {
                    id: "7",
                    name: "Suman Kumari",
                    role: "Adminstrator",
                    phone: "+1 987 654 3210",
                    email: "adriana.pazos@gmail.com",
                    imageUrl: Suman,
                    color: "skyblue"
                },
                {
                    id: "8",
                    name: "Zozo P",
                    role: "Adminstrator",
                    phone: "+1 987 654 3210",
                    email: "adriana.pazos@gmail.com",
                    imageUrl: Zozo,
                    color: "#ed6f21"
                }
            ]
        }
    }

    render() {
        return (
            <div className="card-list">
                {
                    this.state.users.map(user => (
                        <Card key={user.id} user={user} />
                    ))
                }
            </div>
        );
    }
}

export default CardList;