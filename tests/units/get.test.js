test("Get to /api/V1/Status", async ()=>{
  const response = await fetch("http://localhost:3000/api/V1/Status");
  expect(response.status).toBe(200);
  
  
})