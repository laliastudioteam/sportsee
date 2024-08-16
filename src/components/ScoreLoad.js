
import { dataUser } from '../data/mockup.js';

function ScoreLoad() {

  const getScore = async (user, dataFake) => {

    if (dataFake === 0) {
      // Si dataFake est 0, on fait un fetch pour obtenir les données depuis l'API
      const res = await fetch("http://localhost:3000/user/" + user);
      const data = await res.json();
     
      return data.data.score;

    } else {
      // Si dataFake n'est pas 0, on utilise les données du mock

      return new Promise((resolve, reject) => {
        resolve(dataUser); // On résout directement avec les données mockées
      }).then(resultat => {
        return resultat.data.score;
      });
    }
  };

  return {
    getScore
  };
}

export default ScoreLoad();