import "./Campo.css";
const CampoTexto = (props) => {
  const {placeholder, refreshValue, titulo, required, value, type='text'} =props
  const placeholderModificado = `${placeholder}...`;
  const manejarCambio = (e) => {
    refreshValue(e.target.value)
}
  return (
    <div className={`campo`}>
      <label>{titulo}</label>
      <input
        className={`campo-${type} campo-input`}
        placeholder={placeholderModificado}
        required={required}
        value={value}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};
export default CampoTexto;
