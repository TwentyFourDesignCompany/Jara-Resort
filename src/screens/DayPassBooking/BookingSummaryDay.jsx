import './BookingSummaryDay.scss'

const BookingSummaryDay = () => {
  return (
    <div class="main-cont">
      <div class="sub-cont"
      >
        <div class="heading"
          style={{
           
          }}
        >
          <h2>
            Here is your booking summary:{" "}
          </h2>
        </div>

        <div class="card-main">
          <div class="card-sub"
          >
            <div class="sub-head"
            >
              <h2 >
                Your Reservation
              </h2>
            </div>
            <div class="sub-head2">
              <div class="box1"
              >
                <span style={{ fontSize: "1.2rem" }}>Guests</span>
                <span style={{ fontSize: "1.2rem" }}>1 Adult</span>
              </div>
              <div class="box2" >
                <span style={{ fontSize: "1.2rem" }}>Duration</span>
                <span style={{ fontSize: "1.2rem" }}>1 Night</span>
              </div>
              <div class="box3"
               
              >
                <span style={{ fontSize: "1.2rem" }}>Room</span>
                <span style={{ fontSize: "1.2rem" }}>Sunset 11</span>
              </div>
            </div>
            <hr class="hr-row1" />
            <div class="box4"  >
              <span style={{ fontSize: "1.2rem" }}>SubTotal:</span>
              <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                N60,000
              </span>
            </div>
            <hr class="hr-row1"  />
            <div class="box5"
            >
              <span style={{ fontSize: "1.2rem" }}>
                Consumotion Tax and VAT
              </span>
              <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                N7,000{" "}
              </span>
            </div>

            <div class="box6"  >
              <span style={{ fontSize: "1.2rem" }}>Total</span>
              <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                N67,000{" "}
              </span>
            </div>
          </div>
        </div>

        <div class="card-sub2" >
          <div class="box7" >
            <label >
              <input
                type="checkbox"
                name="termsAndConditions" />
              <span style={{ marginLeft: "0.5rem" }}>
                Agree with the booking Terms and Conditions and Proceed to payment 
              </span>
            </label>
          </div>
          <div class="box8">
            <input
              type="text"
              style={{
                padding: "0.5rem",
                fontSize: "1.2rem",
                width : "60%",
                marginRight: "1rem",
                border: "1px solid #ccc",
                height : "60px",
                borderRadius: "10px",
                background: "transparent",
              }}
            />
            <button
              style={{
                padding: "0.5rem 1rem",
                fontSize: "1.2rem",
                width: "40%",
                height : "60px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Apply
            </button>
          </div>
        </div>

        <div class="card-sub3" >
              <button
                className="white_button"
                style={{
                  marginRight: "2rem",
                  marginbottom: "1em",
                  border: "none",

                  width: "30%",
                  borderRadius: "5px",
                  background: "#F4F1F1",
                  color: "black",
                }}
              >
                 Back
              </button>

              <button
                className="black_button1"
                style={{
                  marginRight: "2rem",
                  marginbottom: "1em",
                  border: "none",
                  width: "50%",
                  borderRadius: "5px",
                  background: "black",
                  color: "white",
                }}
              >
                Pay with PayStack
              </button>
            </div>


      </div>
    </div>
  );
};

export default BookingSummaryDay;
