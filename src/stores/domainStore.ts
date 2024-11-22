import { writable } from "svelte/store";

let domain: string = "";
export const currentDomain = writable(domain);