import { DarkThemeToggle, Navbar } from 'flowbite-react';
import { UserDropdown } from './UserDropdown';
import { Link } from 'react-router-dom';



export const MainNavbar = () => {
	return (
		<div>
			<Navbar rounded border>
				<Navbar.Brand>
					<img
						alt='JD Logo'
						className='mr-3 h-6 sm:h-9'
						src='https://assets.stickpng.com/images/5a1ac600f65d84088faf1347.png'
					/>
					<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
						TurnsApp
					</span>
				</Navbar.Brand>

				<div className='flex md:order-2 gap-3'>
					<DarkThemeToggle />
					<UserDropdown />
					<Navbar.Toggle />
				</div>
				<Navbar.Collapse>
					<Navbar.Link active >
						<Link to="/">Home</Link>
					</Navbar.Link>
					<Navbar.Link >
						<Link to="/">Services</Link>
					</Navbar.Link>
					<Navbar.Link >
						<Link to="/">Pricing</Link>
					</Navbar.Link>
					<Navbar.Link >
						<Link to="/">Contact</Link>
					</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
