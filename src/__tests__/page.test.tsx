import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('CI/CD Test Project')
  })

  it('renders the description', () => {
    render(<Home />)
    
    const description = screen.getByText(/Modern Next.js 15 application with Hero UI/)
    expect(description).toBeInTheDocument()
  })

  it('renders technology chips', () => {
    render(<Home />)
    
    expect(screen.getByText('Next.js 15')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Hero UI')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
  })

  it('renders feature cards', () => {
    render(<Home />)
    
    expect(screen.getByText('🚀 Fast Development')).toBeInTheDocument()
    expect(screen.getByText('🎨 Modern UI')).toBeInTheDocument()
    expect(screen.getByText('⚡ CI/CD Ready')).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(<Home />)
    
    expect(screen.getByText('Deploy to Vercel')).toBeInTheDocument()
    expect(screen.getByText('View Documentation')).toBeInTheDocument()
    expect(screen.getByText('Run Tests')).toBeInTheDocument()
  })
})
