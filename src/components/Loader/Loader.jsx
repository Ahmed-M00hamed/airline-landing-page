import React from "react";
import { Plane } from 'lucide-react';
import "./Loader.css";

export default function Loader() {
    return (
        <div className="loader">
            <Plane className="loader-icon" />
            <p className="loader-text">Loading...</p>
        </div>
    );
}
