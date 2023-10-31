import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Hero } from '@/components/sections/Hero'
import Head from "next/head";
import { IntlProvider, useIntl } from 'react-intl'
import English from "../../content/compiled-locales/en.json";
import Japanese from "../../content/compiled-locales/ja.json";
import { BannedInChina } from '@/components/sections/BannedInChina'
import { DamusOnMedia } from '@/components/sections/DamusOnMedia';
import { MeetTheTeam } from '@/components/sections/MeetTheTeam';
import { DamusAroundTheWorld } from '@/components/sections/DamusAroundTheWorld';
import { Footer } from '@/components/sections/Footer';
import { DamusLiveEvents } from '@/components/sections/DamusLiveEvents';
import { Contribute } from '@/components/sections/Contribute';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Benefits } from '@/components/sections/Benefits';
import { Home } from '@/components/pages/home';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (<>
    <IntlProvider
            locale={"en"}
            messages={English}
            onError={() => null}>
      <Home/>
    </IntlProvider>
  </>)
}
