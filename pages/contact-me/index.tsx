import {FormEvent, useEffect, useState} from "react";
import styles from "../../styles/pages/ContactMe.module.css"

const ContactMe = () => {

    const [name, setName] = useState<string>('');
    const [isNameValid, setIsNameValid] = useState<boolean>(false)

    const [email, setEmail] = useState<string>('');
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false)

    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState<boolean>(false);

    const [message, setMessage] = useState<string>('');

    const NAME_REGEX = new RegExp(/^[a-zA-Z ].{1,70}$/);
    const EMAIL_REGEX = new RegExp(/^[A-Za-z0-9_!#$%&'*+\\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/);
    const PHONE_REGEX = new RegExp(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im);

    useEffect(() => {
        // TODO: Remove me, SEO component should handle this
        document.title = 'Contact Me';
    })

    const onNameChange = (newName: string) => {
         if (NAME_REGEX.test(newName)) {
             setIsNameValid(true);
         } else {
             setIsNameValid(false);
         }
         setName(newName);
    }

    const onEmailChange = (newEmail: string) => {
        if (EMAIL_REGEX.test(newEmail)) {
            setIsEmailValid(true);
        } else {
            setIsEmailValid(false);
        }
        setEmail(newEmail);
    }

    const onPhoneNumberChange = (newPhoneNumber: string) => {

        let normalizedNumber = normalizePhoneNumber(newPhoneNumber, phoneNumber);

        if (PHONE_REGEX.test(normalizedNumber)) {
            setIsPhoneNumberValid(true);
        } else {
            setIsPhoneNumberValid(false);
        }

        setPhoneNumber(normalizedNumber);
    }

    const normalizePhoneNumber = (value: string, previousValue: string): string => {

        if (!value) {
            return value;
        }

        const currentValue = value.replace(/\D/g, '');
        const cvLength = currentValue.length;

        if (!previousValue || value.length > previousValue.length) {

            if (cvLength < 4) {
                return currentValue;
            }

            if (cvLength < 7) {
                return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
            }

            return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
        }

        return value;
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(isNameValid, isEmailValid, isPhoneNumberValid)

        if (isNameValid && isEmailValid && isPhoneNumberValid) {
            console.log("submitted", name, email, phoneNumber, message)
        } else {
            console.log("Invalid submission")
        }
    }

    return (
        <>
            <h1>Contact Me</h1>
            <section>
                <h2>Piers</h2>
                <p>
                    I am always open to connect with fellow developers, especially those who reside in the Oklahoma City area. If
                    you are interested in discussing
                </p>
                <h2>Contract Work</h2>
                <p>
                    Contract work is something that I am always interested in doing! If you or your company are in need of
                    a developer then feel free to fill out the form below, or reach out to me on LinkedIn, and I will reach
                    out to you. Whether you need a website built or a custom serverside solution, I am able to architect and
                    implement both.
                </p>
            </section>
            <div className={styles.contactMe}>
                <section>
                    <form onSubmit={e => submit(e)}>
                        <h4>Contact Information</h4>
                        <label aria-label={'Full Name'}>
                            <input className={styles.contactMeInput} type={'text'} placeholder={'Full Name'} value={name}
                                   onChange={e => onNameChange(e.target.value)}/>
                        </label>
                        <label aria-label={'Email'}>
                            <input className={styles.contactMeInput} type={'email'} placeholder={'Email'} value={email}
                                   onChange={e => onEmailChange(e.target.value)}/>
                        </label>
                        <label aria-label={'Phone Number'}>
                            <input className={styles.contactMeInput} type={'tel'} placeholder={'Phone Number'} value={phoneNumber}
                                   onChange={e => onPhoneNumberChange(e.target.value)}/>
                        </label>
                        <h4>Message</h4>
                            <label aria-label={'Message'}>
                                <textarea className={styles.contactMeInput} placeholder={'Message'} value={message}
                                       onChange={e => setMessage(e.target.value)}/>
                            </label>
                        <button type={"submit"}>Submit</button>
                    </form>
                </section>
            </div>
        </>
    )
}

export default ContactMe;