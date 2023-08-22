import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Formulario from "./components/Frormulario/Formulario";
import Header from "./components/Header/Header";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer/Footer";

function App() {
  const [viewForm, setViewForm] = useState(false);
  const [colaboradores, setColaborador] = useState([
    {
      id: uuid(),
      valueArea: "Front End",
      valuePhoto: "https://github.com/harlandlohora.png",
      valueName: "Harland Lohora",
      valuePuesto: "Instructor",
      fav:true
    },
    {
      id: uuid(),
      valueArea: "Front End",
      valuePhoto: "https://github.com/harlandlohora.png",
      valueName: "Harland Lohora",
      valuePuesto: "Instructor",
      fav:false
    },
    {
      id: uuid(),
      valueArea: "Programación",
      valuePhoto: "https://github.com/genesysaluralatam.png",
      valueName: "Genesys Rondón",
      valuePuesto: "Desarrolladora de software e instructora",
      fav:true
    },
    {
      id: uuid(),
      valueArea: "UX y Diseño",
      valuePhoto: "https://github.com/JeanmarieAluraLatam.png",
      valueName: "Jeanmarie Quijada",
      valuePuesto: "Instructora en Alura Latam",
      fav:false
    },
    {
      id: uuid(),
      valueArea: "Programación",
      valuePhoto: "https://github.com/christianpva.png",
      valueName: "Christian Velasco",
      valuePuesto: "Head de Alura e Instructor",
      fav:false
    },
    {
      id: uuid(),
      valueArea: "Innovación y Gestión",
      valuePhoto: "https://github.com/JoseDarioGonzalezCha.png",
      valueName: "Jose Gonzalez",
      valuePuesto: "Dev FullStack",
      fav:false
    },
  ]);
  //Lista de equipos
  const [equipos, setEquipos] = useState([
    {id:uuid(),
      titulo: "Programación",
      colorPrimario: "#D9F7E9",
      colorSecundario: "#57C278 ",
    },
    {id:uuid(),
      titulo: "Front End",
      colorPrimario: "#F0F8E2",
      colorSecundario: "#A6D157 ",
    },
    {id:uuid(),
      titulo: "Data Science",
      colorPrimario: "#D9F7E9",
      colorSecundario: "#57C278 ",
    },
    {id:uuid(),
      titulo: "Devops",
      colorPrimario: "#FDE7E8",
      colorSecundario: "#E06B69",
    },
    {id:uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#FAE9F5",
      colorSecundario: "#DB6EBF",
    },
    { id:uuid(),
      titulo: "Móvil", colorPrimario: "#FFF5D9", colorSecundario: "#FFBA05" },
    {
      id:uuid(),
      titulo: "Inovación y Gestión",
      colorPrimario: "#FFEEDF",
      colorSecundario: "#FF8A29",
    },
  ]);
  const mostrarForm = () => {
    setViewForm(!viewForm);
  };
  const registrarColaborador = (colaborador) => {
    //Spreed operator
    setColaborador([...colaboradores, colaborador]);
  };
  const eliminarColaborador = (id) => {
    //Spreed operator
    console.log("Eliminar", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaborador(nuevosColaboradores);
  };
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    setEquipos(equiposActualizados);
  };
  const crearEquipo = (nuevoEquipo) => {
    console.log("EquipoCreado", nuevoEquipo)
    setEquipos([...equipos,{...nuevoEquipo, id:uuid()}])
  }

  const like = (id) =>{
    console.log("like",id);
    const colaboradorActualizado = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador;
    })
    setColaborador(colaboradorActualizado)
  }
  return (
    <div>
      <Header />
      {viewForm && (
        <Formulario
          registrarColaborador={registrarColaborador}
          equipos={equipos.map((equipo) => equipo.titulo)}
          crearEquipo={crearEquipo}
        />
      )}
      {/* `{ viewForm == true ?  <Formulario/> : <></>} */}
      <MiOrg cambiarMostrar={mostrarForm} />
      {equipos.map((equipo) => {
        return (
          <Equipo
            datos={equipo}
            key={equipo.titulo}
            eliminarColaborador={eliminarColaborador}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.valueArea === equipo.titulo
            )}
            actualizarColor={actualizarColor}
            like={like}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
