<template>
  <div class="pt-8 pb-24" ref="roadmap">
    <div class="w-full max-w-screen-lg mx-auto px-8 lg:px-4">
      <div class="flex flex-col items-center">
        <div class="container mx-auto max-w-screen-md">
          <div class="font-bold text-center text-3xl md:text-5xl text-high-emphasis">
            Roadmap
          </div>
          <div class="max-w-screen-sm mx-auto font-medium text-center text-base md:text-lg lg:text-xl text-high-emphasis mt-4 md:mt-8 mb-8">
            Early test-net run followed by public launch in 2022.
          </div>
        </div>
        <div class="relative flex flex-col items-start my-8">
          <div class="relative flex flex-row gap-8">
            <svg 
            class="fill-current stroke-current text-f-blue-1"
            width="40" height="80"
            >
              <rect 
              x="2" y="2" 
              width="36" 
              height="36" 
              class="fill-f-purple-1 stroke-0"
              />
              <rect 
              x="2" y="2" 
              width="36" 
              height="36" 
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
                August 2021
              </div>
            </div>
          </div>
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
          <div class="relative flex flex-row gap-8">
            <svg 
            class="fill-current stroke-current text-f-blue-1"
            width="40" height="80"
            >
              <rect 
              x="2" y="2" 
              width="36" 
              height="36" 
              class="fill-f-purple-1 stroke-0"
              />
              <rect 
              x="2" y="2" 
              width="36" 
              height="36" 
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
                August to December 2021
              </div>
            </div>
          </div>
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
          <div class="relative flex flex-row gap-8">
            <svg 
            class="fill-current stroke-current text-f-blue-1"
            width="40" height="80"
            >
              <rect 
              x="2" y="2" 
              width="36" 
              height="36" 
              class="fill-f-purple-1 stroke-0"
              />
              <rect 
              x="2" y="2" 
              width="36" 
              height="36" 
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
                January to February 2022
              </div>
            </div>
          </div>
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
          <div class="relative flex flex-row gap-8">
            <svg 
            class="fill-current stroke-current text-f-blue-1"
            width="40" height="80"
            >
              <rect 
              x="2" y="2" 
              width="36" 
              height="36" 
              class="fill-f-purple-1 stroke-0"
              />
              <rect 
              x="2" y="2" 
              width="36" 
              height="36" 
              class="fill-transparent stroke-2"
              />
            </svg>
            <div class="flex flex-col items-start">
              <div class="font-medium text-base md:text-lg lg:text-xl h-36px mt-1">
                LAUNCH
              </div>
              <div class="font-lighttext-sm md:text-base text-gray-400 lg:text-lg h-36px">
                March 2022
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
    
  },
  computed: {
    style() {
      var style = {}

      return style
    }
  }
}
</script>

<style scoped>

</style>