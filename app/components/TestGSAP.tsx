import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function App() {
  const { contextSafe } = useGSAP()

  // ✅ wrapped in contextSafe() - animation will be cleaned up correctly
  const onClick = contextSafe(({ currentTarget }) => {
    gsap.to(currentTarget, { rotation: "+=360" });
  });

  return (
    <>
      <div 
        className="w-40 h-40 bg-pink-500"
        onClick={onClick}
      ></div>
    </>
  )
}
