'use client'

import styles from './OurSpecialists.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCoverflow } from 'swiper/modules'
import { specialists } from '@/data/specialists.data'
import Link from 'next/link'
import { PAGES } from '@/config/routes'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

export default function OurSpecialists() {



    return (
        <div className={styles.block}>
            <div className={styles.text}>
                <h1>Про спеціалістів нашої кліники
                </h1>
                <p>У нашій клініці працює колектив висококваліфікованих лікарів-стоматологів, які віртуозно володіють інноваційними методами діагностики та лікування, що дозволяє боротися навіть з найважчими захворюваннями та повертати пацієнтам здорове життя і сяючу усмішку.

                </p>
                <Link href={PAGES.ABOUT.path}>Детальніше про нас <span>&#8594;</span></Link>


            </div>

            <div className={styles.wrapper}>
                <Swiper
                    modules={[Navigation, EffectCoverflow]}
                    effect="coverflow"
                    centeredSlides
                    slidesPerView={3}
                    navigation
                    loop
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    className={styles.swiper}
                >
                    {specialists.map((item, index) => (

                        <SwiperSlide key={index}>
                            <div className={styles.card}>

                                <div className={styles.kolo}>
                                    <div className={styles.imageWrapper}>
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                </div>


                                <h3>{item.name}</h3>
                                <p>{item.role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    )
}