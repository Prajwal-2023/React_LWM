import React, { useState } from 'react'

function App() {
  var [a,b] = useState(69)
  return (
    <div className="w-full h-screen bg-zinc-900 text-white p-20 text-9xl">
      <h1>{a}</h1>
      <button onClick={()=>b(70 - 1)} className="px-3 py-4 text-2xl text-white ">CLICK</button>
    </div>
  )
}

export default App