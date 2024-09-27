// import useState dan useEffect
import { useState , useEffect } from "react";

// import api
import api from "../../api";

// import link
import { Link } from "react-router-dom";


export default function PostIndex() {

    // init state
    const [posts, setPosts] = useState([]);

    // define method (arrow function)
    const fetchDataPosts = async () => {
        // fetch data from API with axios
        await api.get('/api/posts')
            .then(response => {
                // asign response data to state "posts"
                setPosts(response.data.data.data);
            })
    }

    //run hook useEffect
    useEffect(() => {
        
        //call method "fetchDataPosts"
        fetchDataPosts();

    }, []);

    // method deletepost
    const deletePost = async (id) => {
        // delete with api
        await api.delete(`/api/posts/${id}`)
            .then(response => {

                // call method "fetchDataPosts"
                fetchDataPosts();
            })

    }


    return (
        <div className="bg-white m-4 rounded-md shadow-sm p-2">
            <div className="my-4">
                <Link to="/posts/create" className="bg-blue-400 py-2 px-3 rounded-md">ADD NEW POST</Link>
                <div className="mt-4 ">
                    <div className="relative overflow-x-auto">
                        <table className="text-center w-full text-sm rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100 rounded">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Image</th>
                                    <th scope="col" className="px-6 py-3">Title</th>
                                    <th scope="col" className="px-6 py-3">Content</th>
                                    <th scope="col" className="px-6 py-3 w-1/4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts.length > 0 
                                        ? posts.map((post, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                                <td className="text-center ">
                                                    <img src={post.image} alt={post.title} width="200" className="rounded w-20 h-20 object-contain" />
                                                </td>
                                                <td className="px-6 py-4">{ post.title} </td>
                                                <td className="px-6 py-4">{ post.content }</td>
                                                <td className="w-1/4 text-black">
                                                    <div className="text-center flex justify-center px-8">
                                                        <Link to={`/posts/edit/${post.id}`} className="bg-fuchsia-600 p-2 rounded m-1">EDIT</Link>
                                                        <button onClick={() => deletePost(post.id)} className="bg-red-700 p-2 rounded m-1" >DELETE</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            )) 
                                        :   <tr>
                                                <td colSpan="4" className="text-center">
                                                    <div className="bg-red-300 p-2 rounded-md text-red-800">
                                                        Data Belum Tersedia!
                                                    </div>
                                                </td>
                                            </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}