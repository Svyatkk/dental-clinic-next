import { PAGES } from '@/config/routes'
import styles from './Breadcrumbs.module.css'
import Link from 'next/link'

type Props = {
    page?: string,
    childName?: string
}

export default function Breadcrumbs({ page, childName }: Props) {


    let pagePath = "/";
    if (page === PAGES.SERVICES.name) pagePath = PAGES.SERVICES.path;
    if (page === PAGES.ABOUT.name) pagePath = PAGES.ABOUT.path;

    return (
        <div className={styles.block}>

            <Link href={PAGES.MAIN.path}>{PAGES.MAIN.name}</Link>

            {page && (
                <>
                    {' / '}
                    {childName ? <Link href={pagePath}>{page}</Link> : <span>{page}</span>}


                </>
            )}


            {childName && (
                <>
                    {' / '}
                    <span>{childName}</span>
                </>
            )}
        </div>
    )
}