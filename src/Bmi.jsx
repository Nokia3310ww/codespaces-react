import {useRef} from "react";
export default function Bmi(){
    const W_input = useRef(null);
    const H_input = useRef(null);
    const BMI = useRef(null);
    function handleClick() {
        const weight = parseFloat(W_input.current.value);
        const height = parseFloat(H_input.current.value) / 100; 
        const bmi = weight / (height * height);
        alert(`Your BMI is: ${bmi.toFixed(2)}`);

    }
    return(<>
        <h1>BMI</h1>
        <input type="number" placeholder="Weight" ref={W_input}/>
        <input type="number" placeholder="Height" ref={H_input}/>
        <button onClick={handleClick}>Cal</button>
    </>)

}