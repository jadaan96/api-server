'use strict'

require('dotenv').config()

const supertest = require('supertest')
const { app } = require('../src/server')
const { db } = require('../src/models/index')
const muke = supertest(app)

describe('Server test', () => {
it('right name', async () => {
    const res = await muke.get('/2');
    expect(res.status).toEqual(404);
  })
  it('name error', async () => {
    const res = await muke.put('/');
    expect(res.status).toEqual(404);
  })
  
})

beforeAll(async () => {
    await db.sync()
})

afterAll(async () => {
    await db.drop()
})

describe('test server', () => {
    it('post food', async () => {
        const res = await muke.post('/food').send({
            foodName: 'mansaf',
            foodCounty: 'jordan',
            Price: 200
        })
        expect(res.status).toBe(201);
    })
    it('get food', async () => {
        const res = await muke.get('/food')
        expect(res.status).toBe(200);
    })
    it('get food', async () => {
        const res = await muke.get('/food/1')
        expect(res.status).toBe(200);
    })
    it('update food', async () => {
        const res = await muke.put('/food/1').send({
            foodName: 'magloba',
            foodCounty: 'jordan',
            Price: 200
        })
        expect(res.status).toBe(202);
    })
    it('delet food', async () => { 
        const res = await muke.delete('/food/1')
        expect(res.status).toBe(204);
    })

})
describe('test server', () => {
    it('Create a record using POST', async () => {
        const res = await muke.post('/recipe').send({
            name: 'mansaf',
            recipeCounty: 'jordan'
          });
          const createdrecipe = JSON.parse(res.text);
          expect(res.status).toBe(201);
          expect(createdrecipe.name).toEqual('mansaf')
    });
    
    it('Read a list of records using GET', async () => {
        const res = await muke.get('/recipe');
        console.log(res.body)
        expect(res.status).toBe(200);})
        it('Read a list of records using GET', async () => {
            const res = await muke.get('/recipe/1');
            console.log(res.body)
            expect(res.status).toBe(200);})

            it('Create a record using POST', async () => {
                const res = await muke.put('/recipe/1').send({
                    name: 'spagete',
                    recipeCounty: 'italy'
                  });
                  const createdrecipe = JSON.parse(res.text);
                  expect(res.status).toBe(202);
                  expect(createdrecipe.name).toEqual('spagete')
            });
            it('Read a list of records using GET', async () => {
                const res = await muke.delete('/recipe/1');
                expect(res.status).toBe(204);  })

             
})