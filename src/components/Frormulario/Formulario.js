import { useState } from "react";
import Boton from "../Boton";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import "./Formulario.css";
const Formulario = (props) => {
  const [valueName, setValueName] = useState("");
  const [valuePuesto, setValuePuesto] = useState("");
  const [valuePhoto, setValuePhoto] = useState("");
  const [valueArea, setValueArea] = useState("");
  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");
  const { registrarColaborador, crearEquipo } = props;

  const sendForm = (e) => {
    e.preventDefault();
    let datosAEnviar = {
      valueName,
      valuePuesto,
      valuePhoto,
      valueArea,
    };
    registrarColaborador(datosAEnviar);
  };

  const sendNewTeam = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={sendForm} className="formulario-titulo">
        <h2 className="">Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          value={valueName}
          refreshValue={setValueName}
          required
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          value={valuePuesto}
          refreshValue={setValuePuesto}
          required
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          value={valuePhoto}
          refreshValue={setValuePhoto}
          required
        />
        <ListaOpciones
          value={valueArea}
          actualizarEquipo={setValueArea}
          required
          equipos={props.equipos}
        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={sendNewTeam} className="formulario-titulo">
        <h2 className="">Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar titulo"
          value={titulo}
          refreshValue={setTitulo}
          required
        />
        <Campo
          titulo="Color "
          placeholder="Ingresar el color HEX"
          value={color}
          type={'color'}
          refreshValue={setColor}
          required
        />
        <Boton>Registrar equipo</Boton>
      </form>
    </section>
  );
};
export default Formulario;
