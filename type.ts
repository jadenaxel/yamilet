export type TMenu = {
	name: string;
	link: string;
};

export type TChannelCard = {
	image: string;
	quantity: number;
	title: string;
	category: string;
};

export type TCard = {
	type: string;
	title: string;
	image: string;
	description?: string;
};
