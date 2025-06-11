import React from "react";
import { Link } from "react-router-dom";
import './CoursesPage.css';

const CoursesPage = () => {
    return (
        <div id="root"><br/><br/><br/><br/>
            <div id="back">
                <h1>Our Academic Programs</h1>
                    <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs<br></br> designed to equip students with the <br/> 
                     knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends  <br/> 
                     and academic advancements.</p>
                <h2>Discover Campus Life</h2>
                <hr/>

                
        
                <video width="640" height="360" controls>
                    <source src="/videos/my-home.mp4" type="video/mp4" />
                        
                </video>

                <hr/>


                <h2>Undergraduate Programs (UG)</h2>
                <hr/>
                <ul>
                    <li><b>Bachelor of Science (B.Sc.)</b></li>
                    <ul>
                        <li>Computer Science (3 years)</li>
                        <li>Information Technology (3 years)</li>
                        <li>Biotechnology (3 years)</li>
                    </ul>
                </ul>
                <ul>
                    <li><b>Bachelor of Commerce (B.Com)</b></li>
                    <ul>
                        <li>Accounting & Finance (3 years)</li>
                        <li>Banking & Insurance (3 years)</li>
                    </ul>
                </ul>
                <ul>
                    <li><b>Bachelor of Arts (B.A.)</b></li>
                    <ul>
                        <li>English Literature (3 years)</li>
                        <li>Psychology (3 years)</li>
                    </ul>
                </ul>

                <h2>Postgraduate Programs (PG)</h2>
                <hr/>
                <ul>
                    <li><b>Master of Science (M.Sc.)</b></li>
                    <ul>
                        <li>Computer Science (2 years)</li>
                        <li>Information Technology (2 years)</li>
                    </ul>
                </ul>
                
                <h2>Program Details & Fee Structure (Annual)</h2><br/>
                <table>
                    <thead>
                        <tr>
                            <th> Program Type </th>
                            <th>Course Name	Duration </th>
                            <th>Annual Fee (INR)</th>	
                            <th>Eligibility</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>UG</td>
                            <td>B.Sc. Computer Science</td>
                            <td>3 Years	₹ 85,000 </td>
                            <td>10+2 with PCM (50%)</td>
                        </tr>
                        <tr>
                            <td>UG</td>
                            <td>B.Com. Accounting & Finance	</td> 
                            <td>3 Years	₹ 70,000</td>
                            <td>10+2 Commerce (45%)</td>
                        </tr>
                        <tr>
                            <td>PG	M.Sc.</td> 
                            <td>Information Technology </td>
                            <td>2 Years	₹ 95,000</td>
                            <td>B.Sc. IT/CS (50%)</td>
                        </tr>
                    </tbody>
                </table>
            
        <section class="specialized-courses-section">
            <h2>Specialized & Vocational Courses</h2>
            <p>
                In addition to traditional degree programs, we offer various certificate and diploma courses in areas
                like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing
                specialized training for career enhancement.
            </p>
        </section>

        <section className="inquiry-section">
            <p>Have questions about a specific course?</p>
            <button className="inquire-btn">Inquire About Courses</button>
            

                <img src="/images/chatbot_avatar.png" alt="Chatbot Avatar" className="chatbot-avatar" /> 
            </section>
            

            {/* You can add a footer component or just a footer div here */}
            {/* <footer>
                <p>&copy; 2025 Vivekanand College. All rights reserved.</p>
            </footer> */}
            </div>
        </div>
    );

};
export default CoursesPage