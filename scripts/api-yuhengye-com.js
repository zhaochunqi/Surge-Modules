// Script for api.yuhengye.com mock response
const response = {
    "code": 0,
    "data": {
        "code": "夹总身体健康",
        "activated": true,
        "orderId": "",
        "activeCount": 0,
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