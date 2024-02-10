export default {
  props: {
    payment_options: {
      type: Array,
      default: ['pix', 'boleto', 'eco', 'payfun', 'skrill','master', 'bank_transfer', 'visa', 'neteller']
    }
  },
  methods: {
    paymentIconPath (payment) {
      return `/src/assets/img/${payment}.svg`
    }
  }
}