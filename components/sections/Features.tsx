'use client';

import { motion } from 'framer-motion';
import { MousePointer2, BarChart3, Cloud, Bell, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: MousePointer2,
    title: 'Dashboard You Love',
    description: 'Organize your inventory with intuitive features in dashboard. Manage your store effortlessly.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'One-Click Reports',
    description: 'Generate comprehensive reports instantly. Track performance, trends, and insights with a single click.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cloud,
    title: 'Work On Multiple Devices',
    description: 'Access your inventory anywhere, anytime. Seamless sync across all your devices in real-time.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Never run out of stock again. Get intelligent alerts for low inventory, reorders, and trends.',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Features() {
  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Powerful Features,
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Playful Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to manage your inventory efficiently, wrapped in a delightfully simple interface.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>

                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-purple-300 font-semibold">And many more features coming soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}