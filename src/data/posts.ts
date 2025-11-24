import { z } from 'zod';

export const PostSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  image: z.string(),
  dataAiHint: z.string(),
  content: z.string(),
});

export type Post = z.infer<typeof PostSchema>;

export const posts: Post[] = [
  {
    slug: 'understanding-dementia-care',
    title: "Understanding Dementia Care: A Guide for Families",
    description: "Navigating the complexities of dementia care can be challenging. This guide offers insights and practical tips for families.",
    category: "Dementia Care",
    image: "https://picsum.photos/seed/dementia-guide/1200/800",
    dataAiHint: "dementia guide book",
    content: `Caring for a loved one with dementia is a journey that requires patience, understanding, and specialized knowledge. As cognitive abilities change, so do the needs of the individual. At Noble Health, we believe in a person-centered approach that honors the dignity and history of each client.

### Creating a Safe Environment
A key aspect of dementia care is adapting the living space to ensure safety. This includes removing tripping hazards, securing dangerous items, and perhaps installing alarms on doors to prevent wandering. A calm and familiar environment can significantly reduce agitation and confusion.

### The Importance of Routine
Individuals with dementia often thrive on routine. A predictable daily schedule for meals, activities, and rest can provide a sense of security and normalcy. Our caregivers are trained to establish and maintain these routines, creating a stable framework for the day.

### Communication Strategies
Communicating with someone who has dementia requires a different approach. It's important to speak clearly, simply, and with a gentle tone. Non-verbal cues like a warm smile or a reassuring touch can be very effective. It's about meeting them in their reality, not forcing them into ours.

At Noble Health, our specialized Alzheimer's & Dementia Care service is designed to support both the client and their family. We provide not just physical assistance but also the emotional and mental support needed to navigate this difficult journey.`,
  },
  {
    slug: 'benefits-of-respite-care',
    title: "The Unseen Benefits of Respite Care for Family Caregivers",
    description: "Being a family caregiver is a demanding role. Discover how taking a break with respite care can benefit both you and your loved one.",
    category: "Family Support",
    image: "https://picsum.photos/seed/respite-benefits/1200/800",
    dataAiHint: "caregiver relaxing",
    content: `The role of a family caregiver is one of immense love and dedication, but it's also physically and emotionally taxing. It's a 24/7 responsibility that can lead to burnout if not managed carefully. This is where respite care comes in, offering a vital lifeline for caregivers.

### Preventing Caregiver Burnout
Burnout is a state of physical, emotional, and mental exhaustion. It can occur when caregivers don't get the help they need, or if they try to do more than they are able—either physically or financially. Respite care provides a temporary break from the demands of caregiving, allowing you to rest, recharge, and take care of your own well-being. This isn't a luxury; it's a necessity for sustainable care.

### Benefits for the Care Recipient
Respite care can also be a positive experience for your loved one. It gives them an opportunity to interact with new people, enjoy different activities, and receive care from a professional with a fresh perspective. A professional caregiver can bring new energy and ideas into the home.

### How to Get Started
Noble Health's Family Respite service is flexible and designed to fit your needs. Whether you need a few hours a week to run errands or a few days to take a well-deserved vacation, we can provide a trained, compassionate caregiver to step in. Taking care of yourself is one of the best things you can do for the person you're caring for.`
  },
  {
    slug: 'paying-for-in-home-care-texas',
    title: "How to Pay for In-Home Care: A Guide for Texas Families",
    description: "Explore the different options available to finance in-home care for your loved one, from VA benefits to long-term care insurance.",
    category: "Financial Planning",
    image: "https://picsum.photos/seed/financing-care/1200/800",
    dataAiHint: "financial planning calculator",
    content: `One of the first questions families ask when considering professional care is, "How will we pay for it?" It's a valid and crucial concern. The good news is that there are several avenues to explore for financing in-home care in Texas.

### Private Pay
This is the most straightforward option, where families use their personal savings, retirement funds, or other assets to pay for care directly. It offers the most flexibility in choosing the provider and type of services.

### Long-Term Care Insurance
If your loved one has a long-term care insurance policy, it can be a significant source of funding. These policies are specifically designed to cover services like in-home care. It's important to review the policy details to understand the coverage limits, elimination periods, and what types of care are included. At Noble Health, we can assist you in navigating the claims process.

### Veterans Benefits
Many veterans are unaware of the benefits available to them. The VA's Aid and Attendance and Housebound benefits can provide a monthly pension to help cover the costs of in-home care for qualified veterans and their surviving spouses. Our team has experience working with veteran-directed care programs and can help you understand if you or your loved one might qualify.

### Other Options
In some cases, options like reverse mortgages or life insurance policy conversions may be considered. We recommend speaking with a financial advisor to explore all possibilities. Understanding your options is the first step toward creating a sustainable care plan.`
  },
  {
    slug: 'choosing-the-right-home-care-agency',
    title: "How to Choose the Right Home Care Agency: A Checklist",
    description: "Selecting a home care agency is a big decision. Here are the key questions to ask and factors to consider to find a trusted partner.",
    category: "Choosing Care",
    image: "https://picsum.photos/seed/agency-checklist/1200/800",
    dataAiHint: "checklist clipboard",
    content: `Entrusting the care of a loved one to an agency is a significant decision. You need a partner who is not only skilled and professional but also compassionate and reliable. Here's a checklist of important questions to ask when evaluating home care agencies.

### Licensing and Credentials
- Is the agency licensed by the state of Texas?
- Are all caregivers employees of the agency, or are they independent contractors? (Employees are preferable as they are typically bonded and insured by the agency).
- Are all caregivers background-checked, trained, and insured?

### Services and Care Planning
- How do you create a personalized care plan? How often is it reviewed?
- Can you accommodate special care needs, such as for dementia or post-op recovery?
- What is your procedure for handling emergencies?
- How do you match caregivers with clients to ensure compatibility?

### Communication and Oversight
- How does the agency supervise its caregivers?
- Who is my point of contact at the agency if I have a question or concern?
- How is communication handled between the caregiver, the client, and the family?

Choosing the right agency is about finding a team you can trust. At Noble Health, we pride ourselves on transparency and a commitment to the highest standards of care. We encourage you to ask us these questions and more during your free consultation.`
  },
  {
    slug: 'creating-a-safe-home-for-seniors',
    title: "Creating a Safe Home Environment for Seniors",
    description: "Simple modifications can make a home much safer and help prevent common accidents. Here’s a room-by-room guide to fall prevention.",
    category: "Home Safety",
    image: "https://picsum.photos/seed/safe-home/1200/800",
    dataAiHint: "safe home interior",
    content: `For seniors who wish to age in place, a safe home environment is paramount. Most accidents, especially falls, are preventable with some simple modifications. Here's how you can make a home safer.

### Throughout the Home
Ensure all areas are well-lit. Use nightlights in hallways, bathrooms, and bedrooms. Remove tripping hazards like loose rugs, electrical cords, and clutter from walkways.

### Bathrooms
The bathroom is a high-risk area for falls. Install grab bars in the shower and next to the toilet. Use non-slip mats in the bathtub or shower and on the floor. A shower chair and a handheld showerhead can also make bathing much safer and easier.

### Kitchen
Keep frequently used items on lower shelves to avoid the need for a step stool. Clean up spills immediately. Ensure there is adequate lighting over the stove and countertops.

### Bedrooms
Place a lamp and a phone within easy reach of the bed. Ensure there is a clear path from the bed to the door. A bed rail can provide extra support for getting in and out of bed.

A professional caregiver can also help by identifying potential hazards and providing assistance with tasks that pose a risk. At Noble Health, our caregivers are trained in fall prevention and are dedicated to maintaining a safe and secure environment for our clients.`
  }
];
