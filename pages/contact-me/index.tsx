import {FormEvent, useEffect, useState} from "react";
import styles from "../../styles/pages/ContactMe.module.css"

const ContactMe = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        document.title = 'Contact Me';
    })

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted", name, email, phoneNumber, message)
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
                        <label aria-label={'Name'}>
                            <input type={'text'} placeholder={'Name'} value={name}
                                   onChange={e => setName(e.target.value)}/>
                        </label>
                        <label aria-label={'Email'}>
                            <input type={'email'} placeholder={'Email'} value={email}
                                   onChange={e => setEmail(e.target.value)}/>
                        </label>
                        <label aria-label={'Phone Number'}>
                            <input type={'tel'} placeholder={'Phone Number'} value={phoneNumber}
                                   onChange={e => setPhoneNumber(e.target.value)}/>
                        </label>
                        <h4>Message</h4>
                        <div className={'message'}>
                            <label aria-label={'Message'}>
                                <input placeholder={'Message'} value={message}
                                       onChange={e => setMessage(e.target.value)}/>
                            </label>
                        </div>
                        <button type={"submit"}>Submit</button>
                    </form>
                </section>
            </div>
        </>
    )
}

export default ContactMe;