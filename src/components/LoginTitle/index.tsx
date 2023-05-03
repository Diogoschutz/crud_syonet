interface LoginProps {
  title: string
  description?: string
}

export function Login({ title, description = '' }: LoginProps) {
  document.title = `Food Commerce | ${title}`
  document.querySelector('[name=description]')?.setAttribute('content', description)

  return null
}
