import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to My Art Gallery</h1>
      <Link to="/gallery">Enter the Gallery</Link>
    </div>
  );
}

export default Home;
