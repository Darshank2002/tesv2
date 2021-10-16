import {React,useState} from 'react';
import {Nav,Container,Row,Form,FormControl,Button,Card,Spinner} from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { HiTrendingUp } from 'react-icons/hi'
import { useLocation } from 'react-router';
import "../static/css/Home.css"

import SingleCard from './SingleCard';

import {useSelector} from 'react-redux';
import { useAuth } from '../contexts/AuthContext';







function Home(props){
    const {currentUser} = useAuth();
    
    const {posts} = useSelector((state)=>state.posts);
    const location = useLocation();
    const[cat,setCat] = useState(0)
    console.log(cat);
    const[searchTerm , setSearchTerm] = useState(location.state?location.state.searchTerm:"")

    const trends = ['Python','Robotics','Circuits','AI','ML']

    const handleChange = (e) => {
        const {value} = e.target
        setSearchTerm(value)
        console.log("searchTerm")
        console.log(searchTerm)
        
    }

    const searchedPosts = !searchTerm? posts: posts.filter(
        (post) =>{
            return post.postTitle.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        }
    )


    const filteredPosts = !cat ? searchedPosts: searchedPosts.filter(
        (post) => {
          if(cat === post.postType){
              console.log("Inside Here!")
          return post
        }
        }
      );

return(
    <div className="outerDiv">
    <Container id="Home">
        <Row  className="justify-content-center" id="searchBar">
        <div className="col-12 col-md-6">
            <Form className="d-flex">
            <FormControl
            type="search"
            size="lg"
            className="mr-2"
            aria-label="Search"
            value = {searchTerm}
            onChange={handleChange}
            
            
            
            />
            <Button variant="outline-success" type="submit"><FaSearch/></Button>
        </Form>         
        </div>
        <div className="col-12 col-md-4"></div>
       
        </Row>    
        <Row id="TabsNav" className="justify-content-center">

        <div className="col-12 col-md-6">
        
                <div className="text-center" id="Types">
                                <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item  onClick={()=>setCat(0)}>
                                    <Nav.Link  href="#all">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item onClick={()=>setCat("videos")}>
                                    <Nav.Link href="#videos">Videos</Nav.Link>
                                </Nav.Item>
                                <Nav.Item onClick={()=>setCat("courses")}>
                                    <Nav.Link href="#courses">Courses</Nav.Link>
                                </Nav.Item>
                                <Nav.Item onClick={()=>setCat("articles")}>
                                    <Nav.Link href="#articles">Articles</Nav.Link>
                                </Nav.Item>

                                <Nav.Item onClick={()=>setCat("books")}>
                                    <Nav.Link href="#books">Books</Nav.Link>
                                </Nav.Item>                        
                                </Nav> 
                    
                    </div>
                    
                    {!posts.length ? 
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>:
                        <div id="CardGrid">
                        <h6>{filteredPosts.length} search results</h6>
                        
                            {filteredPosts.map((post)=>(
                                <SingleCard post={post} knowMoreShow={true} showOpen={true} id={post._id} style={{margin: "20px 0px 20px 0px"}}/>
                            ))}
                        </div>
                    }        

        </div>
        <div className="col-10 col-md-4" id="sidebar">
        <div id="side-inner">
        <Card className="mx-auto">
        <Card.Body>
        <h6 className="text-center">Trending Topics <HiTrendingUp/> </h6>
        <hr></hr>


        {trends.map((trend)=>(
        <div id="trending-element"  onClick={()=>setSearchTerm(trend)}>
        <p>{trends.indexOf(trend)+1}. {trend}</p>
        <hr></hr>
        </div>               
))}
     


        </Card.Body>
        </Card>
        <div id="side-footer">
                
        <span className="text-muted">© 2021 TheEngineeringSphere<br/></span>
        <span className="text-muted"><a href="mailto:theengineeringsphere@gmail.com" className="text-muted">Contact Us</a> •</span>          
          
        <span className="text-muted"><a href="/about" className="text-muted">About</a></span>          

        </div>
      
        </div>

        </div>        
        </Row>
        </Container>
    </div>
)
}

// <span className="text-muted"><a href="/privacy">Privacy Policy</a> •</span>          
//         <span className="text-muted"><a href="/cookies">Cookie Policy</a> •</span>  

export default Home;
