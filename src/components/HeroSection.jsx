
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[100vh] bg-cyan-500" 
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1513106021000-168e5f56609d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVybyUyMGltYWdlfGVufDB8fDB8fHww")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
     }}
    >
        <h2 className="text-4xl md:text-6xl font-bold">Welcome to my Website</h2>
        <p className="text-lg md:text-xl">your Journey Start here</p>
        <button className="bg-yellow-600 font-medium hover:bg-yellow-400 px-6 py-2.5 rounded-2xl mt-8 cursor-pointer">Purchase</button>
    </div>
  )
}

export default HeroSection