import { Link } from "react-router-dom";
import "./Cric.css";
import * as Icons from "react-icons/fa";
import Teams from "./Teams";
import LiveScore from "./T20";




function Menu() {
    return (
      <div style={{backgroundColor:"#eee",height:"129rem",width:"100%"}}>
       <div className="Nav">
        <img src={require('./Logo.png')} style={{width:"11rem",marginTop:"1rem",marginLeft:"1rem",color:"white",fontWeight:"bold"}} />

        <div className="options"  >
             <ul className=" Ulist">  

             <div class="dropdown" style={{marginRight:"1rem",display:"inline"}} >
        <Link className="navlink " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Live Series
          </Link>
  <div class="dropdown-content">
    <Link to="/Livescores">Live Scores Home</Link>
    <Link to="/Results">Results</Link>
    <Link to="/">Seasons view</Link>
    <Link to="/">Desktop Scoreboard</Link>
    <Link to="/">Schedule</Link>
    <Link to="/">International calender</Link>
  </div>
</div> 


<div class="dropdown" style={{marginRight:"1rem",display:"inline"}} >
        <Link className="navlink " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Series
          </Link>
  <div class="dropdown-content">
            <><Link  to="/">Austalia vs England</Link></>
            <><Link  to="/">Pakistan vs Bangladesh</Link></>
            <><Link  to="/">Ireland vs UAE</Link></>
            <><Link  to="/">India vs Zimbabwe</Link></>
  </div>
</div> 
          
        

        <div class="dropdown" style={{marginRight:"1rem",display:"inline"}} >
        <Link className="navlink " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Teams
          </Link>
  <div class="dropdown-content">
  
            <Link  to="/">Australia</Link>
            <Link  to="/">Pakistan</Link>
            <Link  to="/">Afghanistan</Link>
            <Link  to="/">India</Link>
            <Link  to="/">Bangladesh</Link>
            <Link  to="/">South Africa</Link>
            <Link  to="/">Netherland</Link>
            <Link  to="/">UAE</Link>
            <Link  to="/">West Indies</Link>
            <Link  to="/">New zealand</Link>
  </div>
</div> 

        

        <li className="nav-item dropdown" style={{listStyle:"none"}}>
          <Link className="nav-link " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            News
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">News Reports</Link></li>
            <li><Link className="dropdown-item" to="/">Future of ODIs</Link></li>
            <li><Link className="dropdown-item" to="/">Ball-tempering</Link></li>
            <li><Link className="dropdown-item" to="/">Technology</Link></li>
            <li><Link className="dropdown-item" to="/">Racism</Link></li>
          </ul>
          </li>

        <li className="nav-item dropdown" style={{listStyle:"none"}}>
          <Link className="nav-link " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Feature
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Features Home</Link></li>
            <li><Link className="dropdown-item" to="/">Writers</Link></li>
            <li><Link className="dropdown-item" to="/">Photo Galleries</Link></li>
                        
          </ul>
        </li>

        <li className="nav-item dropdown" style={{listStyle:"none"}}>
          <Link className="nav-link " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Video
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">T20 Timeout</Link></li>
            <li><Link className="dropdown-item" to="/">Match Day</Link></li>
            <li><Link className="dropdown-item" to="/">News and Analysis</Link></li>
            <li><Link className="dropdown-item" to="/">Short Videos</Link></li>
          </ul>
          
        </li>

        <div class="dropdown">
        <Link className="navlink " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Stats
          </Link>
  <div class="dropdown-content">
    <Link to="/">Link 1</Link>
    <Link to="/">Link 1</Link>
    <Link to="/">Link 1</Link>
  </div>
 </div>

        

            <Icons.FaMoon style={{marginLeft:"18rem",color:"white",fontWeight:"bold"}}/>
            <Icons.FaTh style={{marginLeft:"2rem",color:"white"}}/>
            <Icons.FaBell style={{marginLeft:"2rem",color:"white"}}/>
            <Icons.FaSearch style={{marginLeft:"2rem",color:"white"}}/>
            
            
            </ul>
        </div>
       </div>

            <div className="left1">
              <h6 style={{color:"black"}}>Quick Links</h6>
              <hr />
             <Link className="leftlink" to="/T20 timeout"> <Icons.FaGreaterThan className="icons"/> <b>T20 Timeout</b></Link> <br/>
             <Link className="leftlink" to="/"> <Icons.FaGreaterThan className="icons"/> <b>ODIs Timeout</b></Link> <br/>
             <Link className="leftlink"> <Icons.FaGreaterThan className="icons"/> <b>Fantasy Pick</b></Link> <br/>
             <Link className="leftlink"><Icons.FaGreaterThan className="icons"/> <b>ICC Rankings</b></Link> 
            </div>

            <div className="left2">
              <h6 style={{color:"black"}}>ESPNcricinfo Apps</h6>
              <hr />
              <Icons.FaGreaterThan className="icons"/> <b>Android App</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>IOS App</b> 
            </div>

            <div className="left1">
              <h6 style={{color:"black"}}>Follow ESPNcricinfo</h6>
              <hr />
              <Icons.FaGreaterThan className="icons"/> <b>Instagram</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>Facebook</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>Twitter</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>YouTube</b> 
            </div>

            <div className="left2">
              <h6 style={{color:"black"}}>ESPN Sites</h6>
              <hr />
              <Icons.FaGreaterThan className="icons"/> <b>The Cricket Monthly</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>ESPN</b> 
            </div>

            <div className="left3">
            <h6 style={{color:"black"}}>Key Series</h6>
              <hr />
              <Icons.FaGreaterThan className="icons"/> <b>Australia vs England</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>Pakistan vs Bangladesh</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>Ireland vs UAE</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>India vs Zimbabwe</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>New zealand vs West indies</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>South Africa vs Netherland</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>Hong Kong vs Pakistan</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>England vs India</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>Bangladesh vs Afghanistan</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>Pakistan vs England</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>West Indies vs Ireland</b> <br/>
              <Icons.FaGreaterThan className="icons"/> <b>Srilanka vs Afghanistan</b> 
            <div>
              <div className="middle">

            <div className="card" style={{ width: "15rem",marginLeft:".2rem",marginTop:"3.6rem",cursor:"pointer",height:"2rem" }}>
  <img src={require('./Archer.png')} className="card-img-top" alt="picture" />
  <div className="card-body">
  <h5 style={{color:"black"}}>Archer on comeback trail: 'A small day but a big day'!</h5>
  <p style={{color:"black"}}>"A small day but still a big day," .</p>
    <hr />
   
  </div>
</div>
</div>


</div>
 </div>

 


 


            <div className="middle">

            <div className="card" style={{ width: "15rem",marginLeft:"17rem",height:"2rem",cursor:"pointer" }}>
  <img src={require('./Artick.png')} className="card-img-top" alt="picture" />
  <div className="card-body">
  <h5 style={{color:"black"}}>Karthik Meiyappan soaks in World Cup glory and dreams of more</h5>
  <p style={{color:"black"}}>The UAE legspinner talks about his hat-trick against Sri Lanka and about </p>
    <hr />
    

  </div>
</div>
</div>



<div className="middle">

            <div className="card" style={{ width: "15rem",marginLeft:"17rem",marginTop:"72.2rem",cursor:"pointer",height:"2rem" }}>
  <img src={require('./Archer2.png')} className="card-img-top" alt="picture" />
  <div className="card-body">
  <h5 style={{color:"black"}}>Archer on comeback trail: 'A small day but a big day'!</h5>
  <p style={{color:"black"}}>"A small day but still a big day," .</p>
    <hr />
   
  </div>
</div>
</div>
<div className="middle">

            <div className="card" style={{ width: "15rem",marginLeft:".7rem",marginTop:"72.2rem",cursor:"pointer",height:"2rem" }}>
  <img src={require('./Archer2.png')} className="card-img-top" alt="picture" />
  <div className="card-body">
  <h5 style={{color:"black"}}>Archer on comeback trail: 'A small day but a big day'!</h5>
  <p style={{color:"black"}}>"A small day but still a big day," .</p>
    <hr />
   
  </div>
</div>
</div>





{/* Calling Teams Here */}
<div>
<div style={{marginTop:"5rem"}}>
<Teams title="Stumps" text1="Not covered live" text2="*England" text6="501/7d" text3="England Lions" text7="540/2d" text4="England lion beat by 4 run"/>
</div>

<div className="2" style={{marginTop:"71rem"}}>
<Teams title="Inning break"  text2="*India" text6="501/7d" text3="New zealand" text7="540/2d" text4="New zealand choose to field"/></div>

{/* <div className="3" style={{marginTop:"71rem"}}>
<Teams title="Quaid-e-Azam Trophy" text1="Not covered live" text2="*Northern (Pakistan)" text3="KPK (Pakistan)" text4="KPK trail by 30 runs." text5="235 & 30/1"/>
</div>

<div className="4" style={{marginTop:"71.6rem"}}>
<Teams title="Quaid-e-Azam Trophy" text1="Not covered live" text2="*KPK (Pakistan)" text3="Balochistan" text4="KPK trail by 190 runs." text5="235 & 190/3"/>
</div> */}
</div>
{/* Teams end Here */}

<hr style={{marginTop:"42rem"}}/>

 <div>
        <div className=" container" style={{}}>
  <div className="row">
    	<div className="col-md-12">
    	    <footer className="footer">				
		<div className="container">
			<div className="row ">
				
				<div className="col-lg-2 col-md-6">
					<div className="footer-title  ">
						Key Series
					</div>	
					<div className="footer-links">
						<Link to="/T20Worldcup">
						T20 World Cup
						</Link>
						<Link to="/">
							Austrila v England
						</Link>
						<Link to="/">
							New Zealand v India
						</Link>
						<Link to="/">
							Sri Lanka v West Indes
						</Link>
            <Link to="/">
							Austrila v West Indes
						</Link>
						<Link to="/">
							IRE-W in Pakistan
						</Link>
						<Link to="/QaeTrophy">
							QEA Trophy
						</Link>
						<Link to="/">
							Wallstreet
						</Link>	<Link to="/">
							WBBL 2002
						</Link>
						<Link to="/">
							Marsh Cup
						</Link>
						<Link to="/">
							Sheffield Sheild
						</Link>
						<Link to="/">
							WWomen's ChanpionShip
						</Link>
                        	<Link to="/">
							CSA 4-Day Series
						</Link>
						<Link to="/">
							World Test Championship
						</Link>
						<Link to="/">
							World Cup Super Leauge
						</Link>
						
					</div>
				</div>
                <div className="col-lg-2 col-md-6">
					<div className="footer-title ">
						Quicks Links
					</div>	
					<div className="footer-links">
						<Link to="/">
							T20 Timeout
						</Link>
						<Link to="/">
							T20 Time Out
						</Link>
						<Link to="/">
							Fantasy Pack
						</Link>
						<Link to="/">
							ICC Ranking
						</Link>
					</div>
				</div><div className="col-lg-3 col-md-6">
					<div className="footer-title ">
						ESPNcricinfo Apps
					</div>	
					<div className="footer-links">
						<Link to="/">
							Android App
						</Link>
						<Link to="/">
							iOS App
						</Link>
						
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-title ">
						Follow ESPNcricinfo
					</div>	
					<div className="footer-links">
						<Link to="/">
							Instagram
						</Link>
						<Link to="/">
							Twitter
						</Link>
						<Link to="/">
							Facebook
						</Link>
						<Link to="/">
							YouTube
						</Link>
					</div>
				</div>
				<div className="col-lg-2 col-md-6">
					<div className="footer-title ">
						ESPN Sites
					</div>	
					<div className="footer-links">
						<Link to="/">
							The Cricket Monthly
						</Link>
						<Link to="/">
							ESPN
						</Link>
						
					</div>

					
						
					
				</div>
			</div>
		</div>
	</footer>
	<div className="footer-bottom">
		© 2022 ESPN Sports Media Ltd. All rights reserved
	</div>
    	</div>
	</div>
</div>
    </div>
    
  

            

</div> 

           


      );
}

export default Menu;