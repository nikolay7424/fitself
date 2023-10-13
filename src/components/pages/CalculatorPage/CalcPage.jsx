// styles
import { useState } from "react"
import "../../../assets/scss/components/pages/CalculatorPage/_calc.scss"
import CalcInput from "./CalcInput"
import BMI from "./BMI"
import Nutrients from "./Nutrients"

export default function CalcPage() {
    const inputType = {
        boolean: "boolean",
        range: "range",
        radio: "radio",
        select: "select",
    }

    const inputLabels = {
        age: "Age(years)",
        height: "Height(sm)",
        weight: "Weight(kg)",
        fat: "BodyFat(%)",
        activity: "Activity",
    }

    //  bmi = inputWeightValue / (inputHeightValue/100 * inputHeightValue/100)
    let bmi = 0
    // BMI less than 18.5: bmiIndicatorIndex = 0
    // BMI from 18.5 to 24.9: bmiIndicatorIndex = 1
    // BMI from 25.0 to 29.9: bmiIndicatorIndex = 2
    // BMI from 30.0 to 34.9: bmiIndicatorIndex = 3
    // BMI from 35.0 to 39.9: bmiIndicatorIndex = 4
    // BMI 40.0 and above: bmiIndicatorIndex = 5
    let bmiIndicatorIndex = 0

    // calorieIntake for male = (660 + (13.7 * inputWeightValue) + (5 * inputHeightValue) - (6.8 * setInputAgeValue)) * inputActivityValue[1.2-1.8 шаг 0.2] * inputFatValue[1.1-1.3 шаг 0.05]

    // calorieIntake for female =655 + (9.6 * inputWeightValue) + (1.8 * inputHeightValue) - (4.7 * inputAgeValue) * inputActivityValue[1.2-1.8 шаг 0.2] * inputFatValue[1.1-1.3 шаг 0.05]
    let calorieIntake = 0

    const [inputAgeValue, setInputAgeValue] = useState(50)
    const [inputHeightValue, setInputHeightValue] = useState(150)
    const [inputWeightValue, setInputWeightValue] = useState(80)
    const [inputFatValue, setInputFatValue] = useState(5)
    const [inputActivityValue, setInputActivityValue] = useState(1)

    return (
        <>
            <section className="main__calc calc">
                <div className="main__calc--wrapper">
                    <h2>Body weight calculator</h2>
                    <form action="#">
                        <CalcInput inputType={inputType.boolean} />
                        <CalcInput
                            inputType={inputType.range}
                            inputLabel={inputLabels.age}
                            inputValue={inputAgeValue}
                        />
                        <CalcInput
                            inputType={inputType.range}
                            inputLabel={inputLabels.height}
                            inputValue={inputHeightValue}
                        />
                        <CalcInput
                            inputType={inputType.range}
                            inputLabel={inputLabels.weight}
                            inputValue={inputWeightValue}
                        />
                        <CalcInput
                            inputType={inputType.radio}
                            inputLabel={inputLabels.fat}
                            inputValue={inputFatValue}
                        />
                        <CalcInput
                            inputType={inputType.select}
                            inputLabel={inputLabels.activity}
                            inputValue={inputActivityValue}
                        />
                    </form>
                </div>
                <div className="main__calc--wrapper">
                    <h2>Results</h2>
                    <BMI bmi={bmi} bmiIndicatorIndex={bmiIndicatorIndex} />
                    <h2>your redommended calorie intake: {calorieIntake}</h2>
                    <Nutrients />
                </div>
            </section>
        </>
    )
}
