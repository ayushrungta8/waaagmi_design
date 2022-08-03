import Airtable from 'airtable';

export default async function submit(req, res) {
  const base = new Airtable({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  }).base('appc1kGE8syzfCfBR');

  const websites = [
    {
      name: 'Cosmos: The Internet of Blockchains',
      url: 'https://cosmos.network/',
      image: 'https://cosmos.network/og-image.jpg',
      date: '2022-08-03T10:47:49.418Z',
      tags: 'Blockchain',
    },
    {
      name: 'Scalable Blockchain Infrastructure: Billions of transactions & counting | Solana: Build crypto apps that scale',
      url: 'https://solana.com/',
      image: 'https://solana.com/sharing-card.png',
      date: '2022-08-03T10:48:09.362Z',
      tags: 'Blockchain',
    },
    {
      name: 'Lens Protocol',
      url: 'https://lens.xyz/',
      date: '2022-08-03T10:48:24.062Z',
      tags: 'Protocol',
    },
    {
      name: 'Friktion',
      url: 'https://friktion.fi/',
      image: 'https://friktion.fi/landing-banner.png',
      date: '2022-08-03T10:48:37.699Z',
      tags: 'DeFi',
    },
    {
      name: 'Home | Uniswap Protocol',
      url: 'https://uniswap.org/',
      image: 'https://uniswap.org/images/twitter-card.jpg',
      date: '2022-08-03T10:48:58.233Z',
      tags: 'DeFi',
    },
    {
      name: 'WalletConnect',
      url: 'https://walletconnect.com/',
      image: 'https://walletconnect.com/meta/social-card.jpg',
      date: '2022-08-03T10:49:09.513Z',
      tags: 'Wallet',
    },
    {
      name: 'Glow — Your New Favorite Solana Wallet',
      url: 'https://glow.app/',
      image: 'https://cdn.glow.app/social/landing.png',
      date: '2022-08-03T10:49:21.197Z',
      tags: 'Wallet',
    },
    {
      name: 'Phantom - A friendly Solana wallet built for DeFi & NFTs',
      url: 'https://phantom.app/',
      image: 'https://phantom.app/img/phantom-og.png',
      date: '2022-08-03T10:49:38.674Z',
      tags: 'Wallet',
    },
    {
      name: 'Dronies',
      url: 'https://www.droniesnft.com/',
      image:
        'https://assets.website-files.com/625468c241e7516edf4fa52e/62910f624d28163df2f4fce0_Opengraph.png',
      date: '2022-08-03T10:49:51.716Z',
      tags: 'NFT',
    },
    {
      name: 'Bored Ape Yacht Club',
      url: 'https://boredapeyachtclub.com/#/',
      image:
        'https://ipfs.io/ipfs/QmZAnAuhbwnPa2g5mfAnEKupChPgUM9VXB7USDVsBUnvYU',
      date: '2022-08-03T10:50:28.270Z',
      tags: 'NFT',
    },
    {
      name: 'Robotos: NFT Droid Characters Designed by Pablo Stanley',
      url: 'https://www.robotos.art/',
      image: 'https://robotos.art/images/og-image.png',
      date: '2022-08-03T10:50:39.840Z',
      tags: 'NFT',
    },
    {
      name: 'Bring the World to Ethereum | Polygon',
      url: 'https://polygon.technology/',
      image:
        'https://res.cloudinary.com/polygontech/image/upload/f_auto,q_auto,dpr_2,w_600/Homepage_OG_ba1bb79108',
      date: '2022-08-03T10:50:54.181Z',
      tags: 'Blockchain',
    },
  ];
  console.log(websites);
  try {
    websites.forEach((website) => {
      base('websites').update([
        {
          id: 'recHWwHE0KIJmvEBo',
          fields: {
            name: 'Notific',
            url: 'https://notific.xyz',
            image: 'https://notific.xyz/large_preview.png',
            date: '2022-08-01T14:13:28.935Z',
            user: 'ewgw',
            homePage: [
              {
                id: 'attzl7YHDRC7WiwGU',
              },
            ],
          },
        },
      ]);
    });
  } catch (err) {
    // console.log(err);
  }
}
