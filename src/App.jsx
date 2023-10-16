import Contact from "./Component/Contact"
const App =() => {
  const employees = [
    {
      name: "Ayo Mide",
      position: "President",
      Image:"",
      city: "Mushin",
      phone: "09043643635",
      email: "new@tizzy",
    },
   {
    name: "Olami Mide",
    position: "President",
    Image:"",
    city: "Aja",
    phone: "08025334839",
    email: "new@olami",
   },
   {
    name: "Olu Mide",
    position: "President",
    Image:"",
    city: "Epe",
    phone: "08025334839",
    email: "new@mide",
   },
    {
      name: "ola milekan",
      position: "President",
      Image:"",
      city: "Ako",
      phone: "08025334839",
      email: "new@tizzy",
    }
  ];
  return (
    <div>
      {employees.map(({name, position, Image, city, phone, email}, index)=> (
        <Contact
        key={index}
        name={name}
        position={position}
        image={Image}
        city={city}
        phone={phone}
        email={email}
        />
      ))}
    </div>
  )
    } 
export default App;
