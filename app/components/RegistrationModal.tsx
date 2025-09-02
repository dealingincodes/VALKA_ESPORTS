'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface TeamMember {
  idNumber: string
  idName: string
  rollNumber: string
}

interface RegistrationForm {
  teamName: string
  teamLeaderName: string
  teamLeaderRollNumber: string
  batch: string
  members: TeamMember[]
}

const schema = yup.object({
  teamName: yup.string().required('Team name is required'),
  teamLeaderName: yup.string().required('Team leader name is required'),
  teamLeaderRollNumber: yup.string().required('Team leader roll number is required'),
  batch: yup.string().required('Batch is required'),
  members: yup.array().of(
    yup.object({
      idNumber: yup.string().required('ID number is required'),
      idName: yup.string().required('ID name is required'),
      rollNumber: yup.string().required('Roll number is required'),
    })
  ).min(4, 'At least 4 team members are required').max(5, 'Maximum 5 team members allowed'),
})

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<RegistrationForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      members: [
        { idNumber: '', idName: '', rollNumber: '' },
        { idNumber: '', idName: '', rollNumber: '' },
        { idNumber: '', idName: '', rollNumber: '' },
        { idNumber: '', idName: '', rollNumber: '' },
        { idNumber: '', idName: '', rollNumber: '' },
      ],
    },
  })

  const watchedMembers = watch('members')

  const onSubmit = async (data: RegistrationForm) => {
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
        }, 3000)
      } else {
        const errorData = await response.json()
        setErrorMessage(errorData.message || 'Registration failed. Please try again.')
        setSubmitStatus('error')
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      reset()
      setSubmitStatus('idle')
      setErrorMessage('')
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-premium-red via-premium-redDark to-premium-redLight rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold premium-gold-text mb-2">
                Team Registration
              </h2>
              <p className="text-gray-200 text-lg">
                Join the BMCS CHALLENGER SERIES 2025
              </p>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-600/20 border border-green-500/50 rounded-xl p-6 text-center mb-6"
              >
                <div className="text-4xl mb-2">🎉</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  Registration Successful!
                </h3>
                <p className="text-green-300">
                  We'll contact you soon with further details.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-600/20 border border-red-500/50 rounded-xl p-6 text-center mb-6"
              >
                <div className="text-4xl mb-2">❌</div>
                <h3 className="text-xl font-bold text-red-400 mb-2">
                  Registration Failed
                </h3>
                <p className="text-red-300">{errorMessage}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Team Information */}
              <div className="bg-black/20 rounded-xl p-6 border border-premium-gold/30">
                <h3 className="text-xl font-bold premium-gold-text mb-4">
                  Team Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Team Name *
                    </label>
                    <input
                      {...register('teamName')}
                      className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 transition-all duration-200"
                      placeholder="Enter team name"
                    />
                    {errors.teamName && (
                      <p className="text-red-400 text-sm mt-1">{errors.teamName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Team Leader Name *
                    </label>
                    <input
                      {...register('teamLeaderName')}
                      className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 transition-all duration-200"
                      placeholder="Enter leader name"
                    />
                    {errors.teamLeaderName && (
                      <p className="text-red-400 text-sm mt-1">{errors.teamLeaderName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Team Leader Roll Number *
                    </label>
                    <input
                      {...register('teamLeaderRollNumber')}
                      className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 transition-all duration-200"
                      placeholder="Enter roll number"
                    />
                    {errors.teamLeaderRollNumber && (
                      <p className="text-red-400 text-sm mt-1">{errors.teamLeaderRollNumber.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Batch *
                    </label>
                    <select
                      {...register('batch')}
                      className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 transition-all duration-200"
                    >
                      <option value="">Select batch</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                    </select>
                    {errors.batch && (
                      <p className="text-red-400 text-sm mt-1">{errors.batch.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div className="bg-black/20 rounded-xl p-6 border border-premium-gold/30">
                <h3 className="text-xl font-bold premium-gold-text mb-4">
                  Team Members
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  * Required for members 1-4. Member 5 is optional.
                </p>

                <div className="space-y-6">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <div key={index} className="bg-black/20 rounded-lg p-4 border border-gray-600">
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Member {index + 1} {index < 4 ? '*' : '(Optional)'}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-200 mb-2">
                            ID Number {index < 4 ? '*' : ''}
                          </label>
                          <input
                            {...register(`members.${index}.idNumber`)}
                            className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 transition-all duration-200"
                            placeholder="Enter ID number"
                          />
                          {errors.members?.[index]?.idNumber && (
                            <p className="text-red-400 text-sm mt-1">{errors.members[index]?.idNumber?.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-200 mb-2">
                            ID Name {index < 4 ? '*' : ''}
                          </label>
                          <input
                            {...register(`members.${index}.idName`)}
                            className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 transition-all duration-200"
                            placeholder="Enter ID name"
                          />
                          {errors.members?.[index]?.idName && (
                            <p className="text-red-400 text-sm mt-1">{errors.members[index]?.idName?.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-200 mb-2">
                            Roll Number {index < 4 ? '*' : ''}
                          </label>
                          <input
                            {...register(`members.${index}.rollNumber`)}
                            className="w-full px-3 py-2 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 transition-all duration-200"
                            placeholder="Enter roll number"
                          />
                          {errors.members?.[index]?.rollNumber && (
                            <p className="text-red-400 text-sm mt-1">{errors.members[index]?.rollNumber?.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {errors.members && (
                  <p className="text-red-400 text-sm mt-2">{errors.members.message}</p>
                )}
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-700 disabled:opacity-50 text-white rounded-lg font-medium transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="premium-button group disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default RegistrationModal
