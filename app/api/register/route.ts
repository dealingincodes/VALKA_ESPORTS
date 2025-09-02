import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      teamName,
      teamLeaderName,
      teamLeaderRollNumber,
      batch,
      members,
    } = body

    // Validate required fields
    if (!teamName || !teamLeaderName || !teamLeaderRollNumber || !batch) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!members || members.length < 4) {
      return NextResponse.json(
        { message: 'At least 4 team members are required' },
        { status: 400 }
      )
    }

    // Validate required members (first 4)
    for (let i = 0; i < 4; i++) {
      const member = members[i]
      if (!member.idNumber || !member.idName || !member.rollNumber) {
        return NextResponse.json(
          { message: `Member ${i + 1} is missing required information` },
          { status: 400 }
        )
      }
    }

    // Create email content
    const emailContent = `
      <h2>🎮 New Team Registration - BMCS CHALLENGER SERIES 2025</h2>
      
      <h3>🏆 Team Information</h3>
      <p><strong>Team Name:</strong> ${teamName}</p>
      <p><strong>Team Leader:</strong> ${teamLeaderName}</p>
      <p><strong>Leader Roll Number:</strong> ${teamLeaderRollNumber}</p>
      <p><strong>Batch:</strong> ${batch}</p>
      
      <h3>👥 Team Members</h3>
      ${members
        .map((member: any, index: number) => {
          if (member.idNumber && member.idName && member.rollNumber) {
            return `
              <div style="margin-bottom: 15px; padding: 10px; background-color: #f3f4f6; border-radius: 5px;">
                <p><strong>Member ${index + 1}:</strong></p>
                <p>ID Number: ${member.idNumber}</p>
                <p>ID Name: ${member.idName}</p>
                <p>Roll Number: ${member.rollNumber}</p>
              </div>
            `
          }
          return ''
        })
        .join('')}
      
      <hr style="margin: 20px 0;">
      <p><em>Registration submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</em></p>
      <p><em>This is an automated email from the BMCS CHALLENGER SERIES 2025 registration system.</em></p>
    `

    // Configure email transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `🎮 New Team Registration: ${teamName} - BMCS CHALLENGER SERIES 2025`,
      html: emailContent,
    })

    return NextResponse.json(
      { message: 'Registration submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
