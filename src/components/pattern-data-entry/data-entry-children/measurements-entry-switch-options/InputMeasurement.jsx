const InputMeasurement = ({ label, name, handleInput }) => (
  <div className="measurement-row">
    <p>{label}</p>
    <input
      onChange={handleInput}
      name={name}
      type="number"
      className="fit-and-measurements-input"
    />
  </div>
);

export default InputMeasurement;