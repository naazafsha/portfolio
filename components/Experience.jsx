const Experience = () => {
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'Logicbeam Softwares',
            period: 'May 2023 – Present',
            details: [
                'Full-time from May 2025 to Present, Part-time from May 2023 to May 2025',
                'Architected multi-tenant SaaS platforms using PHP (Laravel, CodeIgniter), reducing system downtime by 40% and supporting up to 10,000 concurrent users',
                'Integrated 30+ third-party APIs (including OpenAI and LLM services) within an 8-month period, enabling Generative AI features across 5 product lines',
                'Engineered async job queues for background processing with automated retries, reducing API error rates by 65% during peak loads',
                'Built RESTful APIs and managed AWS S3 file storage, accelerating frontend feature delivery speed by 30%',
                'Conducted code reviews and optimized application performance, decreasing page load times by an average of 1.5 seconds'
            ]
        },
        {
            title: 'Web Developer Intern',
            company: 'Alchotech, Kota',
            period: 'Nov 2022 – Apr 2023',
            details: [
                'Assisted in developing full-stack web applications using PHP and JavaScript, contributing to a 20% increase in user engagement',
                'Integrated multiple REST APIs to enhance application functionality, reducing manual data entry time by 50%',
                'Implemented video processing pipelines using FFmpeg, cutting media processing and conversion time by 70%',
                'Designed database schemas and resolved 50+ critical production bugs, improving overall system stability'
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
