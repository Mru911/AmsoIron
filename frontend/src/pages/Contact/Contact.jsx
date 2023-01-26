import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

import { Checkbox } from "@material-ui/core";
import "./contact.css";

const Contact = () => {
  return (
    // <div className="contact">
      <Container className=" mt-7 mb-5">
       
        <Fragment>
          <section className="contact">
            <div className="contact-heading">
              <h2>Contact-Us To get free estimate</h2>
            </div>
            <div className="containerc">
              <div className="row">
                <div className="column">
                  <div className="contact-widget">
                    <div className="contact-widget-item">
                      <div className="cicon">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="ctext">
                        <h4>Address</h4>
                        <p>
                          Shivaji putala, 1st Floor, Flat No. 1, Laxmi Heights,
                          Jadhav Galli, <br /> igatpuri, Ghoti, Nashik,
                          Maharashtra, 422402
                        </p>
                      </div>
                    </div>
                    <div className="contact-widget-item">
                      <div className="cicon">
                        <i class="fa-solid fa-phone"></i>
                      </div>
                      <div className="ctext">
                        <h4>Contact Us</h4>
                        <p>+91 93717 79757</p>
                      </div>
                    </div>
                    <div className="contact-widget-item">
                      <div className="cicon">
                        <i class="fa-regular fa-envelope"></i>
                      </div>
                      <div className="ctext">
                        <h4>Email</h4>
                        <p>amsoimpex@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="contact-form">
                    <form action="#">
                      <TextField
                        className="formmrug"
                        label=" Full Name"
                        name="name"
                        margin="normal"
                        required
                        variant="outlined"
                        autoComplete="off"
                        fullWidth
                      />
                      <TextField
                        className="formmrug"
                        label="Email"
                        name="email"
                        margin="normal"
                        required
                        variant="outlined"
                        autoComplete="off"
                        fullWidth
                      />
                      <TextField
                        className="formmrug"
                        label="Phone"
                        name="phone"
                        margin="normal"
                        required
                        variant="outlined"
                        autoComplete="off"
                        fullWidth
                      />
                      <TextField
                        className="formmrug"
                        label="Address"
                        name="address"
                        margin="normal"
                        required
                        variant="outlined"
                        autoComplete="off"
                        fullWidth
                      />
                      <TextField
                        className="formmrug"
                        label="ZIP code"
                        name="code"
                        margin="normal"
                        required
                        variant="outlined"
                        autoComplete="off"
                        fullWidth
                      />
                      <label className="mrugank5">
                        Preferred contact method
                      </label>
                      <br />
                      <label htmlFor="">Whatsapp</label>
                      <Checkbox className="rounded" />
                      <label htmlFor="">Email</label>
                      <Checkbox />
                      <br />
                      <label className="mrugank5">
                        Project (Feel free to select more than one)
                      </label>
                      <br />
                      <label htmlFor="">Classic Iron Door</label>
                      <Checkbox />
                      <label htmlFor="">Contemporary Iron Door</label>
                      <Checkbox />
                      <label htmlFor="">Gates and Fences</label>
                      <Checkbox />
                      <label htmlFor="">Handrails and Railings</label>
                      <Checkbox />
                      <label htmlFor="">Wine Cellar Door</label>
                      <Checkbox />
                      <label htmlFor="">Custom project</label>
                      <Checkbox />
                      <label htmlFor="">OTHER</label>
                      <Checkbox />
                      <p className="contact-para">
                        Tell us more about your project (e.g. Single or Double
                        door, measurements, finishes, etc.){" "}
                      </p>
                      <textarea
                        className="textarea textarea-bordered w-[500px]"
                        placeholder="Additional Information"
                        required
                        autoComplete="off"
                      ></textarea>
                      <br />
                      <p className="mrugank5">Photo of your area</p>
                      <input type="file" className="file-input mb-2 " />
                      <br />
                      <input
                        className="btn"
                        type="submit"
                        value="Send"
                        variant="contained"
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="map">
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.9350052842524!2d73.62540297509308!3d19.715391081625302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd856060f2fa99%3A0x584656e716869710!2sJadhav%20Galli!5e0!3m2!1sen!2sin!4v1673024865608!5m2!1sen!2sin"
                      width="95%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
        </Container>
        
  );
};

export default Contact;
// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact
