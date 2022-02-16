import React from "react";

const QuestComp = (props) => {
    const {h3Quest, pQuest} = props
    return (

        <div className="accordion">
            <div className="accordion-heading">
                <h3>{h3Quest}</h3>
                <i className="fas fa-angle-down"></i>
            </div>
            <p className="accordion-content">{pQuest}</p>
        </div>
    )
}
export default QuestComp;