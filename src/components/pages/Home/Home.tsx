import { FC } from 'react'

import styles from './Home.module.css'

import HomeAdvantages from '@/components/pages/Home/HomeAdvantages/HomeAdvantages'
import HomeIntro from '@/components/pages/Home/HomeIntro/HomeIntro'

const Home: FC = () => {
    return <main className='container'>
        <HomeIntro />
        <HomeAdvantages />
    </main>
}

export default Home