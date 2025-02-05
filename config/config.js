const config = {
  personal: {
    name: "Виталий Стрижекозин",
    profession: "Психолог-консультант",
    shortDescription:
      "Помогаю людям обрести гармонию и решить жизненные трудности",
    photo: "assets/images/profile.jpg",
    headerBackground: "assets/images/header-bg.jpg",
  },

  buttons: {
    contact: {
      text: "Записаться",
      action: "contact",
    },
    prices: {
      text: "Цены",
      action: "prices",
    },
  },

  popups: {
    contact: {
      title: "Свяжитесь прямо сейчас:",
      buttons: [
        {
          type: "phone",
          title: "Позвонить",
          value: "+7 (917) 952-73-96",
          link: "tel:+79179527396",
          icon: "assets/images/icons/phone.svg",
        },
        {
          type: "telegram",
          title: "Написать в Telegram",
          value: "@Vitalii_Strish001",
          link: "https://t.me/Vitalii_Strish001",
          icon: "assets/images/icons/telegram.svg",
        },
        {
          type: "whatsapp",
          title: "Написать в WhatsApp",
          value: "+7 (917) 952-73-96",
          link: "https://wa.me/79991234567",
          icon: "assets/images/icons/whatsapp.svg",
        },
      ],
    },
    prices: {
      title: "Стоимость консультации",
      items: [
        {
          title: "Одна сессия",
          price: "6000 ₽",
          duration: "60 минут",
        },
      ],
      contactButton: {
        text: "Записаться",
        action: "contact",
      },
    },
  },

  sections: {
    about: {
      id: "about",
      title: "Обо мне",
      content: `Как психолог-консультант, я придерживаюсь интегративного подхода,
            сочетая современные методики психологической помощи с глубоким пониманием человеческой природы.

            Моя миссия — помочь вам найти внутренние ресурсы для преодоления жизненных трудностей и
            достижения гармонии с собой и окружающим миром. В своей работе я использую методики
            когнитивно-поведенческой терапии, что позволяет достигать устойчивых результатов в решении
            различных психологических задач.

            Каждая консультация — это безопасное пространство, где вы можете быть собой и говорить
            о том, что действительно важно.`,
      education: [
        "Самарский университет, факультет психологии",
        "Дополнительное образование по когнитивно-поведенческой терапии",
        "Регулярное участие в профессиональных конференциях и семинарах по психологии",
      ],
      contactButton: {
        text: "Записаться",
        action: "contact",
      },
    },
    advantages: {
      id: "advantages",
      title: "Почему стоит выбрать меня",
      items: [
        {
          title: "Индивидуальный подход",
          description:
            "Разрабатываю уникальную стратегию, учитывающую ваши личные потребности и цели",
          icon: "assets/images/icons/individual.svg",
        },
        {
          title: "Конфиденциальность",
          description:
            "Гарантирую полную приватность наших сессий и безопасное пространство для работы",
          icon: "assets/images/icons/privacy.svg",
        },
        {
          title: "Современные методики",
          description:
            "Использую научно-обоснованные подходы и регулярно обновляю свои знания",
          icon: "assets/images/icons/methods.svg",
        },
      ],
      contactButton: {
        text: "Записаться",
        action: "contact",
      },
    },
    testimonials: {
      id: "testimonials",
      title: "Отзывы",
      items: [
        {
          name: "Анна М.",
          photo: "assets/images/anna.jpeg",
          text: "Благодаря Виталию я смогла преодолеть свои страхи и начать новую жизнь. Его подход помог мне увидеть ситуацию с другой стороны и найти решения, которые я раньше не замечала.",
          type: "Очные консультации",
        },
        {
          name: "Дмитрий К.",
          photo: "assets/images/dima.jpeg",
          text: "Несмотря на онлайн формат, консультации были очень эффективными. Виталий помог мне разобраться с профессиональным выгоранием и найти новые источники мотивации.",
          type: "Онлайн консультации",
        },
        {
          name: "Елена С.",
          photo: "assets/images/elena.jpeg",
          text: "Очень благодарна за помощь в решении семейных конфликтов. Теперь я лучше понимаю себя и своих близких. Профессиональный подход и внимательное отношение к деталям.",
          type: "Очные консультации",
        },
        {
          name: "Михаил Р.",
          photo: "assets/images/misha.jpeg",
          text: "Удобный формат онлайн-консультаций позволил мне работать над собой, несмотря на плотный график. Виталий помог мне справиться с тревожностью и улучшить качество жизни.",
          type: "Онлайн консультации",
        },
      ],
      contactButton: {
        text: "Записаться",
        action: "contact",
      },
    },
  },

  contacts: [
    {
      type: "phone",
      title: "Позвонить",
      value: "+7 (917) 952-73-96",
      link: "tel:+79179527396",
      icon: "assets/images/icons/phone.svg",
    },
    {
      type: "telegram",
      title: "Telegram",
      value: "@Vitalii_Strish001",
      link: "https://t.me/Vitalii_Strish001",
      icon: "assets/images/icons/telegram.svg",
    },
    {
      type: "whatsapp",
      title: "WhatsApp",
      value: "+7 (917) 952-73-96",
      link: "https://wa.me/79179527396",
      icon: "assets/images/icons/whatsapp.svg",
    }
  ],

  social: [
    {
      type: "vk",
      title: "VK",
      link: "https://vk.com/vitalii_strish",
      icon: "assets/images/icons/vk.svg",
    },
    {
      type: "instagram",
      title: "Instagram",
      link: "https://www.instagram.com/vitalii_strish",
      icon: "assets/images/icons/instagram.svg",
    },
    {
      type: "telegram-channel",
      title: "Telegram",
      link: "https://t.me/Vitalii_Strish",
      icon: "assets/images/icons/telegram.svg",
    }
  ]
};
