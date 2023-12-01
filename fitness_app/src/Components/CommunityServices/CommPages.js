import React from 'react'
import './Commpages.css';
import { useParams } from 'react-router-dom';
// import { useCategory } from './CategoryContext';

const CommPages = () => {
    const { testId } = useParams();
    const data = {
        0: {
            name: "Championship",
            desc: "Championships bring out the best qualities in each member and trainer, who participate across various activities like Football, Powerlifting, Athletics, Cricket, Boxing, Calisthenics, Paintball etc, which are played at team and centre levels to encourage group involvement and centre level engagement activities.",
            images: "https://images.unsplash.com/photo-1520529301226-42abc4cd766b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        1: {
            name: "Mindfulness",
            desc: `Mindfulness is a practice that encourages individuals to be fully present in the moment, fostering a heightened awareness of their thoughts, feelings, and surroundings. 
            From dedicated meditation spaces equipped with calming ambiance to regular mindfulness classes led by experienced instructors, the gym provides ample opportunities for individuals to integrate mindfulness practices into their fitness routines. 
            Additionally, the gym has incorporated mindfulness elements into its physical training sessions, emphasizing the importance of being present and focused during exercises, thereby enhancing the mind-body connection. By prioritizing mindfulness, my gym not only aims to improve the mental resilience of its members but also fosters an environment where individuals can experience a deeper sense of self-awareness and tranquility alongside their physical fitness journey.`,
            images: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        2: {
            name: "Yoga",
            desc: "Yoga takes center stage in the wellness landscape at my gym, where a thoughtfully designed program caters to practitioners of all levels. The gym boasts dedicated yoga studios with a serene atmosphere, offering a range of classes led by certified instructors. From foundational sessions for beginners to advanced classes incorporating mindfulness and intricate postures, the gym provides a diverse and inclusive yoga experience. Specialized workshops, including hot yoga and aerial yoga, add variety to the offerings. This holistic approach underscores the gym's commitment to fostering not just physical fitness but also mental clarity and emotional well-being. Through yoga, my gym creates a space where members can seamlessly integrate the benefits of mindfulness into their overall fitness journey, promoting balance, flexibility, and inner peace.",
            images: "https://images.unsplash.com/photo-1562088287-bde35a1ea917?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        3: {
            name: "Engage and educate",
            desc: "My gym is committed to the dual pillars of engaging and educating its members, ensuring a well-rounded fitness experience. Beyond traditional workout routines, the gym hosts regular seminars, workshops, and interactive sessions led by fitness experts and nutritionists. These events not only engage members in diverse aspects of health and wellness but also provide valuable education on topics ranging from optimal nutrition to effective training techniques. The gym leverages modern technology, offering personalized workout apps and virtual coaching sessions to enhance member engagement and knowledge. By fostering a culture of continuous learning and interaction, my gym goes beyond the physical aspects of fitness, empowering its members with the knowledge and motivation needed to make informed and sustainable lifestyle choices, creating a community that is both active and well-informed.",
            images: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    };

    if (!testId in data) {
        return <div>Data not found</div>
    }

    const item = data[testId]
    return (
        <div className='pagesData'>
            <h2 id='pagesHead'>{item.name}</h2>
            <div className='pageContent'>
                <p id='content1'>{item.desc}</p>
                {item.images && <img id="content2" src={process.env.PUBLIC_URL + item.images} alt={item.name} />}
            </div>
        </div>

    )
}


export default CommPages