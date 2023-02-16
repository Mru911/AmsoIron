import React, { Fragment, useRef } from "react";
import emailjs from "@emailjs/browser";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import catalog from "./../../assets/amosImpex.pdf";

const Faq = () => {
  

  
  return (
    <Container className=" mt-7 mb-5">
      <Fragment>
        <section className="contact">
          <div className="contact-heading">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              Do you have a catalog?
            </div>
            <div className="collapse-content">
              <p>
                Yes! You can
                <label htmlFor="my-modal-3" className="text-slate-500">
                  &nbsp; Click Here &nbsp;
                </label>
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor="my-modal-3"
                      className="btn-sm btn-circle absolute right-2 top-2 cursor-pointer"
                    >
                      ✕
                    </label>
                    <p className="py-4">
                      <div className="formf">
                        <form>
                          <h2 className="text-xl font-semibold"> To Download Catalog</h2>
                          <label className="text-xl font-semibold"> Full Name</label>
                          <input className="formmrug  border-black " type="text" name="user_name" placeholder="Your Full Name" />
                          <label className="text-xl font-semibold">Email</label>
                          <input className="formmrug border-black" type="email" name="user_email" placeholder="Email Id" />

                          <input className="btn btn-primary border-black" type="submit" value="Send" />
                        </form>
                      </div>{" "}
                    </p>
                  </div>
                </div>
                to request a soft copy or you can check out our Design Ideas to
                see different designs Iron Doors. If you have further questions
                feel free to{" "}
                <a className="text-slate-500" href="https://wa.me/919371779757">
                  {" "}
                  Whatsapp us
                </a>
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              Are iron doors good for cold climates?
            </div>
            <div className="collapse-content">
              <p>
                Yes. This is because iron doors are made with a special
                insulation which makes them perfect for colder climates. This
                insulation acts as a buffer to the outdoors, meaning that the
                cold air cannot enter the home and heating cannot escape through
                the doors. This also makes iron doors a more energy efficient
                option.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              How to clean an iron door?
            </div>
            <div className="collapse-content">
              <p>
                Cleaning an iron door is a very simple process. Every three
                months you should wipe and clean the door with Murphy’s oil.
                This should only take a few minutes and will keep your wrought
                iron door looking beautiful and clean.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              Do these doors come with a warranty?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! In fact, Iron doors Limited Lifetime Warranty is the
                best of any iron door manufacturer. A Limited Lifetime Warranty
                on door structure and 2 years on the finish.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              Can I put one of your doors in my existing home?
            </div>
            <div className="collapse-content">
              <p>
                Yes! Our doors can be made to order. We can make our doors to
                the exact dimension of your existing door opening.{" "}
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              If the picture of the door I want on your website/catalog has a
              flat top, can I get the same door with an eyebrow?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we will make any door in any style that you want. Round
                top, eyebrow in square jam, flat top, transom, etc.{" "}
              </p>
            </div>
          </div>
        </section>
      </Fragment>
    </Container>
  );
};

export default Faq;
