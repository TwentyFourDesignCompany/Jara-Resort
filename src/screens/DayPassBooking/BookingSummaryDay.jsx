import BillingCard from './BillingCard';
import './BookingSummaryDay.scss'

const BookingSummaryDay = () => {
  return (
    <div className="main-cont">
      <div className="sub-cont"
      >
        <div className="heading"
          style={{

          }}
        >
          <h2>
            Here is your booking summary:{" "}
          </h2>
        </div>

        <BillingCard
          guests={0}
          duration={0}
          room={0}
          subTotal={0}
          taxAndVAT={0}
          total={1234567}
        />

        <div className="card-sub2" >
          <div className="box7" >
            <label >
              <input
                type="checkbox"
                name="termsAndConditions" />
              <span style={{ marginLeft: "0.5rem" }}>
                Agree with the booking Terms and Conditions and Proceed to payment
              </span>
            </label>
          </div>
          <div className="box8">
            <input
              type="text"
              style={{
                padding: "0.5rem",
                fontSize: "1.2rem",
                width: "60%",
                marginRight: "1rem",
                border: "1px solid #ccc",
                height: "60px",
                borderRadius: "10px",
                background: "transparent",
              }}
            />
            <button
              style={{
                padding: "0.5rem 1rem",
                fontSize: "1.2rem",
                width: "40%",
                height: "60px",
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

        <div className="card-sub3" >
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
