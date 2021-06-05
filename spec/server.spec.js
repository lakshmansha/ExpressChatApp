var request = require('request')

require('dotenv/config');

const Port = process.env.PORT || 3000
const apiUrl = `http://localhost:${Port}/messages`;

describe('calc', () => {
    it('should multiple 2 and 2 ', () => {
        expect(2 * 2).toBe(4)
    })
})

describe('get messages', () => {
    it('should return 200 ok', (done) => {
        request.get(apiUrl, (err, res) => {
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
    it('should return a list, that not empty', (done) => {
        request.get(apiUrl, (err, res) => {
            expect(JSON.parse(res.body).length).toBeGreaterThan(0)
            done()
        })
    })
})

describe('get message from user', () => {
    it('should return 200 ok', (done) => {
        request.get(`${apiUrl}/tim`, (err, res) => {
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
    it('name should be tim', (done) => {
        request.get(`${apiUrl}/tim`, (err, res) => {
            expect(JSON.parse(res.body)[0].name).toEqual('tim')
            done()
        })
    })
})