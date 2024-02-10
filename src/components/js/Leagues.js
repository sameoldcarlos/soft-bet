export default {
  props: {
    leaguesTitle: {
      type: String,
      default: ''
    },
    countries: {
      type: Array,
      default: []
    },
    styleHeight: {
      type: String,
      default: 'height: auto;'
    }
  },
  methods: {
    flagPath (country) {
      const normalizedCountry = country.toLowerCase().replaceAll(" ", "-").normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      return `/src/assets/img/flag-${normalizedCountry}.png`
    }
  }
}