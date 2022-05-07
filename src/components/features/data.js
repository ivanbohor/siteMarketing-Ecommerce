import { FaAccessibleIcon, FaGg } from "react-icons/fa";
import { SiDatabricks, SiSmartthings } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";
import { GiThink } from "react-icons/gi";

export const featureList = [
  {
    id: 1,
    icon: <SiSmartthings color="#7EBC8D" size={25} />,
    heading: "DISEÑO Y DESARROLLO",
    text: "Analizamos el producto/servicio en perspectiva con el mercado objetivo. Estudiamos los factores internos y externos del proyecto.",
  },
  {
    id: 2,
    icon: <SiDatabricks color="#7EBC8D" size={25} />,
    heading: "ESTRATEGIA COMUNICATIVA",
    text: "Definimos las estrategias de Marketing digital que vamos a utilizar para alcanzar los objetivos que se planteen",
  },
  {
    id: 3,
    icon: <MdConnectWithoutContact color="#7EBC8D" size={25} />,
    heading: "EVENTOS SOCIALES Y AMBIENTALES",
    text: "La Responsabilidad Social Corporativa de una empresa se ha convertido en un elemento clave a integrar, así como su comunicación de una manera correcta a todos los grupos de interés para mayor impacto y concientizar en sostenibilidad. Gracias a esta estrategia conseguiremos un win to win tanto para la empresas como para la sociedad y el medio ambiente.",
  },
  {
    id: 4,
    icon: <GiThink color="#7EBC8D" size={25} />,
    heading: "ASESORÍA EN MARKETING Y COMUNICACIÓN",
    text: "Estamos capacitados para llevar a cabo el trabajo diario de manera óptima. Somos profesionales comprometidos con nuestros clientes.",
  },
];
