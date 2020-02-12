import React from "react";
// import { Link } from "react-router-dom";
import { ReactComponent as Rectangle } from '../../assests/rectangle.svg';
import { ReactComponent as Homepage } from '../../assests/home-page.svg';
import { ReactComponent as Edit } from '../../assests/edit.svg';
import { ReactComponent as Timetable } from '../../assests/timetable.svg';
import { ReactComponent as Fever } from '../../assests/fever.svg';
import { ReactComponent as Info } from '../../assests/information.svg';
import { ReactComponent as University } from '../../assests/university.svg';
import { ReactComponent as Rest } from '../../assests/restaurant.svg';

import "./sidebar.styles.scss";

const Sidebar = props => {

    return (
            <div className="sidenav">
                <a href="/"><Rectangle className="brand" /></a>
                <a href="/"><Homepage className="sidenav-logo"/></a>
                <a href="/"><Edit className="sidenav-logo" /></a>
                <a href="/"><Timetable className="sidenav-logo"/></a>
                <a href="/"><Fever className="sidenav-logo"/></a>
                <a href="/"><Info className="sidenav-logo"/></a>
                <a href="/"><University className="sidenav-logo" /></a>
                <a href="/"><Rest className="sidenav-logo" /></a>
            </div>
    );
};

export default Sidebar;
