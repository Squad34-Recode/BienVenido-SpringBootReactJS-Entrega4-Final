import React,{useState} from "react";
import {Data} from './Data' ;
import {FiPlus,FiMinus} from "react-icons/fi";
//import Dropdown from 'react-bootstrap/Dropdown'
//import DropdownButton from 'react-bootstrap/DropdownButton'

//const QuestComp = (props) => {

   // const { h3Quest, pQuest } = props;
const QuestComp =()=>{



const [clicked,setClicked] = useState(false)

const toggle = index =>{
if(clicked === index) {
return setClicked(null);
}
setClicked(index);
};

    return (
        <>
            <section class="faq">
                <h1 class="heading">preguntas frecuentes</h1>

                <div class="accordion-container" >
                {Data.map((item,index) => {
                            return(
                                <>
                    <div class="accordion active" >
                        <div class="accordion-heading" onClick={() => toggle(index)} key={index}>
                            <h3>{item.question}</h3>
                            <span>{clicked === index ? <FiMinus/> : <FiPlus />}</span>
                        </div>
                        {clicked === index ? (
                        <div class="accordion-content">
                        <p class="accordion-content"> {item.answer} </p>
                        </div>
                            ) : null}
                            </div>

                            </>
                        );
    })}
           
                                 
                </div>
            </section>
        </>
    )
}
export default QuestComp;

