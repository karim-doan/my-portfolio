import dayGiftPC from '../../images/dayGiftPC.png' 
import fakeShopee from '../../images/fakeShopee.png' 
import myPortfolio from '../../images/myPortfolio.png' 

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
      illustration: myPortfolio,
    },
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
      illustration: dayGiftPC,
    },
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
      illustration: fakeShopee,
    },
    urlLive: 'https://hoangkim58.github.io/shopeefrontend/',
    urlCode: 'https://github.com/hoangkim58/shopeefrontend/tree/master',

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
      illustration: 'https://wallpaperaccess.com/full/2588759.jpg',
    },
    urlLive: 'urlLive',
    urlCode: 'urlCode',

  },
]
