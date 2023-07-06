import { DarkThemeToggle, Navbar } from 'flowbite-react';
import { UserDropdown } from './UserDropdown';

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
					<Navbar.Link active href='#'>
						<p>Home</p>
					</Navbar.Link>

					<Navbar.Link href='#'>Services</Navbar.Link>
					<Navbar.Link href='#'>Pricing</Navbar.Link>
					<Navbar.Link href='#'>Contact</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
