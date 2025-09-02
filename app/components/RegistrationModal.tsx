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

// Simplified schema that matches the interface exactly
const schema = yup.object().shape({
  members: yup.array().of(
  yup.object({
    idNumber: yup.string().required('ID number is required'),
    idName: yup.string().required('ID name is required'),
    rollNumber: yup.string().required('Roll number is required'),
  })
).min(4, 'At least 4 team members are required').max(5, 'Maximum 5 team members allowed').required(),
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
      teamName: '',
      teamLeaderName: '',
      teamLeaderRollNumber: '',
      batch: '',
      members: [
        { idNumber: '', idName: '', rollNumber: '' },
        { idNumber: '', idName: '', rollNumber: '' },
        { idNumber: '', idName: '', rollNumber: '' },
        { idNumber: '', idName: '', rollNumber: '' },
        { idNumber: '', idName: '', rollNumber: '' },
      ],
    },
  })

  // Keep the rest of your component exactly as it is...
