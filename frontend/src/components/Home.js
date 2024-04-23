import { useEffect } from "react";
import {Container, Button} from "reactstrap"

const Home = () => {

    useEffect(() => {
        document.title = "Home"
    }, []);

    return(
        <div className="text-center mt-3 p-5" style={{ backgroundColor: '#ffffff', height: '280px' }}>
            <h1>Welcome to the Courses</h1>
            <p>You can add your course here</p>
            <Container>
                <Button style={{ backgroundColor: '#774bef', color: 'white'}} href="/add-course">Start using</Button>
            </Container>
        </div>
    )
}

export default Home;