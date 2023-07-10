import { Avatar, Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

export const UserDropdown = () => {
	return (
		<Dropdown
			inline
			label={
				<Avatar
					alt='User settings'
					img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
					rounded
				/>
			}>

			<Dropdown.Header>
				<span className='block text-sm'>Bonnie Green</span>
				<span className='block truncate text-sm font-medium'>
					name@flowbite.com
				</span>
			</Dropdown.Header>


			<Dropdown.Item>
				<Link
					to="/turns"
				>
					Take turn
				</Link>
			</Dropdown.Item>

			<Dropdown.Item>
				<Link

					to="/dashuser"
				>
					Dashboard User
				</Link>
			</Dropdown.Item>

			<Dropdown.Item>

				<Link

					to="/dashadmin"
				>
					DashBoard Admin
				</Link>

			</Dropdown.Item>
	
			<Dropdown.Divider />
			<Dropdown.Item>Sign out</Dropdown.Item>

		</Dropdown>
	);
};
