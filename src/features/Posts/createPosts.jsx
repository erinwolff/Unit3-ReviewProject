import React, { useState } from 'react'
import { useAddPostsMutation, setPost } from './postSlice'
import { useDispatch } from 'react-redux';

function CreatePosts() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    willDeliver: false
  });

  // data that comes from the slice
  const [data] = useAddPostsMutation();
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();

  const onNewPostSubmit = async (e) => {
    e.preventDefault();
    
    if (error) {
      return <div>{error}</div>
    }

    // write dispatch function here
    try {
      const response = await data(formData).unwrap();
      dispatch(setPost(response));
    } catch (error) {
      console.error('This is the error: ', error);
    }

  };

  // write handle change function here
  const handleChange = (e) => {
    setError(null)
    setLoading(true)
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>

      <div>
        <form onSubmit={onNewPostSubmit}>
          <label className="title">
            Title:
            <input name='title' value={formData.title} type="string" onChange={handleChange} />
          </label>
          <br />
          <label className="description">
            Description:
            <input name='description' value={formData.description} type="string" onChange={handleChange} />
          </label>
          <br />
          <label className="price">
            Price:
            <input name='price' value={formData.price} type="string" onChange={handleChange} />
          </label>
          <br />
          <label className="location">
            Location:
            <input name='location' value={formData.location} type="string" onChange={handleChange} />
          </label>
          <br />
          <label className="delivery">
            Delivery?
            <input name='delivery' checked={formData.willDeliver} type="checkbox" onChange={handleChange} />
          </label>
          <br />
          <button type="submit" name="submit">Submit</button>
        </form>
      </div>
    </>
  );
}


export default CreatePosts