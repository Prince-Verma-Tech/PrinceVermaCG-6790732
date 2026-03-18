import { test } from "@playwright/test";

//Four types of books
//1. beforeAll -> based on worker
//2. beforeEach -> based on test block / can give page fixture
//3. afterAll -> based on worker
//4. afterEach -> based on test block / can give page fixture

test.beforeAll(async() => {
    console.log("beforeAll")
})

test.beforeEach(async({page}) => {
    console.log("beforeEach")
})

test.afterAll(async() => {
    console.log("afterAll")
})

test.afterEach(async({page}) => {
    console.log("afterEach")
})

test("test1", async({page}) => {
    console.log("test1")
})

test("test2", async({page}) => {
    console.log("test2")
})

