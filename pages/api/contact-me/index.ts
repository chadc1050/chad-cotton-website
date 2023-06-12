import {NextApiRequest, NextApiResponse} from "next";
import sgMail from '@sendgrid/mail'
import {MailDataRequired} from "@sendgrid/helpers/classes/mail";

sgMail.setApiKey(process.env.SENDGRID_TOKEN ?? '');

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST") {
        const body: ContactMeForm = req.body

        if(process.env.RECIPIENT_EMAIL) {
            const msg: MailDataRequired = {
                to: {
                    email: process.env.RECIPIENT_EMAIL,
                    name: "Contact Me Form Recipient"
                },
                from: {
                    email: process.env.RECIPIENT_EMAIL,
                    name: "Contact Me Form"
                },
                subject: `Contact Me Form Message (Phone Number: ${body.phoneNumber} Email: ${body.email})`,
                text: body.message
            }

            try {
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