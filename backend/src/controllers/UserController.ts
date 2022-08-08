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
        emailService.sendMail(
            { name: 'Bruno', email: 'brunolages@cpejr.com.br' },
            { subject: 'Alou', body: 'Seja bem vindo!' }
        );

        return res.send();
    }

};

