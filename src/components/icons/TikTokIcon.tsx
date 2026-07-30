type Props = { size?: number; className?: string };

const TikTokIcon = ({ size = 20, className }: Props) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
		focusable="false"
		className={className}
	>
		<path d="M16.5 3c.3 2.1 1.5 3.5 3.5 3.8v2.5c-1.3.1-2.6-.2-3.8-.9v6.1c0 3.4-2.6 5.9-5.9 5.9A5.8 5.8 0 0 1 4.5 14a5.8 5.8 0 0 1 6.4-5.8v2.7a3.1 3.1 0 1 0 2.9 3.1V3h2.7Z" />
	</svg>
);

export default TikTokIcon;
