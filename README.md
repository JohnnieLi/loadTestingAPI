#LoadTest API



### Run

```
node index.js (3000 port)

http://localhost:3000/test

```


###Results

```json
{"result":
     {  "totalRequests":43,
        "totalErrors":0,
        "totalTimeSeconds":10.0265854,
        "rps":4,
        "meanLatencyMs":230.9,
        "maxLatencyMs":2066,
        "minLatencyMs":171,
        "percentiles":{
            "50":184,
            "90":198,
            "95":230,
            "99":2066},
        "errorCodes":{},
        "instanceIndex":0
     }
}
```

#Reference

https://artillery.io/docs/http-reference/

http://blog.loadimpact.com/open-source-load-testing-tool-review



