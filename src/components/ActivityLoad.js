function ActivityLoad() {
  let convertedArray = [];
    const getActivity = () => {
   return fetch("http://localhost:3000/user/12/activity", {
        type: "GET",
      }).then((res) => res.json())
      .then((res)=> {

const sessions = res.data.sessions;

sessions.forEach((element) => {

  // console.log(element)});
  let day = element.day;
  let kg =element.kilogram; 
  let cal =element.calories;
convertedArray.push({"day": day.substr(8),"kg" :  kg, "cal" : cal});


});
//console.log(convertedArray);
return(convertedArray);


 })  
 

 };
  
    return {
      getActivity
    };
  }
  
  export default ActivityLoad();