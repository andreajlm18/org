import "./Card.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Card = (props) => {
  const { valueName, valuePhoto, valuePuesto, id, fav } = props.datos;
  const { color, eliminarColaborador, like } = props;

  return (
    <div className="container-card">
      <AiFillCloseCircle
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      />
      <div className="encabezado" style={{ backgroundColor: color }}>
        <img src={valuePhoto} alt="Harland" />
      </div>
      <div className="info">
        <h4>{valueName}</h4>
        <h5>{valuePuesto}</h5>
        {fav == true ? <AiFillHeart color="red" onClick={()=>like(id)}/> : <AiOutlineHeart onClick={()=>like(id)} />}
      </div>
    </div>
  );
};
export default Card;
