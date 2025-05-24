import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/companionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Home = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Dashboard</h1>
      <section className='home-section'>
        <CompanionCard 
          id="123" 
          name="Neura the Brainy Explorer"
          topic="Neural Networks of the Brain"
          subject="science"
          duration={45}
          color="#E5D0FF"
        />
        <CompanionCard
          id="456" 
          name="Algebrina, the Eq Queen"
          topic="Solving Linear Equations"
          subject="maths"
          duration={20}
          color="#FE5933"
        />
        <CompanionCard
          id="789" 
          name="Luna, Your Grammar Guide"
          topic="Mastering Tenses in English"
          subject="Language"
          duration={30}
          color="#BDE7FF"
        />
      </section>

      <section className='home-section'>
        <CompanionsList
          title="Recently competed lessons"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Home 