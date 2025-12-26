import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | OpBros.Automation',
  description: 'Get in touch with OpBros.Automation. Book a free discovery call or send us a message.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
