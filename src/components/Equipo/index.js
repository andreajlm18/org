import Card from "../Card";
import "./equipo.css";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  return (
    <>
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: hexToRgba(colorPrimario, 0.4) }}
        >
          <input
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(evento) => {
              actualizarColor(evento.target.value, id);
            }}
          />
          <h3 className="equipo-titulo" style={{ borderColor: colorPrimario }}>
            {titulo}
          </h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => {
              return (
                <Card
                  eliminarColaborador={eliminarColaborador}
                  key={index}
                  datos={colaborador}
                  color={colorPrimario}
                  like={like}
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};
export default Equipo;
