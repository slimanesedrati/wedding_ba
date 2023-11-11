import React from 'react'
import ProgrameCard from '../components/ProgrameCard'

function page() {
  return (
    <section className='mb-5 mt-16 flex justify-center items-center'>
        <div className='items-center justify-center mx-auto max-w-4xl px-4 space-y-20 sm:px-6 xl:max-w-5xl xl:px-0'>
            {/* P1 */}
             <ProgrameCard 
                imgsrc="/Marie.png" 
                Pname="MARIAGE CIVIL"
                Pdate="26 Octobre 2023 à 16h suivi d'un cocktail"
                Plocation="Mairie du 16ème arrondissement "
                Padresse="71 Av. Henri Martin, 75016 Paris" />
            {/* P2 */}
             <ProgrameCard 
                imgsrc="/fleure.png" 
                Pname="houppa & réception"
                Pdate="Mercredi 1er Novembre 2023 à 16h "
                Plocation="Mairie du 16ème arrondissement "
                Padresse="71 Av. Henri Martin, 75016 Paris"
                reverse />
            {/* P3 */}
             <ProgrameCard 
                imgsrc="/shabat.png" 
                Pname="LE SHABBAT"
                Pdate="26 Octobre 2023 à 16h suivi d'un cocktail"
                Plocation="Mairie du 16ème arrondissement "
                Padresse="71 Av. Henri Martin, 75016 Paris" />
        </div>
    </section>
  )
}

export default page