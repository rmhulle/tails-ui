import React, { Children } from 'react'

import PropTypes from 'prop-types'

const Navbar = ({ brand, logo, children }) => (
  <div className="bg-blue text-white h-24 flex flex-col">
    <div className="flex justify-center items-center">
      <div className="mt-4 flex p-2 justify-between items-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="text-2xl">{brand}</div>
        {logo ? (
          logo
        ) : (
          <svg width="32 " height="32" viewBox="0 0 32 32" fill="white">
            <path d="M6 16c0-0.381 0.022-0.756 0.063-1.126l-5.781-1.878c-0.185 0.973-0.283 1.977-0.283 3.004 0 4.601 1.943 8.748 5.052 11.666l3.571-4.916c-1.629-1.779-2.623-4.149-2.623-6.751zM26 16c0 2.602-0.994 4.972-2.623 6.751l3.571 4.916c3.109-2.919 5.052-7.065 5.052-11.666 0-1.027-0.098-2.031-0.283-3.004l-5.781 1.878c0.041 0.37 0.063 0.745 0.063 1.126zM18 6.2c2.873 0.583 5.298 2.398 6.702 4.87l5.781-1.878c-2.287-4.857-6.945-8.377-12.482-9.067v6.076zM7.298 11.070c1.403-2.471 3.829-4.286 6.702-4.87v-6.076c-5.537 0.691-10.195 4.21-12.482 9.067l5.78 1.878zM20.142 25.104c-1.262 0.575-2.665 0.896-4.142 0.896s-2.88-0.321-4.142-0.896l-3.572 4.916c2.288 1.261 4.917 1.98 7.714 1.98s5.426-0.719 7.714-1.98l-3.572-4.916z" />
          </svg>
        )}
      </div>
    </div>
    <div className="mt-2 p-4 flex justify-center w-full overflow-x-scroll">
      {Children.map(children, child => {
        return React.cloneElement(child, {
          className: 'text-white p-1'
        })
      })}
    </div>
  </div>
)

Navbar.propTypes = {
  brand: PropTypes.string,
  logo: PropTypes.node,
  children: PropTypes.node
}

export default Navbar