# BMCS CHALLENGER SERIES 2025 - Valka Esports

A modern, responsive esports tournament website built with Next.js, Tailwind CSS, and Framer Motion.

## 🎮 Features

- **Modern Design**: Gaming aesthetic with neon glow effects and gradients
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for hover and scroll effects
- **Tournament Information**: Complete tournament details, schedule, and team information
- **Live Stream Integration**: YouTube embed placeholder for live streaming
- **Team Management**: Organized team categories (Pro, Semi-Pro, Mid, Section D)

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom gaming theme
- **Animations**: Framer Motion for smooth interactions
- **Language**: TypeScript for type safety
- **Responsive**: Mobile-first design approach

## 📋 Requirements

- Node.js 18+ 
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd valika-esports-tournament
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your logo**
   - Replace the placeholder `public/logo.png` with your actual logo
   - Recommended size: 512x512px or larger
   - Format: PNG with transparent background preferred

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The website should now be running locally

## 🎯 Customization

### Branding
- **Organizer**: Valka Esports
- **Location**: NCE Chandi
- **Tournament**: BMCS CHALLENGER SERIES 2025
- **Exclusive Rewards**: Certificates & Trophies (easily configurable)

### Colors & Theme
The website uses a custom gaming color palette:
- **Neon Blue**: `#00f5ff`
- **Neon Purple**: `#8b5cf6`
- **Neon Pink**: `#ec4899`
- **Neon Green**: `#00ff88`

### Content Updates
- Edit team information in `app/components/Teams.tsx`
- Update tournament schedule in `app/components/Highlights.tsx`
- Modify navigation items in `app/components/Navbar.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Animation Features

- **Scroll Animations**: Elements animate in as they come into view
- **Hover Effects**: Interactive elements with smooth transitions
- **Loading States**: Staggered animations for better UX
- **Parallax Effects**: Subtle background movements

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Connect your repository and deploy
- **Traditional hosting**: Build with `npm run build` and serve the `.next` folder

## 📁 Project Structure

```
valika-esports-tournament/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Highlights.tsx
│   │   ├── Teams.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── logo.png
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎮 Tournament Information

### Event Details
- **Tournament**: BMCS CHALLENGER SERIES 2025
- **Organizer**: Valka Esports
- **Venue**: NCE Chandi
- **Dates**: September 5-7, 2025
- **Exclusive Rewards**: Certificates & Trophies
- **Format**: 16 teams, 3-day competition

### Team Categories
1. **Pro Teams** - Elite professional teams
2. **Semi-Pro Teams** - Rising competitive teams
3. **Mid Teams** - Skilled amateur teams
4. **Section D Teams** - Newcomer teams

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Email: info@valkaesports.com
- Location: NCE Chandi, India

---

**Built with ❤️ by Valka Esports | Powered by NCE Chandi**
