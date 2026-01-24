import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-20"
      style={{ animation: "heroBgAnim 20s infinite alternate" }}
    >
      <style>{`
        @keyframes heroBgAnim {
          0% { background-color: #FCE4EC; }   /* Very Light Pink (Brand: #E91E63) */
          33% { background-color: #F3E5F5; }  /* Very Light Purple (Brand: #6A1B9A) */
          66% { background-color: #EDE7F6; }  /* Very Light Dark Purple (Brand: #4A148C) */
          100% { background-color: #FAFAFA; } /* Very Light Silver (Brand: #9E9E9E) */
        }
      `}</style>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
          Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#6A1B9A]">Business</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 md:text-xl">
          Premium solutions designed to scale with your ambition. Experience the future of enterprise management today.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/courses" className="rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800 hover:-translate-y-1">
            Get Started
          </Link>
          <Link to="/contact" className="rounded-full border border-slate-300 bg-white/50 px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-sm transition hover:bg-white hover:-translate-y-1">
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}