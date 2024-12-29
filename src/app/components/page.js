import React from 'react'
import SayHello from '../../components/SayHello'

export default function Components() {
  const array = [
    {
      name: "Nelson Ngaleumo",
    },
    {
      name: "Dorcas Djeuffa",
      greeting: "la plus belle de Dusseldorf",
    },
  ]
  return (
    <div>
      {
        array.map((item) => <SayHello name={item.name} greeting={item.greeting}/>)
      }
      
      <SayHello name="Dorcas Djeufa" greeting="Tu es mon petit bebe"/>
    </div>
  )
}
