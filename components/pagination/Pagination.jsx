import React from 'react'

const Pagination = () => {
  return (
    <>
         <section className="pb-4">
    <div className="container">
        <nav aria-label="Page navigation example" className="border-top pt-4 d-flex justify-content-center">
            <input type="hidden" className="get_total_record" />
            <ul className="pagination navs">
                <li className="page-item prev">
                    <p className="page-link" aria-label="Previous" data-type="prev">
                        <span aria-hidden="true">&laquo;</span>
                    </p>
                </li>
            </ul>
            <ul className="pagination navs">
              <li className="page-item active">
                  <p className="page-link" >
                      <span aria-hidden="true">1</span>
                  </p>
              </li>
          </ul>
          <ul className="pagination navs">
            <li className="page-item">
                <p className="page-link">
                    <span aria-hidden="true">2</span>
                </p>
            </li>
        </ul>
            <ul className="pagination dotts justify-content-center">
            </ul>
            <ul className="pagination navs">
                <li className="page-item">
                    <p className="page-link" aria-label="Next" data-type="next">
                        <span aria-hidden="true">&raquo;</span>
                    </p>
                </li>
            </ul>
        </nav>
    </div>
</section>
    </>
  )
}

export default Pagination