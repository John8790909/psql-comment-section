import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Login.module.css'
import axios from 'axios'
import Post from '../components/Post'
import type { PostType } from '../types/post_type'
import RegisterForm from '../components/RegisterForm'

type Props = {
  posts: PostType[]
}

const Register = (props: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <RegisterForm />
      </main>
    </div>
  )
}

export default Register

export const getServerSideProps = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/posts')
    return { props: { posts: response.data } }
  } catch (error) {
    console.error(error)
    return {
      props: {
        posts: [{ id: 'poop', title: 'poop', body: 'poop', userId: 'poop' }],
      },
    }
  }
}
