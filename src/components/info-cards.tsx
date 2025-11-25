import Link from 'next/link';
import './../app/info-cards.css';
import { services as servicesData } from '@/data/services';

const cardData = [
  {
    title: "Support for Veterans",
    description: "See if you qualify for any VA directed program",
    services: ["Assistance with VA programs", "Veteran-Directed Care (VDC)", "Up to $4500 monthly in assistance"],
    icon: "M12 2l2.5 7.5h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z",
    bgImage: "https://static.wixstatic.com/media/c5947c_58a96d5405fe4286813ac0de1473d489~mv2.png",
    dataAiHint: "veterans support"
  },
  {
    title: "Elderly Care",
    description: "Companionship and daily assistance", 
    services: ["Meal Prep", "Mobility Aid", "Personal Hygiene"],
    icon: "M18 12.24V22H17.06V12.24C17.06 12.09 17 12 16.93 11.89C16.84 11.8 16.74 11.76 16.62 11.76C16.47 11.76 16.36 11.8 16.27 11.89C16.18 12 16.14 12.1 16.14 12.24V13.16H15.23V12.5C14.53 12.33 13.9 12.04 13.35 11.63C12.8 11.22 12.34 10.74 11.96 10.19L11.61 11.39C11.5 11.81 11.5 12.24 11.5 12.68L11.5 13L11.5 13.33L13.35 15.94V22H11.5V17.34L9.82 15L9.65 18.25L6.86 22L5.38 20.87L7.77 17.64V12.68C7.77 12.15 7.82 11.63 7.91 11.11L8.25 9.54L6.86 10.32V13.63H5V9.23L10 6.4C10.29 6.26 10.59 6.18 10.91 6.18C11.23 6.18 11.54 6.27 11.83 6.44C12.15 6.62 12.39 6.88 12.57 7.23L13.31 8.8C13.6 9.38 14.04 9.87 14.64 10.26C15.23 10.65 15.89 10.85 16.62 10.85C17 10.85 17.32 11 17.6 11.24C17.88 11.5 18 11.83 18 12.24M12 2C13.11 2 14 2.9 14 4C14 5.11 13.11 6 12 6C10.9 6 10 5.11 10 4C10 2.9 10.9 2 12 2Z",
    bgImage: "https://static.wixstatic.com/media/c5947c_509d6f748ae9480f845ec60f4d7426bb~mv2.png",
    dataAiHint: "elderly care"
  },
  {
    title: "Recovery Care",
    description: "Rehabilitation support",
    services: ["Physical Therapy", "Pain Management", "Exercise Plans"],
    icon: "M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8m-1 3h2v6h-2zm0 8h2v2h-2z",
    bgImage: "https://static.wixstatic.com/media/c5947c_cad722d37a724df983169bb917c8946e~mv2.jpg",
    dataAiHint: "recovery care"
  },
  {
    title: "Specialized Care", 
    description: "Condition-specific programs",
    services: ["Dementia Care", "Post op care", "Chronic Conditions"],
    icon: "M12 2a3 3 0 0 1 3 3v1h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V5a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v1h2V5a1 1 0 0 0-1-1m-5 6v2h2v-2H7m8 0v2h2v-2h-2m-8 4v2h2v-2H7m8 0v2h2v-2h-2m-8 4v2h2v-2H7m8 0v2h2v-2h-2z",
    bgImage: "https://static.wixstatic.com/media/c5947c_e394bc010f8a4d7aa1df349003916a2f~mv2.png",
    dataAiHint: "specialized care"
  },
  {
    title: "Respite Care",
    description: "Temporary caregiver relief",
    services: ["Short-Term Coverage", "Emergency Care", "Flexible Hours"],
    icon: "M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M19.8 17.7L19.2 11.3C19.1 10.5 18.5 10 17.7 10H16C14.5 10 13.1 9.5 12.2 8.6L10.2 6.6C10.1 6.4 9.6 6 8.8 6C8.3 6 7.8 6.2 7.4 6.6L4.1 9.9C3.6 10.6 3.6 11.5 3.9 12L5.3 14.8L2.2 18.8L3.8 20L7.5 15.3L7.2 14L8 14.8V20H10V13.9L7.9 11.8L10.3 9.4C11.2 10.3 12 11.2 13.9 11.7L13 20H14.5L14.9 16.5H18.1L18.2 17.7C17.8 18 17.5 18.4 17.5 19C17.5 19.8 18.2 20.5 19 20.5S20.5 19.8 20.5 19C20.5 18.5 20.2 18 19.8 17.7M15.1 15L15.5 11.5H17.5L17.9 15H15.1Z",
    bgImage: "https://static.wixstatic.com/media/c5947c_d8152b5d7d894a6897ee634f8a83df09~mv2.png",
    dataAiHint: "respite care"
  },
  {
    title: "24/7 Care",
    description: "Round-the-clock support",
    services: ["Companionship", "Night Shifts", "Weekend Coverage"],
    icon: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m1 3v6h5v-2h-3V7h-2z",
    bgImage: "https://static.wixstatic.com/media/c5947c_82d1a1f1aa144bd6b28b12001aaa6fd2~mv2.jpg",
    dataAiHint: "24 7 care"
  }
];


export function InfoCards() {
  return (
    <section className="services-container">
       <div className="container">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Noble Health?</h2>
            <p className="mt-4 text-lg text-muted-foreground">We are dedicated to providing the highest quality of care with compassion and respect.</p>
        </div>
        <div className="services-grid" id="google-ads-target">
            {cardData.map((service, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div 
                    className="flip-card-front"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${service.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    data-ai-hint={service.dataAiHint}
                  >
                    <div className="static-card-content">
                        <div className="service-icon">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                            <path d={service.icon}/>
                          </svg>
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                  </div>
                  <div 
                    className="flip-card-back"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${service.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                  >
                     <div className="static-card-content">
                        <h3 className='mb-4'>{service.title}</h3>
                        <ul className="nursing-list">
                          {service.services.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
