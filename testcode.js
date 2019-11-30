const async = require('async');

// async.parallel([
//     function(callback) {
//         setTimeout(function() {
//             console.log('Task One');
//             callback(null, 1);
//         },200);
//     },
//     function(callback) {
//         setTimeout(function() {
//             console.log('Task Two');
            
//             callback(null, 2);
//         }, 1000);
//     }
// ],
// function(err, results) {
//     console.log('Err: ', err);
//     console.log('Results:', results);
// });

// function step1(cb) {
//         console.log('Step 1');
//     setTimeout(function() {
//         cb(null, null);
//     }, 2000);
// }

// function step2(cb) {
//     console.log('Step 2');
//     cb(null, null);
// }

// function result_handler(err, results){
//     console.log('Err: ', err);
//     console.log('Result: ', results);
// }

// async.parallel([
//     step1,
//     step2,
// ], function(err, results) {
//     console.log(err, results);
// });

// async.series([
//     step1,
//     step2,
// ], result_handler);

async.waterfall([
    function(callback) {
      callback(null, 'one', 'two'); 
    }, 
    function(arg1, arg2, callback) { 
      // arg1 now equals 'one' and arg2 now equals 'two' 
      callback(null, 'three'); 
    }, 
    function(arg1, callback) {
      // arg1 now equals 'three'
      callback(null, 'done');
    }
  ], function (err, result) {
    // result now equals 'done'
    console.log(err, result);
  }
  );