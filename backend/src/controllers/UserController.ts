import { Request, Response } from 'express'
import EmailService from '../services/emailService';

const users = [
    { name: 'Diego', email: 'brunolages@cpejr.com.br' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },
    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: { name: 'Bruno', email: 'brunolages@cpejr.com.br' },
            message: { subject: 'Alou', body: 'Seja bem vindo!' }
        });

        return res.send();
    }

};

