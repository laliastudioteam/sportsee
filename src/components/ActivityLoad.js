

  function ActivityLoad() {
    const getActivity = async (data) => {
      return await fetch("http://localhost:3000/user/"+data.id+"/activity", {
        type: "GET",
      }).then((res) => res.json())
      .then((res)=> {

        if(data.fake===0){
       let sessions = res.data.sessions;
                  let convertedArray =[];
                  sessions.forEach((element) => {

                    let day = element.day;
                    let kg =element.kilogram; 
                    let cal =element.calories;
                    
                  convertedArray.push({"day": day.substr(8),"kg" :  kg, "cal" : cal});
                   }) 
        

        return ( convertedArray);
                  }else{
                    let convertedArray =[];
                    return ( convertedArray);
                  }

 })   
 };
  
    return {
      getActivity
    };
  }

  export default ActivityLoad();