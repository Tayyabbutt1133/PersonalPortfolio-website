import React from 'react';
import one from '../assets/socials/social-one.jpg';
import two from '../assets/socials/social-two.jpg';
import three from '../assets/socials/social-three.jpg';
import four from '../assets/socials/social-four.jpg';
import five from '../assets/socials/social-five.jpg';
import six from '../assets/socials/social-six.jpg';

const activities = [
  {
    title: "Hackathon'24 Event Organizer - Web3 PAK",
    description: "As a volunteer organizer for Web3 Pak's Hackathon, focused on empowering students to innovate in blockchain web3 technology with enhanced security and reliability. Responsibilities included managing technical issues, coordinating judges, and engaging the audience.",
    skills: ["Event Management", "Blockchain Technology", "Audience Engagement"],
    img: one,
  },
  {
    title: "Management Team - Cyber Security Society UCP",
    description: "Built relationships and empowered the community to improve data security practices. Managed society growth and organized initiatives to enhance cybersecurity awareness.",
    skills: ["Team Management", "Cybersecurity Awareness", "Community Engagement"],
    img: two,
  },
  {
    title: "Operations Team Member - ACM UCP Chapter",
    description: "Organized and managed events, workshops, and competitions. Coordinated logistics, managed communications with speakers, and handled administrative tasks to support the chapter’s goals.",
    skills: ["Event Coordination", "Team Collaboration", "Administrative Support"],
    img: six,
  },
  {
    title: "Competition Organizer - Technocon UCP",
    description: "Part of the Technocon Hackathon, an intense 4-day event where developers and tech enthusiasts collaborated to solve real-world problems. Responsible for logistics and event success.",
    skills: ["Event Planning", "Team Coordination", "Problem Solving"],
    img: four,
  },
  {
    title: "Management Team - Microsoft Learn Student Ambassador UCP",
    description: "Strengthened connections within the Microsoft Learn Student Chapter, organized training sessions, and led initiatives for skill development with Microsoft technologies.",
    skills: ["Leadership", "Training Organization", "Skill Development"],
    img: five,
  },
  {
    title: "Final Year Project Exhibition Organizer Batch 2019-23 - FOIT",
    description: "Organized a one-day exhibition for FOIT students to showcase final year projects. Facilitated evaluation and feedback to bridge the gap between academic projects and real-world implementation.",
    skills: ["Event Organization", "Project Evaluation", "Industry Collaboration"],
    img: three,
  },
];

export default function Socials() {
  return (
    <div id='social-activities' className='border-b border-neutral-900 pb-4'>
      <h1 className='font-lexend uppercase my-20 text-center text-4xl'>
        Social/Leadership <span className='text-neutral-500'>Activities</span>
      </h1>

      <div className='flex flex-wrap'>
        {/* Image Grid */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='grid grid-cols-2 gap-4'>
            {activities.map((activity, index) => (
              <img key={index} className='rounded-xl' src={activity.img} alt={`Social activity ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* Social/Leadership Activities List */}
        <div className='w-full lg:w-1/2'>
          <div className=' max-w-xl py-6 text-sm'>
            <ul className='list-disc pl-5'>
              {activities.map((activity, index) => (
                <li key={index} className='mb-4'>
                  <strong className='font-lexend'>{activity.title}</strong>
                  <p>{activity.description}</p>
                  <p className='mt-2  mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'><strong className='font-lexend text-white'>Skills :</strong> {activity.skills.join(', ')}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
