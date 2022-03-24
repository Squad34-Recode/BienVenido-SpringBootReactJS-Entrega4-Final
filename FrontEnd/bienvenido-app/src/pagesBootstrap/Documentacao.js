import React from 'react';
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import FloatingButton from '../components/generalComponents/FloatingButton';

import '../styles/pagesBootstrap.css'

const Documentacao = () => {

    return (
        <Container className='container-reactBootstrap' fluid='md'>
            <FloatingButton />
            <h1>Documentación</h1>
            <p>
                Los refugiados reconocidos en Brasil tienen derecho a obtener la Tarjeta de Identificación de Extranjeros (CIE
                / RNE), un permiso de trabajo definitivo (CTPS), un Número de Identificación Fiscal Individual (CPF) y un
                documento de viaje.

                Los solicitantes de asilo tienen derecho a obtener el Protocolo Provisional válido por un año y renovable por
                el mismo período, un permiso de trabajo temporal <b>(CTPS)</b>, así como un <b>Número de Identificación Fiscal
                    Individual (CPF)</b>.
            </p>

            <p className="subtitle-reactBootstrap"><b>CPF</b></p>
            <p>
                La Hacienda Federal de Brasil (Receita Federal) garantiza la emisión de CPF para personas refugiadas y
                inmigrantes indocumentadas (Nota Cogea nº 02, 20 de janeiro de 2021).

                Para solicitar el CPF, acceda este <a href="https://servicos.receita.fazenda.gov.br/Servicos/CPF/InscricaoCpfEstrangeiro/default.asp" target='_blank'>enlace</a>.
            </p>
            <p className="subtitle-reactBootstrap"><b>Salud</b></p>
            <p>
                La atención integral de la salud en Brasil se realiza independientemente de la presentación de documentos y el
                estado migratorio. Esto es lo que autoriza la Constitución Federal (art. 5, caput), la Ley de Migración (art.
                4, VIII) y la Ley 8.742 / 1993 (art. 19, p. Único).
                Por lo tanto, toda la red del SUS (hospitales, UPA, UBS, etc.) es accesible para las personas refugiadas y
                inmigrantes indocumentadas, quienes incluso tienen derecho a ser vacunadas gratuitamente contra COVID-19 en
                Brasil.
            </p>
            <p className="subtitle-reactBootstrap"><b>Educación</b></p>
            <p>
                También se garantiza el acceso a la educación pública a las personas refugiadas o inmigrantes
                independientemente
                de la regularidad de la condición migratoria, según la <a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13445.htm" target='_blank'>Ley 13.445 / 2017</a> (art. 4, X).
                La <a href="https://www.in.gov.br/en/web/dou/-/resolucao-n-1-de-13-de-novembro-de-2020-288317152" target='_blank'>Resolución nº 1/2020</a> del Consejo Nacional de la Educación también garantiza que la falta de documentos no
                puede impedir el derecho de inscripción de los niños, niñas y adolescentes refugiados y migrantes en las redes
                públicas de educación básica en Brasil.
            </p>
            <p className="subtitle-reactBootstrap"><b>Beneficio2 socio-assistenciales</b></p>
            <p>
                La <a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13445.htm" target='_blank'>Ley de Migración</a> garantiza el acceso a los servicios de asistencia social a las personas refugiadas o
                inmigrantes independientemente de su condición migratoria (art. 4, VIII). El Supremo Tribunal Federal ya ha
                dictaminado <a href="https://redir.stf.jus.br/paginadorpub/paginador.jsp?docTP=TP&docID=13649377" target='_blank'>(decisión en RE 587970)</a> que los inmigrantes son beneficiarios de los programas de asistencia social del país.
            </p>
            <p>
                Además de la decisión del STF, la Defensoría Pública ya aclaró que el derecho a la asistencia social está
                garantizado a todos las personas que residen en Brasil, independientemente de su situación migratoria regular
                o irregular <a href="https://help.unhcr.org/wp-content/uploads/sites/8/2020/04/27122322/oficio-circular-DPU-pagamento-de-auxilio-emergencial-a-imigrantes.pdf" target='_blank'>(Ofício Circular nº 3578466/2020, abril/2020).</a>
            </p>

            <p>
                Así, siempre y cuando cumplimente las reglas específicas para la obtención de beneficios, como “bolsa família”
                o “auxilio emergencial”, el inmigrante indocumentado podrá solicitarlos, registrándose en CadÚnico através de
                CPF. Acuerdate que para retirar el beneficio depende de tener una cuenta bancaria.
            </p>
            <p className="subtitle-reactBootstrap"><b>Banco</b></p>
            <p>
                Para abrir una cuenta bancaria en Brasil, la persona refugiada o inmigrante sin documentos emitidos en el país
                puede presentar otro documento de identificación reconocido, como el pasaporte o cédula de identidad del país
                de origen <a href="https://www.in.gov.br/en/web/dou/-/instrucao-normativa-bcb-n-2-de-3-de-agosto-de-2020-271232627" target='_blank'>(Instrucción Normativa BCB nº 2, de 3 de agosto de 2020)</a>.
            </p>
            <p>
                Cada banco, sin embargo, realiza una evaluación de seguridad interna para aceptar un documento extranjero. En
                este sentido, la Defensoría Pública da União (DPU) ya recomendó a las instituciones bancarias que los
                documentos de identificación de los países de origen, como pasaportes, cédulas de identidad o cédulas
                consulares son documentos capaces de acreditar la identidad civil de las personas refugiadas y inmigrantes,
                independientemente de su situación migratoria. Si hay una negativa, se puede buscar ayuda.
            </p>
            <p>
                Además, las cuentas con un límite bajo en el monto depositado (hasta R$ 5.000,00) se pueden abrir por teléfono
                celular y ingresar algunos datos como nombre y CPF ( <a href="https://brazil.iom.int/pt-br/news/terceira-edicao-da-cartilha-de-informacoes-financeiras-para-migrantes-e-refugiados-e-lancada" target='_blank'>la Cartilla de Información Financiera para Migrantes y Refugiados</a>). También es garantizado que las personas refugiadas o inmigrantes indocumentadas abran una cuenta de ahorro social digital, que no requiere la presentación de documentos (<a href="https://www.in.gov.br/en/web/dou/-/decreto-n-10.316-de-7-de-abril-de-2020-251562799" target='_blank'>Decreto nº 10.316 / 2020 – art. 11, p. 1, I</a>).
            </p>
            <p className="subtitle-reactBootstrap"><b>Protocolo Provisional</b></p>
            <p>
                Toda persona solicitante de refugio recibirá un Protocolo Provisional, válido por 1 año y renovable hasta la
                decisión final del CONARE sobre su pedido de refugio. Este protocolo será su documento de identidad en Brasil.
                Él sirve de prueba de su situación migratoria regular y de que usted está protegido y no puede ser devuelto
                para un país donde su vida esté en riesgo. Con este protocolo usted tendrá derecho a cartera de trabajo
                (CTPS), registro de persona física (CPF) y derecho a acceder a todos los servicios públicos disponibles en
                Brasil. De acuerdo con la ley brasileña, el Protocolo es un documento válido en todo el territorio nacional y
                demuestra que usted tiene derecho legal a estar en Brasil.
            </p>
            <p>
                A pesar de que se trata de un documento oficial, a veces puede ser un desafío para los brasileños reconocer
                esto como un documento válido, ya que el Protocolo Provisional es muy diferente de otros documentos existentes
                en Brasil. Si tiene algún problema para acceder a servicios y derechos con este documento, póngase en contacto
                con la Oficina del Defensor Público Federal (DPU) o con las organizaciones asociadas del ACNUR.
            </p>
            <p>
                Para que el protocolo provisional siga siendo válido y pueda usted seguir trabajando de manera regular, es
                necesario renovarlo en la Policía Federal a cada 1 año. Los solicitantes que no renovaren el protocolo en el
                plazo antes mencionado están sujetos al archivo de su solicitud de asilo. Haga atención a la fecha de
                renovación anotada en su protocolo, y comparezca en la Policía Federal antes de la fecha de vencimiento.
            </p>
            <p className="subtitle-reactBootstrap"><b>Carteira de Registro Nacional Migratório (Cartera de Registro Nacional Migratorio — el antiguo Registro Nacional de Extranjeros - RNE)</b></p>
            <p>
                Los solicitantes de asilo que hayan tenido su condición de refugiados reconocidos por Brasil tienen derecho a
                obtener la Tarjeta Nacional de Registro Migratorio (antiguo Registro Nacional de Extranjeros – RNE), el
                documento de identidad de los migrantes en Brasil. La emisión y renovación de la Cartera / RNE se realiza en
                cualquier unidad de la Policía Federal. Preste atención a la fecha de vencimiento de su Cartera / RNE. La
                renovación de la Cartera / RNE debe realizarse tres meses antes del vencimiento del documento antiguo.
            </p>
            <p>
                Por razones de confidencialidad, el documento que usted tiene como refugiado no menciona su estatus migratorio
                como “refugiado”, sino que utiliza la categoría de “residente” según la <a href="https://brazil.iom.int/pt-br/news/terceira-edicao-da-cartilha-de-informacoes-financeiras-para-migrantes-e-refugiados-e-lancada" target='_blank'>Ley de Refugiados de Brasil. (9747/1997)</a>.
            </p>
            <ListGroup as="ul" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li">Para emitir el CRNM, consulte los procedimientos <a
                    href="https://help.unhcr.org/brazil/es/solicitando-la-condicion-de-refugiado-residente-o-la-naturalizacion/como-solicitar-mi-crnm-tarjeta-nacional-de-registro-de-migraciones/" target='_blank'>
                    aquí</a>.
                </ListGroup.Item>
                <ListGroup.Item as="li">Para la renovación de CRNM, consulte los procedimientos <a
                    href="https://help.unhcr.org/brazil/es/solicitando-la-condicion-de-refugiado-residente-o-la-naturalizacion/como-renovar-mi-crnm-tarjeta-nacional-de-registro-de-migraciones/" target='_blank'> aquí</a>.
                </ListGroup.Item>
            </ListGroup>
            <p className="subtitle-reactBootstrap"><b>Certidão de Confirmação da Condição de Refugiado (Certificado de confirmación de condición de refugiado)</b></p>
            <p>Si necesita un certificado emitido por CONARE que confirme su condición de refugiado, debe seguir el
                siguiente paso a paso:</p>
            <p> <b>Paso 1 -&gt; </b>Regístrese como usuario de SEI de acuerdo con las instrucciones del manual disponibles en el
                enlace. </p>
            <p> <b>Paso 2 -&gt; </b> Después de obtener acceso a SEI, inicie sesión con su nombre de usuario y contraseña. </p>
            <p> <b>Paso 3 -&gt; </b>En el lado izquierdo, en “petição”, elija la opción “processo novo”. </p>
            <p> <b>Paso 4 -&gt; </b>En la lista “escolha o tipo do processo que deseja iniciar”, seleccione “Refúgio: Solicitação
                de Certidão de Refugiado”. </p>
            <p> <b>Paso 5 -&gt; </b> En la especificación, coloque “solicitação de certidão”. </p>
            <p> <b>Paso 6 -&gt; </b> En “documentos”, habrá una línea con “documento principal”. Haga clic en “Solicitação de
                Certidão Confirmatória de Refugiado”. </p>
            <p> <b>Paso 7 -&gt; </b> se abrirá el formulario de solicitud de certificado. Complete los campos obligatorios:</p>
            <ListGroup as="ul" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li">Compruebe si es un refugiado o si es un solicitante.
                </ListGroup.Item>
                <ListGroup.Item as="li">El número RNE / RNM solo es obligatorio para los refugiados.
                </ListGroup.Item>
                <ListGroup.Item as="li">El número de Protocolo de refugio es obligatorio para los solicitantes.
                </ListGroup.Item>
            </ListGroup>
            <p> <b>Paso 8 -&gt; </b>Haga clic en el botón “salvar”, que se encuentra en la esquina superior izquierda del
                formulario, y luego cierre la pantalla del formulario. </p>
            <p> <b>Paso 9 -&gt; </b>En “documentos complementares”, agregue una copia / foto DELANTERO Y REVERSO de su RNE o CNRM
                (para refugiados); o copia / foto de su Protocolo de Refugio. En “tipo de documento”, puede seleccionar esta
                opción. </p>
            <p> <b>Paso 10 -&gt; </b> En “formato”, elija “digitalizado” y haga clic en “adicionar”</p>
            <p> <b>Paso 11 -&gt; </b> En “interessado”, incluya su propio nombre. </p>
            <p> <b>Paso 12 -&gt; </b> Luego haz clic en “peticionar”. </p>
            <p>Luego de este registro, su registro será analizado por la Coordinación General de Conare y el certificado
                será enviado dentro de los 15 días hábiles, si los documentos solicitados han sido enviados correctamente. Si
                falta algún documento, se le informará que se requerirá una nueva petición electrónica. Si necesita ayuda, comuníquese con ellos en sei@mj.gov.br o por teléfono al (61) 2025 9734
            </p>
            <p className="subtitle-reactBootstrap"><b>Carteira de Trabalho e Previdência Social - CTPS (Cartera de Trabajo y Seguridad Social)</b></p>
            <p>
                Tanto las personas solicitantes de refugio como refugiadas tienen derecho a trabajar en Brasil. La Cartera de
                Trabajo y Seguridad Social (Carteira de Trabalho e Previdência Social – CTPS) es el documento que comprueba
                toda la vida laboral del trabajador y posibilita a las empresas a contratarle como empleado. Este documento es
                obligatorio para el ejercicio de actividades profesionales formales y puede ser solicitado por cualquier
                persona mayor de 14 años, nacional o extranjera, con residencia regular en Brasil y titular de un CPF.
            </p>
            <p>
                Recientemente en Brasil, este documento se ha vuelto digital. Ya no es necesario, en la mayoría de los casos,
                emitir un documento físico. Si el empleador solicitar la presentación de la Cartera de Trabajo y Seguridad Social (CTPS) física, comuníquese con el teléfono 158 para solicitar la emisión del documento.
            </p>
            <p className="subtitle-reactBootstrap"><b>Cadastro de Pessoa Física - CPF (Número de Identificación Fiscal Individual)</b></p>
            <p>
                El CPF (Cadastro de Pessoa Física) es uno de los principales documentos para ciudadanos residentes en Brasil,
                porque permite el acceso a facilidades y servicios, como el Sistema Público de Salud (SUS), el registro en
                instituciones públicas de educación, la apertura de cuentas bancarias y otras operaciones financieras.
                Cualquier persona física, nacional o extranjera, puede solicitar su inscripción en el CPF.
            </p>
            <p>
                Los adultos mayores de 18 años deberán presentar la copia original o certificada de su tarjeta de identidad,
                que puede ser el protocolo provisional, el CIE/RNE o el pasaporte. Las personas menores de 18 años deberán
                presentar la copia original o certificada de su tarjeta de identidad y la tarjeta de identidad de uno de sus
                padres o tutor legal.
            </p>
            <p>
                ¡Puede solicitar y emitir su número de CPF de forma gratuita! Simplemente complete el registro en el siguiente
                enlace. Si desea recibir un documento físico (tarjeta), deberá pagar una tarifa. Para hacer esto, solo ve a una
                oficina de correos.
            </p>
            <p>
                Para obtener más información, consulte estos sitios web (sólo en portugués):
            </p>
            <ListGroup as="ul" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li"><a href=" https://www.gov.br/receitafederal/pt-br" target='_blank'> Sitio de la Receta Federal</a>
                </ListGroup.Item>
                <ListGroup.Item as="li"><a href=" https://www.correios.com.br/atendimento/balcao-do-cidadao/emita-seu-cpf" target='_blank'>
                    Sitio de los Correos - Emisión de CPF</a>
                </ListGroup.Item>
            </ListGroup>
            <p className="subtitle-reactBootstrap"><b>Pasaporte</b></p>
            <p> Los refugiados reconocidos en Brasil tienen derecho a solicitar un pasaporte. Para solicitar un pasaporte uno debe: </p>
            <ListGroup as="ol" className='listgroup-reactBootstrap'>
                <ListGroup.Item as="li"> Llenar el formulario de solicitud
                </ListGroup.Item>
                <ListGroup.Item as="li"> Pagar las tarifas
                </ListGroup.Item>
                <ListGroup.Item as="li"> Agendar una fecha para ir a la policía federal
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Ir a la policía federal en el día de la cita con su documento de identificación de extranjero
                    (CIE/RNE), comprobante de pago de tarifas y comprobante de cita.
                </ListGroup.Item>
            </ListGroup>
            <p> <small>* Debe esperar un (1) día hábil para que se pague el pago de la tarifa antes de programar su viaje a la
                Policía Federal.</small></p>
            <p> Puede consultar el procesamiento de su solicitud de pasaporte aquí. El pasaporte será personalmente entregado a su propietario. Si desea viajar al exterior, verifique la necesidad de comunicarse o solicitar autorización a CONARE en la
                sesión “viajar al exterior”. </p>

        </Container >
    )
}

export default Documentacao;