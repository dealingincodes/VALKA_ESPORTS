'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import RegistrationModal from './RegistrationModal'

const Teams = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false)
  
  // Generate sample teams with professional names (showing TBD status)
  const generateTeams = () => {
    const teamNames = [
      'Phoenix Warriors', 'Shadow Strikers', 'Crimson Legends', 'Golden Eagles',
      'Thunder Wolves', 'Steel Dragons', 'Frost Giants', 'Blaze Hunters',
      'Void Riders', 'Storm Breakers', 'Iron Phoenix', 'Night Owls',
      'Solar Flares', 'Mystic Knights', 'Raven Shadows', 'Crystal Wolves'
    ]
    
    const regions = [
      'North India', 'South India', 'East India', 'West India',
      'Central India', 'North East', 'Himalayan', 'Coastal',
      'Metro Cities', 'Tier 2 Cities', 'Rural Areas', 'Universities',
      'Colleges', 'Schools', 'Gaming Cafes', 'Online Communities'
    ]
    
    return teamNames.map((name, index) => ({
      id: index + 1,
      name,
      players: 4,
      region: regions[index],
      status: 'TBD',
      tier: index < 4 ? 'Pro' : index < 8 ? 'Semi-Pro' : index < 12 ? 'Amateur' : 'Newcomer'
    }))
  }
  
  const teams = generateTeams()
  
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Pro': return 'from-premium-gold to-premium-goldDark'
      case 'Semi-Pro': return 'from-neon-blue to-blue-500'
      case 'Amateur': return 'from-neon-purple to-purple-500'
      case 'Newcomer': return 'from-neon-pink to-pink-500'
      default: return 'from-gray-400 to-gray-600'
    }
  }
  
  const getStatusColor = (status: string) => {
    return status === 'TBD' 
      ? 'bg-gray-600/20 text-gray-400 border-gray-600/30' 
      : 'bg-green-600/20 text-green-400 border-green-600/30'
  }

  return (
    <>
      <section id="teams" className="py-20 px-4 sm:px-6 lg:px-8 section-gradient relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-premium-red/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-premium-gold/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-premium-red/3 rounded-full blur-3xl animate-breathe"></div>
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
              <span className="gradient-text">Tournament Teams</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Teams will be announced soon for the BMCS CHALLENGER SERIES 2025
            </p>
            <div className="mt-6 flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-premium-gold rounded-full"></div>
                <span className="text-gray-300">Pro Teams</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
                <span className="text-gray-300">Semi-Pro Teams</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-purple rounded-full"></div>
                <span className="text-gray-300">Amateur Teams</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-pink rounded-full"></div>
                <span className="text-gray-300">Newcomer Teams</span>
              </div>
            </div>
          </motion.div>

          {/* Teams Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {teams.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="team-card professional-shadow card-hover">
                  {/* Team Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white relative">
                    {team.name.charAt(0)}
                    <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r ${getTierColor(team.tier)} flex items-center justify-center text-xs font-bold text-white`}>
                      {team.tier.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Team Info */}
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-premium-gold transition-colors duration-300">
                      {team.name}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center justify-center space-x-2">
                        <span>👥</span>
                        <span>{team.players} Players</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span>📍</span>
                        <span>{team.region}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="mt-4 text-center">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(team.status)}`}>
                      {team.status}
                    </span>
                  </div>
                  
                  {/* Tier Badge */}
                  <div className="mt-2 text-center">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getTierColor(team.tier)} bg-clip-text text-transparent border border-current/30`}>
                      {team.tier}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tournament Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="team-card text-center">
              <div className="text-3xl font-bold premium-gold-text mb-2">TBD</div>
              <div className="text-gray-400">Total Teams</div>
            </div>
            <div className="team-card text-center">
              <div className="text-3xl font-bold text-neon-blue mb-2">TBD</div>
              <div className="text-gray-400">Total Players</div>
            </div>
            <div className="team-card text-center">
              <div className="text-3xl font-bold text-neon-green mb-2">TBD</div>
              <div className="text-gray-400">Confirmed Teams</div>
            </div>
            <div className="team-card text-center">
              <div className="text-3xl font-bold text-neon-pink mb-2">TBD</div>
              <div className="text-gray-400">Pending Teams</div>
            </div>
          </motion.div>

          {/* Registration CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="card-gradient rounded-2xl p-12 professional-shadow">
              <h3 className="text-3xl font-bold text-white mb-4">
                Want to Join the Tournament?
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Register your team now and compete against the best BMCS players in India. 
                Don't miss this opportunity to showcase your skills and win exclusive certificates and trophies!
              </p>
              <motion.button
                onClick={() => setIsRegistrationModalOpen(true)}
                className="premium-button group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Register Your Team</span>
                <div className="premium-button-hover"></div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </>
  )
}

export default Teams
