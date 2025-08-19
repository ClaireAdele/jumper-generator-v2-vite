import "../../../App.css";

//This component will query data and pass it down to the different potential pattern shapes, which will each be a different component. 

//Logged-in user -> Pattern from server based on url params
//Not logged in -> check session data
const KnittingPattern = () => {
  return (
    <div className="pageBackground">
      <div className="pageShaper">
      </div>
    </div>
  );
};

export default KnittingPattern;