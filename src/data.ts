export interface ModuleType {
  title: string;
  description: string;
  image: string;
  totalExp: number;
  quests: number;
  modules: {
    title: string;
    tasks: number;
    img: string;
  }[];
  certificate: {
    title: string;
    description: string;
    image: string;
  };
}

const MODULE_1: ModuleType = {
  title: "Basics of Crypto",
  description: "The safest and easiest place to start your crypto journey!",
  image: "/crypto.png",
  quests: 6,
  totalExp: 1490,
  modules: [
    {
      title: "What all can you do with your web3 wallet?",
      tasks: 11,
      img: "/dummy.png",
    },
    {
      title: "How does your wallet address look like?",
      tasks: 11,
      img: "/dummy.png",
    },
    {
      title: "Installing your own MetaMask wallet!",
      tasks: 11,
      img: "/dummy.png",
    },
    {
      title: "What is a wallet's secret recovery phrase?",
      tasks: 11,
      img: "/dummy.png",
    },
    {
      title: "What do you call converting regular money to crypto, and back?",
      tasks: 11,
      img: "/dummy.png",
    },
    {
      title:
        "Which of these is NOT a way to convert regular money to crypto, and back?",
      tasks: 11,
      img: "/dummy.png",
    },
  ],
  certificate: {
    title: "Intract Certified: Learner NFT",
    description: "Your crypto black-belt certificate",
    image: "/certificate.png",
  },
};

const MODULE_2: ModuleType = {
  title: "Introduction to Airdrops",
  description: "Your best bet to make it big in crypto!",
  image: "/crypto.png",
  quests: 4,
  totalExp: 1040,
  modules: [
    {
      title: "In simple terms, what are airdrops?",
      tasks: 11,
      img: "/dummy.png",
    },
    {
      title: "Assuming Uber were to do an airdrop, who would be rewarded?",
      tasks: 11,
      img: "/dummy.png",
    },
    {
      title: "Why do projects distribute their ownership via airdrops?",
      tasks: 11,
      img: "/dummy.png",
    },
    {
      title: "How do tokens affect the 'governance' of a project?",
      tasks: 11,
      img: "/dummy.png",
    },
    {
      title: "Which of these is NOT a reason why projects do an airdrop?",
      tasks: 11,
      img: "/dummy.png",
    },
    {
      title:
        "What's the difference between airdrop hunting and airdrop farming?",
      tasks: 11,
      img: "/dummy.png",
    },
    ],
    certificate: {
        title: "Intract Certified: Earner NFT",
        description: "Your proof of airdrop expertise",
        image: "/certificate.png",
      },
};

export { MODULE_1, MODULE_2 };
