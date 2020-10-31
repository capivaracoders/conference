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
  activities: Presentation[] | undefined;
}

export interface Presentation {
  title: string;
  description: string;
  dateTime: Date | undefined;
  startTime: { hour: string, minute: string };
  speakers: Speaker[];
  type: 'talk'|'workshop';
  level: string;
}

export interface EventSchedule {
  name: 'Segunda-feira'|'Terça-feira'|'Quarta-feira'|'Quinta-feira'|'Sexta-feira'|'Sábado'|'Domingo';
  data: string; // formatted string date
  talks: Presentation[];
}

function namesToTalks(names: string[]): Presentation[] {
  return names
    .map(name => SpeakerList.get(name))
    .filter(v => v)
    .map(speaker => speaker.activities)
    .flat()
    .filter(presentation => presentation.dateTime)
    .map((presentation) => {
      presentation.startTime = {
        hour: presentation.dateTime.getHours().toString().padStart(2, '0'),
        minute: presentation.dateTime.getMinutes().toString().padStart(2, '0'),
      };
      return presentation;
    })
    .sort(({ dateTime: a}, { dateTime: b }) => b.getTime() - a.getTime());
}

const talksOfTheDay = (talkList: Presentation[], day, month = 11, year = 2020) => {
  const date = new Date(`${year}-${month}-${day}T00:00-03:00`);

  const dateStart = new Date(date.getTime());
  const dateEnd = new Date(date.getTime());

  dateStart.setHours(0, 0, 0);
  dateEnd.setHours(23, 59, 59);

  const start = dateStart.getTime() - date.getTimezoneOffset();
  const end = dateEnd.getTime() - date.getTimezoneOffset();

  return talkList.filter(({ dateTime: talkDate }) => {
    const time = talkDate.getTime();
    return time > start && time <= end;
  });
};

// @ts-ignore
// @ts-ignore
// @ts-ignore
export const SpeakerList: Map<string, Speaker> = new Map(([{
  name: 'Daniela Petruzalek',
  bio: 'Daniela Petruzalek é uma engenheira de software com experiência em desenvolvimento backend e engenharia de dados, atualmente trabalhando como Technology Principal na ThoughtWorks UK. Ela é reconhecida pelo Google como Google Developer Expert em Go e Google Cloud Platform. Ela também é Google Cloud Certfied Data Engineer, Oracle Certfied Professional, TEDx speaker e palestrante convidada no curso “Artificial Intelligence: Cloud and Edge Implementations” da Universidade de Oxford. No seu tempo livre ela se dedica a contribuições open source, jogar (e colecionar) video games e a acariciar gatos aleatórios nas ruas de Londres.',
  picture: 'https://github.com/danicat/public-speaking/blob/master/profile.jpg?raw=true',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/danicat' } as SocialLinks,
    { name: 'twitter', url: 'https://twitter.com/danicat83' } as SocialLinks,
    { name: 'linkedin', url: 'https://www.linkedin.com/in/petruzalek/' } as SocialLinks,
  ] as SocialLinks[],
  activities: [{
    title: 'Apache Spark para Iniciantes',
    description: 'nesta talk nós vamos explorar como usar o Apache Spark para resolver o problema de Big Data. Iremos cobrir o modelo de execução, falando sobre drivers e workers, RDDs e dataframes e, finalmente, distribuição de dados (data shuffling). Todos estes conceitos serão demonstrados com live coding, executando tanto localmente como na cloud.',
    type: 'talk',
  }] as Presentation[]
}, {
  name: 'Gisely Lucas Bernardino',
  bio: 'Engenheira de software na CI&T, com formação em Ciência da Computação pelo UNIBH, Co-fundadora da Desplugue-se. Possui experiência em desenvolvimento de aplicações web. Tendo se especializado e apaixonado a cada dia pela Acessibilidade na Web, por acreditar que é necessário tornar a web cada vez mais inclusiva. Curiosa e entusiasta pela tecnologia, adora pesquisar sobre a integração entre a computação e a natureza. Está sempre na luta por um ambiente cada vez mais diverso, respeitoso e inclusivo.',
  picture: 'https://media-exp1.licdn.com/dms/image/C4D03AQEekQiijNo3Zw/profile-displayphoto-shrink_800_800/0?e=1609372800&v=beta&t=AVk4BAqyUTDO_KHyJIs8wpiRpvDsu4lItzo1ZgeVC8c',
  socialProfiles: [{ name: 'linkedin', url: 'https://br.linkedin.com/in/giselylucas' }],
  activities: [{
    type: 'talk',
    title: 'Acessibilidade Digital na Web - do essencial a transformação',
    description: `Atualmente, construir uma aplicação web, não é apenas criar uma página HTML, adicionando modificadores e pronto. É preciso olhar além, entender qual a experiência que os seus usuários estão tendo, seja em performance como em interação. Com isso, a Acessibilidade Digital vem ganhando um foco muito grande, e permitindo um diferencial nas aplicações. Pois desenvolver aplicações acessíveis é aumentar o acesso à diferentes usuários, é permitir que a experiência do usuário seja a melhor, é desenvolver seguindo as boas práticas e garantir uma boa performance.
A ideia dessa palestra é mostrar como e o que podemos pensar ao desenvolver aplicações web. Entendendo os verdadeiros impactos da Acessibilidade e a interação dela com diferente áreas.`,
    level: 'iniciante e intermediária',
  } as Presentation]
}, {
  name: 'Fernanda Wanderley',
  bio: 'Sou Doutora em Inteligência Computacional e minha principal área de interesse é a de aplicações de aprendizado de máquina em problemas biomédicos. Ser capaz de causar um impacto positivo na vida das pessoas, usando meus conhecimentos, me traz uma satisfação enorme. Atualmente trabalho com detecção de patologias em imagens de raio-x e lesões em tomografia de tórax. Também já realizei pesquisas sobre previsão de eficácia de quimioterapia em câncer de mama e busca de variantes genéticas em DNA.',
  picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQEs_1rxCz7jKA/profile-displayphoto-shrink_800_800/0?e=1609372800&v=beta&t=MxX8BnxQVwdlonnMdVKeEwHtDnKc0GZGFyDVccusVIc',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/nandaw' },
    { name: 'twitter', url: 'https://twitter.com/nandaw' },
    { name: 'linkedin', url: 'http://linkedin.com/in/nandaw' },
  ],
  activities: [{
    type: 'talk',
    title: 'O uso de IA e Ciência de Dados na detecção de patologias em imagens médicas',
    description: 'Métodos de Inteligência Artificial têm sido frequentemente utilizados na extração de conhecimentos a partir de imagens médicas, seja no auxílio ao diagnóstico, seja na triagem de pacientes. Nessa apresentação você poderá entender como a IA e a Ciência de dados são utilizadas em imagens de diferentes modalidade de exames, como raio-x, tomografia computadorizada e eletrocardiograma.',
    level: 'iniciante e intermediária.',
  }]
}, {
  name: 'Erika Carvalho',
  bio: 'Back-end developer, embaixadora do Women Techmakers e organizadora do Women Who Go Curitiba. Entusiasta de Golang, apaixonada por comunidades, além de vegana e artesã. Ela/dela.',
  picture: 'https://media-exp1.licdn.com/dms/image/C4D03AQGTLtNOiMJzvQ/profile-displayphoto-shrink_400_400/0?e=1608768000&v=beta&t=f_WKVlThJZM2-oXko_LDiZd2a-_dGamB5wH5IsoDgPo',
  socialProfiles: [
    { name: 'github', url: 'github.com/erikacarvalho' },
    { name: 'twitter', url: 'twitter.com/erikones_' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/erika-carvalho/' },
  ],
  activities: []
}, {
  name: 'Camila Campos',
  bio: 'A chata dos testes e do código bonito, formada em Sistemas de Informação na EACH-USP e é desenvolvedora de software na SumUp. Organiza duas iniciativas incríveis que visam a inclusão de mulheres na tecnologia: Rails Girls São Paulo e Women Dev Summit.',
  picture: 'https://scontent.fbfh3-3.fna.fbcdn.net/v/t1.0-9/58622708_2301445619915803_3458451762891980800_o.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeHVWup0s_Q4zU2tpDhcQKbZ1MKPGjbSWjfUwo8aNtJaN96StBe6JvOKAkKH2izuKArqBJfbOTifCwAB1CiOBPV0&_nc_ohc=UebOuU32loUAX8LhpEB&_nc_ht=scontent.fbfh3-3.fna&oh=ca8e59fec0e0c4d575a13c7b21064969&oe=5FC3FC91',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/camilacampos' },
    { name: 'twitter', url: 'https://twitter.com/camposmilaa' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/camposmilaa' },
  ],
  activities: [{
    title: 'Como não odiar seus testes',
    description: 'Sabemos que escrever testes automatizados é extremamente importante, pois, entre outras coisas, eles garantem a qualidade do nosso código e o funcionamento da nossa aplicação. Apesar disso, muitas vezes acabamos com uma suíte de testes que, além de ser difícil de entender e manter, não é confiável. Nessa talk, vamos ver como reconhecer e evitar alguns dos problemas mais comuns que nos fazem odiar nossos testes, além de dar algumas dicas de como melhorar nossos testes.',
    level: 'Intermediário',
  }] as Presentation[]
}, {
  name: 'Alex Rios',
  bio: '13 anos entregando software que impacta milhões de usuários. Tech Lead na indusria de jogos, mas já passou em empresas de bilhetagem eletronica, pagamentos e telecom. Organizador das comunidades de Kotlin e Go na cidade de Curitiba.',
  picture: 'https://avatars1.githubusercontent.com/u/515382',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/alexrios' },
    { name: 'twitter', url: 'https://twitter.com/alextrending' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/alex-rios-28706219/' },
  ] as SocialLinks[],
  activities: [{
    title: 'Tudo que vc precisar saber antes de ser um lider técnico',
    description: 'Liderar um time nunca foi uma tarefa fácil. Nos últimos anos muitos desenvolvedores estão caindo de para-quédas nessa situação e nem sempre com o treinamento ou a mentoria adequada. Essa talk traz um compilado de técnicas e dicas que foram extramamente importantes na ascensão para liderança de uma equipe de tecnologia.',
    level: 'Intermediário',
  }] as Presentation[]
}, {
  name: 'Camilla Martins',
  bio: 'Punk, paulista, santista e alucinada pela Marvel. Fundadora de iniciativas pra minas em TI e Docker Community Leader. Sou DevOps Engineer e atualmente trabalho na Descomplica e pós-graduanda em Forense Computacional. Nas horas vagas, estou codando (também!) e cuidando de ratinhos de estimação.',
  picture: 'https://pbs.twimg.com/profile_images/1266452969769369608/xienVwRw_400x400.jpg',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/camilla-m' },
    { name: 'twitter', url: 'https://twitter.com/punkdodevops' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/camilla-martins-603344115/' },
  ] as SocialLinks[],
  activities: [{
    title: 'Ingressando em DevOps: como está o mercado e os processos seletivos?',
    description: 'Depois de váaarios processos seletivos passados, uma palestra sobre experiências reais. Dicas não só pra parte de DevOps, mas sobre negociação de benefícios, salário, como não cair em algumas roubadas de entrevistas, como analisar a empresa que você está em processo, o que geralmente caem em processos de DevOps, questões de migração de nível, etc. Bora bater um papo e trocar experiências sobre isso?',
    level: 'Iniciante',
  }] as Presentation[]
}, {
  name: 'Alexandre Santos Costa',
  bio: 'Desenvolvedor com deficiencia visual apaixonado por tecnologia, palestrante internacional  e evangelista da acessibilidade e inclusão. Microsoft MVP em Development Technologies, TDC RockStar e Xamarin Chapter Lead  na ArcTouch',
  picture: 'https://scontent.fbfh3-3.fna.fbcdn.net/v/t1.0-9/118697151_3514096171935019_2543441917847066335_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeF-MyQakl_I-am9CSG2Jc1VYk2tNbZ44j5iTa01tnjiPqHoGfqBC8eQjz8ZXd-B6Fyx1tdRLJPx0OE2L5bCD5x3&_nc_ohc=SVYhiOGho2AAX9ooSW2&_nc_ht=scontent.fbfh3-3.fna&oh=e293a8875db9a1e611694d9a3f4afb82&oe=5FC4ADCA',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/magoolation' },
    { name: 'twitter', url: 'https://www.twitter.com/magoolation' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/magoolation' },
  ] as SocialLinks[],
  activities: [{
    title: 'Como hackiei minha carreira trocando as constantes por variáveis',
    description: 'No ano passado fiz uma transição de carreira assumindo uma posição de liderança. Apesar de parecer um movimento natural diversos fatores da minha jornada me levaram onde estou hoje. Nesta palestra quero compartilhar pontos importantes e que podem ajudar profissionais de todos os nívies a se desenvolverem',
    level: 'Iniciante',
  }] as Presentation[]
}, {
  name: 'Willian Frantz',
  bio: 'Trabalho com desenvolvimento de sistemas desde 2011, atualmente focando mais no backend usando Elixir/Phoenix para aplicações Web.',
  picture: 'https://avatars3.githubusercontent.com/u/5873073?s=400&u=0daa6ff3d3c1d03505a3e9c38ce1ccd0f5ddf849&v=4',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/WLSF' },
    { name: 'twitter', url: 'https://twitter.com/frantz_willian' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/willianfrantz/' },
  ] as SocialLinks[],
  activities: [{
    title: 'O Elixir da juventude',
    description: 'Aprenda todo o funcionamento de um projeto, desde criação até manutenção de uma aplicação web real utilizando Elixir e Phoenix. Vamos conhecer diferentes aspectos da tecnologia, como o Phoenix LiveView, websockets com PubSub e ciclo de vida da aplicação.',
    level: 'Intermediário',
  }] as Presentation[]
}, {
  name: 'Felipe Rodrigues',
  bio: 'Tenho 27 anos e trabalho como UX designer desde 2015. Minha experiência de 5 anos em um dos maiores bancos privados do país me permitiu participar de diversos projetos, desde a pesquisa, ideação, prototipação até o desenvolvimento e implementação de soluções digitais.',
  picture: 'https://storage.googleapis.com/production-hostgator_brasil-v1-0-7/237/117237/GSS7hfFR/3540f3d725194b369b46d101f1559f1b',
  socialProfiles: [{ name: 'linkedin', url: 'https://www.linkedin.com/in/felipe-rodrigues-17543592/' }],
  activities: [{
    title: 'Noções de User Experience e UX do Mal (Economia da Atenção)',
    description: 'O objetivo desta palestra é abordar noções gerais de User Experience (UX) e User Interface (UI) e como os aplicativos são desenhados para prender sua atenção. Através de exemplos práticos iremos explorar estes dois conceitos e falar um pouco sobre economia da atenção e Human Centered Design. Ideal para quem gostaria de começar a explorar o universo de UX.',
    level: 'Iniciante',
  }] as Presentation[]
}, {
  name: 'Luis Henrique Matias',
  bio: 'Há mais de 10 anos trabalhando na área de TI, com desenvolvimento e gestão de equipe, Matias é hoje o IT Manager na Juno. Com uma carreira que envolve viradas de noite para entrega de projeto, valoriza qualidade de vida e, principalmente, as pessoas. É corredor de rua, aprecia um bom chopp e é difícil de derrotar em alguns games.',
  picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQFVJjbnMUtSKw/profile-displayphoto-shrink_800_800/0?e=1609372800&v=beta&t=1TJw8OjbrwPF6_EehzPpFiUfYTHVJX2f3XxHCc8ZEGI',
  socialProfiles: [{ name: 'linkedin', url: 'https://www.linkedin.com/in/luis-matias-1aab8635/' }] as SocialLinks[],
  activities: [{
    title: 'Cultura na prática: como autonomia e colaboração impactam a tecnologia',
    description: 'Ambiente inspirador, que desafie. Demandas bem direcionadas, que aproveitem o tempo com inteligência. Autonomia, para experimentar, inovar, trazer novas tecnologias, rodar novas metodologias ágeis. Trocas constantes entre pares. Tudo isso se conecta em um espaço de valorização profissional, promovendo espaço para grandes resultados surgirem. Matias vai compartilhar um pouco da sua trajetória e olhar de gestão de como a cultura é a chave para profissionais de TI.',
    level: 'Iniciante',
  }] as Presentation[],
}] as Speaker[])
  .sort(({ name: a }, { name: b }) => a < b ? -1 : b < a ? 1 : 0)
  .map((speaker: Speaker): [string, Speaker] => [speaker.name, speaker]));

console.log({ SpeakerList });

const talks = namesToTalks([...SpeakerList.keys()]);

export const AGENDA_ONLINE: EventSchedule[] = [
    {
        name: 'Segunda-feira',
        data: '16/11',
        talks: talksOfTheDay(talks, 16),
    },
    {
        name: 'Terça-feira',
        data: '17/11',
        talks: talksOfTheDay(talks, 17),
    },
    {
        name: 'Quarta-feira',
        data: '18/11',
        talks: talksOfTheDay(talks, 18),
    },
    {
        name: 'Quinta-feira',
        data: '19/11',
        talks: talksOfTheDay(talks, 19),
    },
    {
        name: 'Sexta-feira',
        data: '20/11',
        talks: talksOfTheDay(talks, 20),
    },
    {
        name: 'Sábado',
        data: '21/11',
        talks: talksOfTheDay(talks, 21),
    },
];
