import React from 'react'
import BlogCard from './BlogCard'

const Mega = () => {
  const posts = [





{
  id:'1',
  title:'Agentic AI',
  description:'Explore the Fundamental of Python Language, that was Very Easy Language In "AI"',
  date:'2024-28-12',
  imageUrl: '/images/blog-1.png'
},
{
  id:'2',
  title:'Block-Chain TechnoLogy',
  description:'Blockchain is a decentralized, secure digital ledger that ensures transparent and tamper-proof transactions.',
  date:'2024-28-12',
  imageUrl: '/images/blog-2.png'
},
{
  id:'3',
  title:'Cyber Security Features',
  description:'Explore the Fundamental of Python Language, that was Very Easy Language In "AI"',
  date:'2024-28-12',
  imageUrl: '/images/blog-3.png'
},
{
  id:'4',
  title:'Metaverse In 3D Models',
  description:'Exploring Metaverse 3D Models: The Future of Virtual Reality',
  date:'2024-28-12',
  imageUrl: '/images/blog-4.png'
},
{
  id:'5',
  title:'Cloud Native Computing',
  description:'Explore the Fundamental of Python Language, that was Very Easy Language In "AI"',
  date:'2024-28-12',
  imageUrl: '/images/blog-5.png'
},
{
  id:'6',
  title:'Python in Development ',
  description:'Python in Development: A Versatile Programming Language',
  date:'2024-28-12',
  imageUrl: '/images/blog-6.png'
},
{
  id:'7',
  title:'Networking',
  description:'Networking: The Backbone of Modern Communication ',
  date:'2024-28-12',
  imageUrl: '/images/blog-7.png'
},
{
  id:'8',
  title:'Mobile and Web Apllication Development',
  description:'Explore the Mobile and Web Application Development in Some Theroy about This Feild ',
  date:'2024-7-31',
  imageUrl: '/images/blog-8.png'
},
{
  id:'9',
  title:'Data Science (Artificial Intelligence)',
  description:'Data Science and Artificial Intelligence (AI) are revolutionizing industries by providing insights and automating decision-making processes. ',
  date:'2018-31-12',
  imageUrl: '/images/blog-9.png'
},
{
  id:'10',
  title:'Digital Markiting ',
  description:'Explore Digital Marketing: Transforming the Business Landscape',
  date:'2022-10-10',
  imageUrl: '/images/blog-10.png'
},
{
  id:'11',
  title:'Communication',
  description:'The Power of Communication in Building Connections',
  date:'2020-23-11',
  imageUrl: '/images/blog-11.png'
},
{ 
  id:'12',
  title:'Quantum Computing',
  description:'uantum computing is a revolutionary technology that leverages the principles of quantum mechanics to solve complex problems that are beyond the reach of classical computers.',
  date:'2024-28-12',
  imageUrl: '/images/blog-12.png'
},










  ]
  return (
    <div className='my-8'>


   <h1 className="text-6xl hover:underline font-bold font-mono text-center  my-8 text-yellow-300  00 animate-color-change">The Boom OF World Technology </h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
{posts.map(( post ,index)=>(
  <div className="fade-in" key={post.id}>
  <div className="blog-card">
    <BlogCard post={post} isDarkBackground={index%2===0}/>
  </div>
  </div>
))}
</div>
    </div>
  )
}

export default Mega