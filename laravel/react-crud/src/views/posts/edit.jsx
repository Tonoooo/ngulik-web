// import state
import { useState , useEffect } from 'react';
// import navigate
import { useNavigate , useParams } from 'react-router-dom';
// import api
import api from '../../api';


export default function PostEdit() {
    
    //define state
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    //state validation
    const [errors, setErrors] = useState([]);

    //useNavigate
    const navigate = useNavigate();

    // destruct id
    const {id} = useParams();

    // method fetchdetailpost
    const fetchDetailPost = async () => {
        // fetch data
        await api.get(`/api/posts/${id}`)
            .then(response => {
                // asign to state
                setTitle(response.data.data.title);
                setContent(response.data.data.content);
            })

    }

    // hook useEffect -- agar method fetchdetailpost bisa dijalankan ketika halaman diakses
    useEffect(() => {
        // call method fetchdetailpost
        fetchDetailPost();
    }, []);


    // method handel file change
    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    }

    // method update post
    const updatePost = async (e) => {
        e.preventDefault();

        // init FormData
        const formData = new FormData();

        //append data
        formData.append('image', image);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('_method','PUT')

        // send data with api
        await api.post(`/api/posts/${id}`, formData)
            .then(response => {
                // redirect to home
                navigate('/posts');
            })
            .catch(error => {
                //set errors response to state "errors"
                setErrors(error.response.data.errors);
            })
            
    }



    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow">
                        <div className="card-body">
                            <form onSubmit={updatePost}>

                                <div className='mb-3'>
                                    <label className='form-label fw-bold'>Image</label>
                                    <input type="file" onChange={handleFileChange} className='form-control' />
                                    {
                                        errors.image && (
                                            <div className='alert alert-danger mt-2'>
                                                {errors.image[0]}
                                            </div>
                                        )
                                    }
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label fw-bold'>Title</label>
                                    <input type="text" className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title Post' />
                                    {
                                        errors.title && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.title[0]}
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Content</label>
                                    <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)} rows="5" placeholder="Content Post"></textarea>
                                    {
                                        errors.content && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.content[0]}
                                            </div>
                                        )
                                    }
                                </div>

                                <button type='submit' className='btn btn-md btn-primary rounded-sm shadow border-0'>Update</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}