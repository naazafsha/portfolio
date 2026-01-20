const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-accent">01.</span> About Me
                </h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a <strong>Software Engineer</strong> with a passion for building intelligent,
                            user-centric applications. My expertise lies in crafting <strong>AI-powered SaaS platforms</strong>
                            and <strong>media automation systems</strong> that deliver real business value.
                        </p>
                        <p>
                            With experience integrating <strong>30+ third-party APIs</strong> including LLMs,
                            image generation, video processing, and payment systems, I specialize in creating
                            seamless workflows that leverage cutting-edge AI technologies.
                        </p>
                        <p>
                            Currently, I'm focused on building scalable PHP and JavaScript applications,
                            designing RESTful APIs, and implementing generative AI solutions at
                            <strong> Logicbeam Softwares</strong>.
                        </p>
                        <div className="about-highlights">
                            <div className="highlight">
                                <i className="fas fa-brain"></i>
                                <span>AI Integration Expert</span>
                            </div>
                            <div className="highlight">
                                <i className="fas fa-code"></i>
                                <span>Full-Stack Developer</span>
                            </div>
                            <div className="highlight">
                                <i className="fas fa-cogs"></i>
                                <span>API Architect</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <div className="code-window">
                            <div className="window-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                                <span className="window-title">developer.js</span>
                            </div>
                            <pre className="code-content"><code>{`const developer = {
  name: "Afsha Naaz Ansari",
  role: "Software Engineer",
  location: "Kota, India",
  skills: [
    "PHP", "JavaScript",
    "Python", "MERN"
  ],
  passion: "Building AI-powered apps",
  code: () => "☕ + 💻 = 🚀"
};`}</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
