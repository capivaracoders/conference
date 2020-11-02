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

export interface TimeObject {
  hour: string;
  minute: string;
}

export interface Presentation {
  title: string;
  description: string;
  dateTime: Date | undefined;
  startTime: TimeObject;
  endTime: TimeObject | undefined;
  speakers: Speaker[];
  type: 'talk'|'workshop';
  level: string;
}

export interface EventSchedule {
  name: 'Segunda-feira'|'Terça-feira'|'Quarta-feira'|'Quinta-feira'|'Sexta-feira'|'Sábado'|'Domingo';
  data: string; // formatted string date
  talks: Presentation[];
}

function DateTimeToTimeObject(date: Date): TimeObject {
  return {
    hour: date.getHours().toString().padStart(2, '0'),
    minute: date.getMinutes().toString().padStart(2, '0'),
  };
}

function namesToTalks(names: string[]): Presentation[] {
  return names
    .map(name => SpeakerList.get(name))
    .filter(v => v)
    .map(speaker => {
      return speaker.activities
        .map(activity => {
          activity.speakers = [speaker];
          return activity;
        });
    })
    .flat()
    .filter(presentation => presentation.dateTime)
    .map((presentation) => {
      const { dateTime, startTime } = presentation;
      presentation.startTime = startTime || DateTimeToTimeObject(dateTime);
      return presentation;
    })
    .sort(({ dateTime: a}, { dateTime: b }) => a.getTime() - b.getTime());
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

export const SpeakerList: Map<string, Speaker> = new Map(([{
  name: 'Daniela Petruzalek',
  bio: 'Daniela Petruzalek é uma engenheira de software com experiência em desenvolvimento backend e engenharia de dados, atualmente trabalhando como Technology Principal na ThoughtWorks UK. Ela é reconhecida pelo Google como Google Developer Expert em Go e Google Cloud Platform. Ela também é Google Cloud Certfied Data Engineer, Oracle Certfied Professional, TEDx speaker e palestrante convidada no curso “Artificial Intelligence: Cloud and Edge Implementations” da Universidade de Oxford. No seu tempo livre ela se dedica a contribuições open source, jogar (e colecionar) video games e a acariciar gatos aleatórios nas ruas de Londres.',
  picture: 'assets/speakers/DanielaPetruzalek.jpg',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/danicat' } as SocialLinks,
    { name: 'twitter', url: 'https://twitter.com/danicat83' } as SocialLinks,
    { name: 'linkedin', url: 'https://www.linkedin.com/in/petruzalek/' } as SocialLinks,
  ] as SocialLinks[],
  activities: [{
    type: 'talk',
    title: 'Apache Spark para Iniciantes',
    description: 'nesta talk nós vamos explorar como usar o Apache Spark para resolver o problema de Big Data. Iremos cobrir o modelo de execução, falando sobre drivers e workers, RDDs e dataframes e, finalmente, distribuição de dados (data shuffling). Todos estes conceitos serão demonstrados com live coding, executando tanto localmente como na cloud.',
    dateTime: new Date('2020-11-20T19:00-03:00'),
  }] as Presentation[]
}, {
  name: 'Gisely Lucas Bernardino',
  bio: 'Engenheira de software na CI&T, com formação em Ciência da Computação pelo UNIBH, Co-fundadora da Desplugue-se. Possui experiência em desenvolvimento de aplicações web. Tendo se especializado e apaixonado a cada dia pela Acessibilidade na Web, por acreditar que é necessário tornar a web cada vez mais inclusiva. Curiosa e entusiasta pela tecnologia, adora pesquisar sobre a integração entre a computação e a natureza. Está sempre na luta por um ambiente cada vez mais diverso, respeitoso e inclusivo.',
  picture: 'assets/speakers/GiselyLucasBernardino.jpeg',
  socialProfiles: [{ name: 'linkedin', url: 'https://br.linkedin.com/in/giselylucas' }],
  activities: [{
    type: 'talk',
    title: 'Acessibilidade Digital na Web - do essencial a transformação',
    description: `Atualmente, construir uma aplicação web, não é apenas criar uma página HTML, adicionando modificadores e pronto. É preciso olhar além, entender qual a experiência que os seus usuários estão tendo, seja em performance como em interação. Com isso, a Acessibilidade Digital vem ganhando um foco muito grande, e permitindo um diferencial nas aplicações. Pois desenvolver aplicações acessíveis é aumentar o acesso à diferentes usuários, é permitir que a experiência do usuário seja a melhor, é desenvolver seguindo as boas práticas e garantir uma boa performance.
A ideia dessa palestra é mostrar como e o que podemos pensar ao desenvolver aplicações web. Entendendo os verdadeiros impactos da Acessibilidade e a interação dela com diferente áreas.`,
    level: 'iniciante e intermediária',
    dateTime: new Date('2020-11-16T19:00-03:00'),
  } as Presentation]
}, {
  name: 'Fernanda Wanderley',
  bio: 'Sou Doutora em Inteligência Computacional e minha principal área de interesse é a de aplicações de aprendizado de máquina em problemas biomédicos. Ser capaz de causar um impacto positivo na vida das pessoas, usando meus conhecimentos, me traz uma satisfação enorme. Atualmente trabalho com detecção de patologias em imagens de raio-x e lesões em tomografia de tórax. Também já realizei pesquisas sobre previsão de eficácia de quimioterapia em câncer de mama e busca de variantes genéticas em DNA.',
  picture: 'assets/speakers/FernandaWanderley.jpeg',
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
    dateTime: new Date('2020-11-19T19:00-03:00'),
  }]
}, {
  name: 'Erika Carvalho',
  bio: 'Back-end developer, embaixadora do Women Techmakers e organizadora do Women Who Go Curitiba. Entusiasta de Golang, apaixonada por comunidades, além de vegana e artesã. Ela/dela.',
  picture: 'assets/speakers/ErikaCarvalho.jpeg',
  socialProfiles: [
    { name: 'github', url: 'github.com/erikacarvalho' },
    { name: 'twitter', url: 'twitter.com/erikones_' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/erika-carvalho/' },
  ],
  activities: [{
    type: 'talk',
    title: '',
    description: '',
    level: '',
    // dateTime: new Date('2020-11-18T20:00-03:00')
  }]
}, {
  name: 'Camila Campos',
  bio: 'A chata dos testes e do código bonito, formada em Sistemas de Informação na EACH-USP e é desenvolvedora de software na SumUp. Organiza duas iniciativas incríveis que visam a inclusão de mulheres na tecnologia: Rails Girls São Paulo e Women Dev Summit.',
  picture: 'assets/speakers/CamilaCampos.jpg',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/camilacampos' },
    { name: 'twitter', url: 'https://twitter.com/camposmilaa' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/camposmilaa' },
  ],
  activities: [{
    type: 'talk',
    title: 'Como não odiar seus testes',
    description: 'Sabemos que escrever testes automatizados é extremamente importante, pois, entre outras coisas, eles garantem a qualidade do nosso código e o funcionamento da nossa aplicação. Apesar disso, muitas vezes acabamos com uma suíte de testes que, além de ser difícil de entender e manter, não é confiável. Nessa talk, vamos ver como reconhecer e evitar alguns dos problemas mais comuns que nos fazem odiar nossos testes, além de dar algumas dicas de como melhorar nossos testes.',
    level: 'Intermediário',
    dateTime: new Date('2020-11-16T20:00-03:00'),
  }] as Presentation[]
}, {
  name: 'Alex Rios',
  bio: '13 anos entregando software que impacta milhões de usuários. Tech Lead na indusria de jogos, mas já passou em empresas de bilhetagem eletronica, pagamentos e telecom. Organizador das comunidades de Kotlin e Go na cidade de Curitiba.',
  picture: 'assets/speakers/AlexRios.jpeg',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/alexrios' },
    { name: 'twitter', url: 'https://twitter.com/alextrending' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/alex-rios-28706219/' },
  ] as SocialLinks[],
  activities: [{
    title: 'Tudo que vc precisar saber antes de ser um lider técnico',
    description: 'Liderar um time nunca foi uma tarefa fácil. Nos últimos anos muitos desenvolvedores estão caindo de para-quédas nessa situação e nem sempre com o treinamento ou a mentoria adequada. Essa talk traz um compilado de técnicas e dicas que foram extramamente importantes na ascensão para liderança de uma equipe de tecnologia.',
    level: 'Intermediário',
    dateTime: new Date('2020-11-18T19:00-03:00'),
  }] as Presentation[]
}, {
  name: 'Camilla Martins',
  bio: 'Punk, paulista, santista e alucinada pela Marvel. Fundadora de iniciativas pra minas em TI e Docker Community Leader. Sou DevOps Engineer e atualmente trabalho na Descomplica e pós-graduanda em Forense Computacional. Nas horas vagas, estou codando (também!) e cuidando de ratinhos de estimação.',
  picture: 'assets/speakers/CamillaMartins.jpg',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/camilla-m' },
    { name: 'twitter', url: 'https://twitter.com/punkdodevops' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/camilla-martins-603344115/' },
  ] as SocialLinks[],
  activities: [{
    title: 'Ingressando em DevOps: como está o mercado e os processos seletivos?',
    description: 'Depois de váaarios processos seletivos passados, uma palestra sobre experiências reais. Dicas não só pra parte de DevOps, mas sobre negociação de benefícios, salário, como não cair em algumas roubadas de entrevistas, como analisar a empresa que você está em processo, o que geralmente caem em processos de DevOps, questões de migração de nível, etc. Bora bater um papo e trocar experiências sobre isso?',
    level: 'Iniciante',
    dateTime: new Date('2020-11-17T19:00-03:00'),
  }] as Presentation[]
}, {
  name: 'Alexandre Santos Costa',
  bio: 'Desenvolvedor com deficiencia visual apaixonado por tecnologia, palestrante internacional  e evangelista da acessibilidade e inclusão. Microsoft MVP em Development Technologies, TDC RockStar e Xamarin Chapter Lead  na ArcTouch',
  picture: 'assets/speakers/AlexandreSantosCosta.jpg',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/magoolation' },
    { name: 'twitter', url: 'https://www.twitter.com/magoolation' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/magoolation' },
  ] as SocialLinks[],
  activities: [{
    title: 'Como hackiei minha carreira trocando as constantes por variáveis',
    description: 'No ano passado fiz uma transição de carreira assumindo uma posição de liderança. Apesar de parecer um movimento natural diversos fatores da minha jornada me levaram onde estou hoje. Nesta palestra quero compartilhar pontos importantes e que podem ajudar profissionais de todos os nívies a se desenvolverem',
    level: 'Iniciante',
    dateTime: new Date('2020-11-17T20:00-03:00'),
  }] as Presentation[]
}, {
  name: 'Willian Frantz',
  bio: 'Trabalho com desenvolvimento de sistemas desde 2011, atualmente focando mais no backend usando Elixir/Phoenix para aplicações Web.',
  picture: 'assets/speakers/WillianFrantz.jpeg',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/WLSF' },
    { name: 'twitter', url: 'https://twitter.com/frantz_willian' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/willianfrantz/' },
  ] as SocialLinks[],
  activities: [{
    title: 'O Elixir da juventude',
    description: 'Aprenda todo o funcionamento de um projeto, desde criação até manutenção de uma aplicação web real utilizando Elixir e Phoenix. Vamos conhecer diferentes aspectos da tecnologia, como o Phoenix LiveView, websockets com PubSub e ciclo de vida da aplicação.',
    level: 'Intermediário',
    dateTime: new Date('2020-11-20T20:00-03:00'),
  }] as Presentation[]
}, {
  name: 'Felipe Rodrigues',
  bio: 'Tenho 27 anos e trabalho como UX designer desde 2015. Minha experiência de 5 anos em um dos maiores bancos privados do país me permitiu participar de diversos projetos, desde a pesquisa, ideação, prototipação até o desenvolvimento e implementação de soluções digitais.',
  picture: 'assets/speakers/FelipeRodrigues.jpeg',
  company: 'Objective',
  role: 'UX Designer',
  socialProfiles: [{ name: 'linkedin', url: 'https://www.linkedin.com/in/felipe-rodrigues-17543592/' }],
  activities: [{
    type: 'talk',
    title: 'Noções de User Experience e UX do Mal (Economia da Atenção)',
    description: 'O objetivo desta palestra é abordar noções gerais de User Experience (UX) e User Interface (UI) e como os aplicativos são desenhados para prender sua atenção. Através de exemplos práticos iremos explorar estes dois conceitos e falar um pouco sobre economia da atenção e Human Centered Design. Ideal para quem gostaria de começar a explorar o universo de UX.',
    level: 'Iniciante',
    dateTime: new Date('2020-11-18T18:00-03:00'),
  }, {
    type: 'workshop',
    title: 'Como tirar suas ideias do papel?',
    description: 'Um workshop para apresentar ferramentas e discutir quais os melhores caminhos para estruturar seus projetos. Através de metodologias facilitadas, aplicativos e ferramentas acessíveis, irei mostrar mostrar como se organizar para tirar suas ideais do papel. A ideia é que seja uma atividade participativa, que além de apresentar métodos e ferramentas baseados no PMI e Scrum, também tenha abertura para que os participantes tragam projetos pessoais que gostariam de por em prática.',
    level: 'Iniciante',
    dateTime: new Date('2020-11-21T09:00-03:00'),
    endTime: { hour: '11', minute: '00' },
  }] as Presentation[]
}, {
  name: 'Luis Henrique Matias',
  bio: 'Há mais de 10 anos trabalhando na área de TI, com desenvolvimento e gestão de equipe, Matias é hoje o IT Manager na Juno. Com uma carreira que envolve viradas de noite para entrega de projeto, valoriza qualidade de vida e, principalmente, as pessoas. É corredor de rua, aprecia um bom chopp e é difícil de derrotar em alguns games.',
  picture: 'assets/speakers/LuisHenriqueMatias.jpeg',
  socialProfiles: [{ name: 'linkedin', url: 'https://www.linkedin.com/in/luis-matias-1aab8635/' }] as SocialLinks[],
  activities: [{
    type: 'talk',
    title: 'Cultura na prática: como autonomia e colaboração impactam a tecnologia',
    description: 'Ambiente inspirador, que desafie. Demandas bem direcionadas, que aproveitem o tempo com inteligência. Autonomia, para experimentar, inovar, trazer novas tecnologias, rodar novas metodologias ágeis. Trocas constantes entre pares. Tudo isso se conecta em um espaço de valorização profissional, promovendo espaço para grandes resultados surgirem. Matias vai compartilhar um pouco da sua trajetória e olhar de gestão de como a cultura é a chave para profissionais de TI.',
    level: 'Iniciante',
    dateTime: new Date('2020-11-19T18:00-03:00'),
  }] as Presentation[],
}, {
  name: 'Chrysthian Akihiro Suguiy Simão',
  bio: 'Trabalho com tecnologias web há 15 anos, sendo os últimos 3 como arquiteto front-end na Juno. Entusiasta de novas tecnologias, concluí minha pós graduação em Desenvolvimento de Jogos para Computador em 2010, e desde então como hobby, tento encontrar alternativas para juntar o mundo web com jogos.',
  company: 'Juno',
  picture: 'assets/speakers/ChrysthianAkihiroSuguiySimão.jpeg',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/chrysthian/' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/chrysthian-simao/' },
  ] as SocialLinks[],
  activities: [{
    type: 'workshop',
    title: 'Jogos em navegadores, comofas?',
    description: 'Vamos combinar bibliotecas e ferramentas web (React, Pixi, Howler), entendendo o ciclo de vida de cada uma, fazendo elas trabalharem em conjunto para construir uma POC (prova de conceito) de um jogo simples.',
    level: 'Intermediário',
    dateTime: new Date('2020-11-21T09:00-03:00'),
    endTime: { hour: '11', minute: '00' },
  }] as Presentation[],
}, {
  name: 'Matheus D. M. da Silva',
  bio: 'Santista de nascimento, entusiasta JavaScript e cientista da computação, atualmente trabalho como desenvolvedor front-end na Contabilizei.',
  picture: 'assets/speakers/MatheusDMdaSilva.jpeg',
  company: 'Contabilizei',
  role: 'Desenvolvedor',
  socialProfiles: [
    { name: 'github', url: 'https://github.com/MatheusDonizete' },
    { name: 'twitter', url: 'https://twitter.com/MathDonizete' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/matheusdonizete/' },
  ] as SocialLinks[],
  activities: [{
    type: 'workshop',
    title: 'Como tirar suas ideias do papel?',
    description: 'Um workshop para apresentar ferramentas e discutir quais os melhores caminhos para estruturar seus projetos. Através de metodologias facilitadas, aplicativos e ferramentas acessíveis, irei mostrar mostrar como se organizar para tirar suas ideais do papel. A ideia é que seja uma atividade participativa, que além de apresentar métodos e ferramentas baseados no PMI e Scrum, também tenha abertura para que os participantes tragam projetos pessoais que gostariam de por em prática.',
    level: 'Iniciante',
    dateTime: new Date('2020-11-21T09:00-03:00'),
    endTime: { hour: '11', minute: '00' },
  }] as Presentation[],
}] as Speaker[])
  .sort(({ name: a }, { name: b }) => a < b ? -1 : b < a ? 1 : 0)
  .map((speaker: Speaker): [string, Speaker] => [speaker.name, speaker]));

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
