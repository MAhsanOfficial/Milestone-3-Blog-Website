import React from 'react'

const Feature = () => {
  return (
    <div>
      <section className="py-20 bg-yellow-100 shadow-lg mb-40">
        <h2 className="text-center text-2xl flex justify-center  font-bold md:text-4xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[5px] hover:text-black text-amber-600 font-serif">
    ELON MUSK 
        </h2>
        <p className='text-center m-4 mt-4 text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100'>Technology refers to the application of scientific knowledge for practical purposes. It encompasses tools, machines, systems, and processes designed to solve problems and
           improve efficiency. From the invention of the wheel to the internet and AI, technology continually 
           shapes and transforms our world</p>


  <div className="mx-auto max-w-7xl px-5">
    <h1 className="text-3xl font-bold font-mono text-center my-8 text-yellow-400 underline animate-color-change">Exploring Our Categories!</h1>


    <div className="grid grid-cols-3  font-mono sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100 gap-6 ">

      {[
        "Agentic AI",
        "BlockChain TechnoLogy",
        "Cyber Security Features",
        "Metaverse In 3D Models",
        "Cloud Native Computing",
        "Data Science (Artificial Intelligence)",
        "Networking",
        "Mobile and Web Apllication Development",
        "Communication",
        "Digital Markiting",
        "Python in Development",
        "Generative AI",
      ].map((category,index)=>(
        <div className="relative group p-6 bg-slate-50 rounded-xl shadow-lg hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-500 hover:bg-yellow-300" key={index}>
          <p className='text-center text-lg font-sans  font-semibold'>{category}</p>
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
        </div>
      ))}
    </div>
  </div>



<p className="text-sm font-mono md:text-base text-gray-800  mb-6 px-4 animate-fade-in-down delay-100 mt-10">
Modern technology drives innovation in AI, robotics, biotech, and more, enabling machines and people to learn, adapt, and solve global challenges. While offering exciting opportunities, it also raises ethical concerns
 like privacy, job displacement, and over-dependence.
</p>
      </section>
    </div>
  )
}

export default Feature