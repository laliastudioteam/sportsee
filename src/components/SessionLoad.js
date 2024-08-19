import { dataSession } from '../data/mockup.js';

function convertDataSession(sessions){

  const ArrayDay = {1:"L",2:"M",3:"M",4:"J",5:"V",6:"S",7:"D"};
  let convertedArray =[];
  sessions.forEach((element) => {

    let day = element.day;
    let sl = element.sessionLength; 
    
  convertedArray.push({"day": ArrayDay[day],"nb" :  sl});
   }) 

   return ( convertedArray);
}

function SessionLoad() {

  const getSession = async (user, dataFake) => {

    if (dataFake === 0) {
      // Si dataFake est 0, on fait un fetch pour obtenir les données depuis l'API
      const res = await fetch("http://localhost:3000/user/" + user + "/average-sessions");
      const data = await res.json();

      return convertDataSession(data.data.sessions);    
       
    } else {
      // Si dataFake n'est pas 0, on utilise les données du mock
      return new Promise((resolve, reject) => {
        resolve(dataSession); // On résout directement avec les données mockées
      }).then(resultat => {

        return convertDataSession(resultat.data.sessions);  
     
      });
    }
  };

  return {
    getSession
  };
}

export default SessionLoad();