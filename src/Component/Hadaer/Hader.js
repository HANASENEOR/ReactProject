import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import './Hader.css'


function Headers(props) {


  function checkStatus(e){
    debugger
    console.log(e.target);
    if(e.target.checked){
      //זריקת אקשן של שינוי סטטוס ולשנות בסטור את הסטטוס למה שעכשיו בחור
      // e.target.id
    }
    


  }


  return (


    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <h2><u><b>  ! שלום משתמש יקר</b> </u></h2>
      <br></br>
      <p className="choose"><b><u>    בחר סוג התחברות</u></b></p>
      <Form className="radio">
        {
          <div className="mb-3">
            <div >
              <b>      כניסה בתור ילד</b>
              <Form.Check
                inline
                id="child"
                type={"radio"}
                name="group1"
                onChange={(e) => checkStatus(e)}
              />

            </div>
            <br></br>
            <b>   כניסה בתור מתנדב</b>
            <Form.Check
              inline
              name="group1"
              id="volunteer"
              type={"radio"}
              onChange={(e) => checkStatus(e)}
            />
          </div>
        }
      </Form>


    </>
  )

}
export default Headers;
