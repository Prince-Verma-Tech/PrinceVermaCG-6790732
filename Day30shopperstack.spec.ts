import { test, request } from '@playwright/test';

test('shopperstack', async ({ request }) => {


    let rl = await request.post("https://www.shoppersstack.com/shopping/users/login", {
        data: {

            email: "prince55070@gmail.com",
            password: "1234",
            role: "SHOPPER"

        }, ignoreHTTPSErrors: true

    })
    console.log(await rl.json());
    let body = await rl.json();
    let token = await body.data.jwtToken;
    let shopperId = await body.data.userId;
    console.log(shopperId);
    console.log(token);

    //veiw products request
    let r2 = await request.get("https://www.shoppersstack.com/shopping/products/alpha", {
        ignoreHTTPSErrors: true,

    })
    const prod = await r2.json()
    let prodId = prod.data[0].productId
    console.log(prod.data[0].productId)
    console.log(prod.data[0].name)
    console.log(prod.data[0].price)

    //!Get from wishlist

    let r3 = await request.get(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/wishlist`, {
        headers: {
            Authorization: `Bearer ${token}`
        }, ignoreHTTPSErrors: true
    })
    const wishlist = await r3.json()
    console.log(wishlist)
    let itemId = wishlist.data[0].itemId
    console.log(itemId)


    //!add to wishlist
    let r4 = await request.post(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/wishlist`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            "productId": prodId,
            "quantity": 2
        },
        ignoreHTTPSErrors: true
    })

    const addToWishlist = await r4.json()
    console.log(addToWishlist)

    //!Add product to cart
    let r5 = await request.post(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/carts`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            "productId": prodId,
            "quantity": 2
        },
        ignoreHTTPSErrors: true
    })
    const addToCart = await r5.json()
    console.log(addToCart)

    //!Get products in cart
    let r6 = await request.get(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/carts`, {
        headers: {
            Authorization: `Bearer ${token}`
        }, ignoreHTTPSErrors: true
    })
    const cart = await r6.json()
    console.log(cart);

    //!Add Address
    let r7 = await request.post(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            "addressId": 0,
            "buildingInfo": "Sunrise Apartments, Flat No. 362",
            "city": "Pune",
            "country": "India",
            "landmark": "Near Phoenix Mall",
            "name": "user",
            "phone": "9776531410",
            "pincode": "432103",
            "state": "Maharashtra",
            "streetInfo": "Viman Nagar Road",
            "type": "Home"
        },
        ignoreHTTPSErrors: true
    })
    const addAddress = await r7.json()
    console.log(addAddress)
    let addressId = addAddress.data.addressId
    console.log(addressId)

    //!Get Address
    let r8 = await request.get(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address`, {
        headers: {
            Authorization: `Bearer ${token}`
        }, ignoreHTTPSErrors: true
    })
    const getAddress = await r8.json()
    console.log(getAddress)

    //!Place order
    let r9 = await request.post(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/orders`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            "address": {
                "addressId": addressId,
                "buildingInfo": "Sunrise Apartments, Flat No. 362",
                "city": "Pune",
                "country": "India",
                "landmark": "Near Phoenix Mall",
                "name": "user",
                "phone": "9776531410",
                "pincode": "432103",
                "state": "Maharashtra",
                "streetInfo": "Viman Nagar Road",
                "type": "Home"
            },
            "paymentMode": "COD"
        }
        , ignoreHTTPSErrors: true
    })
    const placeOrder = await r9.json()
    console.log(placeOrder)

    //!Get orders
    let r10 = await request.get(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/orders`, {
        headers: {
            Authorization: `Bearer ${token}`
        }, ignoreHTTPSErrors: true
    })
    const getOrders = await r10.json()
    console.log(getOrders)
    let orderId = getOrders.data[0].orderId
    console.log(orderId)
    console.log("order tracked");

    //!Update order status
    let r11 = await request.patch(`https://www.shoppersstack.com/shopping/shoppers/${shopperId}/orders/${orderId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            "status": "DELIVERED"
        }
        , ignoreHTTPSErrors: true, params: { status: "DELIVERED" }
    })
    const updateOrderStatus = await r11.json()
    console.log(updateOrderStatus)

    //!Add product review
    let r12 = await request.post(`https://www.shoppersstack.com/shopping/reviews/?productId=${prodId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            "dateTime": "2026-03-28T07:49:15.062ZZ",
            "description": "Okayish",
            "heading": "Okayish",
            "rating": 3,
            "shopperId": shopperId,
            "shopperName": "user"
        }, ignoreHTTPSErrors: true, params: {
            productId: prodId
        }
    })
    // const addReview = await r12.json()
    // console.log(addReview)
    // console.log(prodId);
console.log(shopperId);
console.log(prodId);


    console.log(await r12.status());
});


