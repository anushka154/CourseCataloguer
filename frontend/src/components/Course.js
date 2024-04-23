import { Card, CardBody, CardSubtitle, CardText, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import EditCourse from "./EditCourse";
import { useEffect } from "react";

const Course = ({ course, update, put }) => {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success("Course deleted");
                update(id);
            },
            (error) => {
                toast.success("Course not deleted!! Server problem");
            }
        )
    }

    useEffect(() => {
        console.log("demo");
        console.log(course);
        console.log(put);
    },[])

    return (
        <div className="p-1">
            <Card className="text-center" style={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
                <CardBody>
                    <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                    <CardText>{course.description}</CardText>
                    <Container className="text-center">
                        <Button style={{ backgroundColor: '#6838ee', color: 'white' }} onClick={() => {
                            deleteCourse(course.id);
                        }}>Delete</Button>
                        <Link style={{ backgroundColor: '#46c533', color: 'white', marginLeft: '1rem' }} className="btn ms-3" to={`/edit-course/${course.id}`} onClick={() =>{
                            // <EditCourse course={course} put={put} />
                        }}>Update</Link> 
                        
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
}

export default Course;