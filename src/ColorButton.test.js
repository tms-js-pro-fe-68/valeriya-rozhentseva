import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {fireEvent, render} from '@testing-library/react'
import ColorButton from './components/ColorButton'

describe("ColorButton", () => {
    it("should change button color from blue to green", () => {
        const {getByText} = render(<ColorButton/>)
        const changeColorButton = getByText('click to change button color')
        expect(changeColorButton).toHaveStyle({ background: 'blue' })
        fireEvent.click(changeColorButton)
        expect(changeColorButton).toHaveStyle({ background: 'green' })
        fireEvent.click(changeColorButton)
    })
})