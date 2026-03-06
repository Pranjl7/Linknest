import { LinknestCard, type Tag } from '../components/LinknestCard';

const DUMMY_LINKS = [
  { 
    id: 1, 
    title: 'AI-Powered Recipe Generator', 
    url: '#', 
    status: 'Public', 
    author: 'Harshit Parmar',
    type: { name: 'Repository', color: 'orange' } as Tag,
    tags: [
      { name: 'React Native', color: 'pink' },
      { name: 'Python', color: 'purple' },
      { name: 'TensorFlow', color: 'blue' }
    ] as Tag[],
  },
  { 
    id: 2, 
    title: 'Modern E-Commerce Dashboard', 
    url: '#', 
    status: 'Private', 
    author: 'Sarah Chen',
    type: { name: 'Design', color: 'blue' } as Tag,
    tags: [
      { name: 'Next.js', color: 'green' },
      { name: 'PostgreSQL', color: 'purple' },
      { name: 'Tailwind', color: 'pink' }
    ] as Tag[],
  },
  { 
    id: 3, 
    title: 'Open Source UI Component Library', 
    url: '#', 
    status: 'Looking for contributors', 
    author: 'Alex Rivera',
    type: { name: 'Library', color: 'pink' } as Tag,
    tags: [
      { name: 'React', color: 'orange' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'Storybook', color: 'purple' }
    ] as Tag[],
  },
  { 
    id: 4, 
    title: 'Decentralized Note-Taking App', 
    url: '#', 
    status: 'Active discussion', 
    author: 'David Kim',
    type: { name: 'Whitepaper', color: 'purple' } as Tag,
    tags: [
      { name: 'Solidity', color: 'pink' },
      { name: 'React', color: 'blue' },
      { name: 'IPFS', color: 'green' }
    ] as Tag[],
  },
  { 
    id: 5, 
    title: 'Rust CLI Tool for Image Processing', 
    url: '#', 
    status: 'Seeking code review', 
    author: 'Elena Rostova',
    type: { name: 'Tool', color: 'green' } as Tag,
    tags: [
      { name: 'Rust', color: 'orange' },
      { name: 'Cargo', color: 'purple' },
      { name: 'WASM', color: 'blue' }
    ] as Tag[],
  },
  { 
    id: 6, 
    title: 'Serverless Video Transcoding API', 
    url: '#', 
    status: 'Looking for maintainers', 
    author: 'Michael Chang',
    type: { name: 'API', color: 'pink' } as Tag,
    tags: [
      { name: 'AWS Lambda', color: 'orange' },
      { name: 'FFmpeg', color: 'blue' },
      { name: 'Node.js', color: 'green' }
    ] as Tag[],
  },
  { 
    id: 7, 
    title: 'Figma to React Code Generator', 
    url: '#', 
    status: 'Active development', 
    author: 'Sophie Martin',
    type: { name: 'Plugin', color: 'orange' } as Tag,
    tags: [
      { name: 'TypeScript', color: 'blue' },
      { name: 'Babel', color: 'purple' },
      { name: 'Figma API', color: 'pink' }
    ] as Tag[],
  },
  { 
    id: 8, 
    title: 'Local First Habit Tracker', 
    url: '#', 
    status: 'Looking for contributors', 
    author: 'James Wilson',
    type: { name: 'App', color: 'blue' } as Tag,
    tags: [
      { name: 'React Native', color: 'green' },
      { name: 'SQLite', color: 'purple' },
      { name: 'Zustand', color: 'orange' }
    ] as Tag[],
  },
];

export function Home() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-32">
      {DUMMY_LINKS.map(link => (
        <LinknestCard 
          key={link.id}
          title={link.title}
          url={link.url}
          status={link.status}
          author={link.author}
          type={link.type}
          tags={link.tags}
        />
      ))}
    </main>
  );
}
