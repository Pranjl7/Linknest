export function About() {
  return (
    <div className="w-full flex justify-center pb-32">
      <div className="border border-[#2d2d33] rounded-[2rem] w-full min-h-[550px] flex overflow-hidden bg-[#111214] shadow-sm">
        {/* Left Column (empty) */}
        <div className="hidden md:block w-1/4 border-r border-[#2d2d33]"></div>
        
        {/* Middle Column (Content) */}
        <div className="w-full md:w-2/4 p-10 md:p-14 flex flex-col items-start text-left">
          <h1 className="text-4xl text-white font-bold mb-10 w-full text-left">About Linknest</h1>
          <div className="text-neutral-500 text-base md:text-md leading-relaxed space-y-6 w-full text-left font-medium">
            <p>
              Linknest is your ultimate destination for organizing, discovering, and sharing the best resources on the web. Whether you're a developer, designer, or just an avid learner, Linknest helps you build a curated library of links tailored to your specific needs.
            </p>
            <p>
              With advanced tagging, AI-powered insights, and a community-driven approach, we make sure that you never lose track of a useful article, tool, or repository again. Save your links, categorize them effortlessly, and ask our AI to summarize or extract the key takeaways instantly.
            </p>
            <p>
              Join the Linknest community today to share your "nests" with friends, collaborate with experts, and turn your chaotic bookmarks into a beautiful second brain.
            </p>
          </div>
        </div>
        
        {/* Right Column (empty) */}
        <div className="hidden md:block w-1/4 border-l border-[#2d2d33]"></div>
      </div>
    </div>
  );
}
