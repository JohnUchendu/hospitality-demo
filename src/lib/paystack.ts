// // src/lib/paystack.ts
// export const paystackConfig = {
//   secretKey: process.env.PAYSTACK_SECRET_KEY!,
//   publicKey: process.env.PAYSTACK_PUBLIC_KEY!,
// }

// // Initialize Paystack
// export const initializePayment = async (email: string, amount: number, metadata: any) => {
//   const response = await fetch('https://api.paystack.co/transaction/initialize', {
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${paystackConfig.secretKey}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email,
//       amount: amount * 100, // Convert to kobo
//       metadata,
//       callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/verify`,
//     }),
//   })

//   if (!response.ok) {
//     throw new Error('Failed to initialize payment')
//   }

//   return response.json()
// }

// export const verifyPayment = async (reference: string) => {
//   const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
//     headers: {
//       'Authorization': `Bearer ${paystackConfig.secretKey}`,
//     },
//   })

//   if (!response.ok) {
//     throw new Error('Failed to verify payment')
//   }

//   return response.json()
// }


// src/lib/paystack.ts
export const paystackConfig = {
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
  publicKey: process.env.PAYSTACK_PUBLIC_KEY!,
}

// Helper to check if keys are configured
export function isPaystackConfigured() {
  return !!(paystackConfig.secretKey && paystackConfig.publicKey)
}

// Keep verifyPayment for the success page
export const verifyPayment = async (reference: string) => {
  const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: {
      'Authorization': `Bearer ${paystackConfig.secretKey}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to verify payment')
  }

  return response.json()
}