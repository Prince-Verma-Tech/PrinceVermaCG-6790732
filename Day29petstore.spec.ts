import { test } from "@playwright/test";

test("Api test", async ({ request }) => {

  let r1 = await request.post("https://petstore3.swagger.io/api/v3/pet", {
    data: {
      id: 666,
      name: "Ramsey",
      category: {
        id: 1,
        name: "Dogs"
      },
      photoUrls: [
        "string"
      ],
      tags: [
        {
          id: 0,
          name: "string"
        }
      ],
      status: "available"
    }
  })
  console.log(await r1.json())
})



test("Api test get pet by id", async ({ request }) => {

  let r1 = await request.get("https://petstore3.swagger.io/api/v3/pet/666")
  console.log(await r1.json())
})




test("Api test update pet", async ({ request }) => {

  let r1 = await request.put("https://petstore3.swagger.io/api/v3/pet", {
    data: {
      id: 666,
      name: "Joffrey",
      category: {
        id: 1,
        name: "Dogs"
      },
      photoUrls: [
        "string"
      ],
      tags: [
        {
          id: 0,
          name: "string"
        }
      ],
      status: "available"
    }
  })
  console.log(await r1.json())
})





test.only("Api test delete pet by id", async ({ request }) => {

  let r1 = await request.delete("https://petstore3.swagger.io/api/v3/pet/666")
})