import { render, screen } from "@testing-library/react"

describe('Profile', () => {
    test('Afficher d\'un profil', async () => {
        render(<Profile user={{firstname: 'George', lastname:'Lapin', age: 25, description: 'Coucou, je suis George Lapin',  photos: ['', ''], }} />)
        const images = await screen.findAllByRole('img')
        for(let image of images) {
            expect(image).toHaveAttribute('src')
            expect(image).toHaveAttribute('alt')
        }
        const buttons = await screen.findByRole('button')
        expect(buttons).toHaveLength(images.length)
    })
})