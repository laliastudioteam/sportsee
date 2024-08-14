
import {dataPerformance} from '../data/mockup.js';

  function PerformanceLoad() {
    const getPerformance = async (user,data) => {

      return await fetch("http://localhost:3000/user/"+user+"/performance", {
        type: "GET",
      }).then((res) => res.json())
      .then((res)=> {

 const kind = res.data.kind;
 const dataKind = res.data.data;

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

 })
 };
  
    return {
      getPerformance
    };
  }

  export default PerformanceLoad();