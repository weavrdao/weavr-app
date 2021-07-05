<template>
  <div class="frabric-footer">
    <div class="relative flex flex-col justify-start">
      <div class="w-full px-8">
        <footer class="bg-tranparent" aria-labelledby="footerHeading">
          <div class="max-w-md-screen mx-auto py-12 lg:py-16">
            <div class="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center space-y-4 mb-8">
              <div class="space-y-2 xl:col-span-1">
                <img class="h-10" :src="images.logo" alt="Frabric" />
                <p class="text-gray-500 text-base">
                  Changing property ownership forever.
                </p>
              </div>
              <div class="flex flex-row items-start">
                <Button kind="secondary" @onClick="onViewWhitePaperClick" label="View Whitepaper" customClasses="shadow-xl" />
                <Button kind="secondary" @onClick="onJoinDiscordClick" label="Join Discord" customClasses="shadow-xl ml-4" />
              </div>
            </div>
            <div class="border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
              <div>
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Subscribe to our newsletter
                </h3>
                <p class="mt-2 text-base text-gray-300">
                  The latest news, articles, and resources, sent to your inbox weekly.
                </p>
              </div>
              <form class="mt-4 sm:flex sm:max-w-md lg:mt-0">
                <label for="emailAddress" class="sr-only">Email address</label>
                <input type="email" name="emailAddress" id="emailAddress" autocomplete="email" v-model="input.email" required class="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs" :placeholder="input.emailPlaceholder" />
                <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <Button @onClick="onNewsletterSubscribeClick" label="Subscribe" customClasses="shadow-xl"/>
                </div>
              </form>
            </div>
            <div class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
              <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                &copy; 2021 Fractional Finance. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { subscribe } from '../../actions/actions'
import Button from '../common/Button'

export default {
  name: 'FooterSection',
  components: {
    Button,
  },
  data() {
    return {
      images: {
        logo: require('@/assets/logo/full/frabric_logo_full-white.png')
      },
      input: {
        email: "",
        emailPlaceholder: 'Enter your email'
      }
    }
  },
  computed: {
    footerStyle() {
      return `
      backgroundImage: linear-gradient(to top, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.0) 100%);
      background-size: cover; 
      background-repeat: no-repeat;
      background-position: center bottom;
      `
    },
    finalStripStyle() {
      return `
      backgroundImage: linear-gradient(to top, rgba(0, 0, 0, 1.0) 20%, rgba(0, 0, 0, 0.0) 150%);
      background-size: cover; 
      background-repeat: no-repeat;
      background-position: center top;
      `
    }
  },
  methods: {
    onViewWhitePaperClick() {
      window.open('https://www.notion.so/fractionalfinance/Frabric-Whitepaper-f58768fdff4748978095c1733e7b2be5', '_blank')
    },

    onJoinDiscordClick() {
      window.open('https://discord.gg/qgG98MJyzK', '_blank')
    },

    onNewsletterSubscribeClick() {
      if (!this.input.email || !this.isValidEmail(this.input.email)) {
        this.input.emailPlaceholder = 'Valid email required'
        this.input.email = ""
        return
      }

      subscribe(this.input.email)
        .then(error => {
          if (error == null) {
            this.input.emailPlaceholder = 'Enter your email'
            this.input.email = ""
          }
        })
    },

    isValidEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>