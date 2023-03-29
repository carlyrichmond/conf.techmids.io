import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Meetups } from '@/components/Meetups'
import { Sponsors } from '@/components/Sponsors'
import { Images } from '@/components/Images'

export default function Home() {
  return (
    <>
      <Head>
        <title>TechMids Conf - A community-driven tech conference</title>
        <meta
          name="description"
          content="TechMids Conf is an all day, full stack conference on Fri Oct 14th 2022! Come along for a day of inspiring talks, social chatter and fun."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Images />
        <Schedule />
        <Speakers />
        <Sponsors />
        <Meetups />
      </main>
      <Footer />
    </>
  )
}
