import dayGiftPC from '../images/dayGiftPC.png'
import fakeShopee from '../images/fakeShopee.png'
import myPortfolio from '../images/myPortfolio.png'
import myPortfolioProject from '../images/myPortfolioProject.png'

export const types = ['All', 'React', 'JavaScript']

export const projects = [
  {
    id: 1,
    name: 'My portfolio',
    briefDescription: '',
    description: '',
    framework: 'React JS / Node JS',
    type: 'React',
    image: {
      thumbnail: myPortfolio,
      illustration: [myPortfolio, myPortfolioProject],
    },
    responsive: true,
    urlLive: 'urlLive',
    urlCode: 'urlCode',

  },
  {
    id: 2,
    name: 'Gift Game',
    briefDescription: '',
    description: '',
    framework: 'JavaScript',
    type: 'JavaScript',
    image: {
      thumbnail: dayGiftPC,
      illustration: [dayGiftPC],
    },
    responsive: true,
    urlLive: 'https://hoangkim58.github.io/daygift/',
    urlCode: 'https://github.com/hoangkim58/daygift',

  },
  {
    id: 3,
    name: ' Fake Shopee',
    briefDescription: 'e-commerce platform',
    description: 'Shopee Pte. Ltd. (Shopee) is a Singaporean multinational technology company which focuses mainly on e-commerce. Shopee was first launched in Singapore in 2015, and later expanded its reach abroad',
    framework: 'JavaScript',
    type: 'JavaScript',
    image: {
      thumbnail: fakeShopee,
      illustration: [fakeShopee],
    },
    responsive: false,
    urlLive: 'https://hoangkim58.github.io/fakeshopee/',
    urlCode: 'https://github.com/hoangkim58/fakeshopee/tree/master',

  },
  {
    id: 4,
    name: ' Coming Soon',
    briefDescription: '',
    description: '',
    framework: 'React JS / Node JS',
    type: 'JavaScript',
    image: {
      thumbnail: 'https://wallpaperaccess.com/full/2588759.jpg',
      illustration: ['https://wallpaperaccess.com/full/2588759.jpg'],
    },
    responsive: false,
    urlLive: 'urlLive',
    urlCode: 'urlCode',

  },
]

export const myInfo = {
  gerneral: {
    name: 'Đoàn Hoàng Kim',
    position: 'Frontend Developer'
  },
  contacts: [
    {
      id: 1,
      name: 'phone',
      content: '(84) 967718190'
    },
    {
      id: 2,
      name: 'email',
      content: 'hoangkim.work99@gmail.com'
    },
    {
      id: 3,
      name: 'facebook',
      content: 'https://www.facebook.com/kim99.doan/'
    },
    {
      id: 4,
      name: 'zalo',
      content: '0967718190 / 0767108684'
    },
    {
      id: 5,
      name: 'github',
      content: 'https://github.com/hoangkim58'
    },
  ],
  objective: {
    name: 'Short',
    content: '........',
  },
  education: {
    time: '2017 - 2022',
    content: '',
    at: 'Sai Gon University'
  },
  skill: {
    programLanguages: 'HTML, CSS, JavaScript',
    library: 'React JS',
    tools: 'Github',
    database: 'Mongoose DB',
  },
  project: {
    shopee: '...',
    giftgame: '...',
    netflix: '...',
  },
  certification: {
    toeic: 'Score 500'
  }
}
