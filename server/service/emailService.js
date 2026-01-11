const nodemailer = require("nodemailer");

class EmailService {
    //     constructor() {
    //         this.transport = nodemailer.createTransport({
    //             host: process.env.SMTP_HOST,
    //             port: process.env.SMTP_PORT,
    //             secure: false,
    //             auth: {
    //                 user: process.env.SMTP_USER,
    //                 pass: process.env.SMTP_PASS,
    //             },
    //         });
    //     }
    transport;

    getTransport() {
        if (!this.transport) {
            this.transport = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });
        }
        return this.transport;
    }

    async sendActivationLink(to, link) {
        const transport = this.getTransport();
        await this.transport.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: `account verification ${process.env.API_URL}`,
            text: "",
            html: `<div>
             <h1>follow the link to activate your account</h1>
             <a href='${link}'>${link}</a>
            </div>`,
        });
    }
}

module.exports = new EmailService();
