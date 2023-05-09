import React from "react";
import { Link } from "react-router-dom";

import './guestDetailDay.scss'

/**{
    "guests_no": 4,
    "guest_first_name": "test",
    "guest_last_name": "test",
    "guest_email": "test@yopmail.com",
    "guest_phone": "1234567890",
    "booking_date": "2023-05-26T00:00:00.000Z",
    "option_type": "weekend",
    "day_pass_options": [
        {
            "id": 1,
            "name": "Day Pass Infant (under 2yrs are free - no food provided)",
            "description": "Non-Seasonal",
            "weekday_price": 0,
            "weekend_price": 0,
            "urgent_charges": 0,
            "deleted": false,
            "created_at": "2022-09-22T09:55:13.000000Z",
            "updated_at": "2022-09-25T16:58:41.000000Z",
            "seasonal_price": 0
        },
        {
            "id": 2,
            "name": "Day Pass Child",
            "description": "Aged 6-17 years (or 3 years+ after first FREE Toddler)",
            "weekday_price": 10000,
            "weekend_price": 12500,
            "urgent_charges": 0,
            "deleted": false,
            "created_at": "2022-09-22T09:55:13.000000Z",
            "updated_at": "2022-11-07T09:42:26.000000Z",
            "seasonal_price": 15000
        },
        {
            "id": 3,
            "name": "Day Pass Nanny",
            "description": "Nanny passes limited to 1 per child, maximum 3 nannies per booking.",
            "weekday_price": 12500,
            "weekend_price": 15000,
            "urgent_charges": 0,
            "deleted": false,
            "created_at": "2022-09-22T09:55:13.000000Z",
            "updated_at": "2022-11-04T21:24:29.000000Z",
            "seasonal_price": 15000
        },
        {
            "id": 4,
            "name": "Day Pass Adult Non Alcohol",
            "description": "Adult Day Pass w/ Soft Drinks",
            "weekday_price": 20000,
            "weekend_price": 25000,
            "urgent_charges": 0,
            "deleted": false,
            "created_at": "2022-09-22T09:55:13.000000Z",
            "updated_at": "2022-11-04T21:24:01.000000Z",
            "seasonal_price": 30000
        },
        {
            "id": 5,
            "name": "Day Pass Adult Alcohol",
            "description": "Adult Day Pass including Alcoholic Drinks",
            "weekday_price": 30000,
            "weekend_price": 35000,
            "urgent_charges": 0,
            "deleted": false,
            "created_at": "2022-09-22T09:55:13.000000Z",
            "updated_at": "2022-11-04T21:23:53.000000Z",
            "seasonal_price": 40000
        }
    ],
    "selected_options": [
        {
            "id": 1,
            "name": "Day Pass Infant (under 2yrs are free - no food provided)",
            "description": "Non-Seasonal",
            "weekday_price": 0,
            "weekend_price": 0,
            "urgent_charges": 0,
            "deleted": false,
            "created_at": "2022-09-22T09:55:13.000000Z",
            "updated_at": "2022-09-25T16:58:41.000000Z",
            "seasonal_price": 0,
            "quantity": 2
        },
        {
            "id": 2,
            "name": "Day Pass Child",
            "description": "Aged 6-17 years (or 3 years+ after first FREE Toddler)",
            "weekday_price": 10000,
            "weekend_price": 12500,
            "urgent_charges": 0,
            "deleted": false,
            "created_at": "2022-09-22T09:55:13.000000Z",
            "updated_at": "2022-11-07T09:42:26.000000Z",
            "seasonal_price": 15000,
            "quantity": 0
        },
        {
            "id": 3,
            "name": "Day Pass Nanny",
            "description": "Nanny passes limited to 1 per child, maximum 3 nannies per booking.",
            "weekday_price": 12500,
            "weekend_price": 15000,
            "urgent_charges": 0,
            "deleted": false,
            "created_at": "2022-09-22T09:55:13.000000Z",
            "updated_at": "2022-11-04T21:24:29.000000Z",
            "seasonal_price": 15000,
            "quantity": 0
        },
        {
            "id": 4,
            "name": "Day Pass Adult Non Alcohol",
            "description": "Adult Day Pass w/ Soft Drinks",
            "weekday_price": 20000,
            "weekend_price": 25000,
            "urgent_charges": 0,
            "deleted": false,
            "created_at": "2022-09-22T09:55:13.000000Z",
            "updated_at": "2022-11-04T21:24:01.000000Z",
            "seasonal_price": 30000,
            "quantity": 0
        },
        {
            "id": 5,
            "name": "Day Pass Adult Alcohol",
            "description": "Adult Day Pass including Alcoholic Drinks",
            "weekday_price": 30000,
            "weekend_price": 35000,
            "urgent_charges": 0,
            "deleted": false,
            "created_at": "2022-09-22T09:55:13.000000Z",
            "updated_at": "2022-11-04T21:23:53.000000Z",
            "seasonal_price": 40000,
            "quantity": 0
        }
    ],
    "guests_done": true,
    "availability_done": true,
    "options_done": true,
    "extras_done": true,
    "done_data": {},
    "extra": "",
    "showExtra": false,
    "specials": [
        "lookout",
        "massage",
        "newmassage",
        "quadbike",
        "photoshoot",
        "drinks",
        "cakes",
        "roomDecoration",
        "unforgettableExperience",
        "domesticStaff"
    ],
    "booking": null,
    "discount": null,
    "lastUpdate": null,
    "editMode": false,
    "editBooking": null,
    "adminEditMode": false,
    "fullPageLoader": false,
    "noDiscountDates": [],
    "noDayPassBookingDates": [
        "2022-11-12T23:00:00.000000Z",
        "2022-11-06T23:00:00.000000Z",
        "2023-01-08T23:00:00.000000Z",
        "2023-02-24T23:00:00.000000Z",
        "2023-01-22T23:00:00.000000Z",
        "2023-01-23T23:00:00.000000Z",
        "2023-01-24T23:00:00.000000Z",
        "2023-02-25T23:00:00.000000Z",
        "2023-04-02T23:00:00.000000Z",
        "2023-05-03T23:00:00.000000Z",
        "2023-05-04T23:00:00.000000Z",
        "2023-05-05T23:00:00.000000Z",
        "2023-05-06T23:00:00.000000Z",
        "2023-05-07T23:00:00.000000Z",
        "2023-05-08T23:00:00.000000Z",
        "2023-05-09T23:00:00.000000Z",
        "2023-05-10T23:00:00.000000Z",
        "2023-05-11T23:00:00.000000Z",
        "2023-10-27T23:00:00.000000Z",
        "2023-04-23T23:00:00.000000Z",
        "2023-04-24T23:00:00.000000Z",
        "2023-04-25T23:00:00.000000Z"
    ]
} */

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
            <h1>Availability</h1>
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
