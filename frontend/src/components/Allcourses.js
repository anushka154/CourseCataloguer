import { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses = () => {

    useEffect(() => {
        document.title = "All Courses";
    }, []);

    //function to call server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //success
                //console.log(response);
                console.log(response.data);
                toast.success("Courses have been loaded",{
                    position: "bottom-center",
                  });
                setCourses(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    };

    //calling loading course function
    useEffect(() => {
        getAllCoursesFromServer();
    },[]);

    const [courses, setCourses] = useState([]);

    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id !== id));
    }



    return(
        <div className="mt-3 p-3" style={{ backgroundColor: '#ffffff' }}>
            <h1 className="text-center">All Courses</h1>
            <p>List of courses are as follows</p>
            {
                courses.length > 0
                ? courses.map((item) => <Course key={item.id} course={item} put={getAllCoursesFromServer} update={updateCourses} updatecourse={getAllCoursesFromServer}/>)
                :"No courses"
            }
            </div>
    )
}

export default Allcourses;