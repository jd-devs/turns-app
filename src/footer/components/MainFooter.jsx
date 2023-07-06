import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faGithub,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { Footer } from 'flowbite-react';

export const MainFooter = () => {
	return (
		<Footer container>
			<div className='w-full '>
				<div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 lg:container mx-auto'>
					<div>
						<Footer.Brand
							alt='Flowbite Logo'
							href='https://flowbite.com'
							name='Flowbite'
							src='https://flowbite.com/docs/images/logo.svg'
						/>
					</div>
					<div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
						<div>
							<Footer.Title title='about' />
							<Footer.LinkGroup col>
								<Footer.Link href='#'>Flowbite</Footer.Link>
								<Footer.Link href='#'>Tailwind CSS</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title='Follow us' />
							<Footer.LinkGroup col>
								<Footer.Link href='#'>Github</Footer.Link>
								<Footer.Link href='#'>Discord</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title='Legal' />
							<Footer.LinkGroup col>
								<Footer.Link href='#'>Privacy Policy</Footer.Link>
								<Footer.Link href='#'>Terms & Conditions</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
				<Footer.Divider />
				<div className='w-full sm:flex sm:items-center sm:justify-between lg:container mx-auto'>
					<Footer.Copyright by='Flowbite™' href='#' year={2022} />
					<div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
						<FontAwesomeIcon icon={faFacebook} />
						<FontAwesomeIcon icon={faInstagram} />
						<FontAwesomeIcon icon={faTwitter} />
						<FontAwesomeIcon icon={faGithub} />
					</div>
				</div>
			</div>
		</Footer>
	);
};
