<template>
  <div class="min-h-screen bg-gradient-to-b from-black to-gray-900 relative">
    <!-- Back Button (Extreme Left) -->
    <router-link
      to="/contact"
      class="fixed left-6 top-6 z-20 inline-flex items-center gap-2
             text-sm text-gray-400 hover:text-[#9F153E]
             transition group"
    >
      <svg
        class="w-4 h-4 group-hover:-translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
      Back to branches
    </router-link>

    <!-- Page Content -->
    <div class="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <!-- Header -->
      <div class="text-center mb-12">
        <span
          class="inline-block mb-4 px-4 py-1.5 rounded-full
                 bg-[#9F153E]/20 text-[#9F153E]
                 text-xs font-semibold uppercase tracking-wider"
        >
          West Bengal
        </span>

        <h1 class="text-3xl sm:text-4xl font-black text-white mb-3">
          Contact Kolkata
        </h1>

        <p class="text-gray-400 text-base mb-1">
          Send us a message and we’ll respond shortly
        </p>

        <p class="text-sm text-gray-500">
          79, Sambhunath Pandit Street, Kolkata-700 020
        </p>
      </div>

      <!-- Contact Form Card -->
      <div
        class="bg-gray-900/80 backdrop-blur-xl
               rounded-3xl border border-gray-800
               shadow-2xl shadow-black/40
               p-6 sm:p-10"
      >
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Email -->
          <div>
            <label for="email" class="block mb-2 text-sm font-semibold text-gray-300">
              Your Email
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              :disabled="isSubmitting"
              placeholder="john@example.com"
              class="w-full px-4 py-3 rounded-xl
                     bg-gray-800/70 border border-gray-700
                     text-gray-100 placeholder-gray-500
                     focus:outline-none focus:ring-2
                     focus:ring-[#9F153E]/40 focus:border-[#9F153E]
                     transition disabled:opacity-50"
            />
          </div>

          <!-- Subject -->
          <div>
            <label for="subject" class="block mb-2 text-sm font-semibold text-gray-300">
              Subject
            </label>
            <input
              id="subject"
              v-model="formData.subject"
              type="text"
              required
              :disabled="isSubmitting"
              placeholder="What can we help you with?"
              class="w-full px-4 py-3 rounded-xl
                     bg-gray-800/70 border border-gray-700
                     text-gray-100 placeholder-gray-500
                     focus:outline-none focus:ring-2
                     focus:ring-[#9F153E]/40 focus:border-[#9F153E]
                     transition disabled:opacity-50"
            />
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block mb-2 text-sm font-semibold text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              required
              :disabled="isSubmitting"
              rows="6"
              placeholder="Tell us more about your requirements..."
              class="w-full px-4 py-3 rounded-xl
                     bg-gray-800/70 border border-gray-700
                     text-gray-100 placeholder-gray-500
                     focus:outline-none focus:ring-2
                     focus:ring-[#9F153E]/40 focus:border-[#9F153E]
                     resize-none transition disabled:opacity-50"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full mt-4 px-6 py-3.5 rounded-xl
                   text-base font-bold text-white
                   bg-[#9F153E] hover:bg-[#b81b4a]
                   shadow-lg hover:shadow-[#9F153E]/30
                   transition-all duration-200
                   flex items-center justify-center gap-3
                   disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>

            <svg v-if="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>

            <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
          </button>

          <!-- Success / Error -->
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-if="submitStatus" class="text-center pt-4">
              <p
                v-if="submitStatus === 'success'"
                class="text-green-400 font-semibold"
              >
                Message sent successfully!
              </p>
              <p
                v-if="submitStatus === 'error'"
                class="text-red-400 font-semibold"
              >
                Failed to send message
              </p>
            </div>
          </transition>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  email: '',
  subject: '',
  message: ''
})

const submitStatus = ref(null)
const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    const formDataToSend = new FormData()

    formDataToSend.append('access_key', '959469df-a74f-4419-91d7-96b30869624a')
    formDataToSend.append('email', formData.value.email)
    formDataToSend.append('subject', `[Kolkata] ${formData.value.subject}`)
    formDataToSend.append(
      'message',
      `Branch: Kolkata\nFrom: ${formData.value.email}\n\n${formData.value.message}`
    )

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend
    })

    const result = await response.json()

    if (result.success) {
      submitStatus.value = 'success'
      setTimeout(() => {
        formData.value = { email: '', subject: '', message: '' }
        submitStatus.value = null
      }, 3000)
    } else {
      throw new Error('Submission failed')
    }
  } catch (error) {
    submitStatus.value = 'error'
    setTimeout(() => (submitStatus.value = null), 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>