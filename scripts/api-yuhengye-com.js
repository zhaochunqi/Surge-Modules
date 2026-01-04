// Script for api.yuhengye.com mock response
const response = {
    "code": 0,
    "data": {
        "code": "LoveLive",
        "activated": true,
        "orderId": "7412341341234",
        "activeCount": 1,
        "timestamp": 4765132800000,
        "s_expire": false
    }
};

$done({
    response: {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(response)
    }
});
