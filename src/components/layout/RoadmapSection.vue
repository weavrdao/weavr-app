<template>
  <div class="relative " ref="roadmap">
    <div class="relative w-full">
      <div 
        class="
        absolute
        object-cover object-center opacity-50
        w-full h-full roadmap-bg
        "
      >
      </div>
      <div 
      class="
      w-full relative flex flex-col items-center 
      py-24 md:py-24
      "
      >
        <div class="mx-auto">
          <div class="
          text-white text-center
          font-bold text-3xl md:text-5xl
          ">
            Roadmap
          </div>
          <div class="max-w-screen-sm mx-auto font-medium text-center text-base md:text-lg lg:text-xl text-high-emphasis mt-4 md:mt-8 pb-16 md:pb-24">
            Early test-net run followed by public launch in 2022.
          </div>
        </div>
        <div class="relative w-full flex flex-col items-start my-8">
          <div class="mx-auto px-8 lg:px-4">
            <div class="relative flex flex-row gap-8">
              <svg 
              class="fill-current stroke-current text-f-blue-1"
              width="40" height="80"
              >
                <rect 
                x="2" y="2" 
                width="36" 
                height="36" 
                rx="5"
                class="fill-f-purple-1 stroke-0"
                />
                <rect 
                x="2" y="2" 
                width="36" 
                height="36" 
                rx="5"
                class="fill-transparent stroke-2"
                />
                <line 
                x1="20" 
                y1="40" 
                x2="20" 
                y2="80" 
                class="stroke-2" 
                />
              </svg>
              <div class="flex flex-col items-start">
                <div class="font-medium text-base md:text-lg lg:text-xl h-36px mt-1">
                  MVP
                </div>
                <div class="font-lighttext-sm md:text-base text-gray-400 lg:text-lg h-36px">
                  Q3 2021
                </div>
              </div>
            </div>
            <div class="relative">
              <svg 
              class="fill-current stroke-current text-f-blue-1"
              width="40" height="40"
              >
                <line 
                x1="20" 
                y1="0" 
                x2="20" 
                y2="40" 
                class="stroke-2" 
                />
              </svg>
            </div>
            <div class="relative flex flex-row gap-8">
              <svg 
              class="fill-current stroke-current text-f-blue-1"
              width="40" height="80"
              >
                <rect 
                x="2" y="2" 
                width="36" 
                height="36" 
                rx="5"
                class="fill-f-purple-1 stroke-0"
                />
                <rect 
                x="2" y="2" 
                width="36" 
                height="36" 
                rx="5"
                class="fill-transparent stroke-2"
                />
                <line 
                x1="20" 
                y1="40" 
                x2="20" 
                y2="80" 
                class="stroke-2" 
                />
              </svg>
              <div class="flex flex-col items-start">
                <div class="font-medium text-base md:text-lg lg:text-xl h-36px mt-1">
                  ALPHA TESTING
                </div>
                <div class="font-lighttext-sm md:text-base text-gray-400 lg:text-lg h-36px">
                  Q4 2021
                </div>
              </div>
            </div>
            <div class="relative">
              <svg 
              class="fill-current stroke-current text-f-blue-1"
              width="40" height="40"
              >
                <line 
                x1="20" 
                y1="0" 
                x2="20" 
                y2="40" 
                class="stroke-2" 
                />
              </svg>
            </div>
            <div class="relative flex flex-row gap-8">
              <svg 
              class="fill-current stroke-current text-f-blue-1"
              width="40" height="80"
              >
                <rect 
                x="2" y="2" 
                width="36" 
                height="36" 
                rx="5"
                class="fill-f-purple-1 stroke-0"
                />
                <rect 
                x="2" y="2" 
                width="36" 
                height="36" 
                rx="5"
                class="fill-transparent stroke-2"
                />
                <line 
                x1="20" 
                y1="40" 
                x2="20" 
                y2="80" 
                class="stroke-2" 
                />
              </svg>
              <div class="flex flex-col items-start">
                <div class="font-medium text-base md:text-lg lg:text-xl h-36px mt-1">
                  BETA TESTING
                </div>
                <div class="font-lighttext-sm md:text-base text-gray-400 lg:text-lg h-36px">
                  Q1 2022
                </div>
              </div>
            </div>
            <div class="relative">
              <svg 
              class="fill-current stroke-current text-f-blue-1"
              width="40" height="40"
              >
                <line 
                x1="20" 
                y1="0" 
                x2="20" 
                y2="40" 
                class="stroke-2" 
                />
              </svg>
            </div>
            <div class="relative flex flex-row gap-8">
              <svg 
              class="fill-current stroke-current text-f-blue-1"
              width="40" height="80"
              >
                <rect 
                x="2" y="2" 
                width="36" 
                height="36" 
                rx="5"
                class="fill-f-purple-1 stroke-0"
                />
                <rect 
                x="2" y="2" 
                width="36" 
                height="36" 
                rx="5"
                class="fill-transparent stroke-2"
                />
              </svg>
              <div class="flex flex-col items-start">
                <div class="font-medium text-base md:text-lg lg:text-xl h-36px mt-1">
                  LAUNCH
                </div>
                <div class="font-lighttext-sm md:text-base text-gray-400 lg:text-lg h-36px">
                  Q2 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoadmapSection',
  components: {
    
  }
}
</script>

<style scoped>
.roadmap-bg {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='440' height='440' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='2'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='769' cy='229' r='21'/%3E%3Ccircle cx='539' cy='269' r='21'/%3E%3Ccircle cx='603' cy='493' r='21'/%3E%3Ccircle cx='731' cy='737' r='21'/%3E%3Ccircle cx='520' cy='660' r='21'/%3E%3Ccircle cx='309' cy='538' r='21'/%3E%3Ccircle cx='295' cy='764' r='21'/%3E%3Ccircle cx='40' cy='599' r='21'/%3E%3Ccircle cx='102' cy='382' r='21'/%3E%3Ccircle cx='127' cy='80' r='21'/%3E%3Ccircle cx='370' cy='105' r='21'/%3E%3Ccircle cx='578' cy='42' r='21'/%3E%3Ccircle cx='237' cy='261' r='21'/%3E%3Ccircle cx='390' cy='382' r='21'/%3E%3C/g%3E%3C/svg%3E");
  mask-image: 
    /* linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.5), rgba(0,0,0,0)), */
    radial-gradient(at 0% 35%, rgba(0,0,0,0.20) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 20% 45%, rgba(0,0,0,0.15) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 30% 60%, rgba(0,0,0,0.10) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 25% 65%, rgba(0,0,0,0.15) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 20% 75%, rgba(0,0,0,0.20) 5%, rgba(0,0,0,0) 15%),

    radial-gradient(at 80% 25%, rgba(0,0,0,0.20) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 75% 35%, rgba(0,0,0,0.15) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 70% 40%, rgba(0,0,0,0.10) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 80% 55%, rgba(0,0,0,0.15) 5%, rgba(0,0,0,0) 15%),
    radial-gradient(at 100% 65%, rgba(0,0,0,0.20) 5%, rgba(0,0,0,0) 15%)
    ;
}
</style>