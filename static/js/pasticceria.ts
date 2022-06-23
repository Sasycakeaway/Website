import { onMount } from "svelte";
import { pusha, initcart } from "./cart";
import { dialogs, PromptOptions } from "svelte-dialogs";
const opts: PromptOptions = {
  title: "",
  text: "",
  titleClass: "",
  closeButton: false,
  closeOnBg: true,
  onShow: () => {},
  onHidden: () => {},
  onHide: () => {},
  onShown: () => {},
  transitions: {
    in: {
      transition: "blur",
      props: {
        duration: 80,
      },
    },
  },
};
export function initpage() {
  onMount(() => {
    initcart();
    if (
      /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)
    ) {
    } else {
      document.getElementById("card").style.width = "60%";
    }
  });
}

export function biscotti(e) {
  dialogs
    .prompt("Quanti sacchetti da 250G vuoi ordinare?", opts)
    .then((output) => {
      try {
        pusha(e.path[0].id, output[0], 5);
      } catch (error) {
        console.log(error);
      }
    });
}

export function pezzi(e) {
  dialogs
    .prompt("Quanti " + e.path[0].id + " vuoi ordinare?")
    .then((output) => {
      try {
        pusha(e.path[0].id, output[0], 5);
      } catch (error) {}
    });
}

export function apebox(e) {
  dialogs.prompt("Quanti box vuoi ordinare?").then((output) => {
    try {
      switch (e.path[0].id) {
        case "Benvenuti al nord":
          pusha(e.path[0].id, output[0], 12);
          break;
        case "Il vegetariano":
          pusha(e.path[0].id, output[0], 12);
          break;
        case "Il trasformista":
          pusha(e.path[0].id, output[0], 18);
          break;
        default:
          pusha(e.path[0].id, output[0], 15);
          break;
      }
    } catch (error) {
      console.log(error);
    }
  });
}
