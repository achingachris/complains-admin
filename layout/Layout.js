import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Admin Center</title>
      </Head>
      <header className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
        <a className='navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6' href='#'>
          Company name
        </a>
        <button
          className='navbar-toggler position-absolute d-md-none collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#sidebarMenu'
          aria-controls='sidebarMenu'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <input
          className='form-control form-control-dark w-100 rounded-0 border-0'
          type='text'
          placeholder='Search'
          aria-label='Search'
        />
        <div className='navbar-nav'>
          <div className='nav-item text-nowrap'>
            <a className='nav-link px-3' href='#'>
              Sign out
            </a>
          </div>
        </div>
      </header>
      <div className='container-fluid'>
        <div className='row'>
          <nav
            id='sidebarMenu'
            className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'
          >
            <div className='position-sticky pt-3 sidebar-sticky'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>
                    <span data-feather='home' className='align-text-bottom' />
                    Dashboard
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span data-feather='file' className='align-text-bottom' />
                    Orders
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span
                      data-feather='shopping-cart'
                      className='align-text-bottom'
                    />
                    Products
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span data-feather='users' className='align-text-bottom' />
                    Customers
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span
                      data-feather='bar-chart-2'
                      className='align-text-bottom'
                    />
                    Reports
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span data-feather='layers' className='align-text-bottom' />
                    Integrations
                  </a>
                </li>
              </ul>
              <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase'>
                <span>Saved reports</span>
                <a
                  className='link-secondary'
                  href='#'
                  aria-label='Add a new report'
                >
                  <span
                    data-feather='plus-circle'
                    className='align-text-bottom'
                  />
                </a>
              </h6>
              <ul className='nav flex-column mb-2'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span
                      data-feather='file-text'
                      className='align-text-bottom'
                    />
                    Current month
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span
                      data-feather='file-text'
                      className='align-text-bottom'
                    />
                    Last quarter
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span
                      data-feather='file-text'
                      className='align-text-bottom'
                    />
                    Social engagement
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span
                      data-feather='file-text'
                      className='align-text-bottom'
                    />
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
