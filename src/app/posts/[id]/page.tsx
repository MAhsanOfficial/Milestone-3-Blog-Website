// 'use client'
// import React from 'react'

// import AuthoreCard from '@/components/AuthoreCard'
// import Image from 'next/image'


// const posts = [

//   {
//     id:'1',
//     title:"Agentic AI: The Future of Autonomous Technology",
//     description:"Agentic AI refers to artificial intelligence systems that can act as independent agents, making decisions and taking actions without constant human input. Unlike traditional AI, which mainly provides insights, agentic AI is designed to solve problems and achieve specific goals autonomously. For instance, self-driving cars use agentic AI to navigate traffic, while in healthcare, it can monitor patients and respond to emergencies. This advanced AI offers efficiency and the ability to handle complex tasks, but also raises concerns regarding ethics, security, and accountability. As technology progresses, agentic AI has the potential to revolutionize industries, providing smarter and more efficient solutions.",
//     imageUrl: '/images/blog-1.png'
//   },
//   {
//     id:'2',
//     title:'Blockchain Technology in Simple Terms',
//     description:"Blockchain is a decentralized technology that securely stores data in a chain of blocks across multiple computers. It ensures transparency and prevents tampering by making each transaction publicly visible and immutable. Originally created for cryptocurrency like Bitcoin, blockchain has far-reaching applications in various industries like finance, healthcare, and supply chains. It enables peer-to-peer transactions without intermediaries, reducing costs and enhancing efficiency. The key benefits of blockchain include transparency, security, and faster transactions. As it evolves, it holds the potential to revolutionize the way businesses operate globally. With its growing use, blockchain is reshaping digital trust and data management.",
//     imageUrl: '/images/blog-2.png'
//   },
//   {
//     id:'3',
//     title:'Cybersecurity Features: Ensuring Your Online Safety',
//     description:"Cybersecurity is essential in protecting digital information from unauthorized access, theft, or damage. Key features include encryption, which secures data, and multi-factor authentication (MFA), adding an extra layer of protection. Firewalls help filter malicious traffic, while antivirus software scans for potential threats. Regular software updates keep vulnerabilities in check. Intrusion detection systems monitor suspicious activities to prevent breaches. Together, these cybersecurity measures help ensure safe online experiences, protecting sensitive data from cybercriminals and hackers. By implementing these features, individuals and organizations can enhance their digital security and privacy.",
//     imageUrl: '/images/blog-3.png'
//   },
//   {
//     id:'4',
//     title:'Exploring Metaverse 3D Models: The Future of Virtual Reality',
//     description:"Metaverse 3D models are revolutionizing the way we experience virtual worlds. These digital creations bring virtual environments to life, allowing users to interact with realistic avatars, buildings, and objects in immersive settings. 3D modeling is crucial for crafting the detailed, interactive spaces that define the metaverse. Designers use advanced software to create these models, ensuring they are both visually stunning and functional. As the metaverse grows, these 3D models will continue to shape virtual experiences, from gaming to virtual shopping and social interactions. With ongoing innovations, the metaverse is set to become a dynamic, ever-evolving digital universe.",
//     imageUrl: '/images/blog-4.png'
//   },
//   {
//     id:'5',
//     title:'Cloud Native Computing: Transforming the Future of Technology',
//     description:"Cloud Native Computing is a modern approach to building and running applications in the cloud. It focuses on leveraging the cloud's flexibility, scalability, and resilience to create highly efficient software. With cloud-native technologies like containers, microservices, and Kubernetes, businesses can quickly deploy and scale applications. This model enables faster innovation, seamless updates, and improved performance. By adopting cloud-native computing, organizations can reduce infrastructure costs, enhance productivity, and improve user experiences. As the world moves towards cloud-first strategies, cloud-native computing is becoming the backbone of digital transformation.",
//     imageUrl: '/images/blog-5.png'
//   },
//   {
//     id:'6',
//     title:'Python in Development: A Versatile Programming Language',
//     description:"Python has become one of the most popular languages in software development due to its simplicity, readability, and versatility. It's widely used in web development, data analysis, artificial intelligence, automation, and more. Python's extensive libraries and frameworks, such as Django, Flask, and TensorFlow, make it an excellent choice for building complex applications quickly. Its strong community support and active development ensure that Python continues to evolve and meet the demands of modern technology. Whether you're a beginner or an experienced developer, Python's ease of use and powerful capabilities make it an essential tool in today's development landscape.",
//     imageUrl: '/images/blog-6.png'
//   },
//   {
//     id:'7',
//     title:'Networking: The Backbone of Modern Communication',
//     description:"Networking is the foundation of modern communication, connecting devices, systems, and users around the world. It allows data to be shared between computers and enables technologies like the internet, cloud services, and mobile communications. Through protocols like TCP/IP, networks ensure that information flows securely and efficiently. As the digital world expands, networking becomes even more critical for businesses and individuals, enabling seamless access to information and services. With the rise of technologies like 5G and IoT, networking continues to evolve, shaping how we communicate and interact in the digital age.",
//     imageUrl: '/images/blog-7.png'
//   },
//   {
//     id:'8',
//     title:'Mobile and Web Application Development: Shaping the Digital Future',
//     description:"Mobile and web application development has transformed how businesses and individuals interact with technology. Mobile apps provide users with on-the-go access to services, while web apps enable seamless interactions through browsers. The development process involves coding, designing, and testing to create user-friendly, responsive applications. With technologies like React, Flutter, and Node.js, developers can build efficient, scalable apps. As mobile and web technologies continue to evolve, the demand for intuitive and secure applications grows, driving innovation in industries like e-commerce, education, and entertainment. These applications are now integral to daily life and business success.",
//     imageUrl: '/images/blog-8.png'
//   },
//   {
//     id:'9',
//     title:"Data Science and Artificial Intelligence: Unlocking the Future",
//     description:"Data Science and Artificial Intelligence (AI) are revolutionizing industries by providing insights and automating decision-making processes. Data Science focuses on extracting valuable information from large datasets, while AI uses this data to create systems that can learn, adapt, and make intelligent decisions. Technologies like machine learning and deep learning are key drivers in AI's success, allowing machines to predict trends, recognize patterns, and even understand natural language. These advancements are transforming sectors such as healthcare, finance, and marketing, improving efficiency and enabling smarter solutions. As AI continues to evolve, its potential to change the world is limitless.",
//     imageUrl: '/images/blog-9.png'
//   },
//   {
//     id:'10',
//     title:"Digital Marketing: Transforming the Business Landscape",
//     description:"Digital marketing has become an essential tool for businesses to reach their target audience effectively. With the rise of the internet and social media, it allows companies to promote their products and services through various online channels such as search engines, social media, email, and websites. By using strategies like SEO, content marketing, and paid advertising, digital marketing helps businesses engage with customers, drive traffic, and boost sales. It offers measurable results and real-time analytics, making it easier to adjust strategies for maximum impact. As more consumers move online, digital marketing continues to shape the future of business growth.",
//     imageUrl: '/images/blog-10.png'
//   },
//   {
//     id:'11',
//     title:"The Power of Communication in Building Connections",
//     description:"Effective communication is the cornerstone of strong relationships, both in personal and professional settings. Whether through verbal, non-verbal, or written forms, communication allows individuals to express ideas, share information, and understand others better. In today's fast-paced world, clear communication is essential for teamwork, problem-solving, and decision-making. With the rise of digital tools, communication has become more accessible than ever, making it easier to connect across distances. Ultimately, good communication fosters trust, reduces misunderstandings, and helps build meaningful connections in every aspect of life.",
//     imageUrl: '/images/blog-11.png'
//   },
//   { 
//     id:'12',
//     title:'Quantum Computing: A Glimpse into the Future',
//     description:"Quantum computing is an emerging technology that uses the principles of quantum mechanics to perform complex calculations. Unlike classical computers, which use bits, quantum computers use qubits, allowing them to process information in multiple states simultaneously. This makes them incredibly powerful for solving problems that traditional computers cannot.Quantum computing has the potential to revolutionize fields like cryptography, drug discovery, and artificial intelligence. It can perform calculations at speeds far beyond current technology. Although still in its early stages, its future impact could lead to breakthroughs in science, technology, and medicine. The rise of quantum computing promises a new frontier of innovation and problem-solving.",
//     imageUrl: '/images/blog-12.png'
//   },
  



// ]
// const Post = ({params}:{params:{id:string}}) => {

//   const {id}= params
//   const post= posts.find((p)=>p.id===id);
//   if(!post){
//     return (
// <h2 className="text-3xl font-bold text-yellow-500 flex justify-center items-center underline">Post Not Found BY BY .....!</h2>
//     )
//   }

//   const renderParagraphs = (description:string)=>{
//     return description.split('/n').map((para,index)=>(
//       <p className='mt-4 justify' key={index}>{para.trim()}</p>
//     ));
//   } ;



//   return (
//     <>
// <div className="max-w-3xl mx-auto p-5">
//   <h1 className="md:text-4xl text-4xl font-bold font-mono text-amber-500 text-center">{post.title}</h1>
//   {post.imageUrl && (
//     <Image src={post.imageUrl} alt={post.title} height={400} width={400} className='w-full h-auto rounded-lg mt-4'/>
//   )}

//   <div className="mt-6 text-lg text-gray-600">{renderParagraphs(post.description)}</div>


// postId
  
//   <AuthoreCard/>
// </div>
//     </>
//   )
// }

// export default Post






// import React from 'react';
// import AuthoreCard from '@/components/AuthoreCard';
// import Image from 'next/image';
// import CommentSection from '@/components/CommentSection';

// const posts = [



  // {
  //   id:'1',
  //   title:"Agentic AI: The Future of Autonomous Technology",
  //   description:"Agentic AI refers to artificial intelligence systems that can act as independent agents, making decisions and taking actions without constant human input. Unlike traditional AI, which mainly provides insights, agentic AI is designed to solve problems and achieve specific goals autonomously. For instance, self-driving cars use agentic AI to navigate traffic, while in healthcare, it can monitor patients and respond to emergencies. This advanced AI offers efficiency and the ability to handle complex tasks, but also raises concerns regarding ethics, security, and accountability. As technology progresses, agentic AI has the potential to revolutionize industries, providing smarter and more efficient solutions.",
  //   imageUrl: '/images/blog-1.png'
  // },
  // {
  //   id:'2',
  //   title:'Blockchain Technology in Simple Terms',
  //   description:"Blockchain is a decentralized technology that securely stores data in a chain of blocks across multiple computers. It ensures transparency and prevents tampering by making each transaction publicly visible and immutable. Originally created for cryptocurrency like Bitcoin, blockchain has far-reaching applications in various industries like finance, healthcare, and supply chains. It enables peer-to-peer transactions without intermediaries, reducing costs and enhancing efficiency. The key benefits of blockchain include transparency, security, and faster transactions. As it evolves, it holds the potential to revolutionize the way businesses operate globally. With its growing use, blockchain is reshaping digital trust and data management.",
  //   imageUrl: '/images/blog-2.png'
  // },
  // {
  //   id:'3',
  //   title:'Cybersecurity Features: Ensuring Your Online Safety',
  //   description:"Cybersecurity is essential in protecting digital information from unauthorized access, theft, or damage. Key features include encryption, which secures data, and multi-factor authentication (MFA), adding an extra layer of protection. Firewalls help filter malicious traffic, while antivirus software scans for potential threats. Regular software updates keep vulnerabilities in check. Intrusion detection systems monitor suspicious activities to prevent breaches. Together, these cybersecurity measures help ensure safe online experiences, protecting sensitive data from cybercriminals and hackers. By implementing these features, individuals and organizations can enhance their digital security and privacy.",
  //   imageUrl: '/images/blog-3.png'
  // },
  // {
  //   id:'4',
  //   title:'Exploring Metaverse 3D Models: The Future of Virtual Reality',
  //   description:"Metaverse 3D models are revolutionizing the way we experience virtual worlds. These digital creations bring virtual environments to life, allowing users to interact with realistic avatars, buildings, and objects in immersive settings. 3D modeling is crucial for crafting the detailed, interactive spaces that define the metaverse. Designers use advanced software to create these models, ensuring they are both visually stunning and functional. As the metaverse grows, these 3D models will continue to shape virtual experiences, from gaming to virtual shopping and social interactions. With ongoing innovations, the metaverse is set to become a dynamic, ever-evolving digital universe.",
  //   imageUrl: '/images/blog-4.png'
  // },
  // {
  //   id:'5',
  //   title:'Cloud Native Computing: Transforming the Future of Technology',
  //   description:"Cloud Native Computing is a modern approach to building and running applications in the cloud. It focuses on leveraging the cloud's flexibility, scalability, and resilience to create highly efficient software. With cloud-native technologies like containers, microservices, and Kubernetes, businesses can quickly deploy and scale applications. This model enables faster innovation, seamless updates, and improved performance. By adopting cloud-native computing, organizations can reduce infrastructure costs, enhance productivity, and improve user experiences. As the world moves towards cloud-first strategies, cloud-native computing is becoming the backbone of digital transformation.",
  //   imageUrl: '/images/blog-5.png'
  // },
  // {
  //   id:'6',
  //   title:'Python in Development: A Versatile Programming Language',
  //   description:"Python has become one of the most popular languages in software development due to its simplicity, readability, and versatility. It's widely used in web development, data analysis, artificial intelligence, automation, and more. Python's extensive libraries and frameworks, such as Django, Flask, and TensorFlow, make it an excellent choice for building complex applications quickly. Its strong community support and active development ensure that Python continues to evolve and meet the demands of modern technology. Whether you're a beginner or an experienced developer, Python's ease of use and powerful capabilities make it an essential tool in today's development landscape.",
  //   imageUrl: '/images/blog-6.png'
  // },
  // {
  //   id:'7',
  //   title:'Networking: The Backbone of Modern Communication',
  //   description:"Networking is the foundation of modern communication, connecting devices, systems, and users around the world. It allows data to be shared between computers and enables technologies like the internet, cloud services, and mobile communications. Through protocols like TCP/IP, networks ensure that information flows securely and efficiently. As the digital world expands, networking becomes even more critical for businesses and individuals, enabling seamless access to information and services. With the rise of technologies like 5G and IoT, networking continues to evolve, shaping how we communicate and interact in the digital age.",
  //   imageUrl: '/images/blog-7.png'
  // },
  // {
  //   id:'8',
  //   title:'Mobile and Web Application Development: Shaping the Digital Future',
  //   description:"Mobile and web application development has transformed how businesses and individuals interact with technology. Mobile apps provide users with on-the-go access to services, while web apps enable seamless interactions through browsers. The development process involves coding, designing, and testing to create user-friendly, responsive applications. With technologies like React, Flutter, and Node.js, developers can build efficient, scalable apps. As mobile and web technologies continue to evolve, the demand for intuitive and secure applications grows, driving innovation in industries like e-commerce, education, and entertainment. These applications are now integral to daily life and business success.",
  //   imageUrl: '/images/blog-8.png'
  // },
  // {
  //   id:'9',
  //   title:"Data Science and Artificial Intelligence: Unlocking the Future",
  //   description:"Data Science and Artificial Intelligence (AI) are revolutionizing industries by providing insights and automating decision-making processes. Data Science focuses on extracting valuable information from large datasets, while AI uses this data to create systems that can learn, adapt, and make intelligent decisions. Technologies like machine learning and deep learning are key drivers in AI's success, allowing machines to predict trends, recognize patterns, and even understand natural language. These advancements are transforming sectors such as healthcare, finance, and marketing, improving efficiency and enabling smarter solutions. As AI continues to evolve, its potential to change the world is limitless.",
  //   imageUrl: '/images/blog-9.png'
  // },
  // {
  //   id:'10',
  //   title:"Digital Marketing: Transforming the Business Landscape",
  //   description:"Digital marketing has become an essential tool for businesses to reach their target audience effectively. With the rise of the internet and social media, it allows companies to promote their products and services through various online channels such as search engines, social media, email, and websites. By using strategies like SEO, content marketing, and paid advertising, digital marketing helps businesses engage with customers, drive traffic, and boost sales. It offers measurable results and real-time analytics, making it easier to adjust strategies for maximum impact. As more consumers move online, digital marketing continues to shape the future of business growth.",
  //   imageUrl: '/images/blog-10.png'
  // },
  // {
  //   id:'11',
  //   title:"The Power of Communication in Building Connections",
  //   description:"Effective communication is the cornerstone of strong relationships, both in personal and professional settings. Whether through verbal, non-verbal, or written forms, communication allows individuals to express ideas, share information, and understand others better. In today's fast-paced world, clear communication is essential for teamwork, problem-solving, and decision-making. With the rise of digital tools, communication has become more accessible than ever, making it easier to connect across distances. Ultimately, good communication fosters trust, reduces misunderstandings, and helps build meaningful connections in every aspect of life.",
  //   imageUrl: '/images/blog-11.png'
  // },
  // { 
  //   id:'12',
  //   title:'Quantum Computing: A Glimpse into the Future',
  //   description:"Quantum computing is an emerging technology that uses the principles of quantum mechanics to perform complex calculations. Unlike classical computers, which use bits, quantum computers use qubits, allowing them to process information in multiple states simultaneously. This makes them incredibly powerful for solving problems that traditional computers cannot.Quantum computing has the potential to revolutionize fields like cryptography, drug discovery, and artificial intelligence. It can perform calculations at speeds far beyond current technology. Although still in its early stages, its future impact could lead to breakthroughs in science, technology, and medicine. The rise of quantum computing promises a new frontier of innovation and problem-solving.",
  //   imageUrl: '/images/blog-12.png'
  // },
  



// ];

// const Post = ({ params }: { params: { id: string } }) => {
//   const { id } = params;
//   const post = posts.find((p) => p.id === id);
//   if (!post) {
//     return (
//       <h2 className="text-3xl font-bold text-yellow-500 flex justify-center items-center underline">
//         Post Not Found BY BY .....!
//       </h2>
//     );
//   }

//   const renderParagraphs = (description: string) => {
//     return description.split('/n').map((para, index) => (
//       <p className="mt-4 justify" key={index}>
//         {para.trim()}
//       </p>
//     ));
//   };

//   return (
//     <>
//       <div className="max-w-3xl mx-auto p-5">
//         <h1 className="md:text-4xl text-4xl font-bold font-mono text-amber-500 text-center">
//           {post.title}
//         </h1>
//         {post.imageUrl && (
//           <Image
//             src={post.imageUrl}
//             alt={post.title}
//             height={400}
//             width={400}
//             className="w-full h-auto rounded-lg mt-4"
//           />
//         )}

//         <div className="mt-6 text-lg text-gray-600">{renderParagraphs(post.description)}</div>

//         <CommentSection/>
//         <AuthoreCard />
//       </div>
//     </>
//   );
// };

// export default Post;




















// import { GetServerSideProps } from 'next'; // Ensure correct Next.js imports for dynamic props
// import React from 'react';
// import AuthoreCard from '@/components/AuthoreCard';
// import Image from 'next/image';
// import CommentSection from '@/components/CommentSection';

// const posts = [
  
  //     {
  //   id:'1',
  //   title:"Agentic AI: The Future of Autonomous Technology",
  //   description:"Agentic AI refers to artificial intelligence systems that can act as independent agents, making decisions and taking actions without constant human input. Unlike traditional AI, which mainly provides insights, agentic AI is designed to solve problems and achieve specific goals autonomously. For instance, self-driving cars use agentic AI to navigate traffic, while in healthcare, it can monitor patients and respond to emergencies. This advanced AI offers efficiency and the ability to handle complex tasks, but also raises concerns regarding ethics, security, and accountability. As technology progresses, agentic AI has the potential to revolutionize industries, providing smarter and more efficient solutions.",
  //   imageUrl: '/images/blog-1.png'
  // },
  // {
  //   id:'2',
  //   title:'Blockchain Technology in Simple Terms',
  //   description:"Blockchain is a decentralized technology that securely stores data in a chain of blocks across multiple computers. It ensures transparency and prevents tampering by making each transaction publicly visible and immutable. Originally created for cryptocurrency like Bitcoin, blockchain has far-reaching applications in various industries like finance, healthcare, and supply chains. It enables peer-to-peer transactions without intermediaries, reducing costs and enhancing efficiency. The key benefits of blockchain include transparency, security, and faster transactions. As it evolves, it holds the potential to revolutionize the way businesses operate globally. With its growing use, blockchain is reshaping digital trust and data management.",
  //   imageUrl: '/images/blog-2.png'
  // },
  // {
  //   id:'3',
  //   title:'Cybersecurity Features: Ensuring Your Online Safety',
  //   description:"Cybersecurity is essential in protecting digital information from unauthorized access, theft, or damage. Key features include encryption, which secures data, and multi-factor authentication (MFA), adding an extra layer of protection. Firewalls help filter malicious traffic, while antivirus software scans for potential threats. Regular software updates keep vulnerabilities in check. Intrusion detection systems monitor suspicious activities to prevent breaches. Together, these cybersecurity measures help ensure safe online experiences, protecting sensitive data from cybercriminals and hackers. By implementing these features, individuals and organizations can enhance their digital security and privacy.",
  //   imageUrl: '/images/blog-3.png'
  // },
  // {
  //   id:'4',
  //   title:'Exploring Metaverse 3D Models: The Future of Virtual Reality',
  //   description:"Metaverse 3D models are revolutionizing the way we experience virtual worlds. These digital creations bring virtual environments to life, allowing users to interact with realistic avatars, buildings, and objects in immersive settings. 3D modeling is crucial for crafting the detailed, interactive spaces that define the metaverse. Designers use advanced software to create these models, ensuring they are both visually stunning and functional. As the metaverse grows, these 3D models will continue to shape virtual experiences, from gaming to virtual shopping and social interactions. With ongoing innovations, the metaverse is set to become a dynamic, ever-evolving digital universe.",
  //   imageUrl: '/images/blog-4.png'
  // },
  // {
  //   id:'5',
  //   title:'Cloud Native Computing: Transforming the Future of Technology',
  //   description:"Cloud Native Computing is a modern approach to building and running applications in the cloud. It focuses on leveraging the cloud's flexibility, scalability, and resilience to create highly efficient software. With cloud-native technologies like containers, microservices, and Kubernetes, businesses can quickly deploy and scale applications. This model enables faster innovation, seamless updates, and improved performance. By adopting cloud-native computing, organizations can reduce infrastructure costs, enhance productivity, and improve user experiences. As the world moves towards cloud-first strategies, cloud-native computing is becoming the backbone of digital transformation.",
  //   imageUrl: '/images/blog-5.png'
  // },
  // {
  //   id:'6',
  //   title:'Python in Development: A Versatile Programming Language',
  //   description:"Python has become one of the most popular languages in software development due to its simplicity, readability, and versatility. It's widely used in web development, data analysis, artificial intelligence, automation, and more. Python's extensive libraries and frameworks, such as Django, Flask, and TensorFlow, make it an excellent choice for building complex applications quickly. Its strong community support and active development ensure that Python continues to evolve and meet the demands of modern technology. Whether you're a beginner or an experienced developer, Python's ease of use and powerful capabilities make it an essential tool in today's development landscape.",
  //   imageUrl: '/images/blog-6.png'
  // },
  // {
  //   id:'7',
  //   title:'Networking: The Backbone of Modern Communication',
  //   description:"Networking is the foundation of modern communication, connecting devices, systems, and users around the world. It allows data to be shared between computers and enables technologies like the internet, cloud services, and mobile communications. Through protocols like TCP/IP, networks ensure that information flows securely and efficiently. As the digital world expands, networking becomes even more critical for businesses and individuals, enabling seamless access to information and services. With the rise of technologies like 5G and IoT, networking continues to evolve, shaping how we communicate and interact in the digital age.",
  //   imageUrl: '/images/blog-7.png'
  // },
  // {
  //   id:'8',
  //   title:'Mobile and Web Application Development: Shaping the Digital Future',
  //   description:"Mobile and web application development has transformed how businesses and individuals interact with technology. Mobile apps provide users with on-the-go access to services, while web apps enable seamless interactions through browsers. The development process involves coding, designing, and testing to create user-friendly, responsive applications. With technologies like React, Flutter, and Node.js, developers can build efficient, scalable apps. As mobile and web technologies continue to evolve, the demand for intuitive and secure applications grows, driving innovation in industries like e-commerce, education, and entertainment. These applications are now integral to daily life and business success.",
  //   imageUrl: '/images/blog-8.png'
  // },
  // {
  //   id:'9',
  //   title:"Data Science and Artificial Intelligence: Unlocking the Future",
  //   description:"Data Science and Artificial Intelligence (AI) are revolutionizing industries by providing insights and automating decision-making processes. Data Science focuses on extracting valuable information from large datasets, while AI uses this data to create systems that can learn, adapt, and make intelligent decisions. Technologies like machine learning and deep learning are key drivers in AI's success, allowing machines to predict trends, recognize patterns, and even understand natural language. These advancements are transforming sectors such as healthcare, finance, and marketing, improving efficiency and enabling smarter solutions. As AI continues to evolve, its potential to change the world is limitless.",
  //   imageUrl: '/images/blog-9.png'
  // },
  // {
  //   id:'10',
  //   title:"Digital Marketing: Transforming the Business Landscape",
  //   description:"Digital marketing has become an essential tool for businesses to reach their target audience effectively. With the rise of the internet and social media, it allows companies to promote their products and services through various online channels such as search engines, social media, email, and websites. By using strategies like SEO, content marketing, and paid advertising, digital marketing helps businesses engage with customers, drive traffic, and boost sales. It offers measurable results and real-time analytics, making it easier to adjust strategies for maximum impact. As more consumers move online, digital marketing continues to shape the future of business growth.",
  //   imageUrl: '/images/blog-10.png'
  // },
  // {
  //   id:'11',
  //   title:"The Power of Communication in Building Connections",
  //   description:"Effective communication is the cornerstone of strong relationships, both in personal and professional settings. Whether through verbal, non-verbal, or written forms, communication allows individuals to express ideas, share information, and understand others better. In today's fast-paced world, clear communication is essential for teamwork, problem-solving, and decision-making. With the rise of digital tools, communication has become more accessible than ever, making it easier to connect across distances. Ultimately, good communication fosters trust, reduces misunderstandings, and helps build meaningful connections in every aspect of life.",
  //   imageUrl: '/images/blog-11.png'
  // },
  // { 
  //   id:'12',
  //   title:'Quantum Computing: A Glimpse into the Future',
  //   description:"Quantum computing is an emerging technology that uses the principles of quantum mechanics to perform complex calculations. Unlike classical computers, which use bits, quantum computers use qubits, allowing them to process information in multiple states simultaneously. This makes them incredibly powerful for solving problems that traditional computers cannot.Quantum computing has the potential to revolutionize fields like cryptography, drug discovery, and artificial intelligence. It can perform calculations at speeds far beyond current technology. Although still in its early stages, its future impact could lead to breakthroughs in science, technology, and medicine. The rise of quantum computing promises a new frontier of innovation and problem-solving.",
  //   imageUrl: '/images/blog-12.png'
  // },



// ];

// type PostParams = {
//   id: string;
// };

// type PostPageProps = {
//   params: PostParams;
// };

// const Post = ({ params }: PostPageProps) => {
//   const { id } = params;
//   const post = posts.find((p) => p.id === id);
//   if (!post) {
//     return (
//       <h2 className="text-3xl font-bold text-yellow-500 flex justify-center items-center underline">
//         Post Not Found BY BY .....!
//       </h2>
//     );
//   }

//   const renderParagraphs = (description: string) => {
//     return description.split('\n').map((para, index) => (
//       <p className="mt-4 justify" key={index}>
//         {para.trim()}
//       </p>
//     ));
//   };

//   return (
//     <>
//       <div className="max-w-3xl mx-auto p-5">
//         <h1 className="md:text-4xl text-4xl font-bold font-mono text-amber-500 text-center">
//           {post.title}
//         </h1>
//         {post.imageUrl && (
//           <Image
//             src={post.imageUrl}
//             alt={post.title}
//             height={400}
//             width={400}
//             className="w-full h-auto rounded-lg mt-4"
//           />
//         )}

//         <div className="mt-6 text-lg text-gray-600">{renderParagraphs(post.description)}</div>

//         <CommentSection />
//         <AuthoreCard />
//       </div>
//     </>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { id } = context.params as PostParams;

//   if (!id) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       params: { id },
//     },
//   };
// };

// export default Post;




















import React from 'react';
import AuthoreCard from '@/components/AuthoreCard';
import Image from 'next/image';
import CommentSection from '@/components/CommentSection';

const posts = [
 
  {
    id:'1',
    title:"Agentic AI: The Future of Autonomous Technology",
    description:"Agentic AI refers to artificial intelligence systems that can act as independent agents, making decisions and taking actions without constant human input. Unlike traditional AI, which mainly provides insights, agentic AI is designed to solve problems and achieve specific goals autonomously. For instance, self-driving cars use agentic AI to navigate traffic, while in healthcare, it can monitor patients and respond to emergencies. This advanced AI offers efficiency and the ability to handle complex tasks, but also raises concerns regarding ethics, security, and accountability. As technology progresses, agentic AI has the potential to revolutionize industries, providing smarter and more efficient solutions.",
    imageUrl: '/images/blog-1.png'
  },
  {
    id:'2',
    title:'Blockchain Technology in Simple Terms',
    description:"Blockchain is a decentralized technology that securely stores data in a chain of blocks across multiple computers. It ensures transparency and prevents tampering by making each transaction publicly visible and immutable. Originally created for cryptocurrency like Bitcoin, blockchain has far-reaching applications in various industries like finance, healthcare, and supply chains. It enables peer-to-peer transactions without intermediaries, reducing costs and enhancing efficiency. The key benefits of blockchain include transparency, security, and faster transactions. As it evolves, it holds the potential to revolutionize the way businesses operate globally. With its growing use, blockchain is reshaping digital trust and data management.",
    imageUrl: '/images/blog-2.png'
  },
  {
    id:'3',
    title:'Cybersecurity Features: Ensuring Your Online Safety',
    description:"Cybersecurity is essential in protecting digital information from unauthorized access, theft, or damage. Key features include encryption, which secures data, and multi-factor authentication (MFA), adding an extra layer of protection. Firewalls help filter malicious traffic, while antivirus software scans for potential threats. Regular software updates keep vulnerabilities in check. Intrusion detection systems monitor suspicious activities to prevent breaches. Together, these cybersecurity measures help ensure safe online experiences, protecting sensitive data from cybercriminals and hackers. By implementing these features, individuals and organizations can enhance their digital security and privacy.",
    imageUrl: '/images/blog-3.png'
  },
  {
    id:'4',
    title:'Exploring Metaverse 3D Models: The Future of Virtual Reality',
    description:"Metaverse 3D models are revolutionizing the way we experience virtual worlds. These digital creations bring virtual environments to life, allowing users to interact with realistic avatars, buildings, and objects in immersive settings. 3D modeling is crucial for crafting the detailed, interactive spaces that define the metaverse. Designers use advanced software to create these models, ensuring they are both visually stunning and functional. As the metaverse grows, these 3D models will continue to shape virtual experiences, from gaming to virtual shopping and social interactions. With ongoing innovations, the metaverse is set to become a dynamic, ever-evolving digital universe.",
    imageUrl: '/images/blog-4.png'
  },
  {
    id:'5',
    title:'Cloud Native Computing: Transforming the Future of Technology',
    description:"Cloud Native Computing is a modern approach to building and running applications in the cloud. It focuses on leveraging the cloud's flexibility, scalability, and resilience to create highly efficient software. With cloud-native technologies like containers, microservices, and Kubernetes, businesses can quickly deploy and scale applications. This model enables faster innovation, seamless updates, and improved performance. By adopting cloud-native computing, organizations can reduce infrastructure costs, enhance productivity, and improve user experiences. As the world moves towards cloud-first strategies, cloud-native computing is becoming the backbone of digital transformation.",
    imageUrl: '/images/blog-5.png'
  },
  {
    id:'6',
    title:'Python in Development: A Versatile Programming Language',
    description:"Python has become one of the most popular languages in software development due to its simplicity, readability, and versatility. It's widely used in web development, data analysis, artificial intelligence, automation, and more. Python's extensive libraries and frameworks, such as Django, Flask, and TensorFlow, make it an excellent choice for building complex applications quickly. Its strong community support and active development ensure that Python continues to evolve and meet the demands of modern technology. Whether you're a beginner or an experienced developer, Python's ease of use and powerful capabilities make it an essential tool in today's development landscape.",
    imageUrl: '/images/blog-6.png'
  },
  {
    id:'7',
    title:'Networking: The Backbone of Modern Communication',
    description:"Networking is the foundation of modern communication, connecting devices, systems, and users around the world. It allows data to be shared between computers and enables technologies like the internet, cloud services, and mobile communications. Through protocols like TCP/IP, networks ensure that information flows securely and efficiently. As the digital world expands, networking becomes even more critical for businesses and individuals, enabling seamless access to information and services. With the rise of technologies like 5G and IoT, networking continues to evolve, shaping how we communicate and interact in the digital age.",
    imageUrl: '/images/blog-7.png'
  },
  {
    id:'8',
    title:'Mobile and Web Application Development: Shaping the Digital Future',
    description:"Mobile and web application development has transformed how businesses and individuals interact with technology. Mobile apps provide users with on-the-go access to services, while web apps enable seamless interactions through browsers. The development process involves coding, designing, and testing to create user-friendly, responsive applications. With technologies like React, Flutter, and Node.js, developers can build efficient, scalable apps. As mobile and web technologies continue to evolve, the demand for intuitive and secure applications grows, driving innovation in industries like e-commerce, education, and entertainment. These applications are now integral to daily life and business success.",
    imageUrl: '/images/blog-8.png'
  },
  {
    id:'9',
    title:"Data Science and Artificial Intelligence: Unlocking the Future",
    description:"Data Science and Artificial Intelligence (AI) are revolutionizing industries by providing insights and automating decision-making processes. Data Science focuses on extracting valuable information from large datasets, while AI uses this data to create systems that can learn, adapt, and make intelligent decisions. Technologies like machine learning and deep learning are key drivers in AI's success, allowing machines to predict trends, recognize patterns, and even understand natural language. These advancements are transforming sectors such as healthcare, finance, and marketing, improving efficiency and enabling smarter solutions. As AI continues to evolve, its potential to change the world is limitless.",
    imageUrl: '/images/blog-9.png'
  },
  {
    id:'10',
    title:"Digital Marketing: Transforming the Business Landscape",
    description:"Digital marketing has become an essential tool for businesses to reach their target audience effectively. With the rise of the internet and social media, it allows companies to promote their products and services through various online channels such as search engines, social media, email, and websites. By using strategies like SEO, content marketing, and paid advertising, digital marketing helps businesses engage with customers, drive traffic, and boost sales. It offers measurable results and real-time analytics, making it easier to adjust strategies for maximum impact. As more consumers move online, digital marketing continues to shape the future of business growth.",
    imageUrl: '/images/blog-10.png'
  },
  {
    id:'11',
    title:"The Power of Communication in Building Connections",
    description:"Effective communication is the cornerstone of strong relationships, both in personal and professional settings. Whether through verbal, non-verbal, or written forms, communication allows individuals to express ideas, share information, and understand others better. In today's fast-paced world, clear communication is essential for teamwork, problem-solving, and decision-making. With the rise of digital tools, communication has become more accessible than ever, making it easier to connect across distances. Ultimately, good communication fosters trust, reduces misunderstandings, and helps build meaningful connections in every aspect of life.",
    imageUrl: '/images/blog-11.png'
  },
  { 
    id:'12',
    title:'Quantum Computing: A Glimpse into the Future',
    description:"Quantum computing is an emerging technology that uses the principles of quantum mechanics to perform complex calculations. Unlike classical computers, which use bits, quantum computers use qubits, allowing them to process information in multiple states simultaneously. This makes them incredibly powerful for solving problems that traditional computers cannot.Quantum computing has the potential to revolutionize fields like cryptography, drug discovery, and artificial intelligence. It can perform calculations at speeds far beyond current technology. Although still in its early stages, its future impact could lead to breakthroughs in science, technology, and medicine. The rise of quantum computing promises a new frontier of innovation and problem-solving.",
    imageUrl: '/images/blog-12.png'
  },


];

async function fetchPost(id: string) {

  return posts.find((post) => post.id === id);
}

type Props = {
  params: Promise<{id: string}>;
};

export default async function Post({ params }: Props) {
  const { id } =await params;
  const post = await fetchPost(id);

  if (!post) {
    return (
      <h2 className="text-3xl font-bold text-yellow-500 flex justify-center items-center underline">
        Post Not Found. Please check the URL!
      </h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split('\n').map((para, index) => (
      <p className="mt-4 justify" key={index}>
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-4xl font-bold font-mono text-amber-500 text-center">
        {post.title}
      </h1>
      {post.imageUrl && (
        <Image
          src={post.imageUrl}
          alt={post.title}
          height={400}
          width={400}
          className="w-full h-auto rounded-lg mt-4"
        />
      )}

      <div className="mt-6 text-lg text-gray-600">{renderParagraphs(post.description)}</div>

      <CommentSection />
      <AuthoreCard />
    </div>
  );
}
