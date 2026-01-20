import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
        const mailtoLink = `mailto:naaz33afsha@gmail.com?subject=${subject}&body=${body}`

        window.location.href = mailtoLink
        setFormData({ name: '', email: '', message: '' })
    }

    const contactDetails = [
        {
            icon: 'fa-envelope',
            label: 'Email',
            value: 'naaz33afsha@gmail.com',
            link: 'mailto:naaz33afsha@gmail.com'
        },
        {
            icon: 'fa-phone',
            label: 'Phone',
            value: '+91 8233483456',
            link: 'tel:+918233483456'
        },
        {
            icon: 'fa-map-marker-alt',
            label: 'Location',
            value: 'Kota, Rajasthan, India',
            link: null
        }
    ]

    const socialLinks = [
        { icon: 'fab fa-github', url: 'https://github.com/naazafsha', title: 'GitHub' },
        { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/afsha-naaz-ansari-a099b6158/', title: 'LinkedIn' },
        { icon: 'fas fa-envelope', url: 'mailto:naaz33afsha@gmail.com', title: 'Email' }
    ]

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-accent">06.</span> Get In Touch
                </h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <p className="contact-intro">
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a project in mind or just want to say hello,
                            feel free to reach out!
                        </p>
                        <div className="contact-details">
                            {contactDetails.map((detail, index) => (
                                detail.link ? (
                                    <a href={detail.link} className="contact-item" key={index}>
                                        <div className="contact-icon">
                                            <i className={`fas ${detail.icon}`}></i>
                                        </div>
                                        <div className="contact-text">
                                            <span className="contact-label">{detail.label}</span>
                                            <span className="contact-value">{detail.value}</span>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="contact-item" key={index}>
                                        <div className="contact-icon">
                                            <i className={`fas ${detail.icon}`}></i>
                                        </div>
                                        <div className="contact-text">
                                            <span className="contact-label">{detail.label}</span>
                                            <span className="contact-value">{detail.value}</span>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    title={social.title}
                                >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="name">Your Name</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email">Your Email</label>
                        </div>
                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <label htmlFor="message">Your Message</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full">
                            <i className="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
