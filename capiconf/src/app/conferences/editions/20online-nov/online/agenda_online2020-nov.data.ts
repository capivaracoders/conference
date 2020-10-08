/* tslint:disable:max-line-length */
export interface SocialLinks {
  url: string;
  name: 'twitter'|'github'|'linkedin'|'facebook'|'instagram'|'twitch';
}

export interface Speaker {
  name: string;
  company: string;
  role: string;
  picture: string; // url
  bio: string;
  socialProfiles: SocialLinks[];
}

export interface Presentation {
  title: string;
  description: string;
  startTime: { hour: string, minute: string };
  speakers: Speaker[];
  type: 'talk'|'workshop';
}

export interface EventSchedule {
  name: 'Segunda-feira'|'Terça-feira'|'Quarta-feira'|'Quinta-feira'|'Sexta-feira'|'Sábado'|'Domingo';
  data: string; // formatted string date
  talks: Presentation[];
}

export const AGENDA_ONLINE: EventSchedule[] = [
    {
        name: 'Segunda-feira',
        data: '16/11',
        talks: []
    },
    {
        name: 'Terça-feira',
        data: '17/11',
        talks: []
    },
    {
        name: 'Quarta-feira',
        data: '18/11',
        talks: []
    },
    {
        name: 'Quinta-feira',
        data: '19/11',
        talks: []
    },
    {
        name: 'Sexta-feira',
        data: '20/11',
        talks: []
    },
    {
        name: 'Sábado',
        data: '21/11',
        talks: []
    },
];
