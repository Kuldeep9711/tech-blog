"use client"

import Modal from './Modal'
import { useModalStore } from '@/store/useModalStore'

export default function SignInModal() {
    const {isSignInOpen,closeSignIn} = useModalStore();
  return (
    <Modal onClose={closeSignIn} isOpen={isSignInOpen}>
        <h2>Sign in to TechBlog</h2>
    </Modal>
  )
}
