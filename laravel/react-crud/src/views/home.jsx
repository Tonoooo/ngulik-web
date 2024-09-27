//import Link from react router dom
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="mx-4 my-5 bg-white p-4 pb-6 rounded-md shadow-sm">
            <div className="flex w-full">
                <Link to="/posts" className="w-full justify-center bg-orange-400 py-2 mb-3 px-2 rounded-md m-0 flex items-center" aria-current="page">
                    <i className="material-icons mr-1">article</i>
                    POSTS
                </Link>
            </div>
            <div className="">
                <h1 className="text-center my-3">REACT (VITE) + LARAVEL 10</h1>
                <a href="https://santrikoding.com/tutorial-restful-api-laravel-10-1-install-laravel-10" className="text-orange-300 underline">Belajar CRUD dengan React dan Laravel 10 di SantriKoding.com</a>

                <p className="my-3">Restfull API, Backend = Laravel 10, Frontend = React(vite)</p>
            </div>
        </div>
    )
}