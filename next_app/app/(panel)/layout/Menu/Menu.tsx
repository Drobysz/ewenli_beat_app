import cn from 'classnames';
import { Title, Nav } from './components/index';

export const Menu = ()=> {
	return (
		<aside className={cn(
			'bg-dark-blue p-2',
			'overflow-hidden',
			'flex flex-col gap-20' 
		)}>
			<Title />
			<Nav />
		</aside>
	)
}