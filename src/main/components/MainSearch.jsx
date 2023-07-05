import { TextInput } from 'flowbite-react';

export const MainSearch = ({ className }) => {
	return (
		<div className={className}>
			<TextInput sizing='lg' type='text' placeholder='Ubicacion' />
			<TextInput sizing='lg' type='text' placeholder='Local' />
		</div>
	);
};
