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