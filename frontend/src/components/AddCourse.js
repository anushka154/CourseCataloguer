import { useEffect, useState } from "react";
import { Form, FormGroup, Input, Container, Button } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse = () => {

    useEffect(() => {
        document.title = "Add Course"
    }, []);

    const [course, setCourse] = useState({});
    
    //form handler function
    const handleForm = (e) => {
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/courses`,data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Course added succesfully");
                setCourse({id: "", title: "", description: ""});
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.success("Something went wrong");
            }
        );
    };

    return (
        <>
        <div className="mt-3 p-3" style={{ backgroundColor: '#ffffff' }}>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor="userId">Course Id</label>
                    <Input 
                    type="text" 
                    placeholder="Enter here" 
                    name="userId" 
                    id="userId"
                    onChange={(e) => {
                        setCourse({...course, id:e.target.value});
                    }}
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="title">Course Title</label>
                    <Input type="text" 
                    placeholder="Enter title here" 
                    name="title" 
                    id="title"
                    onChange={(e) => {
                        setCourse({...course, title:e.target.value});
                    }} />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="description">Course Description</label>
                    <Input 
                    type="textarea" 
                    placeholder="Enter here" 
                    name="description" 
                    id="description" 
                    style={{ height: 150 }}
                    onChange={(e) => {
                        setCourse({...course, description:e.target.value});
                    }} />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" style={{ backgroundColor: '#774bef', color: 'white' }}>Add Course</Button>
                    <Button type="reset" style={{ backgroundColor: '#46c533', color: 'white', marginLeft: '1rem' }} 
                    onClick={() => {
                        setCourse({id: "", title: "", description: ""});
                    }}
                    >Clear</Button>
                </Container>
            </Form>
            </div>
        </>
    )
}

export default AddCourse;