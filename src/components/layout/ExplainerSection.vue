<template>
  <div class="pt-8" ref="explainer">
    <div class="relative w-full pb-60">
      <div 
        class="
        absolute
        object-cover object-center opacity-50
        w-full h-full explainer-bg
        "
      >
      </div>
      <div class="w-5/6 md:w-full max-w-screen-lg mx-auto px-8 lg:px-4">
        <div class="md:grid md:grid-flow-row-dense md:grid-cols-2 md:gap-16 md:items-center">
          <div class="md:col-start-1">
            <img :src="images.logo" alt="Frabric" class="w-1/2 mb-8">
            <h3 class="text-3xl font-extrabold text-gray-300 tracking-tight sm:text-4xl">
              Buying property doesn’t have to be complicated
            </h3>
            <p class="mt-3 text-lg text-gray-500">
              With the Frabric network you can become a property owner within seconds.
            </p>
          </div>

          <div class="mt-10 -mx-4 relative md:mt-0 md:col-start-2">
            <ul class="space-y-3">
              <li 
                v-for="(item, i) in explainer.investing.steps" :key="item" 
                class="
                bg-gray-700 bg-opacity-50 border-0 border-white shadow-green-foam-glow w-full overflow-hidden rounded-md px-6 py-8"
              >
                <div class="flex flex-row items-start justify-start">
                  <div class="w-6-h-6 mr-4">
                    <svg v-if="i == 0"
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <svg v-if="i == 1"
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                    <svg v-if="i == 2"
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="font-normal text-lg">
                    {{ item }}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-24">
          <img :src="images.ideaScheme" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExplainerSection',
  components: {
    
  },
  data() {
    return {
      images: {
        logo: require('@/assets/logo/full/frabric_logo_full-white.png'),
        ideaScheme: require('@/assets/pics/frabric_explainer_scheme1.png')
      },
      explainer: {
        investing: {
          steps: [
            "Find the property you like on the Frabric marketplace", 
            "Buy tokens directly with your crypto wallet", 
            "Direct your investment along with other investors via Decentralized Autonomous Organization"
          ]
        }
      },
    }
  },
}
</script>

<style scoped>
.explainer-bg {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='440' height='440' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='2'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='769' cy='229' r='21'/%3E%3Ccircle cx='539' cy='269' r='21'/%3E%3Ccircle cx='603' cy='493' r='21'/%3E%3Ccircle cx='731' cy='737' r='21'/%3E%3Ccircle cx='520' cy='660' r='21'/%3E%3Ccircle cx='309' cy='538' r='21'/%3E%3Ccircle cx='295' cy='764' r='21'/%3E%3Ccircle cx='40' cy='599' r='21'/%3E%3Ccircle cx='102' cy='382' r='21'/%3E%3Ccircle cx='127' cy='80' r='21'/%3E%3Ccircle cx='370' cy='105' r='21'/%3E%3Ccircle cx='578' cy='42' r='21'/%3E%3Ccircle cx='237' cy='261' r='21'/%3E%3Ccircle cx='390' cy='382' r='21'/%3E%3C/g%3E%3C/svg%3E");
  mask-image: 
    radial-gradient(at 10% 50%, rgba(0,0,0,0.10) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 20% 40%, rgba(0,0,0,0.10) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 90% 70%, rgba(0,0,0,0.10) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 70% 80%, rgba(0,0,0,0.10) 5%, rgba(0,0,0,0) 15%)
    ;
}
</style>