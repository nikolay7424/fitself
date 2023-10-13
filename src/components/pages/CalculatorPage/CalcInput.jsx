function CalcInput({ inputType, inputLabel, inputValue }) {
    return (
        <>
            {(() => {
                switch (inputType) {
                    case "boolean":
                        return (
                            <>
                                <div className="calc__input">
                                    <button
                                        onClick={(e) => e.preventDefault()}
                                        className="btn btn-active"
                                    >
                                        Male
                                    </button>
                                    <button
                                        onClick={(e) => e.preventDefault()}
                                        className="btn"
                                    >
                                        Female
                                    </button>
                                </div>
                            </>
                        )
                    case "range":
                        return (
                            <>
                                <div className="calc__input">
                                    <label
                                        className="calc__input--label"
                                        htmlFor="age"
                                    >
                                        {inputLabel}
                                    </label>
                                    <input
                                        className="calc__input--range"
                                        type="range"
                                        min={1}
                                        max={200}
                                        name="age"
                                        id="age"
                                        defaultValue={inputValue}
                                    />
                                    <span className="calc__input--value">
                                        {inputValue}
                                    </span>
                                </div>
                            </>
                        )
                    case "radio":
                        return (
                            <>
                                <div className="calc__input">
                                    <label className="calc__input--label">
                                        {inputLabel}
                                    </label>
                                    <fieldset>
                                        <div className="calc__input--radio">
                                            <img src="../../../src/assets/img/fat/1.svg" />
                                        </div>
                                        <div className="calc__input--radio">
                                            <img src="../../../src/assets/img/fat/2.svg" />
                                        </div>
                                        <div className="calc__input--radio">
                                            <img src="../../../src/assets/img/fat/3.svg" />
                                        </div>
                                        <div className="calc__input--radio">
                                            <img src="../../../src/assets/img/fat/4.svg" />
                                        </div>
                                        <div className="calc__input--radio">
                                            <img src="../../../src/assets/img/fat/5.svg" />
                                        </div>
                                    </fieldset>
                                    <span className="calc__input--value">
                                        {inputValue}
                                    </span>
                                </div>
                            </>
                        )
                    case "select":
                        return (
                            <>
                                <div className="calc__input">
                                    <label className="calc__input--label">
                                        {inputLabel}
                                    </label>
                                    <select name="activity" id="activity">
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                        <option value="very-high">
                                            Very high
                                        </option>
                                    </select>
                                </div>
                            </>
                        )
                }
            })()}
        </>
    )
}

export default CalcInput
