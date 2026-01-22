import { Beat, Categories } from "@/interfaces/Products.interface";

export interface BeatToModify {
	beat:  Beat;
	image: string;
	audio: string;
}

export const sample = { 
	beat: {
		name: '',
		id: 0,
		categories: Categories.Digicore, 
		prices: {mp3: 0, wav: 0, trackout: 0}
	},
	image: '', 
	audio: '', 
};