import { writable } from 'svelte/store';

export const score = writable(0);
export const questionIndex = writable(0);
export const seconds = writable(0);