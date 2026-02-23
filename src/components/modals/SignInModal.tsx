"use client"

import { FcGoogle } from 'react-icons/fc';
import Modal from './Modal'
import { useModalStore } from '@/store/useModalStore'
import { FaGithub } from 'react-icons/fa';

export default function SignInModal() {
  const { isSignInOpen, closeSignIn } = useModalStore();
  return (
    <Modal onClose={closeSignIn} isOpen={isSignInOpen}>
      <h2 className='text-xl font-semibold text-white mb-2'>Sign in to TechBlog</h2>

      <p className='text-sm text-gray-400 mb-8'>
        Continue with one of the providers below
      </p>

      <div className='space-y-4'>
        { /* google */}
        <button className='w-full flex items-center justify-center gap-3 py-3 rounded-full cursor-pointer bg-white text-black font-medium hover:bg-gray-200 transition'>
          <FcGoogle className='text-xl' />
          Continue with Google
        </button>

        <button className='w-full flex items-center justify-center gap-3 py-3 rounded-full cursor-pointer bg-hover text-white font-medium border border-white/10 hover:bg-[#202020] transition'>
          <FaGithub className='text-xl' />
          Continue with Github
        </button>

      </div>

      <p className='text-xs text-gray-500 mt-8 text-center'>By continuing, you agree to our Terms & Privacy Policy</p>
    </Modal>
  )
}
