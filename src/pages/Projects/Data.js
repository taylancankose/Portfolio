import Image1 from "../../assets/projects/pokedex.png";
import Image2 from "../../assets/projects/feedback.png";
import Image3 from "../../assets/projects/cocktail.png";
import Image4 from "../../assets/projects/bmi.png";
import Image5 from "../../assets/projects/color.png";

export const DATA = [
  {
    id: 1,
    color: "#DDEEFE",
    image: Image1,
    title: "Pokédex",
    description: "List and description of all 10k Pokémon characters",
    githubLink: "https://github.com/taylancankose/pokedex",
    liveLink: "https://pokedex-nine-pink-10.vercel.app/",
    technology: ["React", "REST API (Poke API)"],
  },
  {
    id: 2,
    color: "#D9F6F1",
    image: Image2,
    title: "Feedback App",
    description:
      "A react app that displays feedbacks and rating gettin from users. Also calculates average rating",
    githubLink: "https://github.com/taylancankose/feedback-app",
    liveLink: "https://objective-franklin-94a795.netlify.app/",
    technology: ["React", "REST API (Github API)"],
  },
  {
    id: 3,
    color: "#E6D9FF",
    image: Image3,
    title: "Cocktail App",
    description: "Cocktail recipe app with CocktailDB API.",
    githubLink: "https://github.com/taylancankose/cocktaildb",
    liveLink: "https://tecos-cocktail-lab.netlify.app/",
    technology: ["React", "REST API (Cocktails DB)"],
  },
  {
    id: 4,
    color: "#FFF3D9",
    image: Image4,
    title: "Chat App",
    description: "Basic chat app with Expo and Socket.io",
    githubLink: "https://github.com/taylancankose/bmi",
    liveLink: "https://bmi-teco.netlify.app/",
    technology: ["React Native", "Socket.io"],
  },
  {
    id: 5,
    color: "#D1BDFF",
    image: Image5,
    title: "Color Generator",
    description: "A basic react app that generates color",
    githubLink: "https://github.com/taylancankose/colors",
    liveLink: "https://color-generator-kai.netlify.app/",
    technology: ["React"],
  },
  {
    id: 6,
    color: "#FA9189",
    image: Image3,
    title: "Rhythm Radar",
    description:
      "Rhythm Radar is an app that suggests songs and creates playlists according to your mood or preferences. It works with Spotify authentication. When you create a playlist in the app, it also creates and adds the selected songs to this list in Spotify as well.",
    githubLink: "https://github.com/taylancankose/rhythmradar",
    liveLink: "",
    technology: [
      "React Native",
      "Redux",
      "Typescript",
      "Rest API (Spotify API)",
    ],
  },
  {
    id: 7,
    color: "#D6F6FF",
    image: Image3,
    title: "Publyic",
    description:
      "Publyic is an app that you can log in with your Google account and lists the restaurants, pubs and cafes around you according to your location. The project has not been completed yet and the parts requiring great effort have been completed.",
    githubLink: "",
    liveLink: "",
    technology: ["React Native", "Redux", "Rest API (Google API)"],
  },
  {
    id: 8,
    color: "#B3F5BC",
    image: Image3,
    title: "Meet The Music App & Dashboard",
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
    githubLink: "",
    liveLink: "",
    technology: ["React", "NextJS"],
  },
  {
    id: 9,
    color: "#F9FFB5",
    image: Image3,
    title: "react native OTP project",
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
    githubLink: "",
    liveLink: "",
    technology: [
      "React Native",
      "Typescript",
      "Firebase",
      "Google Cloud Functions",
      "Twilio",
    ],
  },
  {
    id: 10,
    color: "#FFE699",
    image: Image3,
    title: "whatsapp clone",
    description:
      "A whatsapp clone project. React native expo was prepared with graphql and aws amplify. It's nearing completion. Amplify sends you an email OTP to confirm your login.",
    githubLink: "",
    liveLink: "",
    technology: ["React Native Expo", "GraphQL", "AWS Amplify"],
  },
  {
    id: 11,
    color: "#FCAE7C",
    image: Image3,
    title: "Booking App",
    description:
      "A Full Stack hotel reservation application was created using nodejs and mongodb vs react and context api. You can register and log in to the site. You can view the hotels and apartments that are available on certain days from the calendar. You can also go to the admin page and add new hotels and listings.",
    githubLink: "",
    liveLink: "",
    technology: [
      "MongoDB",
      "Express",
      "React",
      "NodeJS",
      "SCSS",
      "Context API",
    ],
  },
  {
    id: 12,
    color: "#E2CBF7",
    image: Image3,
    title: "Event App",
    description: "A react app that can create events and add participants",
    githubLink: "",
    liveLink: "",
    technology: ["MongoDB", "Express", "React", "NodeJS", "GraphQL"],
  },
];
