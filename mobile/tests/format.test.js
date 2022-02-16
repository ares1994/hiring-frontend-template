import format from "../util/format";


test("check format function", ()=>{
    expect(format("2019-07-22T20:58:22")).toBe("Jul 22 20:07");
})
