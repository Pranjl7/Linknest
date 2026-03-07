export function About() {
  return (
    <div className="w-full flex pb-20">
      <div className="border border-[#2d2d33] rounded-xl w-full min-h-[550px] flex overflow-hidden bg-[#111214] shadow-sm">
        
        {/* Middle Column (Content) */}
        <div className="w-full p-10 flex flex-col items-start text-left">
          <h1 className="text-4xl text-white font-bold mb-10 w-full text-left">About Linknest</h1>
          <div className="text-neutral-500 text-sm md:text-md leading-relaxed space-y-6 w-full text-left font-medium">
            <p>
              Linknest is your ultimate destination for organizing, discovering, and sharing the best resources on the web. Whether you're a developer, designer, or just an avid learner, Linknest helps you build a curated library of links tailored to your specific needs.
            </p>
            <p>
             LinkNest is an AI-powered bookmarking app where users can save useful content they find online, such as tweets, articles, and links. Instead of letting bookmarks get lost in browser folders, LinkNest keeps everything organized in one place so users can easily access it later.
            </p>
            <p>
              The app also allows users to share their saved links, making it possible for others to explore curated collections of helpful resources. This turns simple bookmarks into something more useful for learning and discovery.
            </p>
            <p>
                What makes LinkNest different is the AI integration. The app uses a Retrieval-Augmented Generation (RAG) approach to understand the content users save. When links are added, the system processes the text and stores embeddings in a vector database, enabling semantic search across the saved content.
            </p>
            <p>
                Because of this, users can ask questions about their bookmarks instead of manually searching through them. The AI retrieves the most relevant information from saved links and generates answers based on that content.
            </p>
            <p>
            LinkNest is also a learning project focused on exploring how large language models can be integrated into real applications, experimenting with technologies like embeddings, vector search, and AI-powered knowledge retrieval.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
