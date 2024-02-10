import games from "../../js/games"

export default {
  props: {
    menuItems: {
      type: Array,
      default: ['Inicio', 'Regras', 'Ao vivo', 'Aplicativo', 'Resultados', 'Conferir Bilhete', 'Contato']
    },
    games: {
      type: Array,
      default: games
    }
  }
}