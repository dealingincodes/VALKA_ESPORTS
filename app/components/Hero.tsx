'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import RegistrationModal from './RegistrationModal'

const Hero = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false)
  
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-28">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-premium-red/10 rounded-full blur-3xl animate-breathe"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-premium-gold/10 rounded-full blur-3xl animate-breathe" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-premium-red/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-premium-gold/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Tournament Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <Image
              src="/logo.png"
              alt="BMCS CHALLENGER SERIES 2025"
              width={120}
              height={120}
              className="mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 neon-glow rounded-full"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="premium-gold-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight">BMCS</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 font-medium tracking-wide">CHALLENGER SERIES 2025</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Organized by <span className="text-premium-gold font-semibold">Valka Esports</span> |{' '}
            <span className="text-premium-gold font-semibold">NCE Chandi</span>
          </motion.p>

          {/* Tournament Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="team-card text-center">
              <div className="text-2xl font-bold premium-gold-text mb-2">Exclusive</div>
              <div className="text-gray-400 text-sm">Certificates & Trophies</div>
            </div>
            <div className="team-card text-center">
              <div className="text-2xl font-bold text-neon-blue mb-2">TBD</div>
              <div className="text-gray-400 text-sm">Elite Teams</div>
            </div>
            <div className="team-card text-center">
              <div className="text-2xl font-bold text-neon-green mb-2">Live</div>
              <div className="text-gray-400 text-sm">Streaming</div>
            </div>
          </motion.div>

          {/* Register Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <motion.button
              onClick={() => setIsRegistrationModalOpen(true)}
              className="premium-button group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Register Now</span>
              <div className="premium-button-hover"></div>
            </motion.button>
          </motion.div>

          {/* Tournament Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="team-card max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-lg font-semibold premium-gold-text mb-3">Tournament Details</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="text-white">September 5-7, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span className="text-white">4v4 Team Battle</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prize Pool:</span>
                    <span className="text-white">Exclusive Certificates & Trophies</span>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold premium-gold-text mb-3">Registration</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Deadline:</span>
                    <span className="text-white">August 25, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team Size:</span>
                    <span className="text-white">4-5 Players</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-neon-green">Open for Registration</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-premium-gold rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-premium-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </>
  )
}

export default Hero
