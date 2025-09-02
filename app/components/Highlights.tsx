'use client'

import { motion } from 'framer-motion'

const Highlights = () => {
  const highlights = [
    {
      title: 'Exclusive Rewards',
      value: 'Certificates & Trophies',
      description: 'Prestigious recognition for winners',
      icon: '🏆',
      color: 'from-neon-green to-emerald-500'
    },
    {
      title: 'Tournament Dates',
      value: 'September 5-7, 2025',
      description: '3 days of intense competition',
      icon: '📅',
      color: 'from-neon-purple to-purple-500'
    },
    {
      title: 'Live Stream',
      value: 'YouTube',
      description: 'Watch all matches live',
      icon: '📺',
      color: 'from-neon-pink to-pink-500'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-800 via-burgundy-800 to-dark-800 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Tournament Highlights</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about the BMCS CHALLENGER SERIES 2025
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
                             <div className="card-gradient rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 card-hover shadow-xl">
                <div className="text-center">
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent mb-2`}>
                    {highlight.value}
                  </div>
                  <p className="text-gray-400">{highlight.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Stream Section */}
                 <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="card-gradient rounded-2xl p-8 shadow-xl"
         >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="gradient-text">Live Stream</span>
            </h3>
            <p className="text-gray-400">Watch the tournament live on YouTube</p>
          </div>
          
          {/* YouTube Embed Placeholder */}
          <div className="relative aspect-video bg-dark-600 rounded-xl overflow-hidden border border-gray-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📺</div>
                <p className="text-gray-400 text-lg">Live Stream Coming Soon</p>
                <p className="text-gray-500 text-sm">YouTube embed will be added here</p>
              </div>
            </div>
            {/* YouTube Logo Overlay */}
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              LIVE
            </div>
          </div>
        </motion.div>

        {/* Tournament Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            <span className="gradient-text">Tournament Schedule</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { day: 'Day 1', date: 'September 5', event: 'Opening Ceremony & Qualifiers' },
              { day: 'Day 2', date: 'September 6', event: 'Semi Finals & Finals' },
              { day: 'Day 3', date: 'September 7', event: 'Grand Finale & Awards' }
            ].map((schedule, index) => (
                             <motion.div
                 key={schedule.day}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 className="card-gradient rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 shadow-lg"
               >
                                 <div className="text-red-400 font-bold text-lg mb-2">{schedule.day}</div>
                <div className="text-white font-semibold mb-2">{schedule.date}</div>
                <div className="text-gray-400 text-sm">{schedule.event}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Highlights
