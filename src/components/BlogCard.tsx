import React from 'react'
import {Card,CardContent,CardTitle} from '../components/ui/card'
import Image from 'next/image';
interface BlogCardProps {
  post:{id:string;title:string;description:string;date:string;imageUrl:string};
  isDarkBackground:boolean;
}

const BlogCard = ({post,isDarkBackground}:BlogCardProps) =>{
  return (    
     <Card id='blog' className= {`p-4 ${isDarkBackground ? 'bg-red-500 text-white' : 'text-yellow-600'}rounded-lg  shadow-lg hover:shadow-xl transition-shadow duration-300`}>


  <img src={post.imageUrl} alt={post.title} className='w-full h-48 object-cover rounded-t-lg' />

<CardTitle className='mt-4 text-xl font-normal text-center'>{post.title}</CardTitle>
<br />
<CardContent className='text-center'><p>{post.description}</p></CardContent>


<div className="flex flex-col items-center mt-4">
<p className={`text-sm mb-2 ${isDarkBackground ? 'text-slate-500' : 'text-slate-600' }`}>
  Published on: {new Date(post.date).toLocaleDateString()}
</p>

<a href={`/posts/${post.id}`}
className={`w-full px-6 bg-yellow-600 rounded justify-center flex  hover:bg-gray-500 ${isDarkBackground ? 'bg-orange-600 hover:bg-orange-500':'bg-yellow-600 hover:bg-orange-500'}`}>
  Read More! 
</a>
</div>


</Card>
  );
}

export default BlogCard