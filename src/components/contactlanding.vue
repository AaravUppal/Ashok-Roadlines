<template>
  <div class="min-h-screen bg-gradient-to-b from-black to-gray-900">
    <div class="max-w-2xl mx-auto px-4 pt-8 pb-10">
      <!-- Header -->
      <div class="text-center mb-6">
        <h1 class="text-3xl font-black text-white mb-1">
          Contact Us
        </h1>
        <p class="text-sm text-gray-400">
          Send us a message and we’ll get back to you shortly.
        </p>
      </div>

      <!-- Card -->
      <div
        class="bg-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-800 shadow-xl p-5 sm:p-6"
      >
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Branch -->
          <div>
            <label class="block mb-1 text-xs font-semibold text-gray-300 uppercase tracking-wide">
              Select Branch
            </label>
            <select
              v-model="formData.branch"
              required
              :disabled="isSubmitting"
              class="w-full px-3.5 py-2.5 rounded-lg bg-gray-800 border border-gray-700
                     text-gray-100 text-sm
                     focus:outline-none focus:border-[#9F153E] focus:ring-1 focus:ring-[#9F153E]/60
                     disabled:opacity-50 cursor-pointer"
            >
              <option value="" disabled>Choose your nearest branch</option>
              <option v-for="branch in branches" :key="branch.id" :value="branch.name">
                {{ branch.name }} - {{ branch.city }}
              </option>
            </select>
          </div>

          <!-- Email -->
          <div>
            <label class="block mb-1 text-xs font-semibold text-gray-300 uppercase tracking-wide">
              Your Email
            </label>
            <input
              v-model="formData.email"
              type="email"
              required
              :disabled="isSubmitting"
              placeholder="you@example.com"
              class="w-full px-3.5 py-2.5 rounded-lg bg-gray-800 border border-gray-700
                     text-gray-100 text-sm placeholder-gray-500
                     focus:outline-none focus:border-[#9F153E] focus:ring-1 focus:ring-[#9F153E]/60
                     disabled:opacity-50"
            />
          </div>

          <!-- Subject -->
          <div>
            <label class="block mb-1 text-xs font-semibold text-gray-300 uppercase tracking-wide">
              Subject
            </label>
            <input
              v-model="formData.subject"
              type="text"
              required
              :disabled="isSubmitting"
              placeholder="How can we help you?"
              class="w-full px-3.5 py-2.5 rounded-lg bg-gray-800 border border-gray-700
                     text-gray-100 text-sm placeholder-gray-500
                     focus:outline-none focus:border-[#9F153E] focus:ring-1 focus:ring-[#9F153E]/60
                     disabled:opacity-50"
            />
          </div>

          <!-- Message -->
          <div>
            <label class="block mb-1 text-xs font-semibold text-gray-300 uppercase tracking-wide">
              Message
            </label>
            <textarea
              v-model="formData.message"
              required
              rows="4"
              :disabled="isSubmitting"
              placeholder="Write your message here..."
              class="w-full px-3.5 py-2.5 rounded-lg bg-gray-800 border border-gray-700
                     text-gray-100 text-sm placeholder-gray-500
                     focus:outline-none focus:border-[#9F153E] focus:ring-1 focus:ring-[#9F153E]/60
                     resize-none disabled:opacity-50"
            ></textarea>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full mt-2 py-2.5 rounded-lg
                   bg-gradient-to-r from-[#9F153E] via-[#c96860] to-[#9F153E]
                   text-sm font-bold text-white
                   shadow-lg shadow-black/40
                   flex items-center justify-center gap-2
                   transition-transform duration-200
                   hover:scale-[1.02]
                   disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
            <svg v-if="!isSubmitting" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
            <svg v-else class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </button>

          <!-- Status -->
          <transition
            enter-active-class="transition duration-300"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <div v-if="submitStatus" class="text-center pt-2">
              <p
                v-if="submitStatus === 'success'"
                class="text-xs text-green-400 font-semibold"
              >
                ✓ Message sent successfully!
              </p>
              <p
                v-else-if="submitStatus === 'error'"
                class="text-xs text-red-400 font-semibold"
              >
                ✗ Failed to send message. Please try again.
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

const branches = [
  { id: 'kolkata', name: 'Kolkata', city: 'West Bengal' },
  { id: 'durgapur', name: 'Durgapur', city: 'West Bengal' },
  { id: 'raigarh', name: 'Raigarh', city: 'Chhattisgarh' },
  { id: 'surat', name: 'Surat', city: 'Gujarat' },
  { id: 'ahmedabad', name: 'Ahmedabad', city: 'Gujarat' },
  { id: 'vadodara', name: 'Vadodara', city: 'Gujarat' },
  { id: 'rourkela', name: 'Rourkela', city: 'Odisha' },
  { id: 'bhilai', name: 'Bhilai', city: 'Chhattisgarh' },
  { id: 'vishakhapatnam', name: 'Vishakhapatnam', city: 'Andhra Pradesh' }
]

const formData = ref({
  branch: '',
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

    fd.append('access_key', 'd5c43f08-d853-49ed-9f50-6f97c2b882a2')
    fd.append('subject', `[${formData.value.branch}] ${formData.value.subject}`)
    fd.append(
      'message',
      `
═══════════════════════════════════════
BRANCH SELECTED: ${formData.value.branch}
═══════════════════════════════════════

Customer Email: ${formData.value.email}
Subject: ${formData.value.subject}

Message:
${formData.value.message}
    `
    )

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: fd
    })

    const result = await res.json()

    if (result.success) {
      submitStatus.value = 'success'
      setTimeout(() => {
        formData.value = { branch: '', email: '', subject: '', message: '' }
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
