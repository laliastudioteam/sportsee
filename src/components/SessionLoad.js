

function SessionLoad() {
  const getSession = async () => {
    return await fetch("http://localhost:3000/user/12/average-sessions", {
      type: "GET",
    }).then((res) => res.json())
    .then((res)=> {
     let sessions = res.data.sessions;
     const ArrayDay = {1:"L",2:"M",3:"M",4:"J",5:"V",6:"S",7:"D"};
                let convertedArray =[];
                sessions.forEach((element) => {

                  let day = element.day;
                  let sl = element.sessionLength; 
     
                  
                convertedArray.push({"day": ArrayDay[day],"nb" :  sl});
                 }) 
      

      return ( convertedArray);

})   
};

  return {
    getSession
  };
}

export default SessionLoad();