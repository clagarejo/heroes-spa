import { types } from "../../../src/auth";


describe('Pruebas en "Types.js"', () => {
    
    test('debe retornar estos types', () => {
        
       expect(types).toEqual({
        login: '[Auth] Login',
        logout: '[Auth] Logout',
       }) 

    });
    

});
