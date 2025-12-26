import { WorkshopContext } from '@/app/(panel)/adm_panel/beat_workshop/context/workshop.context';
import { AdmPnlBtns } from '@/components/index';
import { Beat } from '@/interfaces/Products.interface';
import { useContext } from 'react';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import cn from 'classnames';

export const WSBtns = ({isHovered}: {beat?: Beat, isHovered: boolean})=> {
	const { setBeatWindowVisibility } = useContext(WorkshopContext);
	const width = useWindowWidth();
	const size = width <= 580 ? 'small' : 'middle';

	return (
		<div className={cn(
			'flex gap-1', {
			['opacity-60']: isHovered
		})}>
			<AdmPnlBtns
				size={size}
				func='modify'
				extend_group_items
				setClick={setBeatWindowVisibility}
			/>

			<AdmPnlBtns
				size={size}
				func='delete'
				extend_group_items
				setClick={setBeatWindowVisibility}
			/>
		</div>
	)
}