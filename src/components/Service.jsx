const Service = ({ id, icon, title, text, removeService }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
      <button onClick={() => removeService(id)}>Remove</button>
    </article>
  );
};
export default Service;
