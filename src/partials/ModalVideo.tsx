'use client'

import { useState, useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Image } from 'astro:assets'

interface ModalVideoProps {
  thumb: ImageMetadata
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  video: string
  videoWidth: number
  videoHeight: number
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div>
      {/* Video thumbnail */}
      <div>
        <div class="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
          <Image src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
          <button class="absolute group" onClick={() => { setModalOpen(true) }} aria-label="Watch the video">
            <svg class="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
                  <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
                  <stop stopColor="#EBF1F5" offset="100%" />
                </linearGradient>
              </defs>
              <circle fill="url(#a)" cx="44" cy="44" r="44" />
              <path class="fill-current text-purple-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
            </svg>
          </button>
        </div>
      </div>

      <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          <Transition.Child
            class="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />

          <Transition.Child
            class="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div class="max-w-6xl mx-auto h-full flex items-center">
              <Dialog.Panel class="w-full max-h-full aspect-video bg-black overflow-hidden rounded-lg">
                <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls class="rounded-lg">
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  )
}