import React from "react";
import { Link } from "react-router-dom";

import './dayPassBooking.scss'

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

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                  marginRight: "1rem",
                }}
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
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                }}
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

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                  marginRight: "1rem",
                }}
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

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                }}
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
                style={{
                  float: "left",
                  clear: "both",
                  width: "50%",
                  marginTop: "1rem",
                }}
              />
            </div>

            <br />
            <br />
          </div>

          <div
            style={{
              marginBottom: "3rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1 style={{ fontSize: "3rem", fontWeight: 600 }}>Avilability</h1>
            <p style={{ fontSize: "1rem", fontWeight: 100 }}>
              Are you booking on a weekday (Monday - Thursday) , weekend (Friday
              - Sunday) or a Seasonal?
            </p>

            {/* this is the part to determine date and the seasn of the holiday */}

            <br />
            <br />

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                  marginRight: "1rem",
                }}
              >
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

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1rem",
                }}
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
              <hr
                style={{
                  float: "left",
                  clear: "both",
                  width: "50%",
                  marginTop: "1rem",
                }}
              />
            </div>

            <br />
            <br />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "2rem",
              }}
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
