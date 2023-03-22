import pianoJson from '../pianoArray.json'
 
describe("Piano", () => {
    test("json is right ?", () => {
        expect(pianoJson).toHaveProperty("note")
    })
})
    