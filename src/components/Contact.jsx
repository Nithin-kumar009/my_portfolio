import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here (e.g. EmailJS, Formspree, etc.)
    alert('Message sent! (wire up your backend here)')
  }

  return (
    <section id="contact" className="section">
      <div className="contact-inner">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-label">Say Hello</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-sub">I'd love to hear from you.</p>
        </div>

        <div className="contact-card glass reveal">
          <div className="contact-form">
            <input
              className="contact-input"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="contact-input"
              type="email"
              placeholder="Email Address"
              required
            />
            <textarea
              className="contact-input contact-textarea"
              placeholder="Your Message"
              rows={5}
              required
            />
            <button className="btn-primary btn-send" onClick={handleSubmit}>
              Send Message →
            </button>
            <p className="contact-email-note">
              Or email me at{' '}
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}