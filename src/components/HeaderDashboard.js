import React, { useState, useEffect } from "react";
import DataLoad from "./DataLoad";

import '../styles/HeaderDashboard.css'

const HeaderDashboard = () => {
  const [user, setUser] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    !isLoaded &&
      DataLoad.getUser().then((json) => {
        setUser(json);
        setIsLoaded(true);
      });

  }, [isLoaded]);
  if(isLoaded){
        return(
            <div className="headerContainer">
            <div className="headerContanier-content">
            <span className="headerContainer-content-title">
              Bonjour</span>
              <span className="headerContainer-content-forename">{user.data.userInfos.firstName}</span>
           
            <div className="headerContainer-content-sentence">Félicitations ! Vous avez explosé vos objectifs hier 👏</div>
            </div>
            </div>
            )
        }
}
export default HeaderDashboard;