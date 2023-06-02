import {NextApiRequest, NextApiResponse} from "next";
import sgMail from '@sendgrid/mail'
import {Simulate} from "react-dom/test-utils";

sgMail.setApiKey(process.env.SENDGRID_TOKEN ?? '');

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST") {
        const { name, email, phoneNumber, message } = req.body

        const msg = {
            to: process.env.RECIPIENT_EMAIL,
            from: email,
            subject: `Contact Me Form Message (Phone Number: ${phoneNumber})`,
            name: name,
            text: message
        }

        try {
            console.log("sending...")
            await sgMail.send(msg)
                .then(res => {
                    console.log(res)
                })
                .catch(error => {
                    console.log(error)
                });
            res.status(200).end();
        } catch (err) {
            res.status(500).end({error: "Error processing request!"});
        }
    } else {
        res.status(405).end({error: "Invalid verb!"});
    }
}

export interface ContactMeForm {
    name: string
    email: string
    phoneNumber: string
    message: string
}

export default handler