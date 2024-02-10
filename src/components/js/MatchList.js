import MatchDetails from '@/components/MatchDetails.vue'

export default {
  components: {
    MatchDetails
  },
  props: {
    matchCount: {
      type: Number,
      default: 5
    }
  }
}