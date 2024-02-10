import Leagues from '@/components/Leagues.vue'
import MatchCarousel from '@/components/MatchCarousel.vue'
import Calendar from '@/components/Calendar.vue'
import MatchList from '@/components/MatchList.vue'
import Coupon from '@/components/Coupon.vue'

export default {
  components: {
    Leagues,
    MatchCarousel,
    Calendar,
    MatchList,
    Coupon
  },
  data () {
    return {
      mainLeaguesList: ['África do Sul', 'Albânia', 'Ucrânia', 'Arábia Saudita', 'Argentina'],
      otherLeaguesList: ['Austrália', 'Áustria', 'Bélgica', 'Rússia', 'Brasil', 'Hungria', 'Chile', 'China', 'Chipre', 'Colômbia', 'Croácia', 'Dinamarca']
    }
  }
}