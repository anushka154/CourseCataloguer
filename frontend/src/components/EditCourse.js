import { useEffect, useState } from "react";
import { Form, FormGroup, Input, Container, Button } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const EditCourse = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    const fetchCourseData = () => {
        axios.get(`${base_url}/courses/${id}`)
            .then(response => {
                setCourse(response.data);
            })
            .catch(error => {
                console.error('Error fetching course:', error);
            });
    };

    useEffect(() => {
        fetchCourseData();
    }, [id]);

    const updateCourse = (e) => {
        e.preventDefault();
        axios.put(`${base_url}/courses`, course)
            .then(response => {
                console.log('Course updated successfully:', response.data);
                toast.success("Course updated successfully");
            })
            .catch(error => {
                console.error('Error updating course:', error);
                toast.error("Failed to update course");
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourse(prevCourse => ({
            ...prevCourse,
            [name]: value
        }));
    };

    if (!course) {
        return <div>Loading...</div>; // Render loading indicator while fetching course data
    }

    return (
        <div className="mt-3 p-3" style={{ backgroundColor: '#ffffff' }}>
            <h1 className="text-center my-3">Edit Course Details</h1>
            <Form>
                <FormGroup>
                    <label htmlFor="title">Course Title</label>
                    <Input
                        type="text"
                        placeholder="Enter title here"
                        name="title"
                        id="title"
                        value={course.title}
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="description">Course Description</label>
                    <Input
                        type="textarea"
                        placeholder="Enter here"
                        name="description"
                        id="description"
                        value={course.description}
                        onChange={handleInputChange}
                        style={{ height: 150 }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" onClick={updateCourse} style={{ backgroundColor: '#774bef', color: 'white' }}>Edit</Button>
                    <Button type="reset" style={{ backgroundColor: '#46c533', color: 'white', marginLeft: '1rem' }}>Clear</Button>
                </Container>
            </Form>
        </div>
    );
}

export default EditCourse;
