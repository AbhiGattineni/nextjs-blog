import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

import ProfilePic from './profilePic'

export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>This Title</title>
                </Head>
            <h1>First post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <ProfilePic />
        </Layout>
    )
}