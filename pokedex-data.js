// ===================================
// POKEDEX LONG-FORM CONTENT
// Converted from pokedex-content.md
// Images: character from asset/Pokemon/, place & legend from
// asset/World location/<folder>/Place and /Legend
// refs: reference links per section { overview:[], location:[], legend:[] }
// each ref = { t: "title", u: "url" }
// ===================================
const POKEDEX = {
  zapdos: {
    overview: "Zapdos is a Legendary Electric/Flying-type Pokémon associated with thunderstorms and lightning. It is known for its striking yellow feathers and powerful electrical abilities, making it one of the most recognizable members of the Legendary Birds.",
    locationName: "Lake Maracaibo",
    locationCountry: "Venezuela",
    locationHistory: "Lake Maracaibo is the largest lake in Venezuela. Where the Catatumbo River flows into it, the Catatumbo lightning storm appears on roughly 140 to 160 nights a year, for up to about nine hours a night. NASA data counts around 250 lightning flashes per square kilometre per year, one of the highest densities measured on Earth. Sailors have used the flashes as a natural lighthouse, known as the Beacon of Maracaibo.",
    whyHere: "Zapdos is tied to storms, so we looked for the most reliable storm on the planet. A thunderstorm that returns over the same spot for months of the year feels like the territory of a living creature. Other places also rank high for lightning, so we call this one of the densest, not the single densest.",
    legendName: "The Thunderbird",
    legendLabel: "Commonly cited",
    legendText: "The thunderbird is a powerful spirit-being in the traditions of several Indigenous peoples of North America. It is described as a giant bird whose wingbeats make thunder and whose eyes flash lightning. Details differ from nation to nation.\n\nZapdos shares the storm-bringing bird idea: yellow wings, electricity, and a link to thunderclouds. The legend comes from North America, while the map location was chosen for its lightning, so the two sections look at Zapdos through different lenses.",
    refs: {
      overview: [
        { t: "Zapdos (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pok%C3%A9mon)" },
        { t: "Legendary birds, Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Legendary_birds" }
      ],
      location: [
        { t: "Catatumbo lightning, Wikipedia", u: "https://en.wikipedia.org/wiki/Catatumbo_lightning" },
        { t: "Lake Maracaibo, Wikipedia", u: "https://en.wikipedia.org/wiki/Lake_Maracaibo" }
      ],
      legend: [
        { t: "Thunderbird (mythology), Wikipedia", u: "https://en.wikipedia.org/wiki/Thunderbird_(mythology)" }
      ]
    }
  },
  articuno: {
    overview: "Articuno is a Legendary Ice/Flying-type Pokémon and one of the three Legendary Birds of Kanto. It controls ice and cold air, and snow is said to fall wherever it flies. In the games it hides deep inside the Seafoam Islands.",
    locationName: "Mount Everest",
    locationCountry: "Nepal and China (Tibet)",
    locationHistory: "Everest is the highest mountain above sea level, about 8,849 m. Its upper slopes are covered by permanent snow and ice, with freezing temperatures and very thin air. The Nepali side lies in Sagarmatha National Park, a UNESCO World Heritage Site.",
    whyHere: "A bird that freezes the air needs a perch above the clouds. Everest is the highest and one of the coldest places people can reach, remote enough that a legendary bird could stay hidden.",
    legendName: "The Simurgh",
    legendLabel: "Our interpretation",
    legendText: "In Persian mythology the Simurgh is a huge, benevolent bird that lives on a mountain and is said to heal with its feathers. It is often drawn with long, flowing tail plumage.\n\nArticuno's graceful, long tail feathers and its aloof, mountain-dwelling image fit this parallel. No creator has linked Articuno to the Simurgh.",
    refs: {
      overview: [
        { t: "Articuno (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Articuno_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Mount Everest, Wikipedia", u: "https://en.wikipedia.org/wiki/Mount_Everest" },
        { t: "Sagarmatha National Park, UNESCO", u: "https://whc.unesco.org/en/list/120" }
      ],
      legend: [
        { t: "Simurgh, Wikipedia", u: "https://en.wikipedia.org/wiki/Simurgh" }
      ]
    }
  },
  moltres: {
    overview: "Moltres is a Legendary Fire/Flying-type Pokémon and one of the three Legendary Birds of Kanto. Each flap of its wings throws off flames, and it is said to heal its wounds by bathing in volcanic magma.",
    locationName: "Mount Merapi, Java",
    locationCountry: "Indonesia",
    locationHistory: "Merapi is one of Indonesia's most active volcanoes, rising north of the city of Yogyakarta. Its name is commonly translated as \"Mountain of Fire\". Indonesia sits on the Pacific Ring of Fire, a belt of volcanoes and earthquakes around the Pacific Ocean.",
    whyHere: "A bird of fire that heals in magma needs a volcano that really erupts. Merapi's repeated eruptions and its fiery name make it a fitting home, and it keeps Moltres far from the other fire legends on the map.",
    legendName: "The Phoenix",
    legendLabel: "Commonly cited",
    legendText: "The phoenix is a mythical fire bird that burns and is reborn from its own ashes. Similar birds appear in many cultures, such as the Bennu of ancient Egypt.\n\nMoltres' blazing plumage, its fire-and-flight identity, and its magma-healing habit all echo the rebirth theme.",
    refs: {
      overview: [
        { t: "Moltres (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Mount Merapi, Wikipedia", u: "https://en.wikipedia.org/wiki/Mount_Merapi" },
        { t: "Ring of Fire, Wikipedia", u: "https://en.wikipedia.org/wiki/Ring_of_Fire" }
      ],
      legend: [
        { t: "Phoenix (mythology), Wikipedia", u: "https://en.wikipedia.org/wiki/Phoenix_(mythology)" },
        { t: "Bennu, Wikipedia", u: "https://en.wikipedia.org/wiki/Bennu" }
      ]
    }
  },
  raikou: {
    overview: "Raikou is a Legendary Electric-type Pokémon and one of the Legendary Beasts of Johto. In the Johto legend it was revived by Ho-Oh after a tower fire. It moves with the speed of lightning, and its roar is like thunder.",
    locationName: "Seoul",
    locationCountry: "South Korea",
    locationHistory: "Seoul is the capital of South Korea, a large modern city surrounded by mountains such as Bukhansan. The tiger is a deep-rooted symbol in Korean culture. It appears in folk art and in the Dangun founding myth, and the mascot of the 1988 Seoul Olympics, Hodori, was a tiger.",
    whyHere: "Raikou's body looks like a tiger. We moved it from Japan to Korea on purpose, to spread legends across the map and to use Korea's tiger tradition. Its original inspiration in the games is Japanese (see the legend section).",
    legendName: "The Raijū",
    legendLabel: "Commonly cited",
    legendText: "The Raijū (\"thunder beast\") is a creature of Japanese folklore made of lightning. It is said to descend to earth during thunderstorms and may take the shape of an animal such as a cat, dog, or wolf.\n\nRaikou's name, lightning body, and storm-cloud imagery match the Raijū closely. The Korea placement is our own twist.",
    refs: {
      overview: [
        { t: "Raikou (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Raikou_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Seoul, Wikipedia", u: "https://en.wikipedia.org/wiki/Seoul" },
        { t: "Dangun, Wikipedia", u: "https://en.wikipedia.org/wiki/Dangun" }
      ],
      legend: [
        { t: "Raijū, Wikipedia", u: "https://en.wikipedia.org/wiki/Raij%C5%AB" }
      ]
    }
  },
  entei: {
    overview: "Entei is a Legendary Fire-type Pokémon and one of the Legendary Beasts of Johto. Volcanoes are said to erupt when it barks, and it races across the land because it cannot hold back its power.",
    locationName: "Beijing",
    locationCountry: "China",
    locationHistory: "Beijing is the capital of China and home to the Forbidden City, the imperial palace of the Ming and Qing dynasties. Pairs of bronze and stone lions stand guard at its gates and halls.",
    whyHere: "Entei has a lion-like body and mane. Here we chose its design reference over its volcano theme: Beijing is where lion guardians are most famous.",
    legendName: "The Chinese Guardian Lions (Shishi)",
    legendLabel: "Commonly cited",
    legendText: "Guardian lions are stone or bronze statues placed in pairs at gates, temples, and palaces to ward off evil. They became a common sign of power and protection across East Asia.\n\nEntei's lion shape, mane, and protective strength echo these statues. Its fire power is separate from the legend.",
    refs: {
      overview: [
        { t: "Entei (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Entei_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Beijing, Wikipedia", u: "https://en.wikipedia.org/wiki/Beijing" },
        { t: "Forbidden City, Wikipedia", u: "https://en.wikipedia.org/wiki/Forbidden_City" }
      ],
      legend: [
        { t: "Chinese guardian lions, Wikipedia", u: "https://en.wikipedia.org/wiki/Chinese_guardian_lions" }
      ]
    }
  },
  suicune: {
    overview: "Suicune is a Legendary Water-type Pokémon and one of the Legendary Beasts of Johto. It is said to embody the compassion of pure water and to purify filthy water wherever it passes.",
    locationName: "Lake Geneva",
    locationCountry: "Switzerland (shared with France)",
    locationHistory: "Lake Geneva is one of the largest freshwater lakes in Western Europe, fed by the Rhône and surrounded by the Alps and the Jura mountains. Geneva and Lausanne sit on its shores.",
    whyHere: "Suicune purifies water, and an alpine lake with mountain meltwater is a natural picture of clean, clear water. Placing it in Switzerland also gives Europe a water guardian that is different from Lugia and Kyogre.",
    legendName: "The Qilin (Kirin)",
    legendLabel: "Our interpretation",
    legendText: "The qilin is a gentle mythical creature of Chinese tradition, a symbol of good fortune and purity. It is said to tread so lightly that it does not harm living things.\n\nSuicune's calm, benevolent character and flowing crystal-like mane fit this parallel. No creator has confirmed the link.",
    refs: {
      overview: [
        { t: "Suicune (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Suicune_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Lake Geneva, Wikipedia", u: "https://en.wikipedia.org/wiki/Lake_Geneva" }
      ],
      legend: [
        { t: "Qilin, Wikipedia", u: "https://en.wikipedia.org/wiki/Qilin" }
      ]
    }
  },
  lugia: {
    overview: "Lugia is a Legendary Psychic/Flying-type Pokémon known as the guardian of the seas. Its wings are so powerful that it lives out of sight deep under the sea, and it is said that its wingbeats can cause storms lasting for weeks.",
    locationName: "Challenger Deep, Mariana Trench",
    locationCountry: "Western Pacific Ocean, near the Mariana Islands",
    locationHistory: "Challenger Deep is the deepest known point in Earth's oceans, nearly 11 km below the surface. The water pressure there is more than 1,000 times the pressure at sea level.",
    whyHere: "Lugia sleeps at the bottom of the sea, and no place on Earth is deeper. The trench keeps it hidden from people, and separates it from Kyogre, which we placed in the open Pacific.",
    legendName: "Ryūjin, the Dragon King of the Sea",
    legendLabel: "Our interpretation",
    legendText: "Ryūjin is a sea god of Japanese myth who rules the ocean from a palace under the waves and controls the tides.\n\nLugia's role as a protector who keeps the seas calm parallels this sea-deity image. No creator has confirmed the link.",
    refs: {
      overview: [
        { t: "Lugia (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Lugia_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Challenger Deep, Wikipedia", u: "https://en.wikipedia.org/wiki/Challenger_Deep" },
        { t: "Mariana Trench, Wikipedia", u: "https://en.wikipedia.org/wiki/Mariana_Trench" }
      ],
      legend: [
        { t: "Ryūjin, Wikipedia", u: "https://en.wikipedia.org/wiki/Ry%C5%ABjin" }
      ]
    }
  },
  hooh: {
    overview: "Ho-Oh is a Legendary Fire/Flying-type Pokémon whose feathers glow in seven colors. It is said to bring happiness to anyone who sees it, and in the Johto legend it revived the three Legendary Beasts.",
    locationName: "Kyoto",
    locationCountry: "Japan",
    locationHistory: "Kyoto was the imperial capital of Japan for over a thousand years and is famous for its temples, shrines, and traditional architecture. It blends old wooden halls with a modern city around them.",
    whyHere: "Ho-Oh's name comes from Hōō, the Japanese word for the phoenix. We use Kyoto to stand for Japan's cultural heart, and it also keeps Ho-Oh apart from Raikou (Korea) and Entei (China) on the map.",
    legendName: "The Fenghuang / Hōō",
    legendLabel: "Commonly cited",
    legendText: "In Chinese tradition the fenghuang is a mythical bird that appears in times of peace and prosperity. In Japan it is called Hōō and appears in temples, art, and as a symbol of good fortune.\n\nHo-Oh's name, its colorful plumage, and its role as a bringer of happiness match this legend closely.",
    refs: {
      overview: [
        { t: "Ho-Oh (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Ho-Oh_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Kyoto, Wikipedia", u: "https://en.wikipedia.org/wiki/Kyoto" }
      ],
      legend: [
        { t: "Fenghuang, Wikipedia", u: "https://en.wikipedia.org/wiki/Fenghuang" }
      ]
    }
  },
  celebi: {
    overview: "Celebi is a Mythical Psychic/Grass-type Pokémon that travels through time. It is regarded as a guardian of forests and is said to appear when the forest is at peace.",
    locationName: "Amazon rainforest",
    locationCountry: "Brazil (and eight other countries)",
    locationHistory: "The Amazon is the largest tropical rainforest on Earth, covering about 5.5 million square kilometres, with roughly 60% inside Brazil. It is home to a very large share of the world's known species.",
    whyHere: "Celebi is a forest guardian, and no forest is bigger or more biodiverse. Placing it in the Amazon also reminds visitors that forests need protection.",
    legendName: "Kokopelli",
    legendLabel: "Documented in beta development data, not officially confirmed",
    legendText: "Kokopelli is a flute-playing figure in the art and traditions of Native peoples of the American Southwest, including the Hopi and other Pueblo communities. It is associated with music, fertility, and trickster stories, and its meaning varies between communities.\n\nEarly Pokémon Gold and Silver development data (a May 1998 build) contains a black silhouette with three tufts of hair playing a flute, identified by researchers as based on Kokopelli and likely reworked into Celebi. The final design is a cute, fairy-like creature, so only part of the reference is visible today.\n\nThe legend comes from the American Southwest, while the map location was chosen for Celebi's role as a forest guardian, so the two sections look at Celebi through different lenses.",
    refs: {
      overview: [
        { t: "Celebi (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Celebi_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Amazon rainforest, Wikipedia", u: "https://en.wikipedia.org/wiki/Amazon_rainforest" }
      ],
      legend: [
        { t: "Kokopelli, Wikipedia", u: "https://en.wikipedia.org/wiki/Kokopelli" },
        { t: "Gold and Silver beta sprites, The Cutting Room Floor", u: "https://tcrf.net/Development:Pok%C3%A9mon_Gold_and_Silver/Sprites/980506" }
      ]
    }
  },
  regirock: {
    overview: "Regirock is a Legendary Rock-type Pokémon, one of the Regis. Its body is made of rocks, and it repairs damage by gathering new boulders. It sleeps in sealed ruins that can only be opened by reading Braille.",
    locationName: "Giza",
    locationCountry: "Egypt",
    locationHistory: "The Giza pyramid complex stands at the edge of the desert near Cairo. The Great Pyramid was built more than 4,500 years ago and is the only one of the Seven Wonders of the Ancient World that still stands.",
    whyHere: "Regirock is an ancient stone guardian sealed inside desert ruins. Giza is the most famous example of enormous ancient stonework in a desert setting.",
    legendName: "The Golem",
    legendLabel: "Commonly cited",
    legendText: "In Jewish folklore a golem is a figure shaped from clay or stone and brought to life by sacred words. It serves as a guardian and obeys commands. The best-known tale is set in Prague.\n\nThe Regis are widely compared to golems: humanoid bodies of raw material, ancient, and sealed away.",
    refs: {
      overview: [
        { t: "Regirock (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Regirock_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Giza pyramid complex, Wikipedia", u: "https://en.wikipedia.org/wiki/Giza_pyramid_complex" },
        { t: "Memphis and its Necropolis, UNESCO", u: "https://whc.unesco.org/en/list/86" }
      ],
      legend: [
        { t: "Golem, Wikipedia", u: "https://en.wikipedia.org/wiki/Golem" }
      ]
    }
  },
  regice: {
    overview: "Regice is a Legendary Ice-type Pokémon, one of the Regis. Its body was formed during an ice age and cannot be melted, and it surrounds itself with extremely cold air. It is sealed away in a cave opened only by Braille.",
    locationName: "Greenland",
    locationCountry: "Autonomous territory of Denmark",
    locationHistory: "Greenland is the world's largest island. An ice sheet covers about 80% of it and is up to roughly 3 km thick. Ice cores drilled from it preserve climate records stretching back more than 100,000 years.",
    whyHere: "Regice's body is ice from an ice age, and Greenland holds some of the oldest and thickest ice on Earth.",
    legendName: "The Jötnar (Norse frost giants)",
    legendLabel: "Our interpretation",
    legendText: "In Norse mythology the jötnar are giants, and some are tied to ice and cold. Norse settlers also lived in Greenland from around the year 985.\n\nRegice is a towering figure of ice, which parallels the frost giants. As a Regi it also belongs to the golem tradition (see Regirock).",
    refs: {
      overview: [
        { t: "Regice (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Regice_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Greenland, Wikipedia", u: "https://en.wikipedia.org/wiki/Greenland" },
        { t: "Greenland ice sheet, Wikipedia", u: "https://en.wikipedia.org/wiki/Greenland_ice_sheet" }
      ],
      legend: [
        { t: "Jötunn, Wikipedia", u: "https://en.wikipedia.org/wiki/J%C3%B6tunn" },
        { t: "Golem, Wikipedia", u: "https://en.wikipedia.org/wiki/Golem" }
      ]
    }
  },
  registeel: {
    overview: "Registeel is a Legendary Steel-type Pokémon, one of the Regis. It was imprisoned in ancient times, and its metal body is thought to be made of a substance not of this earth. Its tomb can only be opened by reading Braille.",
    locationName: "Ngwenya Mine",
    locationCountry: "Eswatini (southern Africa)",
    locationHistory: "Ngwenya is regarded as the oldest known mine in the world. Mining of red hematite and ochre there dates back about 41,000 to 43,000 years, and iron ore was mined on an industrial scale in the 20th century. The site is on Eswatini's UNESCO tentative list.",
    whyHere: "Registeel is an ancient iron being kept underground since the earliest times. The world's oldest mine, tied to iron-rich rock, is the best match, and it adds a second African location to the map. The oldest mining was for pigments and iron-bearing stone, not smelted iron.",
    legendName: "The Golem",
    legendLabel: "Commonly cited",
    legendText: "In Jewish folklore a golem is a figure shaped from stone and brought to life by sacred words. It serves as a guardian and obeys commands. The best-known tale is set in Prague.\n\nThe Regis are widely compared to golems: humanoid bodies of raw material, ancient, and sealed away.",
    refs: {
      overview: [
        { t: "Registeel (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Registeel_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Ngwenya Mine, Wikipedia", u: "https://en.wikipedia.org/wiki/Ngwenya_Mine" },
        { t: "Ngwenya Mine, UNESCO tentative list", u: "https://whc.unesco.org/en/tentativelists/5421/" }
      ],
      legend: [
        { t: "Golem, Wikipedia", u: "https://en.wikipedia.org/wiki/Golem" }
      ]
    }
  },
  latias: {
    overview: "Latias is a Legendary Dragon/Psychic-type Pokémon, one of the Eon Pokémon. It is highly intelligent, understands human speech, and can refract light to turn invisible.",
    locationName: "Venice",
    locationCountry: "Italy",
    locationHistory: "Venice is built across a lagoon on more than a hundred small islands linked by canals and bridges. The city and its lagoon are a UNESCO World Heritage Site.",
    whyHere: "The film Pokémon Heroes is set in Alto Mare, a canal city styled after Venice, where Latias and Latios protect the city. Latias and Latios share Venice, so their markers sit slightly apart on the globe to keep both clickable.",
    legendName: "The Winged Lion of Saint Mark",
    legendLabel: "Our interpretation",
    legendText: "The winged lion is the symbol of Venice. It appears on flags, buildings, and a statue on a column in Saint Mark's Square.\n\nWe found no confirmed legend behind the Eon Pokémon. We use the winged lion as a local parallel: a winged protector watching over a water city.",
    refs: {
      overview: [
        { t: "Latias (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Latias_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Venice, Wikipedia", u: "https://en.wikipedia.org/wiki/Venice" },
        { t: "Venice and its Lagoon, UNESCO", u: "https://whc.unesco.org/en/list/394" },
        { t: "Pokémon Heroes, Wikipedia", u: "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Heroes" }
      ],
      legend: [
        { t: "Lion of Saint Mark, Wikipedia", u: "https://en.wikipedia.org/wiki/Lion_of_Saint_Mark" }
      ]
    }
  },
  latios: {
    overview: "Latios is a Legendary Dragon/Psychic-type Pokémon, the brother of Latias. It is very intelligent, understands human speech, and is said to fly faster than a jet by folding its forelegs.",
    locationName: "Venice",
    locationCountry: "Italy",
    locationHistory: "Venice is built on a lagoon of canals, bridges, and islands, and the whole city is a UNESCO World Heritage Site. (Same location as Latias.)",
    whyHere: "Latios and Latias are a pair, and in Pokémon Heroes both guard the canal city of Alto Mare, styled after Venice. Latios sits slightly east of Latias on the globe so both markers can be clicked.",
    legendName: "The Winged Lion of Saint Mark",
    legendLabel: "Our interpretation",
    legendText: "The winged lion is the symbol of Venice, appearing on flags, buildings, and a statue in Saint Mark's Square.\n\nLatios's speed and protective role as a guardian fit the image of a winged lion standing watch over the city.",
    refs: {
      overview: [
        { t: "Latios (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Latios_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Venice, Wikipedia", u: "https://en.wikipedia.org/wiki/Venice" },
        { t: "Pokémon Heroes, Wikipedia", u: "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Heroes" }
      ],
      legend: [
        { t: "Lion of Saint Mark, Wikipedia", u: "https://en.wikipedia.org/wiki/Lion_of_Saint_Mark" }
      ]
    }
  },
  kyogre: {
    overview: "Kyogre is a Legendary Water-type Pokémon, the Sea Basin Pokémon. It is said to have expanded the seas with torrential rain, and its power is tied to the Blue Orb. It clashes with Groudon.",
    locationName: "Pacific Ocean, near Tahiti",
    locationCountry: "French Polynesia",
    locationHistory: "The Pacific is the largest ocean, covering about a third of Earth's surface. Tahiti is the largest island of French Polynesia, a volcanic island in the South Pacific.",
    whyHere: "Kyogre makes oceans bigger, so we gave it the biggest one. Tahiti also sits in the middle of the Pacific, and in Tahitian tradition Taʻaroa is the creator god of the sea, which suits a sea-making Pokémon.",
    legendName: "The Leviathan",
    legendLabel: "Commonly cited",
    legendText: "The Leviathan is a vast sea monster described in the Hebrew Bible. In later tradition it is the beast of the sea, paired with Behemoth on land.\n\nKyogre's whale-like body and its power over the oceans match the Leviathan image.",
    refs: {
      overview: [
        { t: "Kyogre (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Kyogre_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Pacific Ocean, Wikipedia", u: "https://en.wikipedia.org/wiki/Pacific_Ocean" },
        { t: "Tahiti, Wikipedia", u: "https://en.wikipedia.org/wiki/Tahiti" },
        { t: "Tangaroa, Wikipedia", u: "https://en.wikipedia.org/wiki/Tangaroa" }
      ],
      legend: [
        { t: "Leviathan, Wikipedia", u: "https://en.wikipedia.org/wiki/Leviathan" }
      ]
    }
  },
  groudon: {
    overview: "Groudon is a Legendary Ground-type Pokémon, the Continent Pokémon. It is said to have expanded the land with scorching sunlight, and its power is tied to the Red Orb. It rests in magma.",
    locationName: "Uluru",
    locationCountry: "Northern Territory, Australia",
    locationHistory: "Uluru is a huge sandstone monolith about 348 m high in Australia's red desert interior. It is sacred to the Anangu people and part of the UNESCO-listed Uluṟu-Kata Tjuṯa National Park.",
    whyHere: "Groudon is a creature of red earth and land-shaping. Uluru's red rock rises alone from the plain like a piece of continent. Anangu creation stories (Tjukurpa) describe ancestral beings shaping the land. We reference them respectfully as inspiration, not as a retelling.",
    legendName: "The Behemoth",
    legendLabel: "Commonly cited",
    legendText: "Behemoth is a huge land beast described in the Hebrew Bible (the Book of Job). It is the land counterpart of the sea's Leviathan.\n\nGroudon's massive, earth-bound body and its rivalry with Kyogre mirror this land-and-sea pair.",
    refs: {
      overview: [
        { t: "Groudon (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Groudon_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Uluru, Wikipedia", u: "https://en.wikipedia.org/wiki/Uluru" },
        { t: "Uluṟu-Kata Tjuṯa National Park, UNESCO", u: "https://whc.unesco.org/en/list/447" }
      ],
      legend: [
        { t: "Behemoth, Wikipedia", u: "https://en.wikipedia.org/wiki/Behemoth" }
      ]
    }
  },
  rayquaza: {
    overview: "Rayquaza is a Legendary Dragon/Flying-type Pokémon, the Sky High Pokémon. It lives in the ozone layer high above the clouds, and it is said to appear to stop the battle between Groudon and Kyogre.",
    locationName: "Chichén Itzá",
    locationCountry: "Yucatán, Mexico",
    locationHistory: "Chichén Itzá is a Maya city. Its main pyramid, El Castillo, is dedicated to Kukulcán, the feathered serpent. Around the spring and autumn equinoxes, light and shadow on its staircase form a snake-like shape that seems to slither down. It is a UNESCO World Heritage Site.",
    whyHere: "Rayquaza is a serpentine sky dragon, and Chichén Itzá is where a sky serpent is the center of a great monument. We honor it as a living heritage of the Maya people.",
    legendName: "Kukulcán / Quetzalcoatl, the feathered serpent",
    legendLabel: "Fan theory, not confirmed by the creators",
    legendText: "Quetzalcoatl (Aztec) and Kukulcán (Maya) are feathered serpent deities linked to wind, sky, and rain.\n\nFans connect Rayquaza to this figure because of its long serpent body and its role in the sky. Its look is also widely compared to the East Asian dragon, so we show both.",
    refs: {
      overview: [
        { t: "Rayquaza (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Rayquaza_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Chichén Itzá, Wikipedia", u: "https://en.wikipedia.org/wiki/Chichen_Itza" },
        { t: "Chichen-Itza, UNESCO", u: "https://whc.unesco.org/en/list/483" }
      ],
      legend: [
        { t: "Quetzalcoatl, Wikipedia", u: "https://en.wikipedia.org/wiki/Quetzalcoatl" },
        { t: "Kukulkan, Wikipedia", u: "https://en.wikipedia.org/wiki/Kukulkan" },
        { t: "Chinese dragon, Wikipedia", u: "https://en.wikipedia.org/wiki/Chinese_dragon" }
      ]
    }
  },
  regigigas: {
    overview: "Regigigas is a Legendary Normal-type Pokémon, the Colossal Pokémon. It is said to have created the other Regis, and a legend says it towed continents with ropes. Its Ability, Slow Start, halves its power for the first minutes of battle.",
    locationName: "Easter Island (Rapa Nui)",
    locationCountry: "Chile",
    locationHistory: "Easter Island is a remote island in the Pacific, famous for nearly 900 giant stone statues called moai, carved by the Rapa Nui people mostly between about 1250 and 1500. Rapa Nui National Park is a UNESCO World Heritage Site.",
    whyHere: "Regigigas is a giant of stone that moved enormous weights. Rapa Nui oral tradition says the moai \"walked\" to their platforms, which echoes a giant that hauled continents.",
    legendName: "Atlas and the Titans",
    legendLabel: "Our interpretation",
    legendText: "In Greek myth the Titans are an older generation of giants. Atlas, one of them, is condemned to hold up the sky.\n\nRegigigas is a colossal being of immense strength who carried a world-sized load, which parallels Atlas. Like the other Regis, it also belongs to the golem tradition (see Regirock).",
    refs: {
      overview: [
        { t: "Regigigas (Pokémon), Bulbapedia", u: "https://bulbapedia.bulbagarden.net/wiki/Regigigas_(Pok%C3%A9mon)" }
      ],
      location: [
        { t: "Easter Island, Wikipedia", u: "https://en.wikipedia.org/wiki/Easter_Island" },
        { t: "Moai, Wikipedia", u: "https://en.wikipedia.org/wiki/Moai" },
        { t: "Rapa Nui National Park, UNESCO", u: "https://whc.unesco.org/en/list/715" }
      ],
      legend: [
        { t: "Atlas (mythology), Wikipedia", u: "https://en.wikipedia.org/wiki/Atlas_(mythology)" },
        { t: "Titan (mythology), Wikipedia", u: "https://en.wikipedia.org/wiki/Titan_(mythology)" }
      ]
    }
  }
};

if (typeof module !== 'undefined' && module.exports) { module.exports = POKEDEX; }
