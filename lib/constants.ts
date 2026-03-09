
export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  time: string;
  date: string;
};

export const events: EventItem[] = [
  {
    title: "React Conf 2026",
    image: "/images/event1.png",
    slug: "react-conf-2026",
    location: "Las Vegas, NV",
    time: "9:00 AM - 5:00 PM",
    date: "May 15-17, 2026"
  },
  {
    title: "Next.js Summit",
    image: "/images/event2.png",
    slug: "nextjs-summit",
    location: "San Francisco, CA",
    time: "10:00 AM - 6:00 PM",
    date: "June 8-9, 2026"
  },
  {
    title: "Web3 Developer Conference",
    image: "/images/event3.png",
    slug: "web3-dev-conference",
    location: "Austin, TX",
    time: "9:30 AM - 5:30 PM",
    date: "April 20-22, 2026"
  },
  {
    title: "DevOps World 2026",
    image: "/images/event4.png",
    slug: "devops-world",
    location: "New York, NY",
    time: "8:00 AM - 6:00 PM",
    date: "June 22-25, 2026"
  },
  {
    title: "JavaScript Jam Hackathon",
    image: "/images/event5.png",
    slug: "javascript-jam-hackathon",
    location: "Virtual",
    time: "12:00 PM - 12:00 PM",
    date: "March 28-29, 2026"
  },
  {
    title: "AI & Machine Learning Summit",
    image: "/images/event6.png",
    slug: "ai-ml-summit",
    location: "Seattle, WA",
    time: "9:00 AM - 5:00 PM",
    date: "July 10-12, 2026"
  }
];


