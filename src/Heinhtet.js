import React from "react";
import './style.css';
import Navicon from "./Navicon";
import "@fontsource/poppins";
import mail from './mail.png';
import phone from './phone.png';
import home from './home.png';
import heinhtet from './heinhtet.png';


const Heinhtet = () => {
    return ( 
        <div>
            <div className="background">
            <Navicon />
            
            <div className="inner-block">
            <div className="infos">
            <img id="pf" src={heinhtet} className="App-logo" alt="logo" />
                 <h2>Mr. Hein Htet Soe Moe</h2>
                 <p id="pos">IT Specialist</p>
                 <img id="logo" src={mail} alt="mail" />
                 <p>heinhtet.recyglo@gmail.com</p>
                 <img id="logo" src={phone} alt="phone" />
                 <p>(+66) 654142099</p>
                 <img id="logo" src={home} alt="home" />
                 <p>5 floor, Siripanich Building, 191 Huay Kaew Road, Suthep Subdistrict, Mueang, Chiang Mai 50200, Thailand</p>
                 
                 <p id="cpr">© Copyright 2022 by RecyGlo Company Pte. Ltd. All rights reserved.</p>
                 </div>
                
         
                </div>
            </div>
            </div>
     );
}
 
export default Heinhtet;