import { writable } from 'svelte/store';
import { links } from '../utils';
const activeLink = writable(links.home);
export default activeLink;
