import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AccessTime, Quiz, Person, Close, ArrowForward, Bolt } from "@mui/icons-material";

const QuizCard = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="group relative h-full w-full">
        {/* Main Card Content */}
        <div className="relative h-full bg-white text-black border border-b-8 border-r-8 border-b-blue-600 border-r-blue-600 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden hover:border-red-600">
            
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 w-full h-1" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full p-6">
                
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div className="px-3 py-1 rounded-full bg-green-100 border border-green-100">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-green-700">Active</span>
                    </div>
                </div>

                <h2 className="text-xl font-bold mb-2">
                    Quiz Topic
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    Deep dive into closures, prototypes, and async patterns.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-gray-200 flex items-center gap-3">
                        <AccessTime className="text-gray-500 w-4 h-4" fontSize="small" />
                        <span className="text-xs font-medium text-gray-700">45 Mins</span>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-200 flex items-center gap-3">
                        <Quiz className="text-gray-500 w-4 h-4" fontSize="small" />
                        <span className="text-xs font-medium text-gray-700">20 Qs</span>
                    </div>
                </div>

                <div className="mt-auto">
                    <button
                        onClick={() => setOpen(true)}
                        className="w-full rounded-xl bg-gray-200 text-black p-4 font-semibold text-m transition-all hover:bg-green-500 active:scale-[0.98] flex items-center justify-center gap-2 group/btn"
                    >
                        Start
                        <ArrowForward className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setOpen(false)}
          />
          
          <div className="relative w-full max-w-md overflow-hidden border-b-8 border-r-8 border-b-blue-600 border-r-blue-600 bg-white shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="relative p-8">
                  <button
                      onClick={() => setOpen(false)}
                      className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                      <Close fontSize="small" />
                  </button>

                  <div className="mb-8">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                          <Bolt />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start?</h2>
                      <p className="text-gray-500 text-sm">Enter your unique access code to begin the assessment.</p>
                  </div>

                  <form onSubmit={(e) => { e.preventDefault(); navigate("/"); }}>
                      <div className="space-y-4 mb-8">
                          <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Access Code</label>
                              <input 
                                  type="text" 
                                  placeholder="XXX-XXX" 
                                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono text-center tracking-widest text-lg placeholder:text-gray-400"
                                  autoFocus
                              />
                          </div>
                      </div>

                      <div className="flex gap-3">
                          <button
                              type="button"
                              onClick={() => setOpen(false)}
                              className="flex-1 px-4 py-3 rounded-xl font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors"
                          >
                              Cancel
                          </button>
                          <button
                              type="submit"
                              className="flex-1 px-4 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-[0.98]"
                          >
                              Begin
                          </button>
                      </div>
                  </form>
              </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizCard;
