import { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";

interface CreateLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateLinkModal({ isOpen, onClose }: CreateLinkModalProps) {
  const [isPublic, setIsPublic] = useState(true);
  const [url, setUrl] = useState("");
  const [selectedType, setSelectedType] = useState<string>("document");
  const [title, setTitle] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      if (!url || !title) {
        alert("Please fill in the required fields (link and title)");
        return;
      }
      
      const payload = {
        title,
        link: url,
        type: selectedType,
        tags,
        status: isPublic ? 'public' : 'private'
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/content/create`,
        payload,
        {
          withCredentials: true
        }
      );
      
      console.log(response.data.message);
      onClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Something went wrong, plz try again.");
    }
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const cleanedTag = tagInput.trim().replace(/^,|,$/g, '');
      if (cleanedTag && tags.length < 3 && !tags.includes(cleanedTag)) {
        setTags([...tags, cleanedTag]);
        setTagInput("");
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="bg-[#08090b] border border-[#2d2d33] rounded-[2rem] w-full max-w-[500px] p-8 shadow-2xl relative text-gray-200 font-montserrat">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <X size={24} />
        </button>

        {/* Content Rows */}
        <div className="flex flex-col gap-6 mt-4">
          
          {/* Status Row */}
          <div className="flex items-center gap-4">
            <span className="w-16 text-sm font-medium text-white tracking-wide">status</span>
            <div className="flex items-center gap-3 ml-2">
              <span className={`text-sm ${isPublic ? 'text-white' : 'text-gray-500'}`}>public</span>
              {/* Toggle Switch */}
              <button 
                onClick={() => setIsPublic(!isPublic)}
                className={`relative w-12 h-6 rounded-full transition-colors flex items-center border border-[#2d2d33] ${isPublic ? 'bg-black' : 'bg-[#1e1f23]'}`}
              >
                <div 
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${isPublic ? 'translate-x-1' : 'translate-x-7'}`}
                  style={{
                    backgroundColor: isPublic ? 'transparent' : 'white',
                    border: isPublic ? '2px solid white' : 'none'
                  }}
                />
              </button>
              <span className={`text-sm ${!isPublic ? 'text-white' : 'text-gray-500'}`}>private</span>
            </div>
          </div>

          {/* Link Row */}
          <div className="flex items-center gap-4">
            <span className="w-16 text-sm font-medium text-white tracking-wide">link</span>
            <input 
              type="text" 
              placeholder="%url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 bg-transparent border border-[#2d2d33] rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Type Row */}
          <div className="flex items-center gap-4">
            <span className="w-16 text-sm font-medium text-white tracking-wide">type</span>
            <div className="flex gap-2 flex-wrap">
              {['document', 'tweet', 'video', 'image'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1 rounded-xl border text-sm transition-colors cursor-pointer ${
                    selectedType === type 
                      ? 'border-white text-white' 
                      : 'border-[#2d2d33] text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Title Row */}
          <div className="flex items-center gap-4">
            <span className="w-16 text-sm font-medium text-white tracking-wide">title</span>
            <input 
              type="text" 
              placeholder="Give some title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 bg-transparent border border-[#2d2d33] rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Tags Row */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="w-16 text-sm font-medium text-white tracking-wide">tags</span>
              <input 
                type="text" 
                placeholder="max 3 tags allowed"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                disabled={tags.length >= 3}
                className="flex-1 bg-transparent border border-[#2d2d33] rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-white transition-colors disabled:opacity-50"
              />
            </div>
            
            {/* Tags Display */}
            <div className="flex items-center gap-4">
              <span className="w-16"></span>
              <div className="flex flex-wrap gap-2 flex-1">
                {tags.map((tag) => (
                  <div 
                    key={tag} 
                    className="flex items-center gap-1.5 px-3 py-1 rounded-xl border border-white text-sm text-white"
                  >
                    <span>{tag}</span>
                    <button 
                      onClick={() => removeTag(tag)}
                      className="hover:text-red-400 transition-colors cursor-pointer"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-4">
            <button 
              onClick={handleSubmit}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-md"
            >
              Add Link
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
