import "./Contact.css"
const Contact =({name, phone, email, Image,city,position }) => {
    // const { name, job, image } = props;
    return (
      <div className="card">
        <div className="cardimg">
           <img src={Image} alt="" />
        </div>
        <div className="text">
         <h2 className="title">{name}</h2>
         <h4>{position}</h4>
         <div className="location">
         <i class="fa-solid fa-location-dot"></i>
            <p>{city}</p>
         </div>
         <div className="phone">
            <i className="fa fa-phone"></i>
            <p>{phone}</p>
         </div>
         <div className="mail">
         <i class="fa-regular fa-envelope"></i>
            <p>{email}</p>
         </div>
         </div>
      </div>
    )
  }
  
  export default Contact;
  