// ===================================
// QUIZ QUESTION POOL (from quiz-questions.csv)
// 18 Pokémon x 3 questions = 54 total
// Each: { q, correct, wrong:[3], explain }
// The quiz engine picks 3 at random and shuffles the options each round.
// ===================================
const QUIZ = [
  { slug:'articuno', q:"Where is Mount Everest located?", correct:"Nepal/China", wrong:["India/Pakistan","Bhutan/India","Nepal/India"], explain:"Everest sits on the border between Nepal and China (Tibet)." },
  { slug:'articuno', q:"How high is Mount Everest above sea level?", correct:"8,848.86 meters", wrong:["8,611 meters","8,586 meters","9,144 meters"], explain:"The 2020 joint survey by Nepal and China gave 8,848.86 m." },
  { slug:'articuno', q:"Which legend is linked to Articuno's design in this project?", correct:"The Persian Simurgh", wrong:["The Egyptian Bennu","The Slavic Firebird","The Native American Thunderbird"], explain:"The Simurgh is a giant, healing mountain bird. This is our interpretation, not an official source." },

  { slug:'zapdos', q:"Where is Lake Maracaibo located?", correct:"Venezuela", wrong:["Colombia","Brazil","Peru"], explain:"Lake Maracaibo is the largest lake in Venezuela." },
  { slug:'zapdos', q:"What is the Catatumbo lightning?", correct:"A storm over Lake Maracaibo that returns on roughly 140 to 160 nights a year", wrong:["A seasonal aurora seen over the lake","A volcanic eruption that creates lightning","A man-made light show for tourists"], explain:"It is one of the densest lightning zones on Earth, and sailors used it as a natural beacon." },
  { slug:'zapdos', q:"Which legend is linked to Zapdos's design?", correct:"The Thunderbird", wrong:["The Japanese Raijū","The Greek Phoenix","The Norse Jötnar"], explain:"The thunderbird is a storm-bringing spirit bird in North American Indigenous traditions." },

  { slug:'moltres', q:"Where is Mount Merapi located?", correct:"Java, Indonesia", wrong:["Luzon, Philippines","Kyushu, Japan","Hawaii, United States"], explain:"Merapi rises north of Yogyakarta on the island of Java." },
  { slug:'moltres', q:"What does the name Merapi commonly translate to?", correct:"Mountain of Fire", wrong:["Mountain of Clouds","Mountain of Thunder","Mountain of Ash"], explain:"Its fiery name suits the bird of flame." },
  { slug:'moltres', q:"Which legend is linked to Moltres's design?", correct:"The Phoenix", wrong:["The Thunderbird","The Simurgh","The Leviathan"], explain:"The phoenix is a fire bird that is reborn from its ashes." },

  { slug:'raikou', q:"Where is Seoul located?", correct:"South Korea", wrong:["Japan","China","North Korea"], explain:"Seoul is the capital of South Korea." },
  { slug:'raikou', q:"Which animal is a major Korean symbol, appears in the Dangun myth, and was the mascot of the 1988 Seoul Olympics?", correct:"The tiger", wrong:["The dragon","The crane","The fox"], explain:"The tiger Hodori was the 1988 mascot, and Raikou's body looks like a tiger." },
  { slug:'raikou', q:"Which Japanese creature is commonly linked to Raikou's design?", correct:"The Raijū, a thunder beast", wrong:["The Qilin","The Chinese guardian lion","The Behemoth"], explain:"The Raijū is a lightning creature of Japanese folklore. Placing Raikou in Korea is our own twist." },

  { slug:'entei', q:"Where is Beijing located?", correct:"China", wrong:["Japan","Mongolia","Vietnam"], explain:"Beijing is the capital of China." },
  { slug:'entei', q:"Which Beijing palace complex is guarded by pairs of bronze and stone lions?", correct:"The Forbidden City", wrong:["Angkor Wat","The Potala Palace","Himeji Castle"], explain:"Guardian lions stand at the gates and halls of the Forbidden City." },
  { slug:'entei', q:"Which legend is commonly linked to Entei's design?", correct:"The Chinese guardian lions (shishi)", wrong:["The Japanese Raijū","The Qilin","The Winged Lion of Saint Mark"], explain:"Guardian lions are paired statues placed at gates to ward off evil." },

  { slug:'suicune', q:"Lake Geneva is shared by Switzerland and which other country?", correct:"France", wrong:["Italy","Germany","Austria"], explain:"Lake Geneva lies on the border of Switzerland and France." },
  { slug:'suicune', q:"Which river feeds Lake Geneva?", correct:"The Rhône", wrong:["The Rhine","The Danube","The Seine"], explain:"The Rhône flows into and out of the lake." },
  { slug:'suicune', q:"Which legend is linked to Suicune's design in this project?", correct:"The Qilin (Kirin)", wrong:["Ryūjin","The Leviathan","The Phoenix"], explain:"The qilin is a gentle, pure creature of Chinese tradition. This is our interpretation." },

  { slug:'lugia', q:"In which ocean is the Mariana Trench?", correct:"Pacific Ocean", wrong:["Atlantic Ocean","Indian Ocean","Arctic Ocean"], explain:"The trench lies in the western Pacific near the Mariana Islands." },
  { slug:'lugia', q:"About how deep is Challenger Deep?", correct:"About 10,900 meters", wrong:["About 6,000 meters","About 8,000 meters","About 13,000 meters"], explain:"It is the deepest known point in Earth's oceans, nearly 11 km down." },
  { slug:'lugia', q:"Which legend is linked to Lugia's design in this project?", correct:"Ryūjin, the Dragon King of the Sea", wrong:["The Leviathan","Quetzalcoatl","Atlas"], explain:"Ryūjin is a Japanese sea god who rules the ocean. This is our interpretation." },

  { slug:'hooh', q:"Where is Kyoto located?", correct:"Japan", wrong:["China","South Korea","Philippines"], explain:"Kyoto is a historic former capital of Japan." },
  { slug:'hooh', q:"In Chinese tradition, what does the appearance of the fenghuang signal?", correct:"A time of peace and prosperity", wrong:["A coming flood","The death of an emperor","The start of a war"], explain:"Ho-Oh is also said to bring happiness to those who see it." },
  { slug:'hooh', q:"Which mythical bird is commonly linked to Ho-Oh's design?", correct:"The Fenghuang / Hōō", wrong:["The Qilin","The Golem","The Behemoth"], explain:"Ho-Oh's name comes from Hōō, the Japanese word for the phoenix." },

  { slug:'celebi', q:"Which country holds about 60% of the Amazon rainforest?", correct:"Brazil", wrong:["Peru","Colombia","Bolivia"], explain:"The Amazon spans nine countries, and Brazil holds most of it." },
  { slug:'celebi', q:"About how large is the Amazon rainforest?", correct:"About 5.5 million square kilometres", wrong:["About 1.5 million square kilometres","About 3 million square kilometres","About 9 million square kilometres"], explain:"It is the largest tropical rainforest on Earth." },
  { slug:'celebi', q:"Which figure from the American Southwest appears in Celebi's early design?", correct:"Kokopelli, a flute player", wrong:["The Simurgh","Ryūjin","Atlas"], explain:"A 1998 beta sprite resembling Kokopelli was found in Gold and Silver data. It is not an official statement." },

  { slug:'regirock', q:"Where are the Giza pyramids located?", correct:"Egypt", wrong:["Sudan","Libya","Jordan"], explain:"The Giza pyramid complex stands near Cairo, Egypt." },
  { slug:'regirock', q:"About how old is the Great Pyramid of Giza?", correct:"More than 4,500 years", wrong:["About 2,000 years","About 3,000 years","About 6,500 years"], explain:"It is the only one of the Seven Wonders of the Ancient World that still stands." },
  { slug:'regirock', q:"Which folklore figure is commonly linked to Regirock's design?", correct:"The Golem", wrong:["The Qilin","The Phoenix","The Thunderbird"], explain:"A golem is a guardian shaped from clay or stone and brought to life." },

  { slug:'regice', q:"Which country does Greenland belong to?", correct:"Denmark (as an autonomous territory)", wrong:["Iceland","Canada","Norway"], explain:"Greenland is a self-governing territory within the Kingdom of Denmark." },
  { slug:'regice', q:"About what share of Greenland is covered by its ice sheet?", correct:"About 80%", wrong:["About 20%","About 40%","About 100%"], explain:"The ice sheet is up to roughly 3 km thick." },
  { slug:'regice', q:"Which Norse beings are linked to Regice's design in this project?", correct:"The jötnar, or frost giants", wrong:["The Titans","Talos","The Behemoth"], explain:"This is our interpretation. Norse settlers also lived in Greenland from around the year 985." },

  { slug:'registeel', q:"Where is Ngwenya Mine located?", correct:"Eswatini", wrong:["Botswana","Zimbabwe","Namibia"], explain:"Ngwenya is in northwest Eswatini, in southern Africa." },
  { slug:'registeel', q:"About how old is mining at Ngwenya, regarded as the oldest known mine?", correct:"About 41,000 to 43,000 years", wrong:["About 4,000 years","About 12,000 years","About 100,000 years"], explain:"The earliest mining was for red hematite and ochre, not smelted iron." },
  { slug:'registeel', q:"Which bronze guardian of Greek myth is linked to Registeel in this project?", correct:"Talos", wrong:["Atlas","The Qilin","The Simurgh"], explain:"Talos guarded the island of Crete. This is our interpretation." },

  { slug:'latias', q:"Venice is located in which country?", correct:"Italy", wrong:["Greece","Spain","Croatia"], explain:"Venice is built on a lagoon in northeastern Italy." },
  { slug:'latias', q:"Which Pokémon film is set in Alto Mare, a canal city styled after Venice?", correct:"Pokémon Heroes", wrong:["Pokémon: The First Movie","Pokémon 4Ever","Pokémon: Lucario and the Mystery of Mew"], explain:"Latias and Latios protect Alto Mare in the film." },
  { slug:'latias', q:"Which symbol of Venice is linked to Latias in this project?", correct:"The Winged Lion of Saint Mark", wrong:["The Chinese guardian lion","The Qilin","The Fenghuang"], explain:"This is our interpretation. We found no confirmed legend behind the Eon Pokémon." },

  { slug:'latios', q:"Latias and Latios share which city on our map?", correct:"Venice", wrong:["Florence","Rome","Milan"], explain:"Their markers sit slightly apart on the globe so both can be clicked." },
  { slug:'latios', q:"Venice is built across a lagoon of more than a hundred what?", correct:"Small islands", wrong:["Volcanic peaks","Natural springs","Glacier lakes"], explain:"The islands are linked by canals and bridges." },
  { slug:'latios', q:"Which winged creature, a symbol of Venice, is linked to Latios in this project?", correct:"The Winged Lion of Saint Mark", wrong:["The Phoenix","The Behemoth","The Thunderbird"], explain:"This is our interpretation." },

  { slug:'kyogre', q:"Tahiti is part of which territory?", correct:"French Polynesia", wrong:["Fiji","Hawaii","Samoa"], explain:"Tahiti is the largest island of French Polynesia." },
  { slug:'kyogre', q:"About what share of Earth's surface does the Pacific Ocean cover?", correct:"About one third", wrong:["About one tenth","About two thirds","About three quarters"], explain:"The Pacific is the largest ocean on Earth." },
  { slug:'kyogre', q:"Which sea monster is commonly linked to Kyogre's design?", correct:"The Leviathan", wrong:["The Behemoth","Quetzalcoatl","Atlas"], explain:"The Leviathan is a vast sea monster described in the Hebrew Bible." },

  { slug:'groudon', q:"Uluru is located in which country?", correct:"Australia", wrong:["New Zealand","Papua New Guinea","Indonesia"], explain:"Uluru stands in Australia's Northern Territory." },
  { slug:'groudon', q:"About how tall is Uluru?", correct:"About 348 meters", wrong:["About 148 meters","About 548 meters","About 1,048 meters"], explain:"It is a huge sandstone monolith sacred to the Anangu people." },
  { slug:'groudon', q:"Which land beast of the Hebrew Bible is commonly linked to Groudon's design?", correct:"The Behemoth", wrong:["The Leviathan","The Raijū","The Simurgh"], explain:"Behemoth is the land counterpart of the sea's Leviathan." },

  { slug:'rayquaza', q:"Chichén Itzá is located in which country?", correct:"Mexico", wrong:["Guatemala","Peru","Belize"], explain:"Chichén Itzá is a Maya city in Yucatán, Mexico." },
  { slug:'rayquaza', q:"What does the shadow on El Castillo's staircase resemble around the equinoxes?", correct:"A slithering snake", wrong:["A flying eagle","A rising sun disk","A prowling jaguar"], explain:"El Castillo is dedicated to Kukulcán, the feathered serpent." },
  { slug:'rayquaza', q:"Which feathered serpent deity do fans link to Rayquaza?", correct:"Kukulcán / Quetzalcoatl", wrong:["The Thunderbird","The Leviathan","The Fenghuang"], explain:"This is a fan theory not confirmed by the creators. Rayquaza is also compared to the Chinese dragon." },

  { slug:'regigigas', q:"Easter Island belongs to which country?", correct:"Chile", wrong:["Peru","Argentina","New Zealand"], explain:"Easter Island is also known as Rapa Nui." },
  { slug:'regigigas', q:"About how many moai statues stand on Easter Island?", correct:"Nearly 900", wrong:["About 90","About 300","About 3,000"], explain:"Rapa Nui oral tradition says the moai walked to their platforms." },
  { slug:'regigigas', q:"Which Titan of Greek myth is linked to Regigigas in this project?", correct:"Atlas", wrong:["Talos","Jötunn","The Behemoth"], explain:"Atlas holds up the sky. This is our interpretation." }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = QUIZ; }
