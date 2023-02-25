import { writable } from "svelte/store";

let menuIsOpen = writable<boolean>(false);

function openMenu() {
  menuIsOpen.set(true);
}

function closeMenu() {
  menuIsOpen.set(false);
}

export { menuIsOpen, openMenu, closeMenu };
