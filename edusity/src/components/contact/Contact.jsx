import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const handleMessages = async(e) => {
        e.preventDefault();
        const name = e.target.name.value
        const phone = e.target.phone.value
        const feedback = e.target.feedback.value

        const webhookUrl = 'https://discord.com/api/webhooks/1342869881103585442/iY0uW88DsiDp5E7eknDlLMGm3dI1a5uok-952HV__8U5SRk22pD2OPb7fCopgLURsbl5'

        const message = {
            content: `🔔New message\n 👤**Name**: ${name} \n 📞**Contact**: ${phone}\n 💭**Message**: ${feedback}`
        }

        try{
            await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            })
            alert('Message sent successfully')
            e.target.reset()
        } catch(error){
            console.error("Error sending feedback", error)
            alert('Failed to send your feedback')
        }

    }

    return (
        <div className='contact' name='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eum, harum minima corporis excepturi rem veritatis, nihil in, dolorum ullam explicabo molestiae natus cum voluptatibus.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
                    <li><img src={phone_icon} alt="" />35135352</li>
                    <li><img src={location_icon} alt="" />Address</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={handleMessages}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                    <label>Write your message</label>
                    <textarea name="feedback" rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>
                    
                </span>

            </div>
        </div>
    )
}

export default Contact
