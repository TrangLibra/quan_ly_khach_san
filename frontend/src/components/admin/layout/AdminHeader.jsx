import React from 'react';

const AdminHeader = () => {
  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-[#0f172a]/85 backdrop-blur-xl border-b border-[#c5a059]/20 z-40 flex items-center justify-between px-8 shadow-lg shadow-black/20">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1e293b]/80 border border-[#c5a059]/30 rounded-lg shadow-inner">
          <span className="material-symbols-outlined text-[18px] text-[#dfba73]">pin_drop</span>
          <span className="text-xs font-semibold text-slate-200 tracking-wide">Grand Horizon Resort & Sanctuary</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1e293b]/60 border border-slate-700/60 rounded-lg">
          <span className="material-symbols-outlined text-[18px] text-slate-400">schedule</span>
          <span className="text-xs text-slate-300 font-medium">Ca Trực Hiện Tại: 14:00 - 22:00</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
          <span className="text-[11px] text-[#10b981] uppercase font-bold tracking-wider">Công Suất:</span>
          <span className="text-xs font-bold text-[#10b981]">88%</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[10px] text-emerald-300 font-bold tracking-widest uppercase">Medusa Live</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative w-10 h-10 rounded-xl bg-[#1e293b]/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-[#dfba73] hover:border-[#c5a059]/50 transition-all shadow-sm" type="button">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-amber-400 ring-2 ring-[#0f172a]"></span>
        </button>

        <div className="flex items-center gap-3 pl-2 border-l border-slate-800">
          <div className="flex flex-col text-right">
            <span className="text-sm font-semibold text-slate-100 tracking-tight">Ban Điều Hành Khách Sạn</span>
            <span className="text-[11px] text-[#dfba73] font-medium">Executive Admin</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9a7633] via-[#c5a059] to-[#dfba73] p-[1.5px] shadow-md shadow-[#c5a059]/20">
            <div className="w-full h-full bg-[#0f172a] rounded-[10px] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#dfba73] text-[20px]">person</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
