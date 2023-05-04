import React from "react";
import { Link } from "react-router-dom";

import './guestDetailDay.scss'

const GuestDetailsDay = () => {
  return (
    <>
      <main
        className="guestDetail__mainWrapper"
      >
        <form className="guestDetail__form">
          <div
            className="guestDetail__form--detail-section"
          >
            <h1 className="guestDetail__form--detail-section-heading">
              Guest(s) Details
            </h1>
            <p className="guestDetail__form--detail-section-description" >
              Please select the number of guests you want to book for (infants
              and toddlers included).
              <br />
              By proceeding you understand your payment is transferable but
              non-refundable in line
              <br />
              with www.jarabeachresort.com/terms
            </p>

            {/* this is the part to determine the number of adults and children */}

            <br />
            <br />

            <div className="guestDetail__form--form-group-1">
              <input
                className="std-base-input"
                type="number"
                id="distance"
                min="0"
                max="100"
                step="1"
                placeholder="No of Guests"
              />
            </div>

            {/* this is the part to determine the age of  children */}

            <h2> Who is booking ? </h2>

            <div class="details-container" >
              <div
                class="first-box"
              >
                <input
                  className="std-base-input"
                  type="text"
                  id="distance"
                  min="0"
                  max="17"
                  step="1"
                  placeholder="First Name"
                  style={{
                    width: "350px",
                  }}
                />
              </div>

              <div
                class="second-box"
              >
                <input
                  className="std-base-input"
                  type="text"
                  id="distanceMax"
                  min="0"
                  max="17"
                  step="1"
                  placeholder="Last Name"
                  style={{
                    width: "350px",
                  }}
                />
              </div>
            </div>

            <br />
            <br />

            <div class="details-container" >
              <div
                class="third-box"

              >
                <input
                  className="std-base-input"
                  type="email"
                  id="distance"
                  min="0"
                  max="17"
                  step="1"
                  placeholder="Email Address"
                  style={{
                    width: "350px",
                  }}
                />
              </div>

              <div class="fourth-box"

              >
                <input
                  className="std-base-input"
                  type="text"
                  id="distanceMax"
                  min="0"
                  max="17"
                  step="1"
                  placeholder="Phone Number"
                  style={{
                    width: "350px",
                  }}
                />
              </div>
            </div>

            <br />
            <br />

            <div>
              <hr
                class="hr-row"
              />
            </div>

            <br />
            <br />
          </div>

          <div class="avail-cont"  >
            <h1>Avilability</h1>
            <p >
              Are you booking on a weekday (Monday - Thursday) , weekend (Friday
              - Sunday) or a Seasonal?
            </p>

            {/* this is the part to determine date and the seasn of the holiday */}

            <br />
            <br />

            <div class="avail-box-cont">
              <div class="avail-box1" >
                <select
                  className="std-base-input"
                  style={{
                    width: "350px",
                  }}
                >
                  <option value="">Select</option>
                  <option value="12 Apr 2023 - 16 Apr 2023">
                    Weekday
                  </option>
                  <option value="19 Apr 2023 - 23 Apr 2023">
                    Weekend
                  </option>
                  <option value="26 Apr 2023 - 30 Apr 2023">
                    Seasonal
                  </option>
                </select>
              </div>

              <div class="avail-box2"
              >
                <input
                  className="std-base-input"
                  type="date"
                  placeholder="Phone Number"

                  style={{
                    width: "350px",
                  }}
                />
              </div>
            </div>

            <br />
            <br />

            <div>
              <hr class="hr-row"
              />
            </div>

            <br />
            <br />

            <div class="avail-box-cont2"

            >
              <Link to='/'>
                <button
                  className="std-base-button__outline white_button"
                >
                  Restart Booking
                </button>
              </Link>

              <Link to='booking-options'>
                <button
                  className="std-base-button__filled black_button1"
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default GuestDetailsDay;
