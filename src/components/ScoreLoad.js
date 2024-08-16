function ScoreLoad() {
    const getScore = (idUser) => {
      return fetch("http://localhost:3000/user/"+idUser+"/average-sessions", {
        type: "GET",
      }).then((res) => res.json())
      .then((res)=> {

 })   
 };
  
    return {
      getScore
    };
  }
  
  export default ScoreLoad();