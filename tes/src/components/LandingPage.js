import {React,useState} from 'react';
import {Container,Row,Button,Form,FormControl} from 'react-bootstrap'
import "../static/css/Landing.css"
import landing from "../static/assets/landing.jpg"
import { FaSearch } from 'react-icons/fa'
import {useHistory} from 'react-router-dom';



function LandingPage(props){
    const[searchTerm , setSearchTerm] = useState("");
    const [loader, setLoader] = useState(false);

    const history = useHistory();


    const handleChange = (e) => {
      const {value} = e.target
      setSearchTerm(value)
      console.log(searchTerm)
      
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // let path = '/home?searchTerm='+searchTerm;
    history.push({
      pathname:"/home",
      state: { searchTerm }
    });
    
  };

    return(
        <div>
        <Container id="landing">
            <Row className="justify-content-center text-center flex-column-reverse flex-md-row" id="landing-search">
            <div className="col-12 col-md-6 align-self-center">
            <h2 id="MainTagline">
            Get Best Engineering Resources from the Internet, 
            <br></br>Ranked by the Learners
            </h2>
            <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
            type="search"
            size="lg"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            id="LandingSearchBox"
            value={searchTerm} 
            onChange={handleChange}
            />
            <Button variant="outline-success" type="submit"><a href="/home"><FaSearch/></a></Button>
            </Form>
            
            </div>
            <div className="col-12 col-md-6">
            <img id="LandingImg" src={landing} alt="" />
            </div>

            </Row>
        </Container>


        </div>
    )
}
 export default LandingPage;