import * as Discord from "discord.js";

// Common constants
export const MINUTE = 1000 * 60;

export const pepereally = "<:pepereally:643881257624666112>";

export const color = 0x337fd5;
export const alert_color = 0xf5a53e;
export const speedrun_color = 0x0fc644;

// User IDs
export const zelis_id = "199943082441965577";
export const wheatley_id = "597216680271282192";
export const illuminator_id = "391270706186420224";

// Role IDs
export const moderators_role_id = "847915341954154536";
export const root_role_id = "331719468440879105";
export const pink_role_id = "888158339878490132";
export const no_off_topic = "879419994004422666";

// Channel/Guild IDs
export const TCCPP_ID = "331718482485837825";
export const member_log_channel_id = "875681819662622730";
export const welcome_channel_id = "778017793567490078";
export const server_suggestions_channel_id = "802541516655951892";
export const suggestion_dashboard_thread_id = "908928083879415839";
export const suggestion_action_log_thread_id = "909309608512880681";
export const action_log_channel_id =
	"845290775692443699"; // TCCPP #staff_action_log
//	"542042995147407375"; // test server #1

// General config

export const authorized_admin_roles = [
	moderators_role_id,
	root_role_id
];

export const root_ids = new Set([
	"199943082441965577", // zelis
	"272564879716646914", // aspi
	"162964325823283200", // eisen
	"110756651694297088", // vincent
	"190522027440865280", // not a penguin - allegedly
	"89441674844995584",  // styx
	"597216680271282192", // wheatley <- so that Wheatly reactions aren't removed in server suggestions and also allow some elegant handling
]);

// Some common tools
export function is_root(user: Discord.User | Discord.PartialUser): boolean {
	//return member.roles.cache.some(r => r.id == root_role_id);
	return root_ids.has(user.id);
}

export function is_authorized_admin(member: Discord.GuildMember): boolean {
	return member.roles.cache.some(r => authorized_admin_roles.indexOf(r.id) > -1);
}
