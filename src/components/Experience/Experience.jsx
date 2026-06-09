const Experience = () => {
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'Logicbeam Softwares',
            period: 'May 2023 – Present',
            details: [
                'Full-time from May 2025 to Present, Part-time from May 2023 to May 2025',
                'Architected and maintained multi-tenant SaaS platforms using PHP (Laravel, CodeIgniter) with scalable SaaS architecture and RBAC-based access control',
                'Integrated 30+ third-party APIs including OpenAI API and other LLM integration services for Generative AI features like text, image, audio, video, and music generation',
                'Engineered prompt engineering workflows and designed async job queues for background processing with retries, error handling, and usage-based throttling',
                'Built and documented RESTful API design patterns, managing file storage with AWS S3 and collaborating with frontend teams to ship user-focused features',
                'Conducted code reviews and optimized application performance and security'
            ]
        },
        {
            title: 'Web Developer Intern',
            company: 'Alchotech, Kota',
            period: 'Nov 2022 – Apr 2023',
            details: [
                'Assisted in developing full-stack web applications using PHP, JavaScript, HTML, and CSS',
                'Integrated APIs to enhance application functionality and user experience',
                'Implemented video processing pipelines using FFmpeg',
                'Designed database schemas and resolved production bugs'
            ]
        }
    ]

    return (
        <section className="experience" id="experience">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-accent">03.</span> Work Experience
                </h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{exp.title}</h3>
                                    <span className="company">{exp.company}</span>
                                </div>
                                <span className="timeline-date">
                                    <i className="fas fa-calendar"></i> {exp.period}
                                </span>
                                <ul className="timeline-details">
                                    {exp.details.map((detail, detailIndex) => (
                                        <li key={detailIndex}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
