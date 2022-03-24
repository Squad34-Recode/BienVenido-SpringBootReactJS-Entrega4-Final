import React from "react";
import { Link } from 'react-router-dom';

const TopDescriptionComp = (props) => {
    const {h3Top,descTop} = props
        return (
            <section className="heading-link">
                <h3>{h3Top}</h3>
                <p><Link to="index.html">Comienzo</Link> / {descTop}</p>
            </section>
        )
}
export default TopDescriptionComp;