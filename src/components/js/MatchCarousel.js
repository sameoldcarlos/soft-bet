import MatchCard from "@/components/MatchCard.vue"

export default {
  components: {
    MatchCard
  },
  props: {
    cardCount: {
      type: Number,
      default: 9
    }
  },
  data() {
    return {
      pageCount: Math.ceil(this.cardCount/4),
      currentPage: 1,
      translateAmount: 0
    }
  },
  computed: {
    contentStyle () {
      return `width: ${100 * this.pageCount}%; transform: translateX(-${this.translateAmount}px);`
    }
  },
  methods: {
    translate (direction) {
      direction === 'prev' ? (this.currentPage--) : (this.currentPage++)
      this.translateAmount = (this.currentPage - 1) * 1080
    }
  }
}
