const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button type="button" className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex size-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
