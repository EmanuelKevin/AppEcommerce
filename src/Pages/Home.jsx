import Productos from "../Components/Productos";
import firebase from "../Config/firebase";

function Home({ login }) {
  console.log(firebase);
  return (
    <div>
      <Productos login={login} />
    </div>
  );
}

export default Home;
