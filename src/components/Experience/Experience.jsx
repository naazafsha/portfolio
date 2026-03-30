const Experience = () => {
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'Logicbeam Softwares',
            period: 'May 2023 – Feb 2026',
            details: [
                'Full-time from May 2025 to Feb 2026, Part-time from May 2023 to May 2025',
                'Developed and maintained scalable PHP-based SaaS applications with high performance and reliability',
                'Integrated 30+ third-party and AI APIs including text, image, audio, video, and music generation APIs',
                'Designed AI-driven workflows handling asynchronous processing, retries, error handling, and usage-based access control',
                'Built RESTful APIs and collaborated with frontend and product teams to deliver user-focused features',
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
