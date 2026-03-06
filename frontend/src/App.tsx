import { TopBar } from './components/TopBar';
import { FloatingNav } from './components/FloatingNav';
import { LinknestCard, type TagColor } from './components/LinknestCard';
import './index.css';

const DUMMY_LINKS = [
  { 
    id: 1, 
    title: 'AI-Powered Recipe Generator', 
    url: '#', 
    status: 'Looking for collaborators', 
    author: 'Harshit Parmar',
    requirements: [
      { name: 'Frontend Developer', color: 'pink' },
      { name: 'Backend Developer', color: 'purple' },
      { name: 'UI/UX Designer', color: 'orange' }
    ] as { name: string, color: TagColor }[],
    stack: ['React Native', 'Python', 'TensorFlow']
  },
  { 
    id: 2, 
    title: 'Modern E-Commerce Dashboard', 
    url: '#', 
    status: 'Looking for maintainers', 
    author: 'Sarah Chen',
    requirements: [
      { name: 'Full Stack Developer', color: 'blue' },
      { name: 'Database Admin', color: 'green' }
    ] as { name: string, color: TagColor }[],
    stack: ['Next.js', 'PostgreSQL', 'Tailwind']
  },
  { 
    id: 3, 
    title: 'Open Source UI Component Library', 
    url: '#', 
    status: 'Looking for contributors', 
    author: 'Alex Rivera',
    requirements: [
      { name: 'React Developer', color: 'pink' },
      { name: 'Technical Writer', color: 'orange' }
    ] as { name: string, color: TagColor }[],
    stack: ['React', 'TypeScript', 'Storybook']
  },
  { 
    id: 4, 
    title: 'Decentralized Note-Taking App', 
    url: '#', 
    status: 'Active discussion', 
    author: 'David Kim',
    requirements: [
      { name: 'Smart Contract Dev', color: 'purple' },
      { name: 'Frontend Developer', color: 'pink' }
    ] as { name: string, color: TagColor }[],
    stack: ['Solidity', 'React', 'IPFS']
  },
  { 
    id: 5, 
    title: 'Rust CLI Tool for Image Processing', 
    url: '#', 
    status: 'Seeking code review', 
    author: 'Elena Rostova',
    requirements: [
      { name: 'Rust Developer', color: 'orange' },
      { name: 'Performance Expert', color: 'blue' }
    ] as { name: string, color: TagColor }[],
    stack: ['Rust', 'Cargo', 'WASM']
  },
  { 
    id: 6, 
    title: 'Serverless Video Transcoding API', 
    url: '#', 
    status: 'Looking for maintainers', 
    author: 'Michael Chang',
    requirements: [
      { name: 'Cloud Architect', color: 'green' },
      { name: 'Backend Developer', color: 'purple' }
    ] as { name: string, color: TagColor }[],
    stack: ['AWS Lambda', 'FFmpeg', 'Node.js']
  },
  { 
    id: 7, 
    title: 'Figma to React Code Generator', 
    url: '#', 
    status: 'Active development', 
    author: 'Sophie Martin',
    requirements: [
      { name: 'AST Expert', color: 'blue' },
      { name: 'UI Engineer', color: 'pink' },
      { name: 'Figma Plugin Dev', color: 'orange' }
    ] as { name: string, color: TagColor }[],
    stack: ['TypeScript', 'Babel', 'Figma API']
  },
  { 
    id: 8, 
    title: 'Local First Habit Tracker', 
    url: '#', 
    status: 'Looking for contributors', 
    author: 'James Wilson',
    requirements: [
      { name: 'Mobile Developer', color: 'green' },
      { name: 'UX Researcher', color: 'purple' }
    ] as { name: string, color: TagColor }[],
    stack: ['React Native', 'SQLite', 'Zustand']
  },
];

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-6 px-4 sm:px-8 relative dark:bg-black bg-[#08090b]">
      {/* Container restricted to 5xl */}
      <div className="w-full max-w-5xl">
        <TopBar />

        {/* 3 Cards in a row to fit within 5xl (md:grid-cols-3) */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-32">
          {DUMMY_LINKS.map(link => (
            <LinknestCard 
              key={link.id}
              title={link.title}
              url={link.url}
              status={link.status}
              author={link.author}
              requirements={link.requirements}
              stack={link.stack}
            />
          ))}
        </main>
      </div>
      
      <FloatingNav />
    </div>
  )
}

export default App;
