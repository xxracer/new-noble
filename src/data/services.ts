
import { z } from 'zod';

const BenefitSchema = z.object({
    title: z.string(),
    description: z.string(),
});

const FaqSchema = z.object({
    question: z.string(),
    answer: z.string(),
});

export const ServiceSchema = z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    bgImage: z.string(),
    dataAiHint: z.string(),
    points: z.array(z.string()),
    slogan: z.string(),
    longDescription: z.string(),
    benefits: z.array(BenefitSchema),
    faq: z.array(FaqSchema),
});

export type Service = z.infer<typeof ServiceSchema>;

export const services: Service[] = [
    {
        slug: "personal-care",
        title: "Personal Care",
        description: "Bathing, grooming, dressing, toileting, and incontinence support.",
        icon: "HandHeart",
        bgImage: "https://picsum.photos/seed/personal-care/1200/800",
        dataAiHint: "personal care",
        points: [
            "Dignified assistance with bathing and showering.",
            "Support with grooming, dressing, and personal appearance.",
            "Sensitive and professional help with toileting and incontinence care.",
            "Maintaining personal hygiene to promote health and comfort."
        ],
        slogan: "Dignified, Compassionate Personal Care",
        longDescription: `At Noble Health, we provide respectful and professional personal care services designed to help individuals maintain their independence and dignity. Our compassionate caregivers assist with daily activities that may have become challenging, ensuring comfort and well-being in the familiar surroundings of home.\n\nWe understand that needing support with personal tasks is a sensitive matter. That's why our team is trained to offer assistance with the utmost respect for privacy and personal preferences. From help with bathing, grooming, and dressing to support with mobility, we are here to make daily life safer and more manageable.\n\nOur goal is to foster a supportive environment where our clients feel empowered and comfortable. We work closely with families to create a personalized care plan that addresses specific needs, promoting not just physical health but also emotional well-being and confidence.`,
        benefits: [
            { title: "Maintain Independence", description: "Receive the support you need to continue living comfortably and safely in your own home." },
            { title: "Personalized Support", description: "Our care plans are tailored to your unique needs, routines, and preferences." },
            { title: "Enhanced Safety", description: "Trained caregivers reduce the risk of falls and other household accidents." },
            { title: "Peace of Mind", description: "Families can rest assured knowing their loved ones are receiving professional and compassionate care." },
        ],
        faq: [
            { question: "What does personal care include?", answer: "Personal care includes assistance with activities of daily living such as bathing, dressing, grooming, toileting, and mobility support. Our services are customized to meet the specific needs of each client." },
            { question: "How do you match caregivers with clients?", answer: "We take great care in matching caregivers based on the client's needs, personality, and preferences. We strive to create a compatible and comfortable relationship between caregiver and client." },
            { question: "Can the care plan be changed?", answer: "Absolutely. We conduct regular assessments and are always in communication with clients and their families to ensure the care plan evolves as needs change." },
        ]
    },
    {
        slug: "companionship",
        title: "Companionship",
        description: "Conversation, games, emotional support, and social interaction.",
        icon: "Users",
        bgImage: "https://picsum.photos/seed/companionship/1200/800",
        dataAiHint: "companionship emotional support",
        points: [
            "Engaging in meaningful conversation and storytelling.",
            "Playing games, puzzles, and other mentally stimulating activities.",
            "Providing emotional support and a friendly, reassuring presence.",
            "Encouraging social interaction and connection."
        ],
        slogan: "Friendly Companionship to Brighten Your Day",
        longDescription: `Loneliness and social isolation can significantly impact a person's well-being. Our companionship care services at Noble Health are designed to provide friendly, engaging social interaction to keep spirits high and minds active. A companion can be a friend to talk to, a partner for hobbies, or simply a comforting presence.\n\nOur caregivers do more than just provide company; they build genuine relationships. They engage clients in their favorite activities, whether it's playing a card game, working on a puzzle, reading a book aloud, or sharing stories over a cup of tea. This interaction is vital for mental and emotional health.\n\nWe also encourage gentle walks and social outings, as appropriate, to help clients stay connected to their community. By providing a source of social engagement and emotional support, we help improve the overall quality of life for our clients.`,
        benefits: [
            { title: "Reduced Loneliness", description: "A friendly and familiar face can make a world of difference, reducing feelings of isolation." },
            { title: "Mental Stimulation", description: "Engaging activities and conversation help keep the mind sharp and active." },
            { title: "Emotional Support", description: "Our caregivers provide a reassuring presence and a listening ear." },
            { title: "Increased Activity", description: "Encouragement to participate in hobbies and social activities promotes a more active lifestyle." },
        ],
        faq: [
            { question: "What activities are included in companionship care?", answer: "Activities are tailored to the client's interests and can include conversation, reading, playing games, listening to music, going for walks, or working on hobbies together." },
            { question: "Can a companion caregiver also help with errands?", answer: "Yes, many of our companionship services can be combined with other forms of help, such as running errands, light housekeeping, or meal preparation." },
            { question: "How often can a companion visit?", answer: "We offer flexible scheduling, from a few hours a week to daily visits, depending on your needs and preferences." },
        ]
    },
    {
        slug: "meal-preparation",
        title: "Meal Preparation",
        description: "Nutritious meals, feeding assistance, and dietary monitoring.",
        icon: "Utensils",
        bgImage: "https://picsum.photos/seed/meal-prep/1200/800",
        dataAiHint: "meal preparation",
        points: [
            "Planning and cooking delicious, well-balanced meals.",
            "Providing assistance with feeding if needed.",
            "Monitoring dietary restrictions and nutritional needs.",
            "Grocery shopping and keeping the kitchen stocked."
        ],
        slogan: "Healthy, Delicious Meals, Prepared with Care",
        longDescription: `Proper nutrition is a cornerstone of good health, but planning and preparing meals can become a challenge. Noble Health's meal preparation services ensure that our clients enjoy delicious, nutritious, and regular meals without the stress of cooking.\n\nOur caregivers work with clients and their families to plan menus that are not only tasty but also adhere to any specific dietary requirements, such as low-sodium, diabetic-friendly, or soft-food diets. We can handle everything from grocery shopping to cooking and cleanup.\n\nFor those who need it, our caregivers can also provide gentle and dignified assistance with eating. By ensuring consistent, healthy meals, we help maintain energy levels, support overall health, and make mealtime an enjoyable part of the day again.`,
        benefits: [
            { title: "Improved Nutrition", description: "Enjoy well-balanced, home-cooked meals that support your health goals." },
            { title: "Dietary Adherence", description: "We ensure all meals comply with doctor-recommended dietary restrictions." },
            { title: "Convenience & Relief", description: "Eliminate the stress of grocery shopping, cooking, and cleaning up." },
            { title: "Enjoyable Mealtimes", description: "We make mealtime a pleasant and social experience, providing company and assistance as needed." },
        ],
        faq: [
            { question: "Can you accommodate special diets?", answer: "Yes, our caregivers are experienced in preparing meals for a wide range of dietary needs, including low-sodium, heart-healthy, diabetic, and vegetarian diets." },
            { question: "Does meal preparation include grocery shopping?", answer: "It can. We can either do the shopping for you or assist you during your shopping trips, depending on your preference." },
            { question: "How many meals a day do you prepare?", answer: "This is flexible and based on your care plan. We can prepare one, two, or three meals a day, plus snacks, as needed." },
        ]
    },
    {
        slug: "medication-reminders",
        title: "Medication Reminders",
        description: "Ensuring medications are taken on time, every time.",
        icon: "Pill",
        bgImage: "https://picsum.photos/seed/medication/1200/800",
        dataAiHint: "medication reminder",
        points: [
            "Timely reminders to take prescribed medications.",
            "Helping to organize pillboxes and medication schedules.",
            "Observing and documenting medication intake.",
            "Coordination with family and pharmacy for prescription refills."
        ],
        slogan: "Reliable Reminders for Your Health",
        longDescription: `Managing multiple medications can be complex and confusing. Missing a dose or taking it at the wrong time can have serious health consequences. Noble Health provides reliable medication reminder services to ensure that prescriptions are taken safely and on schedule.\n\nOur trained caregivers assist by providing timely verbal reminders, helping to open medication containers, reading labels, and ensuring the correct dosage is taken at the right time. We maintain a detailed log of all medications taken, which provides a valuable record for family members and doctors.\n\nPlease note, while our caregivers can provide reminders, they cannot administer medications. Our service is designed to support the client's independence while ensuring adherence to their prescribed medication regimen, offering peace of mind for everyone involved.`,
        benefits: [
            { title: "Improved Safety", description: "Prevent missed doses or accidental double-dosing, ensuring medication safety." },
            { title: "Consistent Adherence", description: "Maintain a strict medication schedule as prescribed by the doctor for optimal effectiveness." },
            { title: "Peace of Mind for Families", description: "Family members can be confident that their loved one's medication schedule is being followed correctly." },
            { title: "Detailed Record-Keeping", description: "We can maintain a log of medications taken, which is helpful for healthcare providers." },
        ],
        faq: [
            { question: "Do your caregivers administer medications?", answer: "No, home care regulations prevent our caregivers from administering medications. However, they can provide verbal reminders, read labels, open containers, and log that the medication was taken." },
            { question: "Can you help organize my pills for the week?", answer: "Yes, our caregivers can assist in organizing medications into daily or weekly pill organizers as a reminder system." },
            { question: "What happens if a client refuses to take their medication?", answer: "Our caregivers will not force a client to take medication. They will, however, gently encourage them and document the refusal, promptly notifying the designated family member or contact person." },
        ]
    },
    {
        slug: "mobility-fall-prevention",
        title: "Mobility & Fall Prevention",
        description: "Walking assistance, safe transfers, and fall prevention.",
        icon: "HandHelping",
        bgImage: "https://picsum.photos/seed/mobility/1200/800",
        dataAiHint: "mobility assistance",
        points: [
            "Providing steady support during walks and movement.",
            "Safe assistance with transferring from bed to chair or wheelchair.",
            "Implementing fall prevention strategies throughout the home.",
            "Encouraging gentle exercises to maintain strength and balance."
        ],
        slogan: "Move Safely, Live Confidently",
        longDescription: `Maintaining mobility is key to independence, but the risk of a fall can be a major source of anxiety for seniors and their families. At Noble Health, we focus on promoting safe mobility and implementing proactive fall prevention strategies to help our clients stay active and confident.\n\nOur caregivers provide steady assistance with walking, navigating stairs, and getting in and out of chairs or bed. We are trained in proper transfer techniques to ensure safety at all times. We also assess the home environment to identify and mitigate potential fall hazards, such as loose rugs, poor lighting, or cluttered pathways.\n\nIn addition to direct support, we encourage gentle, doctor-approved exercises that can improve strength, balance, and coordination. By making the home safer and providing reliable support, we empower our clients to move more freely and reduce the fear of falling.`,
        benefits: [
            { title: "Reduced Risk of Falls", description: "Proactive strategies and a caregiver's support significantly lower the risk of falling." },
            { title: "Increased Confidence", description: "Feel more secure and confident when moving around your home and community." },
            { title: "Maintained Independence", description: "Stay active and independent with reliable support for your mobility needs." },
            { title: "Safer Home Environment", description: "We help identify and remove common household hazards to create a safer living space." },
        ],
        faq: [
            { question: "What does a fall risk assessment involve?", answer: "Our caregivers will assess the home for common hazards like inadequate lighting, unsecured rugs, and cluttered walkways. They will then suggest simple modifications to improve safety." },
            { question: "Can caregivers assist with prescribed exercises?", answer: "Yes, our caregivers can remind and encourage clients to perform physical therapy or other doctor-prescribed exercises to help maintain strength and balance." },
            { question: "My parent uses a walker. Can you still help?", answer: "Absolutely. Our caregivers are experienced in providing support to clients who use mobility aids like walkers, canes, or wheelchairs." },
        ]
    },
    {
        slug: "light-housekeeping",
        title: "Light Housekeeping",
        description: "Light cleaning, laundry, and organized living spaces.",
        icon: "Home",
        bgImage: "https://picsum.photos/seed/housekeeping/1200/800",
        dataAiHint: "light housekeeping",
        points: [
            "Keeping living areas tidy, clean, and safe.",
            "Washing, drying, and folding laundry.",
            "Changing bed linens and making beds.",
            "Organizing closets and drawers to ensure easy access."
        ],
        slogan: "A Tidy Home for a Peaceful Mind",
        longDescription: `A clean and organized home is essential for safety, comfort, and peace of mind. As daily chores become more difficult, our light housekeeping services at Noble Health can help maintain a pleasant and healthy living environment for our clients.\n\nOur services are focused on the areas of the home that are most important to the client's well-being. This includes tasks like tidying up living spaces, doing laundry, washing dishes, changing bed linens, and taking out the trash. We help keep the home neat and organized, which also contributes to a safer environment by reducing clutter.\n\nWhile this service does not include deep cleaning, our caregivers ensure that the most frequently used areas of the home are clean, comfortable, and welcoming. This support allows our clients to enjoy their home without the burden of daily housekeeping tasks.`,
        benefits: [
            { title: "Safe & Clean Environment", description: "A tidy, clutter-free home reduces the risk of falls and promotes better hygiene." },
            { title: "Less Physical Strain", description: "Clients can conserve their energy for more enjoyable activities instead of strenuous chores." },
            { title: "Comfort and Pride", description: "Enjoy the comfort and satisfaction of a well-maintained home." },
            { title: "More Free Time", description: "Frees up time and energy for both the client and their family members." },
        ],
        faq: [
            { question: "What is the difference between light and heavy housekeeping?", answer: "Light housekeeping involves daily tasks to keep the home tidy, such as laundry, washing dishes, and wiping down counters. We do not provide heavy-duty cleaning like scrubbing floors, cleaning windows, or moving heavy furniture." },
            { question: "Do you use our cleaning supplies?", answer: "Yes, for safety and preference reasons, our caregivers use the cleaning supplies and equipment available in the client's home." },
            { question: "How often are housekeeping tasks performed?", answer: "This depends on the care plan. Housekeeping tasks are typically incorporated into the regular caregiver visits, whether they are daily or a few times a week." },
        ]
    },
    {
        slug: "errands-transportation",
        title: "Errands & Transportation",
        description: "Grocery shopping, pharmacy pick-ups, and medical appointments.",
        icon: "ShoppingCart",
        bgImage: "https://picsum.photos/seed/errands/1200/800",
        dataAiHint: "transportation errands",
        points: [
            "Reliable transportation to and from medical appointments.",
            "Assistance with grocery shopping and other essential errands.",
            "Picking up prescriptions from the pharmacy.",
            "Providing support during social outings and community events."
        ],
        slogan: "Getting You Where You Need to Go, Safely",
        longDescription: `Staying engaged with the community and managing personal errands is vital for maintaining an independent lifestyle. When driving is no longer a safe option, Noble Health's transportation and errand services provide a crucial link to the outside world.\n\nOur caregivers can provide safe, reliable transportation to medical appointments, the pharmacy, the grocery store, or social events. We don't just drop clients off; we can accompany them, offering assistance and support as needed. Whether it's helping to carry groceries or taking notes during a doctor's visit, our caregivers are there to help.\n\nThis service offers a safe and dependable alternative to driving, giving both clients and their families peace of mind. It allows individuals to continue attending important appointments and social activities, preventing the isolation that can come from a loss of mobility.`,
        benefits: [
            { title: "Dependable Transportation", description: "Never miss an important medical appointment or social event." },
            { title: "Personalized Assistance", description: "Our caregivers can accompany you during errands, providing physical and moral support." },
            { title: "Maintained Independence", description: "Continue to manage your own shopping and appointments with our reliable support." },
            { title: "Safety & Security", description: "Avoid the risks of driving or navigating public transport alone." },
        ],
        faq: [
            { question: "Are your caregivers' vehicles insured?", answer: "Yes, all caregivers who provide transportation have a valid driver's license, a clean driving record, and appropriate auto insurance." },
            { question: "Can I schedule recurring transportation for weekly appointments?", answer: "Absolutely. We can incorporate recurring transportation needs directly into your personalized care plan." },
            { question: "Is the service limited to a certain distance?", answer: "We primarily operate within our defined service areas. Please contact us to discuss any specific transportation needs that might be outside this range." },
        ]
    },
    {
        slug: "family-respite",
        title: "Family Respite",
        description: "Short-term caregiver relief so families can rest and recharge.",
        icon: "Clock",
        bgImage: "https://picsum.photos/seed/respite-family/1200/800",
        dataAiHint: "family support",
        points: [
            "Providing temporary relief for primary family caregivers.",
            "Flexible scheduling from a few hours to several days.",
            "Preventing caregiver burnout and supporting family well-being.",
            "Ensuring seamless continuity of care for your loved one."
        ],
        slogan: "Caring for the Caregiver",
        longDescription: `Being a primary caregiver for a loved one is a rewarding but demanding role. To provide the best care, family caregivers also need to take care of themselves. Noble Health's respite care services offer that essential break, providing temporary relief so you can rest, recharge, and attend to your own needs.\n\nWhether you need a few hours to run errands, a full day to yourself, or a longer break for a vacation, our professional caregivers can step in to provide seamless, high-quality care for your loved one. We'll follow the established routine and care plan, ensuring their comfort and safety while you are away.\n\nRespite care is a vital component of a sustainable long-term care plan. It helps prevent caregiver burnout, reduces stress, and allows family caregivers to return to their role with renewed energy and focus.`,
        benefits: [
            { title: "Prevent Burnout", description: "Taking regular breaks is essential for a family caregiver's long-term physical and mental health." },
            { title: "Reduce Stress", description: "Knowing your loved one is in capable, caring hands allows you to truly relax and destress." },
            { title: "Flexibility & Freedom", description: "Take time for yourself, run errands, or go on vacation with the peace of mind that care is covered." },
            { title: "Socialization for Loved One", description: "Interacting with a new, friendly caregiver can be a positive experience for your loved one." },
        ],
        faq: [
            { question: "How long can respite care be provided?", answer: "Respite care is flexible. It can be for as little as a few hours or for as long as several days or weeks, depending on your needs." },
            { question: "How do I arrange for respite care?", answer: "Simply contact us to discuss your needs. We will create a personalized care plan for your loved one and schedule a caregiver for the times you require." },
            { question: "Will my loved one have the same caregiver for each respite visit?", answer: "We strive for consistency and will aim to have the same caregiver for recurring respite visits to build familiarity and trust." },
        ]
    },
    {
        slug: "live-in-care",
        title: "Live-in Care",
        description: "24/7 dedicated caregiver support at home.",
        icon: "HeartHandshake",
        bgImage: "https://picsum.photos/seed/live-in/1200/800",
        dataAiHint: "live-in care",
        points: [
            "Continuous, round-the-clock support from a dedicated caregiver.",
            "Maximum peace of mind for individuals with significant needs.",
            "Combines all aspects of care, from personal to household tasks.",
            "A cost-effective alternative to residential facilities."
        ],
        slogan: "Continuous, Compassionate Care in Your Own Home",
        longDescription: `For individuals who require round-the-clock monitoring and support, live-in care from Noble Health offers a comprehensive and comforting solution. A dedicated caregiver resides in the home, providing continuous assistance and immediate support whenever it is needed, day or night.\n\nThis one-on-one care is ideal for clients with complex medical needs, advanced dementia, or significant mobility challenges. The caregiver provides all aspects of support, including personal care, meal preparation, housekeeping, and companionship, ensuring a safe and stable environment. This consistency of care from a familiar caregiver fosters a deep, trusting relationship.\n\nLive-in care allows individuals to remain in the comfort and familiarity of their own home, which can significantly enhance their quality of life. It is often a more personal and cost-effective alternative to moving into a residential facility, providing families with the ultimate peace of mind.`,
        benefits: [
            { title: "24/7 Peace of Mind", description: "A caregiver is always present for immediate assistance and emergency response." },
            { title: "Consistent Care", description: "A dedicated caregiver provides consistent, one-on-one support, building a strong, trusting bond." },
            { title: "Remain at Home", description: "Allows individuals to stay in their cherished home and community, which is proven to improve well-being." },
            { title: "Cost-Effective", description: "Often a more affordable option for round-the-clock care compared to nursing homes or assisted living facilities." },
        ],
        faq: [
            { question: "Does 'live-in' mean the caregiver is awake for 24 hours?", answer: "No. A live-in caregiver resides in the home and is on-hand for any needs, but they are allotted a private space and an 8-hour break for sleep. For clients who need active supervision 24/7, we arrange for a team of caregivers to work in shifts." },
            { question: "What accommodations does a live-in caregiver require?", answer: "The caregiver requires a private, furnished room and access to a bathroom. Meals are typically shared with the client or provided for." },
            { question: "How are live-in caregivers selected?", answer: "Our live-in caregivers go through an extensive screening process, including background checks, interviews, and reference checks, to ensure they are highly skilled, compassionate, and trustworthy." },
        ]
    },
    {
        slug: "alzheimers-dementia-care",
        title: "Alzheimer’s & Dementia Care",
        description: "Specialized memory support, safety, and structured activities.",
        icon: "Brain",
        bgImage: "https://picsum.photos/seed/dementia/1200/800",
        dataAiHint: "dementia care",
        points: [
            "Caregivers trained in memory care techniques.",
            "Creating a safe and secure home environment.",
            "Engaging in structured activities to promote cognitive function.",
            "Providing patient and compassionate support for behavioral changes."
        ],
        slogan: "Specialized Care for Memory and Dignity",
        longDescription: `Caring for a loved one with Alzheimer's or dementia requires a special kind of patience, expertise, and compassion. Noble Health offers specialized memory care services designed to support individuals with cognitive decline, helping them live safely and with dignity in their familiar home environment.\n\nOur caregivers are specifically trained in dementia care techniques, including how to manage behavioral changes, create calming routines, and communicate effectively. We focus on creating a safe and secure environment, minimizing risks and adapting the home to be more dementia-friendly. We understand the importance of consistency and routine in managing the condition.\n\nWe also prioritize activities that stimulate cognitive function and bring joy, such as memory games, music therapy, or simple, familiar hobbies. Our goal is to support not just the client, but the entire family, by providing expert care that reduces stress and improves the quality of life for everyone involved.`,
        benefits: [
            { title: "Specially Trained Caregivers", description: "Our team is trained in proven techniques for dementia care, communication, and managing behavioral symptoms." },
            { title: "Safe & Familiar Environment", description: "Remaining at home can reduce confusion and anxiety for individuals with dementia." },
            { title: "Cognitive Engagement", description: "We use structured activities to help maintain cognitive function and provide a sense of purpose." },
            { title: "Family Support & Respite", description: "We provide expert guidance and much-needed respite for family caregivers." },
        ],
        faq: [
            { question: "What kind of training do your memory caregivers have?", answer: "Our caregivers receive specialized training covering the stages of dementia, communication strategies, managing challenging behaviors, and creating safe environments and engaging activities." },
            { question: "How do you handle challenging behaviors like agitation or wandering?", answer: "Our caregivers are trained to use redirection, validation, and de-escalation techniques. We focus on identifying the root cause of the behavior and responding with patience and empathy. We also implement safety measures to prevent wandering." },
            { question: "Can you help as the condition progresses?", answer: "Yes, our care plans are dynamic. We continually adapt our support to meet the changing needs of our clients as they progress through the different stages of dementia." },
        ]
    }
];
