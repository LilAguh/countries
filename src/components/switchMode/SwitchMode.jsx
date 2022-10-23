import { useState } from "react";
import "./SwitchMode.scss"
// import { useDispatch, useSelector } from "react-redux"

export default function SwitchMode() {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <input type="checkbox" id="switch" checked={isChecked} onChange={handleOnChange} />
            <label for="switch"></label>
        </div>
    );
}