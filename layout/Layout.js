import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Admin Center</title>
      </Head>

      <main>{children}</main>
    </>
  )
}

export default Layout
