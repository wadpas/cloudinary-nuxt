import Stripe from 'stripe'

export const stripe = new Stripe(useRuntimeConfig().stripeSecret, {
  apiVersion: '2025-02-24.acacia',
  typescript: true,
})
