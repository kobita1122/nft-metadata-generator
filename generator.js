const fs = require('fs');
const config = require('./config');

const generateMetadata = () => {
  for (let i = 1; i <= config.collectionSize; i++) {
    const metadata = {
      name: `${config.namePrefix}${i}`,
      description: config.description,
      image: `${config.baseUri}/${i}.png`,
      edition: i,
      attributes: [
        {
          trait_type: "Generation",
          value: "Gen 1"
        },
        {
          trait_type: "Rarity",
          value: i % 5 === 0 ? "Legendary" : "Common"
        }
      ],
      compiler: "NFT Metadata Generator v1.0"
    };

    fs.writeFileSync(`./${i}.json`, JSON.stringify(metadata, null, 2));
    console.log(`Generated: ${i}.json`);
  }
  console.log("Metadata generation complete!");
};

generateMetadata();
