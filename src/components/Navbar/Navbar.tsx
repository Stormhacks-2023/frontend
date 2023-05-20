import { Disclosure } from '@headlessui/react';
import { useLocation, useNavigate } from '@tanstack/react-location';

export default function Navbar() {
  const navigate = useNavigate();
  // const location = useLocation();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div className="mb-12">
          <div
            className="fixed top-0 z-40 px-4 bg-white shadow max-w-screen-2xl dark:bg-white"
            style={{ width: '100%' }}
          >
            <div className="flex justify-between h-16">
              <div className="flex">
                <div
                  role="link"
                  tabIndex={0}
                  className="flex items-center flex-shrink-0 cursor-pointer"
                  onClick={() => {
                    navigate({ to: '/' });
                  }}
                >
                  <p className='text-white'>Navbar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}