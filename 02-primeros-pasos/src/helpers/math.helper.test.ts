import { describe, expect, test } from 'vitest'
import { add, substract, multiply, divide } from './math.helper'
describe('add function test', ()=>{
    test('should add two numbers', ()=>{
        // ! 1. Arrange
        const n1 = 1;
        const n2 = 2;
        // ! 2. Act
        const result = add(n1,n2)
        // ! 3. Assert
        expect(result).toBe(3)
    })  
})
describe('substract function test', ()=>{
    test('should substract two numbers', ()=>{
        // ! 1. Arrange
        const n1 = 1;
        const n2 = 2;
        // ! 2. Act
        const result = substract(n1,n2)
        // ! 3. Assert
        expect(result).toBe(-1)
    })
})
describe('multiply function test', ()=>{
    test('should multiply two numbers', ()=>{
        // ! 1. Arrange
        const n1 = 4;
        const n2 = 2;
        // ! 2. Act
        const result = multiply(n1,n2)
        // ! 3. Assert
        expect(result).toBe(n1*n2)
    })
})
describe('divide function test', ()=>{
    test('should divide two numbers', ()=>{
        // ! 1. Arrange
        const n1 = 4;
        const n2 = 2;
        // ! 2. Act
        const result = divide(n1,n2)
        // ! 3. Assert
        expect(result).toBe(n1/n2)
    })
})
//ASEGURA QUE LA APLICACIÓN FUNCIONE CORRECTAMENTE PUNTO POR PUNTO
