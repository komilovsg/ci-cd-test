import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// Mock the providers and components
jest.mock('@/contexts/language-context', () => ({
  useLanguage: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'hero.greeting': 'Привет! Я',
        'hero.name': 'Шахрон Комилов', 
        'hero.title': 'Senior Frontend разработчик',
        'hero.description': 'Создаю современные веб-приложения',
        'hero.cta': 'Связаться со мной',
        'hero.resume': 'Скачать резюме',
        'skills.title': 'Технические навыки',
        'projects.title': 'Избранные проекты',
        'contact.title': 'Свяжитесь со мной',
        'footer.made': 'Сделано с',
        'footer.love': 'любовью'
      }
      return translations[key] || key
    }
  })
}))

jest.mock('@/components/header', () => ({
  Header: () => <div data-testid="header">Header</div>
}))

jest.mock('@/components/projects-slider', () => ({
  ProjectsSlider: () => <div data-testid="projects-slider">Projects Slider</div>
}))

describe('Portfolio Home Page', () => {
  it('renders the header component', () => {
    render(<Home />)
    
    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
  })

  it('renders the main name heading', () => {
    render(<Home />)
    
    const nameHeading = screen.getByText('Шахрон Комилов')
    expect(nameHeading).toBeInTheDocument()
  })

  it('renders the title and description', () => {
    render(<Home />)
    
    expect(screen.getByText('Senior Frontend разработчик')).toBeInTheDocument()
    expect(screen.getByText('Создаю современные веб-приложения')).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(<Home />)
    
    expect(screen.getByText('Связаться со мной')).toBeInTheDocument()
    expect(screen.getByText('Скачать резюме')).toBeInTheDocument()
  })

  it('renders skills section', () => {
    render(<Home />)
    
    expect(screen.getByText('Технические навыки')).toBeInTheDocument()
  })

  it('renders projects section', () => {
    render(<Home />)
    
    expect(screen.getByText('Избранные проекты')).toBeInTheDocument()
    expect(screen.getByTestId('projects-slider')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Home />)
    
    expect(screen.getByText('Свяжитесь со мной')).toBeInTheDocument()
    expect(screen.getByText('komilovsg@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('+992 93 500 50 05')).toBeInTheDocument()
  })

  it('renders technology chips', () => {
    render(<Home />)
    
    expect(screen.getByText('Next.js 15')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Hero UI')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
  })
})
