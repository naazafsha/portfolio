const Skills = () => {
    const skillCategories = [
        {
            icon: 'fa-code',
            title: 'Languages & Frameworks',
            skills: ['PHP', 'Laravel', 'JavaScript', 'Python', 'Java', 'TypeScript', 'CodeIgniter 3/4', 'MERN Stack', 'React', 'Angular', 'Node.js', 'HTML/CSS', 'Bootstrap']
        },
        {
            icon: 'fa-database',
            title: 'Backend & Databases',
            skills: ['RESTful APIs', 'MySQL', 'MongoDB', 'Authentication', 'RBAC', 'Express.js', 'Spring Framework', 'JSP']
        },
        {
            icon: 'fa-brain',
            title: 'AI & LLM APIs',
            skills: ['OpenAI ChatGPT', 'GPT-4', 'Claude AI', 'Gemini', 'LLM Integration', 'AI Analytics']
        },
        {
            icon: 'fa-image',
            title: 'Image Generation APIs',
            skills: ['Stable Diffusion', 'DALL-E', 'Prodia', 'VanceAI', 'Bannerbear', 'Kie.ai']
        },
        {
            icon: 'fa-microphone',
            title: 'Audio & Voice APIs',
            skills: ['ElevenLabs', 'Play.ht', 'Uberduck', 'Suno Music API', 'Text-to-Speech', 'Voice Cloning']
        },
        {
            icon: 'fa-video',
            title: 'Video Generation APIs',
            skills: ['Veo 3.1 API', 'Kling AI', 'Shotstack', 'PlainlyVideos', 'FFmpeg', 'Video Rendering']
        },
        {
            icon: 'fa-film',
            title: 'Media & Automation',
            skills: ['Video Pipelines', 'Async Processing', 'Cron Jobs', 'Queue Systems', 'Webhooks', 'Task Callbacks']
        },
        {
            icon: 'fa-plug',
            title: 'Integrations & Tools',
            skills: ['SMTP', 'Payment IPN', 'Stripe', 'API Marketplaces', 'Postman', 'Git/GitHub', 'Advanced Excel']
        },
        {
            icon: 'fa-robot',
            title: 'AI Coding Tools',
            skills: ['Claude', 'Cursor', 'Antigravity', 'GitHub Copilot', 'AI Pair Programming', 'Agentic Coding']
        }
    ]

    return (
        <section className="skills" id="skills">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-accent">02.</span> Technical Skills
                </h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div className="skill-category" key={index}>
                            <div className="category-icon">
                                <i className={`fas ${category.icon}`}></i>
                            </div>
                            <h3>{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <span className="skill-tag" key={skillIndex}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
