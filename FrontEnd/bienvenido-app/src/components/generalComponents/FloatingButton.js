import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const FloatingButton = () => {

    return (
        <Link to='/'>
            <Button className='floating-btn'>
                Voltar
            </Button>
        </Link>
    )
}

export default FloatingButton;