import React, { useState } from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmd] = useState(false);

    const handleConfirm = () => {
        setIsConfirmd((prevIsConfirmed) => !prevIsConfirmed);
    };


    return (
        <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;