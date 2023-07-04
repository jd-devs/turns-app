import {
	Button,
	Navbar,
	Checkbox,
	Label,
	TextInput,
	Flowbite,
	DarkThemeToggle,
} from 'flowbite-react';

export function NavbarWithCTAButton() {
	return (
		<Navbar fluid rounded>
			<Navbar.Brand href='https://flowbite-react.com'>
				<img
					alt='Flowbite React Logo'
					className='mr-3 h-6 sm:h-9'
					src='/favicon.svg'
				/>
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					Flowbite React
				</span>
			</Navbar.Brand>
			<div className='flex md:order-2'>
				<Button>Get started</Button>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link active href='#'>
					<p>Home</p>
				</Navbar.Link>
				<Navbar.Link href='#'>About</Navbar.Link>
				<Navbar.Link href='#'>Services</Navbar.Link>
				<Navbar.Link href='#'>Pricing</Navbar.Link>
				<Navbar.Link href='#'>Contact</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}

function App() {
	return (
		<>
			<Flowbite>
				<NavbarWithCTAButton></NavbarWithCTAButton>
				<form className='flex max-w-md flex-col gap-4'>
					<div>
						<div className='mb-2 block'>
							<Label htmlFor='email1' value='Your email' />
						</div>
						<TextInput
							id='email1'
							placeholder='name@flowbite.com'
							required
							type='email'
						/>
					</div>
					<div>
						<div className='mb-2 block'>
							<Label htmlFor='password1' value='Your password' />
						</div>
						<TextInput id='password1' required type='password' />
					</div>
					<div className='flex items-center gap-2'>
						<Checkbox id='remember' />
						<Label htmlFor='remember'>Remember me</Label>
					</div>
					<Button type='submit'>Submit</Button>
				</form>
				<Button className='my-5 mx-auto bg-fuchsia-600 shadow-2xl shadow-slate-500 hover:bg-red-600'>
					Boton GoD
				</Button>
				<DarkThemeToggle />
			</Flowbite>
		</>
	);
}

export default App;
