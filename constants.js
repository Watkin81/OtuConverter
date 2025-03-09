import { extract } from './util.js';

const MAP_ID = 30; // only use numbers 1 - 30 to avoid issue. this MUST be 30 for the public map importer.
const MAP_PATH = 'maps/bz_click.osu'; // .osu file of the map
const MAP_SONG_ID = '0'; // songID of the song to be used with the map

	// 1 bz: 10008723
	// 2 cf: 10008764
	// 3 cr: 938116
	// 4 fd: 10008733
	// 5 hd: 10008850
	// 6 ga: 1365542
	// 7 os: 1317577
	// 8 xx: x
	// 9 xx: x
	// 10 xx: x

let stars = 0.00; // initilaize
switch (MAP_PATH) {
	case 'maps/bz_cinna_1.osu':
		stars = 2.19; break;
	case 'maps/bz_cinna_2.osu':
		stars = 2.94; break;
	case 'maps/bz_click.osu':
		stars = 9.05; break;
	case 'maps/cf_haerin.osu':
		stars = 4.88; break;
	case 'maps/cf_sheppsu.osu':
		stars = 7.18; break;
	case 'maps/cf_snoweye.osu':
		stars = 1.81; break;
	case 'maps/cr_mentally.osu':
		stars = 4.97; break;
	case 'maps/fd_aika.osu':
		stars = 7.27; break; // 7.18 technically but this is funnier :D
	case 'maps/fd_doops.osu':
		stars = 5.57; break;
	case 'maps/hd_amateurre.osu':
		stars = 6.51; break;
	case 'maps/hd_sushi.osu':
		stars = 5.22; break;
	case 'maps/ga_akiri.osu':
		stars = 5.31; break;
	case 'maps/ga_cinna.osu':
		stars = 3.47; break;
	case 'maps/os_faw.osu':
		stars = 5.21; break;
	case 'maps/os_paka.osu':
		stars = 5.92; break;
	default:
		stars = 5.00;
} // 4.98 average

extract({
	//#// File & Level Path //#//
	PATH: MAP_PATH, // .osu file name
	OUTPUT_MAP: '', // gd level NAME to output to
	SONG_ID: MAP_SONG_ID, // songID of the song to be used with the map
	STAR_DIFFICULTY: stars,
	REPLACE_OLD_CHART: true, // remove CHART_GROUP objects (always should be true)
	CHART_GROUP: (8000 + MAP_ID),

	//#// Dev Manual Entry //#//
	// Please refer to the spreadsheet for what these values should be!
	MAP_ORDERED_GROUP: (3260 + MAP_ID), // id of spawn ordered data - 3261 to 3290 XXX
	DATA_MENU_GROUP: (3290 + MAP_ID), // id of menu data to be spawned in menu - 3291 to 3320 XXX
	BPM_DATA_GROUP: (3320 + MAP_ID), // id of the bpm moves for this map - 3321 to 3350 (3220 OLD)
	SONG_SPAWN_GROUP: (3390 + MAP_ID), // id of the groups that spawn the song triggers - 3391 to 3420 xxx
	ROTATE_SPAWN_GROUP: (4100 + MAP_ID), // id that spawns the rotate triggers - 4101 to 4130 xxx
	MAP_TOGGLE_GROUP_NEW: (4200 + MAP_ID), // id that spawns the rotate triggers - 4201 to 4230 xxx
	X_OFFSET: 20000, // right of all objects and triggers
	Y_OFFSET: (750 * MAP_ID), // maps are 22 blocks tall, round to 25 for space. 25*30=750 increments.
	MAP_INDEX: MAP_ID, // set here to be used in index.js
	// we shouldn't have groups 

	//#// Block/Trigger IDs and Constants //#//
	MOVE_TRIGGER_ID: 901,
	TOGGLE_TRIGGER_ID: 1049,
	SPAWN_TRIGGER_ID: 1268,
	ROTATE_TRIGGER_ID: 1346,
	PICKUP_TRIGGER_ID: 1817,
	SONG_TRIGGER_ID: 1934,
	SCALE_TRIGGER_ID: 2067,
	ITEM_EDIT_TRIGGER_ID: 3619,
	CURSOR_GROUP: 107, // id of the cursor that goes to the notes
	BPM_OFF_GROUP: 8000, // toggles bpm groups to be default off, they toggle on when map starts

	//#// Game Constants //#//
	X_VELOCITY_BPS: 10.3853853854 // We love Robert Topala game so very much!
});