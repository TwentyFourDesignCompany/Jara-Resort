import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./bookingOptions.scss"
import { DAY_PASS_OPTIONS } from './bookingOptionState'
import BookingOptionsCounter from "./BookingOptionCounter";
import BillingCard from './BillingCard'

const BookingOptions = () => {
  const [bookingOptionsState, setBookingOptionState] = useState(DAY_PASS_OPTIONS);


  const handleChangeInOptionsValue = (id, value) => {
    const stateArray = [...bookingOptionsState]
    const optionObject = stateArray.find((option) => option.id === id);
    const updateIndex = stateArray.indexOf(optionObject);

    stateArray.splice(updateIndex, 1, { ...optionObject, quantity: value })
    const stateObject = JSON.parse(localStorage.getItem('form_state'));

    setBookingOptionState(stateArray)
    localStorage.setItem("form_state", JSON.stringify({ ...stateObject, day_pass_options: stateArray }))
  }

  const calculatePrice = (weekendPrice = 0, weekdayPrice = 0) => {
    const isWeekend = new Date().getDay() === 0 || new Date().getDay() === 6;
    return isWeekend ? weekendPrice : weekdayPrice;
  };

  useEffect(() => {
    console.log('updated ---> ', { bookingOptionsState })
  }, [bookingOptionsState])

  return (
    <>
      <main
        className="bookingOptions-main-wrapper"
      >
        <form
          className="bookingOptions-form"
        >
          <div
            className="bookingOptions-formWrapper"
          >
            <div
              className="bookingOptions-section1"
            >
              <h2 className="bookingOptions-sectionHeader"
              >Options</h2>
              <div
                className="bookingOptions-contentWrapper"
              >
                <div
                  className="bookingOptions-contentWrapper1"
                >
                  <span style={{ fontSize: "1.2rem" }}>
                    {" "}
                    Day Pass Infant (Under 2 years are free - no food provided)
                    <br />
                    Non-Seasonal
                    <br />
                    <span style={{ fontSize: "1.2rem" }}> NGN {calculatePrice(0, 0)}</span>
                  </span>
                  <BookingOptionsCounter value={0} onChange={(value) => handleChangeInOptionsValue(1, value)} />
                </div>
                <hr style={{ width: "100%", margin: "1.5rem 0" }} />
                <div
                  className="bookingOptionBox1"
                >
                  <span style={{ fontSize: "1.2rem" }}>
                    {" "}
                    Day Pass Child
                    <br />
                    Aged 6-17 years (or 3 years+ after first FREE Toddler)
                    <br />
                    <span style={{ fontSize: "1.2rem" }}> NGN {calculatePrice(12500, 10000)}</span>
                  </span>
                  <BookingOptionsCounter value={0} onChange={(value) => handleChangeInOptionsValue(2, value)} />
                </div>
                <hr style={{ width: "100%", margin: "1.5rem 0" }} />
                <div
                  className="bookingOptionBox1"
                >
                  <span style={{ fontSize: "1.2rem" }}>
                    {" "}
                    Day Pass Nanny
                    <br />
                    Nanny passes limited to 1 per child, maximum 3 nannies per booking.
                    <br />
                    <span style={{ fontSize: "1.2rem" }}> NGN {calculatePrice(15000, 12500)}</span>
                  </span>
                  <BookingOptionsCounter value={0} onChange={(value) => handleChangeInOptionsValue(3, value)} />
                </div>
                <hr style={{ width: "100%", margin: "1.5rem 0" }} />
                <div
                  className="bookingOptionBox1"
                >
                  <span style={{ fontSize: "1.2rem" }}>
                    {" "}
                    Day Pass Adult Non Alcohol
                    <br />
                    Adult Day Pass w/ Soft Drinks
                    <br />
                    <span style={{ fontSize: "1.2rem" }}> NGN {calculatePrice(25000, 20000)}</span>
                  </span>
                  <BookingOptionsCounter value={0} onChange={(value) => handleChangeInOptionsValue(4, value)} />
                </div>
                <hr style={{ width: "100%", margin: "1.5rem 0" }} />
                <div
                  className="bookingOptionBox1"
                >
                  <span style={{ fontSize: "1.2rem" }}>
                    {" "}
                    Day Pass Adult Alcohol
                    <br />
                    Adult Day Pass including Alcoholic Drinks
                    <br />
                    <span style={{ fontSize: "1.2rem" }}> NGN {calculatePrice(35000, 30000)}</span>
                  </span>
                  <BookingOptionsCounter value={0} onChange={(value) => handleChangeInOptionsValue(5, value)} />
                </div>
                <hr style={{ width: "100%", margin: "1.5rem 0" }} />
              </div>

              <hr style={{ width: "100%", margin: "1.5rem 0" }} />
              <h2 style={{ margin: "2rem", fontSize: "2rem" }}>Extras</h2>
              <p style={{ fontSize: "1rem", fontWeight: 100, marginLeft: "2rem" }}>
                Here you can book any extra  special experinces . Please select the ones you wish to add <br />
                to your booking
              </p>



              <div className="bookingOptionBox2">
                <div className="bookingOptionBox3">
                  <div className="bookingOptionBox4">
                    <div className="bookingOptionBox5" style={{ position: "relative", width: "100%", marginRight: "1.5rem", cursor: "pointer" }}>
                      <img src='https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="bookingOptionImage" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="activity" />
                      <div className="bookingOptionBox6" style={{ position: "absolute", top: "0", right: "0", backgroundColor: "black", padding: "0.5rem" }}>
                        <h5 className="bookingOptionBox7" style={{ fontStyle: "normal", fontWeight: 400, fontSize: 15.8468, color: "#FFFFFF", margin: 0 }}>
                          $10
                        </h5>
                      </div>
                      <div className="bookingOptionBox8" style={{ display: "flex", alignItems: "center", position: "absolute", left: 0, bottom: 0, marginBottom: 0, width: "100%", height: "25%", backgroundColor: "#000", opacity: 0.8 }}>
                        <div className="bookingOptionBox9" style={{ marginLeft: "0.5rem", marginRight: "1.5rem" }}>
                          <h5 className="bookingOptionTitle" style={{ fontStyle: "normal", fontWeight: 400, fontSize: 15.8468, color: "#FFFFFF", margin: 0, padding: "0.5rem" }}>
                            Activity 1
                          </h5>

                        </div>
                        <div className="bookingOptionBox10" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "2rem", height: "2rem", borderRadius: "50%", border: "2px solid #000", marginLeft: "auto", marginRight: "0.5rem" }}>
                          <input type="checkbox" style={{ borderRadius: '100%' }} />

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bookingOptionBox4">
                    <div className="bookingOptionBox5 sr-extra" style={{ position: "relative", width: "100%", marginRight: "1.5rem", cursor: "pointer" }}>
                      <img src='https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="bookingOptionImage" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="activity" />
                      <div className="bookingOptionBox6" style={{ position: "absolute", top: "0", right: "0", backgroundColor: "black", padding: "0.5rem" }}>
                        <h5 className="bookingOptionBox7" style={{ fontStyle: "normal", fontWeight: 400, fontSize: 15.8468, color: "#FFFFFF", margin: 0 }}>
                          $10
                        </h5>
                      </div>
                      <div className="bookingOptionBox8" style={{ display: "flex", alignItems: "center", position: "absolute", left: 0, bottom: 0, marginBottom: 0, width: "100%", height: "25%", backgroundColor: "#000", opacity: 0.8 }}>
                        <div className="bookingOptionBox9" style={{ marginLeft: "0.5rem", marginRight: "1.5rem" }}>
                          <h5 className="bookingOptionTitle" style={{ fontStyle: "normal", fontWeight: 400, fontSize: 15.8468, color: "#FFFFFF", margin: 0, padding: "0.5rem" }}>
                            Activity 1
                          </h5>

                        </div>
                        <div className="bookingOptionBox10" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "2rem", height: "2rem", borderRadius: "50%", border: "2px solid #000", marginLeft: "auto", marginRight: "0.5rem" }}>
                          <input type="checkbox" style={{ borderRadius: '100%' }} />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="bookingOptionBox2">
                <div className="bookingOptionBox3">
                  <div className="bookingOptionBox4">
                    <div className="bookingOptionBox5" style={{ position: "relative", width: "100%", marginRight: "1.5rem", cursor: "pointer" }}>
                      <img src='https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="bookingOptionImage" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="activity" />
                      <div className="bookingOptionBox6" style={{ position: "absolute", top: "0", right: "0", backgroundColor: "black", padding: "0.5rem" }}>
                        <h5 className="bookingOptionBox7" style={{ fontStyle: "normal", fontWeight: 400, fontSize: 15.8468, color: "#FFFFFF", margin: 0 }}>
                          $10
                        </h5>
                      </div>
                      <div className="bookingOptionBox8" style={{ display: "flex", alignItems: "center", position: "absolute", left: 0, bottom: 0, marginBottom: 0, width: "100%", height: "25%", backgroundColor: "#000", opacity: 0.8 }}>
                        <div className="bookingOptionBox9" style={{ marginLeft: "0.5rem", marginRight: "1.5rem" }}>
                          <h5 className="bookingOptionTitle" style={{ fontStyle: "normal", fontWeight: 400, fontSize: 15.8468, color: "#FFFFFF", margin: 0, padding: "0.5rem" }}>
                            Activity 1
                          </h5>

                        </div>
                        <div className="bookingOptionBox10" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "2rem", height: "2rem", borderRadius: "50%", border: "2px solid #000", marginLeft: "auto", marginRight: "0.5rem" }}>
                          <input type="checkbox" style={{ borderRadius: '100%' }} />

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bookingOptionBox4">
                    <div className="bookingOptionBox5 sr-extra" style={{ position: "relative", width: "100%", marginRight: "1.5rem", cursor: "pointer" }}>
                      <img src='https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="bookingOptionImage" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="activity" />
                      <div className="bookingOptionBox6" style={{ position: "absolute", top: "0", right: "0", backgroundColor: "black", padding: "0.5rem" }}>
                        <h5 className="bookingOptionBox7" style={{ fontStyle: "normal", fontWeight: 400, fontSize: 15.8468, color: "#FFFFFF", margin: 0 }}>
                          $10
                        </h5>
                      </div>
                      <div className="bookingOptionBox8" style={{ display: "flex", alignItems: "center", position: "absolute", left: 0, bottom: 0, marginBottom: 0, width: "100%", height: "25%", backgroundColor: "#000", opacity: 0.8 }}>
                        <div className="bookingOptionBox9" style={{ marginLeft: "0.5rem", marginRight: "1.5rem" }}>
                          <h5 className="bookingOptionTitle" style={{ fontStyle: "normal", fontWeight: 400, fontSize: 15.8468, color: "#FFFFFF", margin: 0, padding: "0.5rem" }}>
                            Activity 1
                          </h5>

                        </div>
                        <div className="bookingOptionBox10" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "2rem", height: "2rem", borderRadius: "50%", border: "2px solid #000", marginLeft: "auto", marginRight: "0.5rem" }}>
                          <input type="checkbox" style={{ borderRadius: '100%' }} />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="sr-buttons-sm"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2rem",
                }}
              >
                <Link to='/'>
                  <button
                    className="white_button"
                    style={{
                      marginRight: "2rem",
                      marginbottom: "1em",
                      border: "1",

                      width: "300px",
                      borderRadius: "5px",
                      background: "white",
                      color: "black",
                    }}
                  >
                    Restart Booking
                  </button>
                </Link>

                <Link to='/day-pass-booking/booking-summary'>


                  <button
                    className="black_button1"
                    style={{
                      marginRight: "2rem",
                      marginbottom: "1em",
                      border: "none",
                      width: "300px",
                      borderRadius: "5px",
                      background: "black",
                      color: "white",
                    }}
                  >
                    Continue
                  </button>
                </Link>
              </div>


            </div>

            <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
              <BillingCard
                guests={0}
                duration={0}
                room={0}
                subTotal={0}
                taxAndVAT={0}
                total={1234567}
              />
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default BookingOptions;
