import { z } from 'zod';

export const Service = z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    bgImage: z.string(),
    dataAiHint: z.string(),
    points: z.array(z.string()),
});

export type Service = z.infer<typeof Service>;

export const services: Service[] = [
    {
        slug: "personal-care",
        title: "Personal Care",
        description: "Bathing, grooming, dressing, toileting, and incontinence support.",
        icon: "M12 2l2.5 7.5h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z", // Placeholder icon
        bgImage: "https://picsum.photos/seed/personal-care/1200/800",
        dataAiHint: "personal care",
        points: [
            "Dignified assistance with bathing and showering.",
            "Support with grooming, dressing, and personal appearance.",
            "Sensitive and professional help with toileting and incontinence care.",
            "Maintaining personal hygiene to promote health and comfort."
        ]
    },
    {
        slug: "companionship",
        title: "Companionship",
        description: "Conversation, games, emotional support, and social interaction.",
        icon: "M18 12.24V22H17.06V12.24C17.06 12.09 17 12 16.93 11.89C16.84 11.8 16.74 11.76 16.62 11.76C16.47 11.76 16.36 11.8 16.27 11.89C16.18 12 16.14 12.1 16.14 12.24V13.16H15.23V12.5C14.53 12.33 13.9 12.04 13.35 11.63C12.8 11.22 12.34 10.74 11.96 10.19L11.61 11.39C11.5 11.81 11.5 12.24 11.5 12.68L11.5 13L11.5 13.33L13.35 15.94V22H11.5V17.34L9.82 15L9.65 18.25L6.86 22L5.38 20.87L7.77 17.64V12.68C7.77 12.15 7.82 11.63 7.91 11.11L8.25 9.54L6.86 10.32V13.63H5V9.23L10 6.4C10.29 6.26 10.59 6.18 10.91 6.18C11.23 6.18 11.54 6.27 11.83 6.44C12.15 6.62 12.39 6.88 12.57 7.23L13.31 8.8C13.6 9.38 14.04 9.87 14.64 10.26C15.23 10.65 15.89 10.85 16.62 10.85C17 10.85 17.32 11 17.6 11.24C17.88 11.5 18 11.83 18 12.24M12 2C13.11 2 14 2.9 14 4C14 5.11 13.11 6 12 6C10.9 6 10 5.11 10 4C10 2.9 10.9 2 12 2Z",
        bgImage: "https://picsum.photos/seed/companionship/1200/800",
        dataAiHint: "companionship emotional support",
        points: [
            "Engaging in meaningful conversation and storytelling.",
            "Playing games, puzzles, and other mentally stimulating activities.",
            "Providing emotional support and a friendly, reassuring presence.",
            "Encouraging social interaction and connection."
        ]
    },
    {
        slug: "meal-preparation",
        title: "Meal Preparation",
        description: "Nutritious meals, feeding assistance, and dietary monitoring.",
        icon: "M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8m-1 3h2v6h-2zm0 8h2v2h-2z",
        bgImage: "https://picsum.photos/seed/meal-prep/1200/800",
        dataAiHint: "meal preparation",
        points: [
            "Planning and cooking delicious, well-balanced meals.",
            "Providing assistance with feeding if needed.",
            "Monitoring dietary restrictions and nutritional needs.",
            "Grocery shopping and keeping the kitchen stocked."
        ]
    },
    {
        slug: "medication-reminders",
        title: "Medication Reminders",
        description: "Ensuring medications are taken on time, every time.",
        icon: "M12 2a3 3 0 0 1 3 3v1h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V5a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v1h2V5a1 1 0 0 0-1-1m-5 6v2h2v-2H7m8 0v2h2v-2h-2m-8 4v2h2v-2H7m8 0v2h2v-2h-2m-8 4v2h2v-2H7m8 0v2h2v-2h-2z",
        bgImage: "https://picsum.photos/seed/medication/1200/800",
        dataAiHint: "medication reminder",
        points: [
            "Timely reminders to take prescribed medications.",
            "Helping to organize pillboxes and medication schedules.",
            "Observing and documenting medication intake.",
            "Coordination with family and pharmacy for prescription refills."
        ]
    },
    {
        slug: "mobility-fall-prevention",
        title: "Mobility & Fall Prevention",
        description: "Walking assistance, safe transfers, and fall prevention.",
        icon: "M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M19.8 17.7L19.2 11.3C19.1 10.5 18.5 10 17.7 10H16C14.5 10 13.1 9.5 12.2 8.6L10.2 6.6C10.1 6.4 9.6 6 8.8 6C8.3 6 7.8 6.2 7.4 6.6L4.1 9.9C3.6 10.6 3.6 11.5 3.9 12L5.3 14.8L2.2 18.8L3.8 20L7.5 15.3L7.2 14L8 14.8V20H10V13.9L7.9 11.8L10.3 9.4C11.2 10.3 12 11.2 13.9 11.7L13 20H14.5L14.9 16.5H18.1L18.2 17.7C17.8 18 17.5 18.4 17.5 19C17.5 19.8 18.2 20.5 19 20.5S20.5 19.8 20.5 19C20.5 18.5 20.2 18 19.8 17.7M15.1 15L15.5 11.5H17.5L17.9 15H15.1Z",
        bgImage: "https://picsum.photos/seed/mobility/1200/800",
        dataAiHint: "mobility assistance",
        points: [
            "Providing steady support during walks and movement.",
            "Safe assistance with transferring from bed to chair or wheelchair.",
            "Implementing fall prevention strategies throughout the home.",
            "Encouraging gentle exercises to maintain strength and balance."
        ]
    },
    {
        slug: "light-housekeeping",
        title: "Light Housekeeping",
        description: "Light cleaning, laundry, and organized living spaces.",
        icon: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m1 3v6h5v-2h-3V7h-2z",
        bgImage: "https://picsum.photos/seed/housekeeping/1200/800",
        dataAiHint: "light housekeeping",
        points: [
            "Keeping living areas tidy, clean, and safe.",
            "Washing, drying, and folding laundry.",
            "Changing bed linens and making beds.",
            "Organizing closets and drawers to ensure easy access."
        ]
    },
    {
        slug: "errands-transportation",
        title: "Errands & Transportation",
        description: "Grocery shopping, pharmacy pick-ups, and medical appointments.",
        icon: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m1 3v6h5v-2h-3V7h-2z",
        bgImage: "https://picsum.photos/seed/errands/1200/800",
        dataAiHint: "transportation errands",
        points: [
            "Reliable transportation to and from medical appointments.",
            "Assistance with grocery shopping and other essential errands.",
            "Picking up prescriptions from the pharmacy.",
            "Providing support during social outings and community events."
        ]
    },
    {
        slug: "family-respite",
        title: "Family Respite",
        description: "Short-term caregiver relief so families can rest and recharge.",
        icon: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m1 3v6h5v-2h-3V7h-2z",
        bgImage: "https://picsum.photos/seed/respite-family/1200/800",
        dataAiHint: "family support",
        points: [
            "Providing temporary relief for primary family caregivers.",
            "Flexible scheduling from a few hours to several days.",
            "Preventing caregiver burnout and supporting family well-being.",
            "Ensuring seamless continuity of care for your loved one."
        ]
    },
    {
        slug: "live-in-care",
        title: "Live-in Care",
        description: "24/7 dedicated caregiver support at home.",
        icon: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m1 3v6h5v-2h-3V7h-2z",
        bgImage: "https://picsum.photos/seed/live-in/1200/800",
        dataAiHint: "live-in care",
        points: [
            "Continuous, round-the-clock support from a dedicated caregiver.",
            "Maximum peace of mind for individuals with significant needs.",
            "Combines all aspects of care, from personal to household tasks.",
            "A cost-effective alternative to residential facilities."
        ]
    },
    {
        slug: "alzheimers-dementia-care",
        title: "Alzheimer’s & Dementia Care",
        description: "Specialized memory support, safety, and structured activities.",
        icon: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m1 3v6h5v-2h-3V7h-2z",
        bgImage: "https://picsum.photos/seed/dementia/1200/800",
        dataAiHint: "dementia care",
        points: [
            "Caregivers trained in memory care techniques.",
            "Creating a safe and secure home environment.",
            "Engaging in structured activities to promote cognitive function.",
            "Providing patient and compassionate support for behavioral changes."
        ]
    }
];
