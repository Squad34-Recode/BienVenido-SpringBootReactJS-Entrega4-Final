import React from 'react';
import Container from 'react-bootstrap/Container'
import FloatingButton from '../components/generalComponents/FloatingButton';

import '../styles/pagesBootstrap.css'

const Cultura = () => {
    return (
        <Container className='container-reactBootstrap' fluid="md">
            <div>
                <h1 className="title-reactBootstrap">Cultura Brasileña</h1>
            </div>
            <FloatingButton />

            <p>La diversidad cultural se refiere a las diferentes costumbres de una sociedad,
                entre las que podemos mencionar: vestimenta, gastronomía, manifestaciones religiosas, tradiciones,
                entre otros aspectos. Brasil, por contener un territorio extenso, presenta diferencias climáticas,
                económicas, sociales y culturales entre sus regiones.
            </p>

            <p>
                Los principales divulgadores de la cultura brasileña son los colonizadores europeos,
                la población indígena y los esclavos africanos. Posteriormente, inmigrantes italianos, japoneses,
                alemanes, polacos, árabes, entre otros, contribuyeron a la pluralidad cultural de Brasil.
            </p>
            <p>En este contexto, se abordarán algunos aspectos culturales de las regiones brasileñas.</p>

            <p className="subtitle-reactBootstrap"><b> Región nordeste </b></p>

            <p>Entre las manifestaciones culturales de la región se encuentran bailes y fiestas como bumba meu boi, maracatu,
                caboclinhos, carnaval, ciranda, coco, traje de zabumba, marujada, reisado, frevo, cavalhada y capoeira.
                Algunas manifestaciones religiosas son la fiesta de Iemanjá y el lavado de la escalera Bonfim.
                La literatura de Cordel es otro elemento fuerte de la cultura del noreste. Las artesanías están representadas
                por trabajos de encaje. Los platos típicos son: carne de sol, pescado, mariscos, buchada de chivo, sarapatel,
                acarajé, vatapá, cururu, judías verdes, maíz, arroz con leche, torta de harina de maíz cocida,
                torta de hojaldre de yuca, broa de maíz verde, papilla, caramelo de coco, tapioca, maní, entre muchos otros.
            </p>
            <figure>
                <img className='imagem-reactBootstrap' src="https://s2.glbimg.com/2Bna1VZSYZeqHrs35ZbdNgk0BsA=/0x0:1128x752/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/g/b/fbjEjiT0iZ6KhpbvX1ig/479539333-joi-9744-6715257-resized.jpg" alt="Fiesta de bonfim" />
                <figcaption className="figure-caption">Fiesta de Nuestro Señor de Bonfim, Salvador, Bahía.</figcaption>
            </figure>

            <p className="subtitle-reactBootstrap"><b> Región del norte </b></p>
            <p>La cantidad de eventos culturales en el Norte es inmensa. Las dos fiestas populares más importantes del Norte son el Círio
                de Nazaré, en Belém (PA); y la Fiesta de Parintins, la fiesta del boi-bumbá más conocida del país, que se realiza en junio
                en la Amazonía. Otros elementos culturales de la región Norte son: el carimbó, el congo o congada, la folia de reis y la
                fiesta de lo divino.<br />
                La influencia indígena es muy fuerte en la cocina norteña, basada en la yuca y el pescado. Otras comidas típicas de los
                norteños son: carne seca al sol, tucupi (caldo de yuca hervida), tacacá (especie de sopa caliente hecha con tucupi),
                jambu (una especie de hierba), camarones secos y ají dulce.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://www.passagenspromo.com.br/blog/wp-content/uploads/2021/03/festival-de-parintins.jpg" alt="festival de Parintins" />
                <figcaption className="figure-caption">Festival de Parintins (AM)</figcaption>
            </figure>

            <p className="subtitle-reactBootstrap"><b> Región Centro oeste </b></p>
            <p>A cultura do Centro-Oeste brasileiro é bem diversificada, recebendo contribuições principalmente dos indígenas, paulistas,
                mineiros, gaúchos, bolivianos e paraguaios. São manifestações culturais típicas da região: a cavalhada e o fogaréu,
                no estado de Goiás; e o cururu, em Mato Grosso e Mato Grosso do Sul. A culinária regional é composta por arroz com pequi,
                sopa paraguaia, arroz carreteiro, arroz boliviano, maria-isabel, empadão goiano, pamonha, angu, cural,
                os peixes do Pantanal - como o pintado, pacu, dourado, entre outros.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://images2.nogueirense.com.br/wp-content/uploads/2014/06/Brasilia-Arroz-de-pequi.jpg" alt="arroz com pequi" />
                <figcaption className="figure-caption">Arroz con pequi</figcaption>
            </figure>

            <p className="subtitle-reactBootstrap"><b> Región Sudeste </b></p>
            <p>A cultura do Centro-Oeste brasileiro é bem diversificada, recebendo contribuições principalmente dos indígenas, paulistas,
                mineiros, gaúchos, bolivianos e paraguaios. São manifestações culturais típicas da região: a cavalhada e o fogaréu,
                no estado de Goiás; e o cururu, em Mato Grosso e Mato Grosso do Sul. A culinária regional é composta por arroz com pequi,
                sopa paraguaia, arroz carreteiro, arroz boliviano, maria-isabel, empadão goiano, pamonha, angu, cural,
                os peixes do Pantanal - como o pintado, pacu, dourado, entre outros.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://www.perdigao.com.br/assets/_images/dfde825c2a3a60638b991ced403ebab9a343bbee.png" alt="feijoada" />
                <figcaption className="figure-caption">Feijoada</figcaption>
            </figure>

            <p className="subtitle-reactBootstrap"><b> Región Sul  </b></p>
            <p>El Sur presenta aspectos culturales de inmigrantes portugueses, españoles y, principalmente,
                alemanes e italianos. Las fiestas típicas son: la Festa da Uva (italiana) y la Oktoberfest (alemana).
                También forman parte de la cultura sureña: el fandango de influencia portuguesa, el tirano
                y el año de origen español, la fiesta de Nossa Senhora dos Navegantes, la congada, el boi-de-mamão,
                el baile de cintas, boi na vara. En la cocina están presentes: asado, mate, camarones,
                papilla de pescado, ánade real asado, barreado (guiso de carne en cazuela de barro), vino.
            </p>

            <figure>
                <img className='imagem-reactBootstrap' src="https://files.nsctotal.com.br/s3fs-public/graphql-upload-files/oktoberfest%20munique.jpg?bCOxd6o6J00saLJ7Xfv76AI.fmZDovsz" alt="oktoberfest" />
                <figcaption className="figure-caption">Oktoberfest</figcaption>
            </figure>

        </Container >
    )
}
export default Cultura;