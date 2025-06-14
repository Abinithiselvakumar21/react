import React from "react";
import './About.css';

function About() {
    return (
        <>
            <div id="about">
                <div className="container">
                    <div className="about-content-left">
                        <h1 style={{marginLeft:"20%"}}>Friends and Family</h1>
                        <h2 style={{marginLeft:"80px"}}> All About Adventure and Tourist Place</h2>
                        <p className="about-p">
                            Tamil Nadu offers a variety of adventure and tourist experiences, 
                            from exploring historical temples and beaches to engaging in outdoor activities
                             like trekking and paragliding. The state's diverse landscapes, including hills,
                              forests, and coastline, make it a great destination for adventure tourism.
                        </p>
                        
                        <p>Popular adventure activities include trekking in the Western Ghats, paragliding in Yelagiri,
                             and water-based activities like kayaking and windsurfing in the backwaters and coastline.
                         </p>
                              
                    <button className="about-btn">Lean More</button>
                    </div>
                       <div className="about-content-right">
                       <img src="images/baner.jpg" className="images" 
                       alt="my-app" />
                      </div>
                   </div>

                <div className="wave-2"></div>

                </div>
                
                    
        </>
    )
}

export default About;