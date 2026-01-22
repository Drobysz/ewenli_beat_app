'use client'

import { Menu } from "./layout/Menu/Menu";
import styles from "./layout/PanelLayout.module.scss";
import { PanelContextProvider } from "./context/panel.context";
import { useContext } from "react";
import { PanelContext } from "./context/panel.context";
import { Player } from "@/components/index";
import cn from 'classnames';

type WithCSSVar<T extends string> = React.CSSProperties & Record<T, string>;

export default function PanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
	<PanelContextProvider>
		<InnerLayout>
			{children}
		</InnerLayout>
	</PanelContextProvider>
  );
}

function InnerLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isMenuOpened } = useContext(PanelContext);
	const gridStyle: WithCSSVar<'--menu'> = {
		'--menu': isMenuOpened ? '30%' : '50px',
	};

	return (
		<div 
			className={cn(
				styles.wrapper,
				'transition-all duration-500 relative',
				`grid-cols-[var(--menu)_minmax(200px,1fr)]`
			)}
			style={gridStyle}
		>
			<Player />
			<Menu />
			<section className="bg-[#d9d9d9]">
				{children}
			</section>
		</div>
	)
}