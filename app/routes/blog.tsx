import styles from 'highlight.js/styles/atom-one-dark.css'
import { Outlet } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node"

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function Blog() {
  return (
    <div className='flex justify-center mt-6'>
      <Outlet />
    </div>
  )
}