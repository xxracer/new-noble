import Link from "next/link";

export function ConsultationBanner() {
  return (
    <div className="text-center my-10 py-5">
       <Link 
        href="https://www.mynoblehealth.com/free-consultation" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-primary bg-transparent text-2xl md:text-4xl font-bold py-4 px-8 border-2 border-white rounded-lg inline-block no-underline transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-lg hover:bg-primary/10"
      >
        Click Here to Book Your Free Care Consultation
      </Link>
    </div>
  );
}
