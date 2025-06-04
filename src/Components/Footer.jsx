import React from 'react'
import { Container } from 'react-bootstrap'
import useStore from '../store/useStore'

export const Footer = () => {
    const {color}=useStore()
  return (
    <footer className={color ?"bg-dark  text-light":"bg-light text-dark"}>
        <h3 className='text-center p-2'>hola</h3>

    </footer>
  )
}
