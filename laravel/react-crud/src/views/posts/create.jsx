// import useState
import { useState } from "react";

// import useNavigate
import { useNavigate } from "react-router-dom";

// import API
import api from "../../api";


export default function PostCreate() {

    // define state
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // state validation
    const [errors, setErrors] = useState([]);

    // useNavigate
    const navigate = useNavigate();

    // method handle file change
    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    }

    // method store post
    const storePost = async (e) => {
        e.preventDefault();

        // init formData
        const formData = new FormData();

        //append data
        formData.append('image', image);
        formData.append('title', title);
        formData.append('content', content)

        //send data with api
        await api.post('/api/posts', formData)
            .then(() => {
                
                //redirect to posts index
                navigate('/posts');

            })
            .catch(error => {
                
                //set errors response to state "errors"
                setErrors(error.response.data);
            })
    }

    return (
         <div className="my-10 mx-5 py-8 bg-white p-5">
            <div className="">
                <form onSubmit={storePost}>
                    
                    <div className="mb-3 flex items-center">
                        <label className="w-1/4 px-2">Image</label>
                        <div className="w-3/4">
                            <input type="file" onChange={handleFileChange} className="block w-full text-xs text-gray-900 border border-gray-300 p-1 rounded-md cursor-pointer bg-gray-50 focus:outline-none"/>
                            {
                                errors.image && (
                                    <div className="bg-red-300 p-2 rounded-md text-red-800">
                                        {errors.image[0]}
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="mb-3 flex items-center">
                        <label className="w-1/4 px-2">Title</label>
                        <div className="w-3/4">
                            <input type="text" className="block w-full px-2 text-sm py-1 text-gray-900 border border-gray-300 rounded-md cursor-pointer p-1 bg-gray-50 focus:outline-none" onChange={(e) => setTitle(e.target.value)} placeholder="Title Post"/>
                            {
                                errors.title && (
                                    <div className="bg-red-300 p-2 rounded-md text-red-800">
                                        {errors.title[0]}
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="p-2 mb-2">Content</label>
                        <textarea className="block p-2 m-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none" onChange={(e) => setContent(e.target.value)} rows="5" placeholder="Content Post"></textarea>
                        {
                            errors.content && (
                                <div className="bg-red-300 p-2 rounded-md text-red-800">
                                    {errors.content[0]}
                                </div>
                            )
                        }
                    </div>

                    <button type="submit" className="w-full m-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">Save</button>
                </form>
            </div>
        </div>

    )
}