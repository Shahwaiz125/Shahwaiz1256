import { useState } from "react";
const Data = () => {
    const [menu, setMenu] = useState([
 
        {
          id: "3",
          image: (
            <img
              src={require('./abc2.jpg')}
              alt="nolodead"
              style={{ height: "250px", width: " 250px" }}
            />
          ),
          data: "C",
        },
        {
          id: "4",
          image: (
            <img src={require('./abc3.jpg')}
              alt="nolodead"
              style={{ height: "250px", width: " 250px" }}
            />
          ),
          data: "D",
        }
  
      ]);

      const handledelete = () =>{

      }

  return (
    


    <div id="midt">

        {menu.map((m) => (
          <div className="card" id="cards">
            <div className="card-body">
              <p> {m.image} {m.data}</p>
              

               <button className="btn btn-primary" onClick={()=>handledelete()}>
                button
              </button>  
            </div>
          </div>
        ))}

        </div>
  );
};

export default Content;