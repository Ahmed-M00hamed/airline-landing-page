import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import destinations from "../../data/Data";
import { Plane } from 'lucide-react';
import "./Booking.css";

function Booking() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [destination, setDestination] = useState(null);
    const [passengers, setPassengers] = useState(1);

    useEffect(() => {

        setTimeout(() => {
            setLoading(true);
            const selected = destinations.find((item) => item.id === Number(id));

            setDestination(selected);
            setLoading(false);
        }, 800);
    }, [id]);

    if (loading) return <h2>Loading...</h2>;
    if (!destination) return <h2>Destination not found</h2>;

    const totalPrice = destination.price * passengers;

    return (
        <section className="booking">
            <div className="booking-container">
                <h2>Booking Details</h2>

                <div className="container">
                    <div className="left">
                        <label htmlFor="name">Enter your name :</label>
                        <input type="text" id="name" placeholder="Enter your name" />
                        <label htmlFor="email">Enter Your Email :</label>
                        <input type="email" id="email" placeholder="Enter Your Email" />
                        <label htmlFor="phone">Enter Your Phone Number:</label>
                        <input type="tel" id="phone" placeholder="Enter Your Phone Number" />


                    </div>
                    <div className="right">
                        <div className="city">
                            <p>
                                <span>From:</span> {destination.from}
                            </p>
                            <Plane size={32} style={{color:"#FE7716"}} />
                            <p>
                                <span>To:</span> {destination.to}
                            </p>
                        </div>
                        <div className="passengers">

                            <p>
                                <span>Price per passenger:</span> ${destination.price}
                            </p>

                            <label>
                                Passengers:
                                <input
                                    type="Number"
                                    min="1"
                                    value={passengers}
                                    onChange={(e) => setPassengers(Number(e.target.value))}
                                />
                            </label>
                        </div>

                        <h3>Total Price: ${totalPrice}</h3>
                    </div>
                </div>


                <button
                    onClick={() => {
                        if (
                            passengers > 0 &&
                            document.getElementById("name").value !== "" &&
                            document.getElementById("email").value !== "" &&
                            document.getElementById("phone").value !== "" &&
                            document.getElementById("phone").value.length === 11
                        ) {
                            alert("Booking Confirmed ✅")
                        } else {
                            alert("Please fill all the details.");
                        }
                    }}
                    className="btn btn-primary"
                >
                    Confirm Booking
                </button>
            </div>
        </section>
    );
}

export default Booking;
