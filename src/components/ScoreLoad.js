function ActivityLoad() {
    const getActivity = () => {
      return fetch("http://localhost:3000/user/12/activity", {
        type: "GET",
      }).then((res) => res.json())
      .then((res)=> {

 })   
 };
  
    return {
      getActivity
    };
  }
  
  export default ActivityLoad();