import { Disclosure } from '@headlessui/react';
import { useNavigate } from '@tanstack/react-location';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div className="mb-12">
          <div
            className="fixed opacity-70 hover:opacity-100 top-0 z-40 px-4 bg-white shadow max-w-screen-2xl dark:bg-white"
            style={{ width: '100%' }}
          >
            <div className="flex justify-between h-16">

              {/* Navigation Links */}
              <div className="flex">

                <div
                  role="link"
                  tabIndex={0}
                  className="flex items-center flex-shrink-0 cursor-pointer ml-auto"
                  onClick={() => {
                    navigate({ to: '/home' });
                  }}
                >
                  <p className='text-black'>Home</p>
                </div>

                <div
                  role="link"
                  tabIndex={0}
                  className="flex items-center flex-shrink-0 cursor-pointer ml-4"
                  onClick={() => {
                    navigate({ to: '/about' });
                  }}
                >
                  <p className='text-black'>About</p>
                </div>
                
                <div
                  role="link"
                  tabIndex={0}
                  className="flex items-center flex-shrink-0 cursor-pointer ml-4"
                  onClick={() => {
                    navigate({ to: '/help' });
                  }}
                >
                  <p className='text-black'>Help</p>
                </div>

              </div>

              {/* App Logo */}
              <div
                role="link"
                tabIndex={0}
                className="flex items-center flex-shrink-0 cursor-pointer"
                onClick={() => {
                  navigate({ to: '/' });
                }}
              >
                <img className="h-10 w-15" src="src\assets\hiking.png" alt="Website's Logo"/>
              </div>

            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}