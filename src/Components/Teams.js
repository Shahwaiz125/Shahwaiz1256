function Teams(props) {
    return ( 
        <div >
            <div className="card" style={{width:"23rem",cursor:"pointer"}}>
  <div className="card-body">
    <h5 className="card-title" style={{fontWeight:"bold",color:"red"}}>{props.title}</h5>
    <hr />
   
    <p className="teamA" style={{fontWeight:"bold",fontSize:"20px",textDecoration:"wavy"}}>
      {props.text2}          {props.text6}</p>
    <p className="teamB" style={{fontSize:"18px"}}>
      {props.text3}  {props.text7}
    </p>
    

    <hr />
    <p className="" style={{color:"green"}}>
      {props.text4}
    </p>
  </div>
</div>

        </div>
     );
}

export default Teams;