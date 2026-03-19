import { 
  Home, 
  Film, 
  GraduationCap, 
  User, 
  Video, 
  Bell, 
  Search, 
  Menu, 
  Plus, 
  Play, 
  Filter, 
  Grid,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = [
  "All Edits", "AMVs", "Shorts", "4K", "Jujutsu Kaisen", "Attack on Titan", "One Piece", "Fire Force"
];

const VIDEOS = [
  {
    id: "-eo0MG-wcQc",
    title: "EREN AND MIKASA🤍 - Fairytale [Alexander Rybak] |Attack on Titan| #aot #amv",
    thumbnail: "https://img.youtube.com/vi/-eo0MG-wcQc/maxresdefault.jpg",
    duration: "00:55",
    views: "2.7K",
    time: "1 day ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["AMVs", "Attack on Titan"]
  },
  {
    id: "kM6HOnZ8L78",
    title: "GOJO VS SUKUNA - Centuries[ Fall out boy ] ⚡ [Jujutsu kaisen] #jjk #amv",
    thumbnail: "https://img.youtube.com/vi/kM6HOnZ8L78/maxresdefault.jpg",
    duration: "00:48",
    views: "15K",
    time: "3 days ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["AMVs", "Jujutsu Kaisen"]
  },
  {
    id: "6nLkBL4qXJE",
    title: "YUJI ITADORI 🪬 - BABY DOLL #amvedit #jujutsukaisen #animeedit",
    thumbnail: "https://img.youtube.com/vi/6nLkBL4qXJE/maxresdefault.jpg",
    duration: "00:45",
    views: "18K",
    time: "6 days ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["AMVs", "Jujutsu Kaisen"]
  },
  {
    id: "mzXyL1Y5F_s",
    title: "Like Father, Like son⚡🪬| TOJI AND MEGUMI AMV EDIT 4KHD| #jujutsukaisen #toji",
    thumbnail: "https://img.youtube.com/vi/mzXyL1Y5F_s/maxresdefault.jpg",
    duration: "00:32",
    views: "1.2K",
    time: "2 weeks ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["AMVs", "Jujutsu Kaisen", "4K"]
  },
  {
    id: "o_NJiduAwak",
    title: "QUICK EDIT 🌀⚡[YUJI MODULO EDIT 4K AMV] ©NSNLXD #jujutsukaisen #yujiitadori",
    thumbnail: "https://img.youtube.com/vi/o_NJiduAwak/maxresdefault.jpg",
    duration: "00:28",
    views: "3.5K",
    time: "4 weeks ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["AMVs", "Jujutsu Kaisen", "4K", "Shorts"]
  },
  {
    id: "fdR7IsWIAhU",
    title: "GABIMARU SACRIFICED HIMSELF 🫠🌀[Hell's paradise] #anime #gabimaru",
    thumbnail: "https://img.youtube.com/vi/fdR7IsWIAhU/maxresdefault.jpg",
    duration: "00:35",
    views: "1.7K",
    time: "1 month ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["Shorts"]
  },
  {
    id: "CpA9iRa_Fs0",
    title: "ZOOM,SLIDE,SHAKE CAPCUT TUTORIAL FOR BEGINNERS 🌀⚡[MEGUMI 🔥]#tutorial",
    thumbnail: "https://img.youtube.com/vi/CpA9iRa_Fs0/maxresdefault.jpg",
    duration: "00:58",
    views: "2.7K",
    time: "1 month ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["Jujutsu Kaisen"]
  },
  {
    id: "fRbTWjhqZHE",
    title: "Want Tutorial🌀? [MEGUMI EDIT 4K HD⚡] Jujutsu kaisen #megumifushiguro #amv",
    thumbnail: "https://img.youtube.com/vi/fRbTWjhqZHE/maxresdefault.jpg",
    duration: "00:42",
    views: "18K",
    time: "1 month ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["AMVs", "Jujutsu Kaisen", "4K"]
  },
  {
    id: "5KT5R-4TzTs",
    title: "They Entered The Culling Game 😳🔥|Jujutsu kaisen| #jujutsukaisen #yujiitadori",
    thumbnail: "https://img.youtube.com/vi/5KT5R-4TzTs/maxresdefault.jpg",
    duration: "00:40",
    views: "4.3K",
    time: "1 month ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["Jujutsu Kaisen", "Shorts"]
  },
  {
    id: "Yw5KMaryjdY",
    title: "MONTAGEM YAAD X GOJO VS SUKUNA😳🔥[JUJUTSU KAISEN] #montagemyaad #phonk",
    thumbnail: "https://img.youtube.com/vi/Yw5KMaryjdY/maxresdefault.jpg",
    duration: "00:38",
    views: "2.9K",
    time: "1 month ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["Jujutsu Kaisen", "Shorts"]
  },
  {
    id: "cDzRwWsUtL8",
    title: "YUJI VS SUKUNA 💀| Jujutsu kaisen manga | [ clips from ©nsnlxd ] #jujutsukaisen #yujiitadori #sukuna",
    thumbnail: "https://img.youtube.com/vi/cDzRwWsUtL8/maxresdefault.jpg",
    duration: "00:45",
    views: "10K",
    time: "1 month ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["Jujutsu Kaisen", "Shorts"]
  },
  {
    id: "abhiU_4jq-o",
    title: "GOJO VS SUKUNA - 1vs3💀| Jujutsu kaisen | #gyxnime #anime #gojo",
    thumbnail: "https://img.youtube.com/vi/abhiU_4jq-o/maxresdefault.jpg",
    duration: "00:52",
    views: "15K",
    time: "1 month ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["Jujutsu Kaisen", "Shorts"]
  },
  {
    id: "OLb_4WofR-I",
    title: "GHANA KASOOTA-[GOJO & SUKUNA LOVE STORY🔥😝]| Jujutsu kaisen | #gojo #sukuna",
    thumbnail: "https://img.youtube.com/vi/OLb_4WofR-I/maxresdefault.jpg",
    duration: "00:30",
    views: "1.8K",
    time: "1 month ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["Jujutsu Kaisen", "Shorts"]
  },
  {
    id: "Ir_6gBvpPEM",
    title: "Jujutsu Kaisen [TOJI] - Plain old town by ©Abbigail pfeffer [|EDIT/AMV|] 4K🔥",
    thumbnail: "https://img.youtube.com/vi/Ir_6gBvpPEM/maxresdefault.jpg",
    duration: "00:55",
    views: "86",
    time: "1 month ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["AMVs", "Jujutsu Kaisen", "4K", "One Piece"]
  },
  {
    id: "VCrcDJe0AG4",
    title: "Archer vs True rider vs Unknown💀 | FATE/STRANGE FAKE |#fate #fateseries",
    thumbnail: "https://img.youtube.com/vi/VCrcDJe0AG4/maxresdefault.jpg",
    duration: "00:35",
    views: "6.7K",
    time: "1 month ago",
    avatar: "https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj",
    categories: ["Shorts", "Fire Force"]
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All Edits");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const filteredVideos = VIDEOS.filter(video => {
    const matchesCategory = activeCategory === "All Edits" || (video.categories || []).includes(activeCategory);
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const SidebarContent = () => (
    <>
      <div className="flex flex-col py-4">
        <a className="flex items-center gap-4 px-6 py-3 text-on-surface font-semibold border-l-4 border-primary bg-surface-container-lowest translate-x-1 transition-transform text-sm" href="#" onClick={() => setIsSidebarOpen(false)}>
          <Home className="w-5 h-5 fill-on-surface" />
          <span>Home</span>
        </a>
        <a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:bg-surface-container-lowest transition-all duration-200 text-sm" href="https://www.youtube.com/channel/UCrtH1DkBI-VT1aspazq9Wzg" target="_blank" rel="noopener noreferrer" onClick={() => setIsSidebarOpen(false)}>
          <Film className="w-5 h-5" />
          <span>My Edits</span>
        </a>
        <a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:bg-surface-container-lowest transition-all duration-200 text-sm" href="#" onClick={() => setIsSidebarOpen(false)}>
          <GraduationCap className="w-5 h-5" />
          <span>Tutorials</span>
        </a>
        <a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:bg-surface-container-lowest transition-all duration-200 text-sm" href="https://www.instagram.com/gyxnime?igsh=eXJ3d3I0cGtwajd3" target="_blank" rel="noopener noreferrer" onClick={() => setIsSidebarOpen(false)}>
          <User className="w-5 h-5" />
          <span>Instagram</span>
        </a>
        <a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:bg-surface-container-lowest transition-all duration-200 text-sm" href="https://www.facebook.com/share/1JihQLzU8A/" target="_blank" rel="noopener noreferrer" onClick={() => setIsSidebarOpen(false)}>
          <Film className="w-5 h-5" />
          <span>Facebook</span>
        </a>

        <div className="px-6 py-4 border-t border-surface-container-highest/10 mt-2">
          <p className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest mb-3">Categories</p>
          <div className="flex flex-col gap-1">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => {
                  handleCategoryChange(category);
                  setIsSidebarOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                  activeCategory === category 
                    ? "bg-primary/10 text-primary font-bold translate-x-1" 
                    : "text-on-surface-variant hover:bg-surface-container-lowest"
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full transition-all ${activeCategory === category ? "bg-primary scale-125" : "bg-on-surface-variant/30"}`} />
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto p-6 space-y-4">
        <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-surface-container-highest/10">
          <p className="text-[10px] font-semibold text-primary uppercase tracking-widest mb-2">Milestones ✨</p>
          <div className="space-y-1 mb-4">
            <p className="text-[11px] text-on-surface-variant flex justify-between"><span>500 Subs</span> <span className="text-primary font-bold">03/01/26</span></p>
            <p className="text-[11px] text-on-surface-variant flex justify-between"><span>600 Subs</span> <span className="text-primary font-bold">17/02/26</span></p>
            <p className="text-[11px] text-on-surface-variant flex justify-between"><span>700 Subs</span> <span className="text-primary font-bold">17/04/26</span></p>
            <p className="text-[11px] text-on-surface-variant flex justify-between"><span>800 Subs</span> <span className="text-on-surface-variant/50 italic">Soon...</span></p>
          </div>
          <button className="w-full bg-primary text-on-primary py-2.5 rounded-full text-sm font-bold shadow-sm active:scale-95 transition-all">Support Us</button>
        </div>
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-surface-container-highest/20">
            <img 
              alt="GYXNIME Profile" 
              className="w-full h-full object-cover" 
              src="https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-on-surface">GYXNIME</span>
            <span className="text-[10px] text-on-surface-variant">Anime Editor & Artist</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.aside 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-64 bg-surface-container-low z-[70] lg:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-surface-container-highest/20">
                <span className="text-xl font-black text-on-surface tracking-tighter font-headline uppercase">GYXNIME</span>
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-full hover:bg-surface-container-highest/20 transition-colors">
                  <X className="w-6 h-6 text-on-surface" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <SidebarContent />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-container-highest/30">
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 w-full max-w-7xl mx-auto">
          <div className={`flex items-center gap-3 sm:gap-4 ${isSearchOpen ? 'hidden' : 'flex'}`}>
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 -ml-2 rounded-full hover:bg-surface-container-highest/20 transition-colors">
              <Menu className="w-6 h-6 text-on-surface" />
            </button>
            <Menu className="hidden lg:block w-6 h-6 text-on-surface cursor-pointer" />
            <span className="text-xl sm:text-2xl font-black text-on-surface tracking-tighter font-headline uppercase">GYXNIME</span>
          </div>

          <div className={`${isSearchOpen ? 'flex' : 'hidden md:flex'} flex-1 max-w-2xl mx-0 md:mx-12`}>
            <div className="relative w-full group flex items-center gap-2">
              {isSearchOpen && (
                <button onClick={() => setIsSearchOpen(false)} className="md:hidden p-2 rounded-full hover:bg-surface-container-highest/20 transition-colors">
                  <X className="w-5 h-5 text-on-surface" />
                </button>
              )}
              <div className="relative flex-1">
                <input 
                  className="w-full bg-surface-container-low border-none rounded-full py-2.5 px-6 text-sm focus:ring-1 focus:ring-primary transition-all" 
                  placeholder="Search anime edits..." 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface-container-highest px-4 py-1 rounded-full cursor-pointer hover:bg-surface-container-highest/80 transition-colors">
                  <Search className="w-4 h-4 text-on-surface-variant" />
                </div>
              </div>
            </div>
          </div>

          <div className={`items-center gap-1 sm:gap-3 ${isSearchOpen ? 'hidden md:flex' : 'flex'}`}>
            <div className="hidden xl:flex items-center gap-6 mr-6">
              <a className="text-primary font-semibold border-b-2 border-primary pb-1 font-headline tracking-tight" href="#">Showcase</a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-headline tracking-tight" href="#">AMVs</a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-headline tracking-tight" href="#">Contact</a>
            </div>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full hover:bg-surface-container-low transition-colors"
            >
              <Search className="md:hidden w-6 h-6 text-on-surface-variant" />
              <Video className="hidden md:block w-6 h-6 text-on-surface-variant" />
            </button>
            <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors relative">
              <Bell className="w-6 h-6 text-on-surface-variant" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-surface"></span>
            </button>
            <div className="hidden sm:block ml-2 w-8 h-8 rounded-full overflow-hidden border border-surface-container-highest/20">
              <img 
                alt="GYXNIME Profile" 
                className="w-full h-full object-cover" 
                src="https://yt3.googleusercontent.com/UB9WFtY-zkhsnHwey16BFm6X3jSzJwFh2dnlWOV04F54X0aFFcpjf_QzH0QDxTqu_m6CVl_Sww=s900-c-k-c0x00ffffff-no-rj"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 pt-16 sm:pt-20 max-w-7xl mx-auto w-full">
        {/* Desktop Sidebar Navigation */}
        <aside className="hidden lg:flex flex-col fixed left-[max(0px,calc((100vw-80rem)/2))] top-20 h-[calc(100vh-5rem)] w-56 bg-surface-container-low border-r border-surface-container-highest/20 overflow-y-auto no-scrollbar">
          <SidebarContent />
        </aside>

        {/* Main Content Area */}
        <main className="lg:ml-56 flex-1 px-4 sm:px-6 py-6 sm:py-8 min-h-screen">
          {/* Hero Featured Section */}
          <section className="mb-10 sm:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Main Featured Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => window.open(`https://www.youtube.com/watch?v=${VIDEOS[0].id}`, '_blank')}
                className="md:col-span-2 relative group cursor-pointer overflow-hidden rounded-xl bg-surface-container-lowest h-[280px] sm:h-[350px]"
              >
                <img 
                  alt="Featured Anime Edit" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src={VIDEOS[0].thumbnail}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5 sm:p-8 w-full">
                  <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4 inline-block">Featured Edit</span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 leading-tight font-headline line-clamp-2">{VIDEOS[0].title}</h2>
                  <div className="flex items-center gap-3 sm:gap-4 text-white/80 text-xs sm:text-sm font-medium">
                    <span>{VIDEOS[0].views} views</span>
                    <span className="w-1 h-1 rounded-full bg-white/40"></span>
                    <span>{VIDEOS[0].time}</span>
                  </div>
                </div>
              </motion.div>

              {/* Side Content Cards */}
              <div className="flex flex-col gap-4 sm:gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex-1 bg-surface-container-low rounded-xl p-5 sm:p-6 flex flex-col justify-center items-start border-l-4 border-primary overflow-hidden"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 font-headline">Anime contents for you✨</h3>
                  <p className="text-on-surface-variant text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">We post to make you smile. Thanks for the love and support 🫶</p>
                  <button className="bg-on-surface text-surface py-2 px-6 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">Follow Us</button>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="hidden sm:flex flex-1 relative group cursor-pointer overflow-hidden rounded-xl h-full"
                >
                  <img 
                    alt="Anime Montage" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="https://picsum.photos/seed/animemontage/1920/1080"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-white font-bold text-lg font-headline">AMV Masterclass</h4>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Category Tags */}
          <section className="mb-6 sm:mb-8 sticky top-[60px] sm:top-[72px] z-30 bg-surface/80 backdrop-blur-md py-2 px-1">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold cursor-pointer transition-all border ${
                    activeCategory === category 
                      ? "bg-on-surface text-surface border-on-surface shadow-sm scale-105" 
                      : "bg-surface-container-highest text-on-surface-variant border-transparent hover:bg-surface-container-highest/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Recent Uploads Grid */}
          <section>
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-extrabold font-headline tracking-tight">Latest Edits</h2>
              <div className="flex gap-2">
                <button className="p-2 bg-surface-container-highest rounded-full hover:bg-surface-container-highest/80 transition-colors">
                  <Filter className="w-4 h-4" />
                </button>
                <button className="hidden sm:block p-2 bg-surface-container-highest rounded-full hover:bg-surface-container-highest/80 transition-colors">
                  <Grid className="w-4 h-4" />
                </button>
              </div>
            </div>

            {filteredVideos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 sm:gap-x-6 gap-y-8 sm:gap-y-10">
                {filteredVideos.map((video, index) => (
                  <motion.div 
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-surface-container-highest">
                      <img 
                        alt={video.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        src={video.thumbnail}
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">{video.duration}</span>
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white" />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden mt-1">
                        <img 
                          alt="Avatar" 
                          className="w-full h-full object-cover" 
                          src={video.avatar}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-xs sm:text-sm font-bold text-on-surface leading-snug group-hover:text-primary transition-colors mb-1 line-clamp-2">{video.title}</h3>
                        <p className="text-[9px] sm:text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">GYXNIME • {video.views} views • {video.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mb-4">
                  <Search className="w-10 h-10 text-on-surface-variant/30" />
                </div>
                <h3 className="text-xl font-bold mb-2">No edits found</h3>
                <p className="text-on-surface-variant text-sm max-w-xs">Try adjusting your search or category to find what you're looking for.</p>
                <button 
                  onClick={() => {
                    setActiveCategory("All Edits");
                    setSearchQuery("");
                  }}
                  className="mt-6 text-primary font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </section>
        </main>
      </div>

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-8 right-8 z-40 md:hidden">
        <button 
          onClick={() => window.open('https://www.youtube.com/channel/UCrtH1DkBI-VT1aspazq9Wzg?sub_confirmation=1', '_blank')}
          className="bg-primary text-on-primary w-14 h-14 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
