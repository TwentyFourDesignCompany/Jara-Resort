import React from "react";

function BillingCard(props) {
    const { guests, duration, room, subTotal, taxAndVAT, total } = props;

    return (
        <div className="card-main">
            <div className="card-sub">
                <div className="sub-head">
                    <h2>Your Reservation</h2>
                </div>
                <div className="sub-head2">
                    {guests ? <div className="box1">
                        <span style={{ fontSize: "1.2rem" }}>Guests</span>
                        <span style={{ fontSize: "1.2rem" }}>{guests}</span>
                    </div> : null}
                    {duration ? <div className="box2">
                        <span style={{ fontSize: "1.2rem" }}>Duration</span>
                        <span style={{ fontSize: "1.2rem" }}>{duration}</span>
                    </div> : null}
                    {room ? <div className="box3">
                        <span style={{ fontSize: "1.2rem" }}>Room</span>
                        <span style={{ fontSize: "1.2rem" }}>{room}</span>
                    </div> : null}
                </div>
                <hr className="hr-row1" />
                <div className="box4">
                    <span style={{ fontSize: "1.2rem" }}>SubTotal:</span>
                    <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{subTotal}</span>
                </div>
                <hr className="hr-row1" />
                <div className="box5">
                    <span style={{ fontSize: "1.2rem" }}>Consumption Tax and VAT</span>
                    <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{taxAndVAT}</span>
                </div>
                <div className="box6">
                    <span style={{ fontSize: "1.2rem" }}>Total</span>
                    <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{total}</span>
                </div>
            </div>
        </div>
    );
}

export default BillingCard;

