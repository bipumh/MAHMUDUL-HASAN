export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Rafi Khondker",
    role: "Founder & Head Roaster",
    bio: "Rafi started Brew & Crumb after a decade in specialty coffee, obsessed with sourcing green beans and roasting a cup that feels unmistakably like home.",
  },
  {
    name: "Anika Chowdhury",
    role: "Head Baker",
    bio: "A Le Cordon Bleu trained pâtissier, Anika leads the bakery — from dawn laminations to the turmeric-laced breads that have become our signature.",
  },
  {
    name: "Tania Rahman",
    role: "Cake Designer",
    bio: "Tania translates ideas into edible art. She designs every celebration and custom cake, balancing flavour with a clean, modern aesthetic.",
  },
  {
    name: "Shakib Hasan",
    role: "Café Manager",
    bio: "Shakib keeps the floor warm and welcoming. Ask him for a brew recommendation — he knows the menu better than anyone.",
  },
];

export const brandStory: string[] = [
  "Brew & Crumb began in 2016 with a single roasting drum, a small oven, and a simple belief — that Dhaka deserved a café where the coffee was slow and considered, and where everything from the sourdough to the celebration cakes was made by hand in-house.",
  "What started as a twelve-seat corner café in Gulshan has grown into a neighbourhood ritual: a place where students settle in with a flat white, young professionals pause between meetings, couples linger over dessert, and families gather for birthday cakes that feel personal.",
  "We are proudly independent. We roast our own beans in small batches, laminate our own croissants before sunrise, and make every cake to order — because we believe the best things in life are worth a little care.",
];

export const philosophy = {
  title: "Thoughtfully made, warmly served",
  paragraphs: [
    "Great coffee and beautiful baking rest on a handful of principles we never compromise on. We source responsibly, bake in small batches, and treat every guest like a regular — even on their first visit.",
    "Our space is designed to slow you down. Soft light, honest materials, and room to breathe. It is a café you come to for the coffee and stay for the feeling.",
  ],
};

export const values: { title: string; description: string }[] = [
  {
    title: "Small-batch, always",
    description: "Everything is made in limited batches through the day, so it never sits. Bread, croissants and cakes leave the oven with real freshness.",
  },
  {
    title: "Locally minded",
    description: "Wherever possible we work with Bangladeshi farmers, dairies and producers — building coffee and food that supports our own community.",
  },
  {
    title: "Crafted by hand",
    description: "From hand-poured latte art to hand-laminated pastry, we resist shortcuts. The craft is the point.",
  },
  {
    title: "Made for everyone",
    description: "Vegetarian, vegan and gluten-friendly options across the menu, and a warm welcome for families, students and late-night dreamers alike.",
  },
];

export const qualityIngredients: string[] = [
  "Single-origin & blended beans roasted in-house",
  "Stone-milled local flour for our sourdough",
  "Free-range eggs and grass-fed dairy",
  "Seasonal fruit from Bangladeshi growers",
  "Belgian chocolate and real vanilla bean",
  "Slow-fermented, additive-free bread",
];
