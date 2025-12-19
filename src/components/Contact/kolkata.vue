<template>
  <div class="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
    <!-- Back to Branches (EXTREME LEFT & ALWAYS VISIBLE) -->
    <router-link
      to="/contact"
      class="fixed left-4 top-4 sm:left-6 sm:top-6 z-50
             inline-flex items-center gap-2
             text-sm font-medium text-gray-400
             hover:text-[#9F153E]
             transition group"
    >
      <svg
        class="w-4 h-4 group-hover:-translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 19l-7-7 7-7" />
      </svg>
      Back to branches
    </router-link>

    <!-- Page Wrapper -->
    <div class="max-w-xl mx-auto px-4 pt-24 pb-10">
      <!-- Header -->
      <div class="text-center mb-8">
        <span
          class="inline-block mb-3 px-4 py-1.5 rounded-full
                 bg-[#9F153E]/20 text-[#9F153E]
                 text-xs font-semibold uppercase tracking-wider"
        >
          West Bengal
        </span>

        <h1 class="text-3xl font-black text-white mb-2">
          Contact Kolkata
        </h1>

        <p class="text-sm text-gray-400">
          Send us a message and we’ll respond shortly
        </p>

        <p class="text-xs text-gray-500 mt-1">
          79, Sambhunath Pandit Street, Kolkata-700 020
        </p>
      </div>

      <!-- Contact Form -->
      <div
        class="bg-gray-900/70 backdrop-blur-lg
               rounded-2xl border border-gray-800
               shadow-xl p-5 sm:p-6"
      >
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Email -->
          <div>
            <label class="block mb-1.5 text-xs font-semibold text-gray-300">
              Your Email
            </label>
            <input
              v-model="formData.email"
              type="email"
              required
              :disabled="isSubmitting"
              placeholder="john@example.com"
              class="w-full px-3.5 py-2.5 rounded-lg
                     bg-gray-800 border border-gray-700
                     text-gray-100 placeholder-gray-500
                     focus:outline-none focus:border-[#9F153E]
                     transition disabled:opacity-50"
            />
          </div>

          <!-- Subject -->
          <div>
            <label class="block mb-1.5 text-xs font-semibold text-gray-300">
              Subject
            </label>
            <input
              v-model="formData.subject"
              type="text"
              required
              :disabled="isSubmitting"
              placeholder="What can we help you with?"
              class="w-full px-3.5 py-2.5 rounded-lg
                     bg-gray-800 border border-gray-700
                     text-gray-100 placeholder-gray-500
                     focus:outline-none focus:border-[#9F153E]
                     transition disabled:opacity-50"
            />
          </div>

          <!-- Message -->
          <div>
            <label class="block mb-1.5 text-xs font-semibold text-gray-300">
              Message
            </label>
            <textarea
              v-model="formData.message"
              required
              rows="4"
              :disabled="isSubmitting"
              placeholder="Tell us more about your requirements..."
              class="w-full px-3.5 py-2.5 rounded-lg
                     bg-gray-800 border border-gray-700
                     text-gray-100 placeholder-gray-500
                     focus:outline-none focus:border-[#9F153E]
                     resize-none transition disabled:opacity-50"
            ></textarea>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full mt-2 py-2.5 rounded-lg
                   bg-[#9F153E] hover:bg-[#b81b4a]
                   text-sm font-bold text-white
                   transition flex items-center justify-center gap-2
                   disabled:opacity-50"
          >
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </button>

          <!-- Status -->
        <transition
  enter-active-class="transition duration-300"
  enter-from-class="opacity-0"
  enter-to-class="opacity-100"
  leave-active-class="transition duration-200"
  leave-from-class="opacity-100"
  leave-to-class="opacity-0"
>
  <div v-if="submitStatus" class="text-center pt-2">
    <p
      v-if="submitStatus === 'success'"
      class="text-xs text-green-400 font-semibold"
    >
      Message sent successfully!
    </p>

    <p
      v-else-if="submitStatus === 'error'"
      class="text-xs text-red-400 font-semibold"
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
    const fd = new FormData()
    fd.append('access_key', '959469df-a74f-4419-91d7-96b30869624a')
    fd.append('email', formData.value.email)
    fd.append('subject', `[Kolkata] ${formData.value.subject}`)
    fd.append(
      'message',
      `Branch: Kolkata\nFrom: ${formData.value.email}\n\n${formData.value.message}`
    )

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: fd
    })

    const result = await res.json()

    if (result.success) {
      submitStatus.value = 'success'
      setTimeout(() => {
        formData.value = { email: '', subject: '', message: '' }
        submitStatus.value = null
      }, 3000)
    } else {
      throw new Error()
    }
  } catch {
    submitStatus.value = 'error'
    setTimeout(() => (submitStatus.value = null), 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>