import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CovidPolicy } from '@/components/CovidPolicy'

export default function Covid() {
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
        <CovidPolicy />
      </main>
      <Footer />
    </>
  )
}
