import React from 'react'
import { SocialLinks } from '../molecules/SocialLinks'
import { NavGroup } from '../molecules/NavGroup'
import { Copyright } from '../atoms/Copyright'

function Footer() {
  return (
     <footer id="footer" aria-labelledby="tag-name-footer" className="py-24 lg:p-20 bg-linear-to-br from-brand-gray2 to-brand-black">
        <div className="container mx-auto grid gap-10 grid-cols-12">
          <div className="col-span-12 text-center lg:text-left flex flex-col gap-8 lg:col-span-6">
            <h2 id="tag-name-footer" className="text-2xl font-bold">Muhammad Fadli Purnama</h2>
            <h3>Contact with us</h3>
            <SocialLinks gap="gap-3" className="mx-auto lg:mx-0" iconSize="size-8" />
          </div>
          <div className="col-span-12 order-1 lg:order-0 lg:col-span-6 flex justify-center  lg:justify-end">
            <NavGroup variant="footer" />
          </div>
          <div className="text-center lg:text-left col-span-12">
            <Copyright />
          </div>
        </div>
      </footer>
  )
}

export default Footer
