
interface ChatMessages {
  text: string;
  sender: 'user' | 'inteviewer';
  date: string;
  imageUrl?: string;
}
export const messages: ChatMessages[] = [
    {
      text: "Hi, I'm ready for the interview.",
      sender: 'user',
      date: '2025-05-14T09:00:00Z',
      imageUrl: '/user.png'
    },
    {
      text: "Great! Let's get started. Can you introduce yourself?",
      sender: 'inteviewer',
      date: '2025-05-14T09:01:00Z',
      imageUrl: '/afro_american_male_001.jpeg'
    },
    {
      text: "Sure! I'm a full-stack developer with 3 years of experience in MERN stack.",
      sender: 'user',
      date: '2025-05-14T09:02:30Z',
      imageUrl: '/user.png'
    },
    {
      text: "Awesome. Can you tell me about a project you're proud of?",
      sender: 'inteviewer',
      date: '2025-05-14T09:03:10Z',
      imageUrl: '/afro_american_male_001.jpeg'
    },
    {
      text: "Yes, I built a house rental platform called Nestopia using Next.js and Tailwind.",
      sender: 'user',
      date: '2025-05-14T09:04:00Z',
      imageUrl: '/user.png'
    },
    {
      text: "That sounds interesting. What was the most challenging part of that project?",
      sender: 'inteviewer',
      date: '2025-05-14T09:05:20Z',
      imageUrl: '/afro_american_male_001.jpeg'
    },
    {
      text: "Integrating real-time availability updates and managing complex user roles.",
      sender: 'user',
      date: '2025-05-14T09:06:00Z',
      imageUrl: '/user.png'
    },
    {
      text: "Nice. How did you handle authentication and security?",
      sender: 'inteviewer',
      date: '2025-05-14T09:06:45Z',
      imageUrl: '/afro_american_male_001.jpeg'
    },
    {
      text: "I used JWT for auth and implemented role-based access control in the backend.",
      sender: 'user',
      date: '2025-05-14T09:07:30Z',
      imageUrl: '/user.png'
    },
    {
      text: "Great job! That's all for now. Thank you.",
      sender: 'inteviewer',
      date: '2025-05-14T09:08:00Z',
      imageUrl: '/afro_american_male_001.jpeg'
    }
  ];
  