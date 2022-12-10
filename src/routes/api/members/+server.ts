import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    const members = [
        {
            id: 1,
            name: 'Angel Paul Agnabo',
            fb: 'https://www.facebook.com/100001329636975/'
        },
        {
            id: 2,
            name: 'Don Gumayagay',
            fb: 'https://www.facebook.com/100006490851102/'
        },
        {
            id: 3,
            name: 'Francis Endico',
            fb: 'https://www.facebook.com/100039990318663/'
        },
        {
            id: 4,
            name: 'Gerson Tano',
            fb: 'https://www.facebook.com/100003482974564/'
        },
        {
            id: 5,
            name: 'Jocel Ann Delos Reyes',
            fb: 'https://www.facebook.com/100004187590839/'
        },
        {
            id: 6,
            name: 'Khristine Galarde',
            fb: 'https://www.facebook.com/100011364506540/'
        },
        {
            id: 7,
            name: 'Ma Teresa Escandor',
            fb: 'https://www.facebook.com/100017942799039/'
        },
    ]
    return json(members);
};