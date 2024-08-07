

  function PerformanceLoad() {
    const getPerformance = async () => {
      return await fetch("http://localhost:3000/user/12/performance", {
        type: "GET",
      }).then((res) => res.json())
      .then((res)=> {
 const kind = res.data.kind;

     const data = res.data.data;
     let dataArray = [];

  //let test=  Object.entries(data).map(kind,data);
    




    console.log(dataArray);


     let result = Object.entries(kind);

                  let convertedArray =[];

                  for (const [key, value] of Object.entries(result)) {
                    
                 convertedArray.push({"subject": value[1] });
                   }
        
console.log(convertedArray);
        return ( convertedArray);

 })
 };
  
    return {
      getPerformance
    };
  }

  export default PerformanceLoad();