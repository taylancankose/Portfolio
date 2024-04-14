import Image1 from "../../assets/projects/pokedex.png";
import Image2 from "../../assets/projects/feedback.png";
import Image3 from "../../assets/projects/cocktail.png";
import Image4 from "../../assets/projects/bmi.png";
import Image5 from "../../assets/projects/color.png";
import { LocaleContext } from "../../context/locale";
import { useContext } from "react";
import { AppContext } from "../../context";

const DATA = () => {
  const { appState } = useContext(AppContext);
  const { translations } = appState?.locale?.language;
  return [
    {
      id: 1,
      color: "#DDEEFE",
      image: Image1,
      title: "Pokédex",
      description: translations["project-poke"],
      githubLink: "https://github.com/taylancankose/pokedex",
      liveLink: "https://pokedex-nine-pink-10.vercel.app/",
      technology: ["React", "REST API (Poke API)"],
    },
    {
      id: 2,
      color: "#D9F6F1",
      image: Image2,
      title: "Feedback App",
      description: translations["project-feedback"],
      githubLink: "https://github.com/taylancankose/feedback-app",
      liveLink: "https://objective-franklin-94a795.netlify.app/",
      technology: ["React", "REST API (Github API)"],
    },
    {
      id: 3,
      color: "#E6D9FF",
      image: Image3,
      title: "Cocktail App",
      description: translations["project-cocktail"],
      githubLink: "https://github.com/taylancankose/cocktaildb",
      liveLink: "https://tecos-cocktail-lab.netlify.app/",
      technology: ["React", "REST API (Cocktails DB)"],
    },
    {
      id: 4,
      color: "#FFF3D9",
      image: Image4,
      title: "Chat App",
      description: translations["project-chat"],
      githubLink: "https://github.com/taylancankose/bmi",
      liveLink: "https://bmi-teco.netlify.app/",
      technology: ["React Native", "Socket.io"],
    },
    {
      id: 5,
      color: "#D1BDFF",
      image: Image5,
      title: "Color Generator",
      description: translations["project-color"],
      githubLink: "https://github.com/taylancankose/colors",
      liveLink: "https://color-generator-kai.netlify.app/",
      technology: ["React"],
    },
    {
      id: 6,
      color: "#FA9189",
      image: Image3,
      title: "Rhythm Radar",
      description: translations["project-rhythm"],
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
      description: translations["project-publyic"],
      githubLink: "",
      liveLink: "",
      technology: ["React Native", "Redux", "Rest API (Google API)"],
    },
    {
      id: 8,
      color: "#B3F5BC",
      image: Image3,
      title: "Meet The Music App & Dashboard",
      description: translations["project-mtm"],
      githubLink: "",
      liveLink: "",
      technology: ["React", "NextJS"],
    },
    {
      id: 9,
      color: "#F9FFB5",
      image: Image3,
      title: "react native OTP project",
      description: translations["project-OTP"],
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
      description: translations["project-whatsapp"],
      githubLink: "",
      liveLink: "",
      technology: ["React Native Expo", "GraphQL", "AWS Amplify"],
    },
    {
      id: 11,
      color: "#FCAE7C",
      image: Image3,
      title: "Booking App",
      description: translations["project-booking"],
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
      description: translations["project-events"],
      githubLink: "",
      liveLink: "",
      technology: ["MongoDB", "Express", "React", "NodeJS", "GraphQL"],
    },
  ];
};

export default DATA;
