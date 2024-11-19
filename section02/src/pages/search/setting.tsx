import React from 'react'
import { useRouter } from 'next/router'

export default function Setting() {
  const router = useRouter();

  console.log(router);
  
  return (
    <div>setting</div>
  )
}
