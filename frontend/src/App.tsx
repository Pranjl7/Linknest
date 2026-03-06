import { TopBar } from './components/TopBar';
import { FloatingNav } from './components/FloatingNav';
import { LinknestCard } from './components/LinknestCard';
import './index.css';

const DUMMY_LINKS = [
  { id: 1, title: 'Figma wireframes for new dashboard', url: '#', type: 'design', tags: ['ui', 'inspiration', 'figma'] },
  { id: 2, title: 'Understanding React Server Components in 2024', url: '#', type: 'article', tags: ['react', 'frontend', 'performance'] },
  { id: 3, title: 'Awesome Modern CSS Grid Layouts', url: '#', type: 'resource', tags: ['css', 'layout', 'design'] },
  { id: 4, title: 'API Documentation for NextJS Auth Integration', url: '#', type: 'documentation', tags: ['auth', 'backend', 'security'] },
];

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center py-6 px-4 md:px-8 relative">
      {/* 5xl max width container matching wireframe */}
      <div className="w-full max-w-5xl">
        <TopBar />

        <main className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-32">
          {DUMMY_LINKS.map(link => (
            <LinknestCard 
              key={link.id}
              title={link.title}
              url={link.url}
              type={link.type}
              tags={link.tags}
            />
          ))}
        </main>
      </div>
      
      <FloatingNav />
    </div>
  )
}

export default App;
