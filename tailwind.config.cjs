module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#4f46e5',
        accent2: '#7c3aed'
      },
      borderRadius: {
        xl: '25px'
      },
      boxShadow: {
        glass: '0 20px 40px rgba(0,0,0,0.15)',
        'glass-hover': '0 25px 45px rgba(0,0,0,0.2)'
      },
      backdropBlur: {
        sm: '6px',
        md: '8px',
        lg: '20px'
      },
      spacing: {
        section: '48px',
        tablet: '32px',
        mobile: '24px'
      }
    }
  },
  plugins: []
}
