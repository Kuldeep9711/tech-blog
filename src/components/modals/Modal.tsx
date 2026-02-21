
interface ModelProps {
    isOpen: boolean,
    onClose:() => void,
    children:React.ReactNode
}

export default function Modal({isOpen,onClose,children}: ModelProps) {
  return (
    <div aria-hidden={!isOpen}>
      
    </div>
  )
}
