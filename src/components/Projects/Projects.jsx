const Projects = () => {
    const projects = [
        {
            icon: 'fa-book-open',
            category: 'SaaS Platform',
            title: 'AI-Powered Flipbook PDF Viewer',
            description: 'Full-featured PDF SaaS platform with upload, preview, edit, branding, and access control. Includes analytics, lead capture, sales automation, and SMTP notifications.',
            tech: ['CodeIgniter 4', 'PHP', 'MySQL', 'Flipbook.js'],
            link: '#',
            github: false,
            featured: true
        },
        {
            icon: 'fa-music',
            category: 'AI Platform',
            title: 'AI Music Creation Platform',
            description: 'AI-powered music generation platform for lyrics, rap, freestyle, and voice-based music. Features payment integration, email automation, and secure authentication.',
            tech: ['CodeIgniter 3', 'Uberduck API', 'Suno Music API', 'PHP'],
            link: '#',
            github: false,
            featured: true
        },
        {
            icon: 'fa-graduation-cap',
            category: 'Collaboration',
            title: 'EduZign',
            description: 'Educational/design platform built as a collaborative project. Contributed 15+ commits implementing core features and functionality.',
            tech: ['JavaScript', 'Web Platform'],
            link: 'https://github.com/ravikukreja95/EduZign',
            github: true
        },
        {
            icon: 'fa-briefcase',
            category: 'Full-Stack',
            title: 'CareerHub MERN',
            description: 'A comprehensive career/job portal platform built with the MERN stack. Features job listings, applications, and user management.',
            tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
            link: 'https://github.com/naazafsha/careerhub-mern',
            github: true
        },
        {
            icon: 'fa-project-diagram',
            category: 'Full-Stack',
            title: 'VectorShift Integrations',
            description: 'Full-stack technical assessment project demonstrating proficiency in Python backend and JavaScript frontend development.',
            tech: ['Python', 'JavaScript', 'HTML/CSS'],
            link: 'https://github.com/naazafsha/technical-assignment',
            github: true
        },
        {
            icon: 'fa-building',
            category: 'Collaboration',
            title: 'BusinessSuite',
            description: 'SaaS business management tool for enterprises. Contributed 7 commits implementing business logic and integrations.',
            tech: ['PHP', 'SaaS', 'Business Tools'],
            link: 'https://github.com/ravikukreja95/BusinessSuite',
            github: true
        },
        {
            icon: 'fa-image',
            category: 'Media Platform',
            title: 'Pixverse',
            description: 'Modern web application for media and image handling built with React and Vite for optimal performance.',
            tech: ['React', 'Vite', 'JavaScript'],
            link: 'https://github.com/naazafsha/pixverse',
            github: true
        },
        {
            icon: 'fa-receipt',
            category: 'Management System',
            title: 'Cab Receipt System',
            description: 'Web application for managing cab receipts built with CodeIgniter 4. Features receipt generation and management.',
            tech: ['CodeIgniter 4', 'PHP', 'MySQL'],
            link: 'https://github.com/naazafsha/cab_receipt_system',
            github: true
        },
        {
            icon: 'fa-globe',
            category: 'Full-Stack',
            title: 'Wanderlust',
            description: 'Comprehensive MERN stack web application inspired by Airbnb. Features property listings, booking system, and user authentication.',
            tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
            link: '#',
            github: false,
            featured: true
        }
    ]

    return (
        <section className="projects" id="projects">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-accent">04.</span> Featured Projects
                </h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className={`project-card ${project.featured ? 'featured' : ''}`} key={index}>
                            <div className="project-image">
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a
                                            href={project.link}
                                            target={project.github ? '_blank' : undefined}
                                            rel={project.github ? 'noopener noreferrer' : undefined}
                                            className="project-link"
                                            title={project.github ? 'View on GitHub' : 'View Details'}
                                        >
                                            <i className={project.github ? 'fab fa-github' : 'fas fa-external-link-alt'}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="project-icon">
                                    <i className={`fas ${project.icon}`}></i>
                                </div>
                            </div>
                            <div className="project-content">
                                <span className="project-category">{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="projects-cta">
                    <a
                        href="https://github.com/naazafsha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        <i className="fab fa-github"></i> View All on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
