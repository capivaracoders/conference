export const QUESTIONS = [
  {
      question: 'O evento forncece certificado de participação?',
      answer: 'Sim! Os certificados são enviados em até 7 dias após a realização do evento, para o e-mail informado no momento da inscrição através de um arquivo .pdf em anexo.'
  },
  {
      question: 'Minha comunidade pode apoiar o evento?',
      answer: 'Sim! Envie um e-mail para ping@capiconf.com para conversarmos sobre isso.'
  },
  {
      question: 'Quero patrocinar ou apoiar o evento',
      answer: 'Maravilha! Envie um e-mail para ping@capiconf.com para conversarmos sobre isso.'
  },
  {
      question: 'Quando será realizado o evento?',
      answer: 'Atenção! A CapiConf está adiada:',
      itens: [
          {
              title: "Clique aqui para entender os próximos passos!",
              url: "/2020/info-sobre-coronavirus"
          }
      ]
  },
  {
      question: 'Qual o horário do evento?',
      answer: 'O evento inicia pontualmente as 8h da manhã para credenciamento e café da manhã. As palestras irão iniciar as 9h da manhã e irão até as 17h, com intervalo para almoço e café da tarde.'
  },
  {
      question: 'Onde será realizado o evento?',
      answer: 'O #CapiConf vai acontecer no Auditório Desembargador Cordeiro Clève, localizado na UniBrasil Centro Universitário, Rua Konrad Adenauer, 442. Tarumã, Curitiba, Paraná, 82821-020'
  },
  {
      question: 'Inscrições em grupo',
      answer: 'Tenho um grupo de amigos querendo ir, mereço um desconto? Sim! Envie um e-mail para ping@capiconf.com falando de onde vem o seu grupo e quantas são as pessoas. Conseguimos gerar cupons de desconto para grupos de 10 ou mais pessoas.'
  },
  {
      question: 'Quais serviços NÃO estão inclusos na minha inscrição?',
      answer: 'Despesas com hospedagem, estacionamento, transporte, almoço ou jantar NÃO estão inclusas na sua inscrição.'
  },
  {
      question: 'O que está incluso no meu ingresso?',
      answer: 'Acesso livre a área de realização do evento, stands, sorteio de brindes, e a todas as palestras durante o dia do evento.'
  },
  {
      question: 'Confirmação de inscrição',
      answer: 'A confirmação da inscrição é enviada após a confirmação do pagamento no sistema do Sympla, para pagamentos por boleto, depende do prazo de compensação no banco que pode demorar até 48 horas após o pagamento.'
  },
  {
      question: 'Não poderei ir no dia todo, posso pagar metade?',
      answer: 'Infelizmente não, ao comprar o ingresso, reservamos a sua cadeira o dia todo.'
  },
  // {
  //     question: 'Como chegar do aeroporto até o evento?',
  //     answer: 'Desembarcando no Aeroporto Internacional Afonso Pena que fica cerca de 17,2 KM do local do evento a melhor opção para chegar ao evento é pegar um Uber (cuidado com os taxistas), ou ônibus 205 na Estação Tubo Aeroporto até a Estação Tubo Circulo Militar'
  // },
  {
      question: 'Quais os hoteis mais recomendados?',
      answer: 'Os hotéis recomendados e próximos ao evento são:',
      itens: [
          { title: 'Slaviero Slim Curitiba Alto da XV', url: 'https://www.google.com.br/maps/place/Slaviero+Slim+Curitiba+Alto+da+XV/@-25.4250216,-49.2720437,15z/data=!4m15!1m9!2m8!1zSG90w6lpcw!3m6!1zSG90w6lpcw!2sFaculdade+de+Educa%C3%A7%C3%A3o+Superior+do+Paran%C3%A1+-+R.+Dr.+Faivre,+141+-+Centro,+Curitiba+-+PR,+80060-140!3s0x94dce43e46327351:0xdd829bc0e31e8dde!4m2!1d-49.2632889!2d-25.4250515!3m4!1s0x94dce43f197cd017:0x3ba37a935a52e293!8m2!3d-25.4247929!4d-49.2604429?hl=pt-BR' },
          { title: 'Hotel Master Express Curitiba', url: 'https://www.google.com.br/maps/place/Hotel+Master+Express+Curitiba/@-25.4296333,-49.265821,15z/data=!4m15!1m9!2m8!1zSG90w6lpcw!3m6!1zSG90w6lpcw!2sFaculdade+de+Educa%C3%A7%C3%A3o+Superior+do+Paran%C3%A1+-+R.+Dr.+Faivre,+141+-+Centro,+Curitiba+-+PR,+80060-140!3s0x94dce43e46327351:0xdd829bc0e31e8dde!4m2!1d-49.2632889!2d-25.4250515!3m4!1s0x94dce441ac185c75:0x6b8735e0bba10a9a!8m2!3d-25.430243!4d-49.261547?hl=pt-BR' },
          { title: 'Mabu Curitiba Business', url: 'https://www.google.com.br/maps/place/Mabu+Curitiba+Business/@-25.4296333,-49.265821,15z/data=!4m12!1m6!3m5!1s0x94dce441ac185c75:0x6b8735e0bba10a9a!2sHotel+Master+Express+Curitiba!8m2!3d-25.430243!4d-49.261547!3m4!1s0x0:0x3578b2403df9189d!8m2!3d-25.4290781!4d-49.2658871?hl=pt-BR' },
          { title: 'Hotel ibis Budget Curitiba Centro', url: 'https://www.google.com.br/maps/place/Hotel+ibis+Budget+Curitiba+Centro/@-25.4296333,-49.265821,15z/data=!4m12!1m6!3m5!1s0x94dce441ac185c75:0x6b8735e0bba10a9a!2sHotel+Master+Express+Curitiba!8m2!3d-25.430243!4d-49.261547!3m4!1s0x0:0xdea829448147642f!8m2!3d-25.4342254!4d-49.2605442?hl=pt-BR' },
          { title: 'Hotel ibis Curitiba Shopping', url: 'https://www.google.com.br/maps/place/Hotel+ibis+Curitiba+Shopping/@-25.4325788,-49.2741036,15z/data=!4m12!1m6!3m5!1s0x0:0x96613114e47c783a!2sBristol+Upper+Hotel!8m2!3d-25.4269876!4d-49.2544931!3m4!1s0x0:0x907719aa568579a4!8m2!3d-25.4388349!4d-49.2778927?hl=pt-BR' }
      ]
  }
];
