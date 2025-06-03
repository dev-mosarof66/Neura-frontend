import React from 'react';
import { ArrowRight, BookOpen, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative flex-1 flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Hero Content */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Stories That
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Illuminate Minds
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dive into a world of thought-provoking articles, expert insights, and inspiring stories. 
            Join our community of curious minds exploring ideas that matter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90 px-8 py-3 text-lg font-semibold group">
              Start Reading
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
              Browse Categories
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <BookOpen className="w-8 h-8 text-purple-300 mb-4 mx-auto" />
            <h3 className="text-3xl font-bold text-white mb-2">1,200+</h3>
            <p className="text-white/70">Quality Articles</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Users className="w-8 h-8 text-pink-300 mb-4 mx-auto" />
            <h3 className="text-3xl font-bold text-white mb-2">25K+</h3>
            <p className="text-white/70">Active Readers</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <TrendingUp className="w-8 h-8 text-orange-300 mb-4 mx-auto" />
            <h3 className="text-3xl font-bold text-white mb-2">98%</h3>
            <p className="text-white/70">Satisfaction Rate</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;