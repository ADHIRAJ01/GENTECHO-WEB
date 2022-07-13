//INSTALL NODE-SCHEDULE
//npm i node-schedule

//initialising job scheduler

//BUILDINNG SCHEDULING BY DATE AND TIME

const schedule = require('node-schedule');

//1st way of creating job and stopping
schedule.scheduleJob('job-1','*/1 * * * * *',() => {
    console.log('scheduler running ');              //message print of job running
    schedule.cancelJob('job-1');                    //msg printing of stopping the job
});

//2nd way of creating and stopping job
const job = schedule.scheduleJob('*/1 * * * * *',() => {
    console.log('scheduler inside variable  running ');              //message print of job running
    job.cancel();                    //msg printing of stopping the job
});

/* --------------------------------------------------------------------------
----------- TO LEARN ABOUT CRON EXPRESSIONS - ( * * * * * * )  ----------------
go to [crontab guru] on google and learning about scheduling
--------------------------------------------------------------------------*/

// WE CAN USE THIS IN OUR MAIL SERVER TO SEND MAILS AFTER SPECIFIC TIME PERIOD AND SO  