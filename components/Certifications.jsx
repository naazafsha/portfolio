const Certifications = () => {
    const certifications = [
        {
            icon: 'fab fa-java',
            title: 'Full Stack Java Developer',
            description: 'Java, JSP, REST, Spring Framework - Udemy'
        },
        {
            icon: 'fas fa-robot',
            title: 'Generative AI Model Building',
            description: 'Build Your Own Generative AI Model'
        },
        {
            icon: 'fab fa-python',
            title: 'Python Programming',
            description: 'Python Programming with MySQL'
        },
        {
            icon: 'fas fa-rocket',
            title: 'ISRO Mahaquiz Chandrayan 3',
            description: 'MyGov India - Space Science Achievement'
        },
        {
            icon: 'fas fa-graduation-cap',
            title: 'NPTEL Discipline Star',
            description: 'IIT Kanpur STAR Workshop'
        },
        {
            icon: 'fas fa-file-alt',
            title: 'Resume Writing',
            description: 'TCS iON Professional Certification'
        }
    ]

    return (
        <section className="certifications" id="certifications">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-accent">05.</span> Certifications
                </h2>
                <div className="cert-grid">
                    {certifications.map((cert, index) => (
                        <div className="cert-card" key={index}>
                            <div className="cert-icon">
                                <i className={cert.icon}></i>
                            </div>
                            <h3>{cert.title}</h3>
                            <p>{cert.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
