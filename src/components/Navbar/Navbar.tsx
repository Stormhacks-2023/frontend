/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Disclosure } from '@headlessui/react';
import { useLocation, useNavigate } from '@tanstack/react-location';

export default function Navbar() {
  const navigate = useNavigate();
  // const location = useLocation();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div className="mb-12 bg-black">
          <div
            className="fixed top-0 z-40 px-4 shadow max-w-screen-2xl"
            style={{ width: '100%' }}
          >
            <div className="flex justify-between h-16">
              <div className="flex">
                
                  <p className='text-white'>Navbar</p>
            
              </div>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}