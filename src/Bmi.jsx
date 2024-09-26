import {useRef} from "react";
export default function Bmi(){
    const W_input = useRef(null);
    const H_input = useRef(null);
    const BMI = useRef(null);
    function handleClick() {
        let weight = parseFloat(W_input.current.value);
        let height = parseFloat(H_input.current.value) / 100; 
        let bmi = weight / (height * height);
        if( bmi < 18.50 ){
            alert(`Your BMI is: ${bmi.toFixed(2)} Underweight`);
        }
        else if( bmi >= 18.50 && bmi <= 22.90){
            alert(`Your BMI is: ${bmi.toFixed(2)} Normal `);
        }
        else if( bmi >= 23  && bmi <= 24.90){
            alert(`Your BMI is: ${bmi.toFixed(2)} Obese/Cured Level 1 `);
        }
        else if( bmi >=  25 && bmi <= 29.90){
            alert(`Your BMI is: ${bmi.toFixed(2)} Obese/Cured Level 2 `);
        }
        else{
            alert(`Your BMI is: ${bmi.toFixed(2)} Obese/Cured Level 3 `);
        }

    }
    return(<>
        <h1>BMI</h1>
        <input type="number" placeholder="Weight" ref={W_input}/>
        <input type="number" placeholder="Height" ref={H_input}/>
        <button onClick={handleClick}>Cal</button>
    </>)

}