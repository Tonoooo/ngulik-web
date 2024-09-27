//import Link from react router dom
import { Link } from "react-router-dom";

//import routes
import Routes from './routes';

export default function App() {

  return (
    <>
      <div>
        <nav className="bg-green-400 w-full top-0 start-0 border-b py-1">
          
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div>
              <Link to="/" className="font-sans font-extrabold text-xl text-white">ArikelHuy</Link>
            </div>
            <div className="flex flex-wrap space-x-3">
              <Link to="/posts" className="bg-orange-400 py-1 px-2 rounded-md m-0 flex items-center" aria-current="page">
                <i className="material-icons mr-1">article</i>
                POSTS
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <Routes />

    </>
  )
  
}