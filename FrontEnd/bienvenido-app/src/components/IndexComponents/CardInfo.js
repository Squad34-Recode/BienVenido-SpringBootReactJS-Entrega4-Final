import React from "react";
import { Link } from 'react-router-dom';

const CardInfo = (props) => {
    const {pagBoots, imgSrc, imgAlt, textH3, textP} = props;
        return (
            <div className="box">
                <Link to={pagBoots}>
                    <img src={imgSrc} alt={imgAlt} />
                    <h3>{textH3}</h3>
                    <p>{textP}</p>
                </Link>
            </div>
        )
}


export default CardInfo;

/*
    pagBoots -> colocar o caminho para as paginas em bootstrap.
    imgSrc -> colocar o caminho para a imagem que ficará no card. == img src="".
    imgAlt -> texto alternativo para imagem.
    textH3 -> titulo do card.
    textP -> texto do paragrafo. 
*/