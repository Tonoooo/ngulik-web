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
         <div className="mt-5 bg-white p-5">
            <div className="">
                <form onSubmit={storePost}>
                
                    <div className="mb-3 flex items-center">
                        <label className="px-2 mx-2">Image</label>
                        <input type="file" onChange={handleFileChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"/>
                        {
                            errors.image && (
                                <div className="alert alert-danger mt-2">
                                    {errors.image[0]}
                                </div>
                            )
                        }
                    </div>

                    <div className="mb-3">
                        <label className="">Title</label>
                        <input type="text" className="" onChange={(e) => setTitle(e.target.value)} placeholder="Title Post"/>
                        {
                            errors.title && (
                                <div className="alert alert-danger mt-2">
                                    {errors.title[0]}
                                </div>
                            )
                        }
                    </div>

                    <div className="mb-3">
                        <label className="">Content</label>
                        <textarea className="" onChange={(e) => setContent(e.target.value)} rows="5" placeholder="Content Post"></textarea>
                        {
                            errors.content && (
                                <div className="bg-red-300 p-2 rounded-md text-red-800">
                                    {errors.content[0]}
                                </div>
                            )
                        }
                    </div>

                    <button type="submit" className="">Save</button>
                </form>
            </div>
        </div>

    )
}