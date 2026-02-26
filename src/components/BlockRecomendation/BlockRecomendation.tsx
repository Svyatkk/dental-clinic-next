import Link from 'next/link'
import styles from './BlockRecomendation.module.css'
import Image from 'next/image'
import { PAGES } from '@/config/routes'
export default function BlockRecomendation() {

    return (
        <>

            <section className={styles.section_rec}>

                <div className={styles.blocks_recomendation}>
                    <div className={styles.block_1}>
                        <h1>Чому обирають саме нас?
                        </h1>
                        <p>Ми розуміємо, що кожна усмішка унікальна. Тому наші спеціалісти розробляють індивідуальні плани
                            лікування, щоб врахувати всі особливості здоров’я та потреби кожного пацієнта.
                            Ми цінуємо час пацієнтів, тому забезпечуємо зручний графік та можливість попереднього
                            запису, що дозволяє
                            відвідувати стоматолога без черг та зайвого очікування.

                        </p>
                        <Link href={PAGES.ABOUT.path}>Детальніше про нас <span>&#8594;</span></Link>
                    </div>

                    <div className={styles.block_2}>
                        <div className={styles.block_rec}>
                            <Image
                                alt='Безпечність'
                                priority
                                height={90}
                                width={90}
                                src={'https://placehold.co/90x90/png'}
                            />
                            <h3>Безпечність</h3>
                            <p>Ми проводимо ретельну діагностику з огляду на історію хвороби, наявність алергій, супутніх
                                захворювань тощо.</p>
                        </div>

                        <div className={styles.block_rec}>
                            <Image
                                alt='Безпечність'
                                priority
                                height={90}
                                width={90}
                                src={'https://placehold.co/90x90/png'}
                            />
                            <h3>Безболісність</h3>
                            <p>При необхідності лікар ортодонт застосовує ретельно підібраний анестетик та знеболює необхідну
                                ділянку.</p>
                        </div>

                        <div className={styles.block_rec}>
                            <Image
                                alt='Безпечність'
                                priority
                                height={90}
                                width={90}
                                src={'https://placehold.co/90x90/png'}
                            />
                            <h3>Атравматичність</h3>
                            <p>Для Вашої безпеки ми застосовуємо всі застереження, у тому числі стерильні інструменти та витратні
                                матеріали.</p>
                        </div>

                        <div className={styles.block_rec}>
                            <Image
                                alt='Безпечність'
                                priority
                                height={90}
                                width={90}
                                src={'https://placehold.co/90x90/png'}
                            />
                            <h3>Гарантія якості</h3>
                            <p>Наша стоматологія використовує виключно високоякісні матеріали та гарантує їхню довговічність.</p>
                        </div>
                    </div>

                </div>
            </section>

        </>

    )
}