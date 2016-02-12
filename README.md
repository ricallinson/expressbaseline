# expressbaseline

This is a simple _hello world_ HTTP Express.js server to find a baseline number for performance comparisons.

## Run Test

Requires [Node.js](https://nodejs.org/). Start the server with the following;

	npm i express
	node server.js

The test will print the number of cores and processes the server is using;

	Server started, using 4 cores and 8 processes...

Now run apache bench;

	ab -n 1000000 -c 8 -k http://127.0.0.1:8080/

## Performance Results

The test was run on a MacBook Pro (Retina, 13-inch, Mid 2014), 3 GHz Intel Core i7 with 16 GB 1600 MHz DDR3 memory.

	Concurrency Level:      8
	Time taken for tests:   51.207 seconds
	Complete requests:      1000000
	Failed requests:        0
	Keep-Alive requests:    1000000
	Total transferred:      160000000 bytes
	HTML transferred:       20000000 bytes
	Requests per second:    19528.45 [#/sec] (mean)
	Time per request:       0.410 [ms] (mean)
	Time per request:       0.051 [ms] (mean, across all concurrent requests)
	Transfer rate:          3051.32 [Kbytes/sec] received

## Problems Found

None.
