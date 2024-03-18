const { render, screen, fireEvent } = require("@testing-library/react");
const { MemoryRouter, useNavigate } = require("react-router-dom");

const { AuthContext } = require("../../../src/auth/context/AuthContext");
const { Navbar } = require("../../../src/ui/components/Navbar");

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}))

describe('Pruebas en <Navbar />', () => {

    const contexValue = {
        logged: true,
        user:{
            name: 'Juan Carlos'
        },

        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks())

    test('debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={ contexValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Juan Carlos') ).toBeTruthy()

    });


    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => {

        render(
            <AuthContext.Provider value={ contexValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const loggoutBtn = screen.getByRole('button')
        fireEvent.click( loggoutBtn )

        expect( contexValue.logout ).toHaveBeenCalled()
        expect( mockUseNavigate ).toHaveBeenCalledWith('/login', {replace: true})
        
    });

});
