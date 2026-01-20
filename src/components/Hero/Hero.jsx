import { useState, useEffect } from 'react'

const Hero = () => {
    const [typedText, setTypedText] = useState('')

    useEffect(() => {
        const titles = [
            'Software Engineer',
            'AI Application Developer',
            'SaaS Builder',
            'Full-Stack Developer',
            'API Integration Expert'
        ]

        let titleIndex = 0
        let charIndex = 0
        let isDeleting = false
        let typingSpeed = 100

        const type = () => {
            const currentTitle = titles[titleIndex]

            if (isDeleting) {
                setTypedText(currentTitle.substring(0, charIndex - 1))
                charIndex--
                typingSpeed = 50
            } else {
                setTypedText(currentTitle.substring(0, charIndex + 1))
                charIndex++
                typingSpeed = 100
            }

            if (!isDeleting && charIndex === currentTitle.length) {
                typingSpeed = 2000
                isDeleting = true
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false
                titleIndex = (titleIndex + 1) % titles.length
                typingSpeed = 500
            }

            setTimeout(type, typingSpeed)
        }

        const timeout = setTimeout(type, 1000)
        return () => clearTimeout(timeout)
    }, [])

    const handleNavClick = (e, sectionId) => {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="hero" id="home">
            <div className="hero-particles"></div>
            <div className="hero-container">
                <div className="hero-content">
                    <span className="hero-greeting">Hello, I'm</span>
                    <h1 className="hero-name">Afsha Naaz Ansari</h1>
                    <div className="hero-title-wrapper">
                        <span className="hero-title" id="typed-text">{typedText}</span>
                        <span className="cursor">|</span>
                    </div>
                    <p className="hero-description">
                        Building AI-powered SaaS platforms and scalable web applications
                        with 2.5+ years of experience in API orchestration and generative AI integrations.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary" onClick={(e) => handleNavClick(e, 'projects')}>
                            <i className="fas fa-rocket"></i> View Projects
                        </a>
                        <a href="#contact" className="btn btn-secondary" onClick={(e) => handleNavClick(e, 'contact')}>
                            <i className="fas fa-envelope"></i> Contact Me
                        </a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">2.5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">30+</span>
                            <span className="stat-label">APIs Integrated</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <div className="image-glow"></div>
                        <img
                            src="https://avatars.githubusercontent.com/u/118339200?v=4"
                            alt="Afsha Naaz Ansari"
                            className="profile-img"
                        />
                        <div className="image-border"></div>
                    </div>
                </div>
            </div>
            <a href="#about" className="scroll-indicator" onClick={(e) => handleNavClick(e, 'about')}>
                <i className="fas fa-chevron-down"></i>
            </a>
        </section>
    )
}

export default Hero
