import { Container } from '@/components/Container'
import { ButtonLink } from './Button'

export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-title"
      className="py-20 sm:py-32"
    >
      <h2 id="sponsors-title" className="sr-only">
        We are looking for Sponsors!
      </h2>
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <p className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-yellow-900 sm:text-5xl">
            We are looking for sponsors!
          </p>
          <p className="mt-10 text-center">
            If you're intererested in sponsoring, please email{' '}
            <a href="mailto:hello@techmids.io" className="underline">
              hello@techmids.io
            </a>{' '}
            for more information
          </p>
          {/*<ul className="mt-20 flex flex-col items-center justify-center space-y-12 sm:flex-row sm:space-x-12 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-12">*/}
          {/*  <li>*/}
          {/*    <ul className="flex flex-col items-center space-y-12 sm:space-y-12 md:flex-row md:space-y-0 md:space-x-16 lg:space-x-32">*/}
          {/*      <li className="flex">*/}
          {/*        <Image*/}
          {/*          src={logoTransistor}*/}
          {/*          alt="Transistor"*/}
          {/*          layout="fixed"*/}
          {/*          unoptimized*/}
          {/*        />*/}
          {/*      </li>*/}
          {/*      <li className="flex">*/}
          {/*        <Image src={logoTuple} alt="Tuple" layout="fixed" unoptimized />*/}
          {/*      </li>*/}
          {/*      <li className="flex">*/}
          {/*        <Image*/}
          {/*          src={logoStaticKit}*/}
          {/*          alt="StaticKit"*/}
          {/*          layout="fixed"*/}
          {/*          unoptimized*/}
          {/*        />*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <ul className="flex flex-col items-center space-y-12 sm:space-y-12 md:flex-row md:space-y-0 md:space-x-16 lg:space-x-32">*/}
          {/*      <li className="flex">*/}
          {/*        <Image*/}
          {/*          src={logoMirage}*/}
          {/*          alt="Mirage"*/}
          {/*          layout="fixed"*/}
          {/*          unoptimized*/}
          {/*        />*/}
          {/*      </li>*/}
          {/*      <li className="flex">*/}
          {/*        <Image*/}
          {/*          src={logoLaravel}*/}
          {/*          alt="Laravel"*/}
          {/*          layout="fixed"*/}
          {/*          unoptimized*/}
          {/*        />*/}
          {/*      </li>*/}
          {/*      <li className="flex">*/}
          {/*        <Image*/}
          {/*          src={logoStatamic}*/}
          {/*          alt="Statamic"*/}
          {/*          layout="fixed"*/}
          {/*          unoptimized*/}
          {/*        />*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </li>*/}
          {/*</ul>*/}
          <ButtonLink
            href="https://ti.to/tech-events-birmingham/tech-mids-conference-2022"
            rel="noopener"
            target="_blank"
            className="mt-10 w-full"
          >
            Get your free tickets
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
