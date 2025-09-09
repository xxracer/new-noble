import Link from 'next/link';
import './../app/info-cards.css';
import { services as servicesData } from '@/data/services';

export function InfoCards() {
  return (
    <section className="services-container">
       <div className="container">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Noble Health?</h2>
            <p className="mt-4 text-lg text-muted-foreground">We are dedicated to providing the highest quality of care with compassion and respect.</p>
        </div>
        <div className="services-grid" id="google-ads-target">
            {servicesData.map((service, index) => (
            <Link href={`/services/${service.slug}`} key={index} className="static-card-link">
              <div 
                  className="static-card" 
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                  data-ai-hint={service.dataAiHint}
              >
                  <div className="static-card-overlay"></div>
                  <div className="static-card-content">
                      <div className="service-icon">
                          <svg viewBox="0 0 24 24">
                              <path d={service.icon}/>
                          </svg>
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                  </div>
              </div>
            </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
