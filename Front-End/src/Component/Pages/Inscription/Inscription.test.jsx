//Register.test.jsx
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, vi } from "vitest";
import { Inscription } from "./Inscription";

describe('Register', () => {

    test('Envoie les informations lors du clique', async () => {
        const mockSubmit = vi.fn()
        render(<Inscription submit={mockSubmit} />)

        const gender = screen.getByLabelText('Gender')
        expect(gender).toBeRequired()
        await userEvent.selectOptions(gender, 'man')
        await userEvent.selectOptions(gender, 'woman')


        const firstname = screen.getByLabelText('Firstname')
        expect(firstname).toBeRequired()
        await userEvent.type(firstname, 'firstname')

        const lastname = screen.getByLabelText('Lastname')
        expect(firstname).toBeRequired()
        await userEvent.type(lastname, 'lastname')

        const password = screen.getByLabelText('Password')
        expect(firstname).toBeRequired()
        expect(password.type).toBe('password')
        await userEvent.type(password, 'password')
        expect(password.minLength).toBe(6)

        const email = screen.getByLabelText('Email')
        expect(firstname).toBeRequired()
        expect(email.type).toBe('email')
        await userEvent.type(email, 'george@lapin.com')

        const age = screen.getByLabelText('Age')
        expect(firstname).toBeRequired()
        expect(age.type).toBe('number')
        await userEvent.type(age, '25')
        fireEvent.change(age, {target : {value: 25} })
        expect(age.min).toBe('18')
        //test >= 18
        const button = screen.getByRole('button', { type: 'submit' })
        fireEvent.click(button)
        expect(mockSubmit.callCount).toBe(1)
        expect(mockSubmit.mock.calls[0][0]).toEqual({
            firstname: 'firstname',
            lastname: 'lastname',
            email: 'george@lapin.com',
            password: 'password',
            gender:'woman',
            age: '25'
        })
    })

})