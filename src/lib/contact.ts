export const WHATSAPP_NUMBER = "5561998107824"

export function whatsappLink(
  message = "Olá, vim pelo site e gostaria de mais informações."
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
