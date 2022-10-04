import Chart from "../components/Chart"
import Table from "../components/Table"

const Home = () => {
  return (
    <div>
      {/* top section */}
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>Dashboard</h1>
        <div className='btn-toolbar mb-2 mb-md-0'>
          <div className='btn-group me-2'>
            <button type='button' className='btn btn-sm btn-outline-secondary'>
              Share
            </button>
            <button type='button' className='btn btn-sm btn-outline-secondary'>
              Export
            </button>
          </div>
          <button
            type='button'
            className='btn btn-sm btn-outline-secondary dropdown-toggle'
          >
            <span data-feather='calendar' className='align-text-bottom' />
            This week
          </button>
        </div>
      </div>

      {/* quick card */}
      <div className='row'>
        <div className='col-xl-3 col-md-6'>
          <div className='card bg-primary text-white mb-4'>
            <div className='card-body'>Primary Card</div>
            <div className='card-footer d-flex align-items-center justify-content-between'>
              <a className='small text-white stretched-link' href='#'>
                View Details
              </a>
              <div className='small text-white'>
                <i className='fas fa-angle-right' />
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-md-6'>
          <div className='card bg-warning text-white mb-4'>
            <div className='card-body'>Warning Card</div>
            <div className='card-footer d-flex align-items-center justify-content-between'>
              <a className='small text-white stretched-link' href='#'>
                View Details
              </a>
              <div className='small text-white'>
                <i className='fas fa-angle-right' />
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-md-6'>
          <div className='card bg-success text-white mb-4'>
            <div className='card-body'>Success Card</div>
            <div className='card-footer d-flex align-items-center justify-content-between'>
              <a className='small text-white stretched-link' href='#'>
                View Details
              </a>
              <div className='small text-white'>
                <i className='fas fa-angle-right' />
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-md-6'>
          <div className='card bg-danger text-white mb-4'>
            <div className='card-body'>Danger Card</div>
            <div className='card-footer d-flex align-items-center justify-content-between'>
              <a className='small text-white stretched-link' href='#'>
                View Details
              </a>
              <div className='small text-white'>
                <i className='fas fa-angle-right' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* chart */}
      {/* <Chart /> */}
      <Table />

    </div>
  )
}

export default Home
