import { describe, expect, test } from 'vitest'
import { MyAwesomeApp } from './MyAwesomeApp'
import { render, screen } from '@testing-library/react'
describe('MyAwesomeApp', () => {
    test('should render name and lastName - container', ()=>{
        const { container } = render(<MyAwesomeApp/>)
        const h2 = container.querySelector('h2');
        expect(h2?.innerHTML).toContain('Francisco Moreno')
        //UTILIZAR EL CONTAINER PARA TESTS DEL HTML SI NO SE ACTUALIZA.
    })
    test('should render name and lastName - screen', ()=>{
        render(<MyAwesomeApp/>)
        screen.debug()
        const h2 = screen.getByTestId('first-name-title');
        console.log(h2.innerHTML)
        expect(h2?.innerHTML).toContain('Francisco Moreno')
        //UTILIZAR EL CONTAINER PARA TESTS DEL HTML SI NO SE ACTUALIZA.
    })
})