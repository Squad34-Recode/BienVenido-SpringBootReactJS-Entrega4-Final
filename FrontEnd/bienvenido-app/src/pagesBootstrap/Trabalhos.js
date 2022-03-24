import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import FloatingButton from '../components/generalComponents/FloatingButton';

import '../styles/pagesBootstrap.css';

const Trabalhos = () => {

    return (
        <Container className='container-reactBootstrap' >
            <FloatingButton />

            <h1>
                Trabajos y Salarios
            </h1>

            <p className="subtitle-reactBootstrap"><b>Salarios</b></p>
            <p>Como en todos los países, los salarios dependen del sector donde quieras trabajar así
                como el empleo y en la empresa que lo desarrolles. El salario mínimo en Brasil es de
                aproximadamente R$ 1.212,00 al mes.</p>

            <p className="subtitle-reactBootstrap"><b>Cuales son los oficios más demandados para trabajar en Brasil</b></p>
            <p>El periódico Estado de São Paulo ha publicado una simpática infografía, O Mapa das
                Melhores Oportunidades de Emprego, en el que se presentan las áreas profesionales en las
                que hay falta de trabajadores y, por lo tanto, ofertas de empleo en Brasil.</p>

            <p><b>Esta infografia está dividida en:</b></p>
            <p>Empleos públicos, que están reservados para brasileños.</p>
            <p>Trabajo para el Mundial y los Juegos Olímpicos, que incluye los subgrupos Turismo,
                Recursos Humanos, Comercio y Servicios y Construcción naval.</p>
            <p>Carreras en las que faltan profesionales, que incluye los subgrupos Ingeniería, Contabilidad,
                Administración, Construcción e Infraestructura y Tecnologías de la Información</p>

            <p>Brasil está contratando profesionales calificados de otras naciones, y esta tendencia debe
                continuar, en caso de que el País mantenga el ritmo de crecimiento económico.
                La economía más fuerte estimula a las inversiones en grandes proyectos en las áreas
                industriales, de energía y, principalmente, en el sector de petróleo y gas, hasta en las
                ampliaciones de fábricas, compra de máquinas y equipos importados. Este escenario
                demanda la presencia de profesionales extranjeros para la supervisión de la instalación e
                inicio de las operaciones.</p>

            <p className="subtitle-reactBootstrap"><b>Qué necesito para trabajar en Brasil</b></p>
            <p>Para trabajar en Brasil es preciso tener el permiso de residencia y un visado de trabajo.
                Como inmigrante ilegal sólo tendrás acceso a los trabajos peor pagados que, como
                extranjero, difícilmente te permitirán subsistir en el país.</p>
            <p>Si entras en Brasil como turista no podrás trabajar legalmente. Para conocer todos los
                requisitos y cómo solicitar estos permisos, lo mejor es dirigirse a la embajada de dicho país
                en España o Brasil para contactar con ella a través de su web o en persona.</p>
            <p>Te proporcionamos algunas web, pero puedes buscar más información a través de internet.</p>

            <p><b>Gobierno de Brasil</b> - Mucha información relevante.</p>
            <p><b>Embajada de España en Brasil</b></p>
            <p><b>Consulado General de Brasil en Madrid</b></p>

            <p className="subtitle-reactBootstrap"><b>Contratos de trabajo</b></p>
            <p>En Brasil los contratos de trabajo pueden ser verbales o por escrito. Aconsejamos que
                siempre sean por escrito, es más, para solicitar el visado te pedirán una copia del contrato.</p>
            <p><b>Los contratos en Brasil pueden ser de dos tipos:</b></p>
            <p><b>Determinado</b>  en el contrato figura una fecha de finalización.</p>
            <p><b>Indetermidado</b>  el equivalente al contrato indefinido español.</p>

            <p className="subtitle-reactBootstrap"><b>Derechos de los extranjeros registrados en Brasil</b></p>
            <p><b>FGTS:</b> El empleador está obligado a descontar el 8% del salario del empleado para una
                cuenta bloqueada. El acumulado podrá ser retirado en la jubilación, usando para la
                adquisición de la vivienda propia o para el caso en que ocurra demisión sin justa causa. En
                este caso, el empleador está obligado a pagar el 40% del fondo al empleado.</p>
            <p><b>Salario:</b> Debe ser pagado en moneda corriente de Brasil, necesariamente, y hasta el quinto
                día hábil del mes subsecuente al trabajado.</p>
            <p><b>Horas extras:</b> Son permitidas dos por día, con remuneración extra del 50% del valor de la
                hora. Las horas extras habituales integran la remuneración del empleado, para el cálculo de
                vacaciones, aguinaldo, aviso previo y FGTS. Es posible para la empresa no pagar las horas
                extras prestadas, siempre que el período de trabajo sea menor al otro día. En Brasil, esta
                práctica es conocida como “banco de horas”.</p>
            <p><b>Trabajo nocturno:</b> Es todo el trabajo ejecutado entre las 22 hs de un día y las 5 hs del otr</p>
            <p><b>Carga horaria:</b> Los extranjeros deben seguir la carga horaria de ocho horas por día o de 44
                horas por semana, con un día semanal de descanso.</p>
            <p><b>Intervalos de reposo:</b> No son computados en la duración del trabajo. Son obligatorios por,
                lo mínimo, una hora. En período menor de trabajo, que no exceda cuatro horas, debe durar
                15 minutos. Algunas funciones poseen intervalos especiales, como las de inserción de
                datos, en que, a cada período de 50 minutos consecutivos, corresponde un reposo de 10
                minutos.</p>
            <p><b>Reposo semanal:</b> Todo trabajador tiene derecho a un descanso semanal remunerado de
                24 horas consecutivas, normalmente los domingos.</p>
            <p><b>Aguinaldo:</b> Pago por cada 12 meses trabajados, mitad en noviembre y la otra mitad en
                diciembre o en cuota única en el último mes del año.</p>
            <p><b>Vacaciones:</b> : Después del trabajo integral realizado durante un año, el empleado posee el
                derecho de 30 días de vacaciones y a recibir más un tercio del valor del salario, como
                bonos. Aún es posible vender hasta 10 días de vacaciones. Los empleadores dan
                vacaciones colectivas cuando les convienen.</p>
            <p><b>Vale alimentación:</b> : No tiene naturaleza salarial, a no ser que sea concedida gratis al
                empleado, en las dependencias de la empresa.</p>
            <p><b>Vale transporte:</b> Si el transporte es concedido para la ejecución de los servicios, no
                constituye salario utilidad. En caso de que sea concedido como forma de sustituir una
                necesidad del empleado, la de moverse en el recorrido casa trabajo casa, es salario utilidad.</p>
            <p><b>Licencia maternidad:</b> Es concedida de manera remunerada por 120 días para la empleada
                que va a tener un hijo. Los salarios son pagados por el empleador y descontados por él de
                los aportes habituales debidos a la Provisión Social. La legislación prohíbe a las empresas
                despedir a la empleada embarazada sin justa causa a partir del momento de la confirmación
                del embarazo y hasta cinco meses luego del parto</p>

            <button type="button" class="btn">
                <Link to="/work" rel="noopener norwferrer noreferrer">
                    Sitios para encontrar trabajo
                </Link>
            </button>

        </Container>
    )
}

export default Trabalhos;