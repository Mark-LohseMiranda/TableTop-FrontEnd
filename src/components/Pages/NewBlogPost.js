import React, {useState} from "react";
import API from "../../utils/API"

// async function createBlog(content) {
//     const getUserInfo = await JSON.parse(localStorage.getItem("token"))
//     console.log(getUserInfo)
//     return fetch(`http://localhost:3001/api/blogs/${getUserInfo.id}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(content)
//     })
//       .then(data => data.json())
//    } 

function NewBlogPost( {token,userState} ) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleBlogInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === 'title') {
            setTitle(inputValue);
        } else if (inputType === 'description'){
            setDescription(inputValue);
        }
      };

      const createBlogPost = () => {
        const createdPost = {
            title,
            description,
        }
        API.createNewBlogPost(createdPost,token,userState.id).then((res) => {
            console.log(res);
            console.log("I created a Post!");
        })
    }

      const handleBlogSubmit = async (e) => {
        e.preventDefault();
        setTitle('');
        setDescription('');
        createBlogPost();
      };

    return (
        <>
        <form className="my-5 py-5 text-center" id="signup-form"
        onSubmit={handleBlogSubmit}
        >
            <h4>New post!</h4>
            <input className="m-6" id="username-signup"
                value={title}
                name="title"
                onChange={handleBlogInputChange}
                type="text"
                placeholder="title"
            />
            <br/>
            <input className="m-1" id="email-signup"
                value={description}
                name="description"
                onChange={handleBlogInputChange}
                type="text"
                placeholder="description"
            />
            <br/>
            <button className="btn" id="signup-btn">Submit</button>
        </form>
          </>
        // <Form onSubmit={handleBlogSubmit}>
        // <Form.Group className="mb-3" controlId="username-signup"  value={title} name="title" onChange={handleBlogInputChange}>
        //   <Form.Label>Post Title</Form.Label>
        //   <Form.Control type="text" placeholder="EX: Looking for a group!"/>
        // </Form.Group>
        // <Form.Group className="mb-3" controlId="email-signup" value={description} name="description" onChange={handleBlogInputChange}>
        //   <Form.Label>Post content</Form.Label>
        //   <Form.Control as="textarea" rows={3} />
        // </Form.Group>
        // <Button variant="primary" type="submit">
        // Submit
        // </Button>
        // </Form>
    );
  }
  
  export default NewBlogPost;