import dayGiftPC from '../images/dayGiftPC.png'
import fakeShopee from '../images/fakeShopee.png'
import myPortfolio from '../images/myPortfolio.png'
import myPortfolioProject from '../images/myPortfolioProject.png'
import myPortfolioProjectTab from '../images/myPortfolioProjectTab.jpg'
import myPortfolioProjectMobi from '../images/myPortfolioProjectMobi.jpg'
import ReactJSLogo from '../images/ReactIcon.png'
import BoostrapLogo from '../images/boostrapLogo.png'
import JqueryLogo from '../images/jqueryLogo.png'
import NodeJSLogo from '../images/nodeJS.png'
import GitHubLogo from '../images/GitHubLogo.png'

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
      illustration: [myPortfolio, myPortfolioProject, myPortfolioProjectTab, myPortfolioProjectMobi],
    },
    usedTech: ['ReactJS', 'Jquery', 'NodeJS', 'Github'],
    usedTech: [
      { id: '1', name: 'ReactJS', img: ReactJSLogo },
      { id: '2', name: 'Jquery', img: JqueryLogo },
      { id: '3', name: 'NodeJS', img: NodeJSLogo },
      { id: '4', name: 'Github', img: GitHubLogo }
    ],
    responsive: true,
    urlLive: 'https://github.com/hoangkim58/myprofile',
    urlCode: 'https://github.com/hoangkim58/myprofile',

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
    usedTech: [
      { id: '1', name: 'Jquery', img: JqueryLogo },
      { id: '2', name: 'Github', img: GitHubLogo },
      { id: '3', name: 'Boostrap', img: BoostrapLogo },
    ],
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
    usedTech: [ 
      { id: '1', name: 'Jquery', img: JqueryLogo }, 
      { id: '2', name: 'Github', img: GitHubLogo },
    ],
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
    type: 'React',
    image: {
      thumbnail: 'https://wallpaperaccess.com/full/2588759.jpg',
      illustration: ['https://wallpaperaccess.com/full/2588759.jpg'],
    },
    usedTech: [],
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
    content: 'The Deegree of Engineer',
    major: 'Electronics',
    gpa: '7.3/10',
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
