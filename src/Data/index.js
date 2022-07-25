import dayGiftPC from '../images/dayGiftPC.png'
import fakeShopee from '../images/fakeShopee.png'
import myPortfolio from '../images/myPortfolio.png'
import myPortfolioProject from '../images/myPortfolioProject.png'
import myPortfolioProjectTab from '../images/myPortfolioProjectTab.jpg'
import myPortfolioProjectMobi from '../images/myPortfolioProjectMobi.jpg'
import ReactJSLogo from '../images/ReactIcon.png'
import BoostrapLogo from '../images/boostrapLogo.png'
import JqueryLogo from '../images/jqueryLogo.png'
import SCSSLogo from '../images/SCSSLogo.png'
import NodeJSLogo from '../images/nodeJS.png'
import GitHubLogo from '../images/GitHubLogo.png'
import TypeScriptLogo from '../images/TypeScriptLogo.png'
import AngularJSLogo from '../images/AngularJS.png'
import weather from '../images/weather.png'
import weatherData from '../images/weatherData.png'
import weatherClock from '../images/weatherClock.png'
import MemoryAlbums from '../images/MemoryGameAlbum.png'
import MemoryPlay from '../images/MemoryGamePlay.png'


export const types = ['All', 'React', 'JavaScript']

export const projects = [
  {
    id: 9,
    name: 'Memory Game',
    briefDescription: 'It\'s your memory challenge',
    description: 'Rule: Click another card for the next time and you will win when you got 12 point.',
    framework: 'AngularJS / Node JS',
    type: 'React',
    image: {
      thumbnail: MemoryAlbums,
      illustration: [MemoryAlbums, MemoryPlay],
    },
    usedTech: [
      { id: '1', name: 'TypeScript', img: TypeScriptLogo },
      { id: '1', name: 'AngularJS', img: AngularJSLogo },
      { id: '1', name: 'SCSS', img: SCSSLogo },
      { id: '2', name: 'Github', img: GitHubLogo },
    ],
    responsive: false,
    urlLive: 'https://karim-doan.github.io/memory-game',
    urlCode: 'https://github.com/karim-doan/memory-game',

  },
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
    usedTech: [
      { id: '1', name: 'ReactJS', img: ReactJSLogo },
      { id: '2', name: 'Jquery', img: JqueryLogo },
      { id: '3', name: 'NodeJS', img: NodeJSLogo },
      { id: '4', name: 'Github', img: GitHubLogo },

    ],
    responsive: true,
    urlLive: 'https://karim-doan.github.io/my-portfolio/',
    urlCode: 'https://github.com/karim-doan/myprofile',

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
    urlLive: 'https://karim-doan.github.io/mini-game/',
    urlCode: 'https://github.com/karim-doan/mini-game',

  },
  {
    id: 4,
    name: 'Weather Focecast',
    briefDescription: `A basic weather forecast app`,
    description: `Create a simple login system with Facebook Account, get weather information
    from OpenWeatherMap API and show location of this city on map with Leaflet
    API. Furthermore, users can enter voice requests with Web Speech API.
    `,
    framework: '',
    type: 'JavaScript',
    image: {
      thumbnail: weather,
      illustration: [weather, weatherData, weatherClock],
    },
    usedTech: [],
    responsive: true,
    urlLive: 'https://karim-doan.github.io/weather-app/',
    urlCode: 'https://github.com/karim-doan/weather-app',

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
    urlLive: 'https://karim-doan.github.io/home-shopee-page/',
    urlCode: 'https://github.com/karim-doan/home-shopee-page/tree/master',

  },
  {
    id: 50,
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
    position: 'Web Developer'
  },
  contacts: [
    {
      id: 1,
      name: 'phone',
      content: '(84) 967718xxx'
    },
    {
      id: 2,
      name: 'email',
      content: 'example123@gmail.com'
    },
    {
      id: 3,
      name: 'facebook',
      content: 'https://www.facebook.com/example/'
    },

    {
      id: 5,
      name: 'zalo',
      content: '0967718xxx / 0767108xxx'
    },
    {
      id: 6,
      name: 'github',
      content: 'https://github.com/hoangkim58'
    },
  ],
  objective: {
    name: 'Short',
    content: `I have less than one year of experience for software development.  Quickly
    adapting to the highly collaborative work environment, working hard, not afraid
    to difficulties, interested in finding a solution to the problem and always ready
    to learn new technologies and knowledge.`,
  },
  education: {
    time: '2017 - 2022',
    content: 'The Degree of Engineer',
    major: 'Electronics',
    gpa: '7.3/10',
    at: 'Sai Gon University'
  },
  skill: {
    programLanguages: 'HTML, CSS, JavaScript',
    library: 'React JS',
    tools: 'Github',
    database: 'NoSQL (Mongoose DB)',
  },
  project: {
    weatherFocecast: `Create a simple login system with Facebook Account, get weather information
    from OpenWeatherMap API and show location of this city on map with Leaflet
    API. Furthermore, users can enter voice requests with Web Speech API.
    `,
    myPortfolio: `To present a few personal projects and my CV. This project is built using the
    React library with the support of several other libraries`,
    miniGame: `A basic website that includes some small apps inside, such as a countdown
    feature, women's day greeting cards, and birthday greeting cards.
    `,
  },
  certification: {
    toeic: 'TOEIC Certificate with score 500 issued by IIG VIETNAM. '
  }
}
