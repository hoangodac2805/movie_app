import Container from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import notfound from "@/assets/img/404.svg"
import styles from "@/styles/pages/_notfound.module.scss"
export default function NotFound() {
  return (
    <main className={styles.nf}>
      <Container>
        <Image className={styles.nf} src={notfound} alt='notfound' />
        <h2 className={styles.nf_head}>Lost your way?</h2>
        <p className={styles.nf_sub}>Oops! This is awkward. You are looking for something that doesn't actually exist.</p>
        <Link className={styles.nf_btn} href={"/"}>Go Home</Link>
      </Container>
    </main>
  )
}