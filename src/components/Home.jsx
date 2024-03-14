import { useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'
import './Home.css'
import plane_black from '../assets/images/home/plane_black.png'
import plane from "../assets/images/home/plane.jpg";
import offer_1 from '../assets/images/home/carousel/offer_1.jpg'
import offer_2 from '../assets/images/home/carousel/offer_2.jpg'
import offer_3 from '../assets/images/home/carousel/offer_3.png'
import offer_4 from '../assets/images/home/carousel/offer_4.jpg'
import offer_5 from '../assets/images/home/carousel/offer_5.png'
import offer_6 from '../assets/images/home/carousel/offer_6.jpg'
import instagram from '../assets/images/home/footer/instagram.jpg'
import facebook from '../assets/images/home/footer/facebook.png'
import twitter from '../assets/images/home/footer/twitter.png'
import youtube from '../assets/images/home/footer/youtube.png'
import FlightSearch from './home/SearchFlight';
import FlightResults from './home/FlightResults';
import airlines from "../assets/database/airlines/airlines_info";




const Home = ()=>{

    const [searchData, setSearchData] = useState(null);

    const handleSearch = (data) => {
        setSearchData(data);
    };
  
    

    return(
      <>
        <div style={{paddingTop:'200px'}}>

          {searchData &&
          <div>
             <FlightResults searchData={searchData} />
          </div>
          }



        {!searchData &&
        
        <div>

          <div className="container mx-5 ">
            <div className='container'>
              <div className="d-inline px-5 py-3 my-2 rounded-5 " style={{backgroundColor:"lightgreen",height:'20px',color:'midnightblue'}}>
                <h3 className="d-inline">Know Before You Go...</h3>
                <img src={plane_black} width='50px' height='50px' style={{marginTop:'-10px'}}   />
              </div>
                       
              <div className="text-center" style={{height:'500px',width:'1200px'}} >
                <img className="rounded-bottom-5 text-center" style={{marginLeft:'150px',marginTop:'4px'}} 
                    src={plane} width="100%" height="100%"/>
              </div>
            </div>
          </div>
        


            {/* Search Box */}

            <div className='container mt-5 rounded-5 border border-2 border-dark' 
                style={{height:'400px',backgroundColor: 'rgb(220, 237, 252)'}}>
                
                  <FlightSearch onSearch={handleSearch} />
                 
              
            </div>
            
          {/* <div className='container mt-5 rounded-5 border border-2 border-dark' 
                style={{height:'400px',backgroundColor: 'rgb(220, 237, 252)'}}>

            <form> */}

            {/* <div className='row mb-3 container text-center' style={{margin:'auto'}}>
                <div className='col mt-6' >
                  <label htmlFor="classType" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    Travel Class
                  </label>
                  <select required className="form-select" id="classType" value={classType} 
                          onChange={(e) => setClassType(e.target.value)} style={{fontSize:'20px'}} >
                            <option value="Economy">Economy</option>
                            <option value="Business">Business Class</option>
                            <option value="First">First Class</option>                
                  </select>     
                </div>
                <div className='col mt-6' >
                  <label htmlFor="tripType" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    Trip Type
                  </label>
                  <select required className="form-select" id="tripType" value={tripType} 
                          onChange={(e) => setTripType(e.target.value)} style={{fontSize:'20px'}} >
                            <option value="One-way">One-way</option>
                            <option value="Round-trip">Round-trip</option>                
                  </select>     
                </div>

              </div> */}

              {/* radiobutton coding */}
              
              {/* <div className="row mb-3 container align-middle border border-1 border-dark border-top-0 rounded-bottom-3 p-2 
                              d-flex justify-content-center" style={{margin:'auto',width:'600px'}}>
                <div className="col-md-3 form-check mt-1" >
                  <input className="form-check-input" type="radio" id="fc1" name="flightClass" value="economy" 
                        style={{fontSize:'20px'}}
                        checked={userSearch.flightClasses=="economy"} 
                        onChange={handleFlightClassChange} />
                  <label htmlFor="fc1" className="form-check-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    Economy
                  </label>
                </div>

                <div className=" col-md-4 form-check mt-1 " >
                  <input className="form-check-input" type="radio" id="fc2" name="flightClass" value="businessClass" 
                        style={{fontSize:'20px'}}
                        checked={userSearch.flightClasses=="businessClass"} 
                        onChange={handleFlightClassChange} />
                  <label htmlFor="fc2" className="form-check-label" style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    Business Class
                  </label>
                </div>

                <div className=" col-md-3 form-check mt-1 " >
                  <input className="form-check-input" type="radio" id="fc3" name="flightClass" value="firstClasss" 
                        style={{fontSize:'20px'}}
                        checked={userSearch.flightClasses=="firstClasss"} 
                        onChange={handleFlightClassChange} />
                    <label htmlFor="fc3" className="form-check-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                      First Class
                    </label>
                </div>

              </div> */}

               {/* <div className='row mb-3 container text-center' style={{margin:'auto',width:'400px'}} >
                <div className="col-md-6 form-check mt-3" style={{margin:'auto'}}   >
                  <button type='button' id='oneway' name='oneway' 
                          className="btn btn-primary rounded-3 p-2" style={{fontSize:'20px',fontWeight:'bold'}}>
                    One Way
                  </button>
                </div>

                <div className="col-md-6 form-check mt-3" style={{margin:'auto'}}>
                  <button type='button' id='roundtrip' name='roundtrip'  className="btn btn-primary rounded-3 p-2" style={{fontSize:'20px',fontWeight:'bold'}}>
                    Round Trip
                  </button>
                </div>

              </div>  */}

               {/* <div className='row mb-3 container' style={{margin:'auto',width:'900px'}}>
                <div className="col-md-3 mt-3" >
                <label htmlFor="origin" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    From
                  </label>
                  <select required  className="form-select" id="origin" value={origin} onChange={(e) => setOrigin(e.target.value)}  
                           style={{fontSize:'20px'}}>
                          <option value="">Select Origin</option>
                          {departCities.map((airport, index) => (
                          <option key={index} value={airport.name}>{airport.name}</option>
                    ))}                    
                  </select>  
                              
                </div>

                <div className="col-md-3 form-check mt-3" >
                  <label htmlFor="destination" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    To
                  </label>
                  <select required  className="form-select" id="destination" value={destination} 
                      onChange={(e) => setDestination(e.target.value)} style={{fontSize:'20px'}} >
                          <option value="">Select Destination</option>
                          {arrivalCities.map((airport, index) => (
                          <option key={index} value={airport.name}>{airport.name}</option>
                    ))}                    
                  </select>                  
                </div>

                <div className="col-md-3 form-check mt-3" >
                  <label htmlFor="date" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    Depart Date
                  </label>
                  <input type="date" required className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)}
                        style={{fontSize:'20px'}} min="2024-02-12" />
                </div>

                <div className="col-md-3 form-check mt-3" >
                  <label htmlFor="returnDate" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    Return Date
                  </label>
                  <input  type="date" className="form-control" id="returnDate" 
                        style={{fontSize:'20px'}} min="2024-02-13"/>
                </div>

              </div>  */}

               {/* <div className='row mb-3 container text-center' style={{margin:'auto'}}>
                <div className='col mt-5'>
                  <button onClick={handleSearch} className="btn btn-primary rounded-3 p-2" 
                          style={{fontSize:'20px',fontWeight:'bold'}} >
                           Search Flights
                            
                  </button>
                </div>

              </div>  */}
        
            {/* </form>

          </div> */}
          


            {/* Carousel */}
            
          <div className='container mt-5'>   
            <h2 style={{color:'midnightblue'}}>---Offers & Discounts---</h2>

            <Carousel className='mb-5'> 

              <Carousel.Item interval={1200} > 
                <img className="d-block w-100 " src={offer_1} alt="Offer1" height={"400rem"} /> 
              </Carousel.Item> 

              <Carousel.Item interval={1200}> 
                <img className="d-block w-100 " src={offer_2} alt="Offer2" height={"400rem"} /> 
              </Carousel.Item> 

              <Carousel.Item interval={1200}> 
                <img className="d-block w-100 " src={offer_3} alt="Offer3" height={"400rem"} /> 
              </Carousel.Item> 

              <Carousel.Item interval={1200}> 
                <img className="d-block w-100 " src={offer_4} alt="Offer4" height={"400rem"} />  
              </Carousel.Item> 

              <Carousel.Item interval={1200}> 
                <img className="d-block w-100 " src={offer_5} alt="Offer5" height={"400rem"} /> 
              </Carousel.Item> 

              <Carousel.Item interval={1200}> 
                <img className="d-block w-100 " src={offer_6} alt="Offer6" height={"400rem"} /> 
              </Carousel.Item> 

            </Carousel> 
  
          </div>   

              {/* FAQ (Frequently Ask Questions) */}
              
          <div className='container mb-5 '>
            <h2 style={{color:'midnightblue'}}>---FAQ's---</h2>

            <Accordion className='border border-2 border-dark rounded-3'>

              <Accordion>

                <Accordion.Item eventKey="0"  className='accordian-body-bg'>
                  <Accordion.Header>
                    <h6>How do I know my reservation was booked ?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    We'll send you an SMS and an email to confirm your flight booking.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className='accordian-body-bg'>
                  <Accordion.Header>
                    <h6>Do I have to pay something extra at the airport ?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    It depends on the airport you're flying from.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className='accordian-body-bg'>
                  <Accordion.Header>
                    <h6>Do I have to show ID proof at the time of check-in ?</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, for domestic flights within India, below are the applicable government issued photo-ids 
                    accepted by the airlines :- <br/>
                      <ul>
                        <li>Voter ID</li>
                        <li>Aadhar Card</li>
                        <li>Driving License</li>
                        <li>Pan Card</li>
                        <li>Passport</li>
                      </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className='accordian-body-bg'>
                  <Accordion.Header>
                    <h6>I've booked my tickets but need to add my child's tickets to my booking. 
                    How do I do it ? </h6>                   
                  </Accordion.Header>
                  <Accordion.Body>
                    Unfortunately, a child cannot be added to an existing reservation. You will need to book a 
                    separate ticket for your child with the airline directly.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className='accordian-body-bg'>
                  <Accordion.Header>
                    <h6>Do I need a visa to enter the country I am visiting or travelling through?</h6> 
                  </Accordion.Header>
                  <Accordion.Body>
                    Every country has its own laws regarding entrance by non-citizens. Please check the specific laws governing 
                    the country you are visiting. It is your sole responsibility to obtain all necessary documentation prior 
                    to your departure. Regardless of the ticket you purchase, applicable immigration laws apply.
                    Please check all appropriate laws for the country you are visiting.
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>

            </Accordion>

          </div> 

          {/* footer */}

          <div className='container-fluid rounded-5 rounded-bottom-0 pb-1'  style={{backgroundColor: 'rgb(220, 237, 252)'}} >
            <h3 className='text-center pt-3' style={{color:'midnightblue'}}>We work with more than 300 partners to bring you better travel deals</h3>

            <div className="container text-center mt-5" style={{width:'800px'}}>
              <div className="row">

                {
                  airlines.map(air=>
                    <div key={air.id} value={air.id} className="col-md-4">
                      <Link to={"/airlines-desc/"+air.id} key={air.id} className="btn btn-primary rounded-3 p-2 m-3" 
                            style={{fontSize:'20px',fontWeight:'bold'}}>
                        {air.name}
                      </Link>
                    </div>
                  )
                }

                














                

                {/* <div className="col-md-4">         
                  <Link to="/airlines-desc" className="btn btn-primary rounded-3 p-2 m-3" style={{fontSize:'20px',fontWeight:'bold'}}>
                      Indigo
                  </Link>
                </div>

                <div className="col-md-4">          
                  <Link to="/airlines-desc" className="btn btn-primary rounded-3 p-2 m-3" style={{fontSize:'20px',fontWeight:'bold'}}>
                      Asap Tickets
                  </Link>
                </div>

                <div className="col-md-4">          
                  <Link to="/airlines-desc" className="btn btn-primary rounded-3 p-2 m-3" style={{fontSize:'20px',fontWeight:'bold'}}>
                      Priceline
                  </Link>
                </div>

                <div className="col-md-4">          
                  <Link to="/airlines-desc" className="btn btn-primary rounded-3 p-2 m-3" style={{fontSize:'20px',fontWeight:'bold'}}>
                      Expedia
                  </Link>
                </div>

                <div className="col-md-4">          
                  <Link to="/airlines-desc" className="btn btn-primary rounded-3 p-2 m-3" style={{fontSize:'20px',fontWeight:'bold'}}>
                      justfly.com
                  </Link>
                </div> */}

              </div>
      
            </div>

            <div className='container-fluid row mt-3' >            
              <h5 className='d-flex justify-content-end mb-3' style={{paddingRight:'100px',color:'midnightblue'}} >Follow Us :- </h5>
            </div>

            <div className='container-fluid pt-1 mb-3 row ' >
              <div className='d-flex justify-content-end mx-3'  >
                <img src={instagram} alt='Instagram' className='mx-2' style={{borderRadius:'50%'}} height={40} width={40} /> 
                <img src={facebook} alt='Facebook' className='mx-2' style={{borderRadius:'50%'}} height={40} width={40} /> 
                <img src={twitter} alt='Twitter' className='mx-2' style={{borderRadius:'50%'}} height={40} width={40} />
                <img src={youtube} alt='Youtube' className='mx-2' style={{borderRadius:'50%'}} height={40} width={40} /> 
           
              </div>                
            </div>

          </div>
          </div>
              }

              

        </div>

        </>
        
    ) 

}

export default Home;