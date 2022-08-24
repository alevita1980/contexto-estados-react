import styles from "./formInput.module.css";

const FormInput = (labelName, type, value, func) => {
    return (
        <div>
            <label>{labelName}
                <div>
                    <input className={styles.inputBox} type={type} value={value} onChange={func} />
                </div>
            </label>

        </div>
    )
};

const RequiredFormInput = (labelName, type, value, func) => {
    return (
        <div>
            <label>{labelName}
                <div>
                    <input className={styles.inputBox} type={type} required value={value} onChange={func} />
                </div>
            </label>

        </div>
    )
};

const PhoneInput = (labelName, value, func) => {
    return (
        <div>
            <label>{labelName}
                <div>
                    <input
                        className={styles.inputBox}
                        name="phone"
                        placeholder="+54-9-11-1234-5678"
                        type="tel"
                        pattern="+[0-9]-{2}-[0-9]{1}-[0-9]{2}-[0-9]{4}-[0-9]{4}"
                        required
                        value={value}
                        onChange={func}
                    />
                </div>
            </label>

        </div>
    )
};


export { FormInput, RequiredFormInput, PhoneInput };
