
  import { dataPerformance } from '../data/mockup.js';

function PerformanceLoad() {

  const getPerformance = async (user, dataFake) => {

    if (dataFake === 0) {
      // Si dataFake est 0, on fait un fetch pour obtenir les données depuis l'API
      const res = await fetch("http://localhost:3000/user/" + user + "/performance");
      const data = await res.json();
      
     
 const kind = data.data.kind;
 const dataKind = data.data.data;

                  let convertedArray =[];

for (let keyKind in kind) {
  var valueKind = kind[keyKind];
  
                 for (let keyData in dataKind) {
                  var valueData = dataKind[keyData];
         
         if(keyKind.toString()===valueData["kind"].toString()){
                  convertedArray.push({"kind": valueKind, "nb": valueData["value"]});
         }
                   }
                  } 
                

        return ( convertedArray);

    } else {
      // Si dataFake n'est pas 0, on utilise les données du mock

      return new Promise((resolve, reject) => {
        resolve(dataPerformance); // On résout directement avec les données mockées
      }).then(resultat => {
        const kind = resultat.data.kind;
        const dataKind = resultat.data.data;
       
                         let convertedArray =[];
       
       for (let keyKind in kind) {
         var valueKind = kind[keyKind];
         
                        for (let keyData in dataKind) {
                         var valueData = dataKind[keyData];
                
                if(keyKind.toString()===valueData["kind"].toString()){
                         convertedArray.push({"kind": valueKind, "nb": valueData["value"]});
                }
                          }
                         } 
                       
       
               return ( convertedArray);
      });
    }
  };

  return {
    getPerformance
  };
}

export default PerformanceLoad();