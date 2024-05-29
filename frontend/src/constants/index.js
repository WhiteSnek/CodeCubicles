import { casual,college,date,formal,office,party,shaadi } from "../assets/categories";
import {
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
} from "../assets/videos"

export const categories = [
    {
        img: casual,
        title: 'Casual'
    },
    {
        img: formal,
        title: 'Formal'
    },
    {
        img: college,
        title: 'College'
    },
    {
        img: date,
        title: 'Date'
    },
    {
        img: office,
        title: 'Office'
    },
    {
        img: party,
        title: 'Party'
    },
    {
        img: shaadi,
        title: 'Shaadi'
    },
]

export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Enter A17 Pro.",
        "Game‑changing chip.",
        "Groundbreaking performance.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium.", "So strong. So light. So Pro."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max has the",
        "longest optical zoom in",
        "iPhone ever. Far out.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];


export const services = [
  {
    id: 1,
    name: "Trend Analysis",
    description: "The app could use machine learning algorithms to analyze fashion trends from various sources, including fashion shows, social media,and online retailers. For 2024, some of the trends include micro-fringe, business sensual attire, and major mod micro-minis12.",
    color: "#ff0000"
  },
  {
    id: 2,
    name: "Personal Style Profiling",
    description: "Users can input their style preferences, body type, and other personal characteristics. The app can then suggest utfits that match their unique style.",
    color: "blue",
  },
  {
    id: 3,
    name: "Virtual Wardrobe",
    description: "Users can upload pictures of their existing wardrobe, and the app can help create new outfit combinations or suggest missing pieces to complete their look.",
    color: " #ff66ff"
  },
  {
    id: 4,
    name: "Shopping Assistant",
    description:" Integrating with online stores, the app can recommend clothing items from various brands that fit the user’s style and budget.",
    color: "green"
    
  }
]