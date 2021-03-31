// Date
// JavaScript Date objects represent a single moment in time in a platform-independent format.
// Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.


// Description
// The ECMAScript epoch and timestamps
// A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed
// since midnight on January 1, 1970, UTC. This date and time are not the same as the UNIX epoch
// (the number of seconds that have elapsed since midnight on January 1, 1970, UTC),
// which is the predominant base value for computer-recorded date and time values.

// Note: It's important to keep in mind that while the time value at the heart of a Date object is UTC,
// the basic methods to fetch the date and time or its components all work in the local
// (i.e. host system) time zone and offset.

// It should be noted that the maximum Date is not of the same value as the maximum safe integer
// (Number.MAX_SAFE_INTEGER is 9,007,199,254,740,991).
// Instead, it is defined in ECMA-262 that a maximum of ±100,000,000 (one hundred million) days
// relative to January 1, 1970 UTC (that is, April 20, 271821 BCE ~ September 13, 275760 CE)
// can be represented by the standard Date object (equivalent to ±8,640,000,000,000,000 milliseconds).

// Date format and time zone conversions
// There are several methods available to obtain a date in various formats, as well as to perform time zone conversions.
// Particularly useful are the functions that output the date and time in Coordinated Universal Time (UTC),
// the global standard time defined by the World Time Standard. (This time is historically known as Greenwich Mean Time,
// as UTC lies along the meridian that includes London—and nearby Greenwich—in the United Kingdom.)
// The user's device provides the local time.

// In addition to methods to read and alter individual components of the local date and time (such as getDay() and setHours()),
// there are also versions of the same methods that read and manipulate the date and time using UTC
// (such as getUTCDay() and setUTCHours()).

// Constructor
  Date()
// When called as a function, returns a string representation of the current date and time,
// exactly as new Date().toString() does.
  new Date()
// When called as a constructor, returns a new Date object.

// Static methods
Date.now()
// Returns the numeric value corresponding to the current time—the number of milliseconds elapsed
// since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
Date.parse()
// Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC,
// with leap seconds ignored.

// Note: Parsing of strings with Date.parse is strongly discouraged due to browser differences and inconsistencies.

Date.UTC()
Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.
Instance methods
Date.prototype.getDate()
Returns the day of the month (1–31) for the specified date according to local time.
Date.prototype.getDay()
Returns the day of the week (0–6) for the specified date according to local time.
Date.prototype.getFullYear()
Returns the year (4 digits for 4-digit years) of the specified date according to local time.
Date.prototype.getHours()
Returns the hour (0–23) in the specified date according to local time.
Date.prototype.getMilliseconds()
Returns the milliseconds (0–999) in the specified date according to local time.
Date.prototype.getMinutes()
Returns the minutes (0–59) in the specified date according to local time.
Date.prototype.getMonth()
Returns the month (0–11) in the specified date according to local time.
Date.prototype.getSeconds()
Returns the seconds (0–59) in the specified date according to local time.
Date.prototype.getTime()
Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)
Date.prototype.getTimezoneOffset()
Returns the time-zone offset in minutes for the current locale.
Date.prototype.getUTCDate()
Returns the day (date) of the month (1–31) in the specified date according to universal time.
Date.prototype.getUTCDay()
Returns the day of the week (0–6) in the specified date according to universal time.
Date.prototype.getUTCFullYear()
Returns the year (4 digits for 4-digit years) in the specified date according to universal time.
Date.prototype.getUTCHours()
Returns the hours (0–23) in the specified date according to universal time.
Date.prototype.getUTCMilliseconds()
Returns the milliseconds (0–999) in the specified date according to universal time.
Date.prototype.getUTCMinutes()
Returns the minutes (0–59) in the specified date according to universal time.
Date.prototype.getUTCMonth()
Returns the month (0–11) in the specified date according to universal time.
Date.prototype.getUTCSeconds()
Returns the seconds (0–59) in the specified date according to universal time.
Date.prototype.getYear()
Returns the year (usually 2–3 digits) in the specified date according to local time. Use getFullYear() instead.
Date.prototype.setDate()
Sets the day of the month for a specified date according to local time.
Date.prototype.setFullYear()
Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.
Date.prototype.setHours()
Sets the hours for a specified date according to local time.
Date.prototype.setMilliseconds()
Sets the milliseconds for a specified date according to local time.
Date.prototype.setMinutes()
Sets the minutes for a specified date according to local time.
Date.prototype.setMonth()
Sets the month for a specified date according to local time.
Date.prototype.setSeconds()
Sets the seconds for a specified date according to local time.
Date.prototype.setTime()
Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC. Use negative numbers for times prior.
Date.prototype.setUTCDate()
Sets the day of the month for a specified date according to universal time.
Date.prototype.setUTCFullYear()
Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.
Date.prototype.setUTCHours()
Sets the hour for a specified date according to universal time.
Date.prototype.setUTCMilliseconds()
Sets the milliseconds for a specified date according to universal time.
Date.prototype.setUTCMinutes()
Sets the minutes for a specified date according to universal time.
Date.prototype.setUTCMonth()
Sets the month for a specified date according to universal time.
Date.prototype.setUTCSeconds()
Sets the seconds for a specified date according to universal time.
Date.prototype.setYear()
Sets the year (usually 2–3 digits) for a specified date according to local time. Use setFullYear() instead.
Date.prototype.toDateString()
Returns the "date" portion of the Date as a human-readable string like 'Thu Apr 12 2018'.
Date.prototype.toISOString()
Converts a date to a string following the ISO 8601 Extended Format.
Date.prototype.toJSON()
Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify().
Date.prototype.toGMTString()
Returns a string representing the Date based on the GMT (UTC) time zone. Use toUTCString() instead.
Date.prototype.toLocaleDateString()
Returns a string with a locality sensitive representation of the date portion of this date based on system settings.
Date.prototype.toLocaleFormat()
Converts a date to a string, using a format string.
Date.prototype.toLocaleString()
Returns a string with a locality-sensitive representation of this date. Overrides the Object.prototype.toLocaleString() method.
Date.prototype.toLocaleTimeString()
Returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.
Date.prototype.toString()
Returns a string representing the specified Date object. Overrides the Object.prototype.toString() method.
Date.prototype.toTimeString()
Returns the "time" portion of the Date as a human-readable string.
Date.prototype.toUTCString()
Converts a date to a string using the UTC timezone.
Date.prototype.valueOf()
Returns the primitive value of a Date object. Overrides the Object.prototype.valueOf() method.
Examples
Several ways to create a Date object
The following examples show several ways to create JavaScript dates:

Note: Parsing of date strings with the Date constructor (and Date.parse, they are equivalent) is strongly discouraged due to browser differences and inconsistencies.

let today = new Date()
let birthday = new Date('December 17, 1995 03:24:00')
let birthday = new Date('1995-12-17T03:24:00')
let birthday = new Date(1995, 11, 17)            // the month is 0-indexed
let birthday = new Date(1995, 11, 17, 3, 24, 0)
let birthday = new Date(628021800000)            // passing epoch timestamp
 To get Date, Month and Year or Time
let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")
let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)
Two digit years map to 1900 – 1999
Values from 0 to 99 map to the years 1900 to 1999. All other values are the actual year .

In order to create and get dates between the years 0 and 99 the Date.prototype.setFullYear() and Date.prototype.getFullYear() methods should be used.

let date = new Date(98, 1)  // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

// Deprecated method; 98 maps to 1998 here as well
date.setYear(98)            // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

date.setFullYear(98)        // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)
Calculating elapsed time
The following examples show how to determine the elapsed time between two JavaScript dates in milliseconds.

Due to the differing lengths of days (due to daylight saving changeover), months, and years, expressing elapsed time in units greater than hours, minutes, and seconds requires addressing a number of issues, and should be thoroughly researched before being attempted.

// Using Date objects
let start = Date.now()

// The event to time goes here:
doSomethingForALongTime()
let end = Date.now()
let elapsed = end - start // elapsed time in milliseconds
// Using built-in methods
let start = new Date()

// The event to time goes here:
doSomethingForALongTime()
let end = new Date()
let elapsed = end.getTime() - start.getTime() // elapsed time in milliseconds
// To test a function and get back its return
function printElapsedTime(fTest) {
  let nStartTime = Date.now(),
      vReturn = fTest(),
      nEndTime = Date.now()

  console.log(`Elapsed time: ${ String(nEndTime - nStartTime) } milliseconds`)
  return vReturn
}

let yourFunctionReturn = printElapsedTime(yourFunction)
Note: In browsers that support the Web Performance API's high-resolution time feature, Performance.now() can provide more reliable and precise measurements of elapsed time than Date.now().

Get the number of seconds since the ECMAScript Epoch
let seconds = Math.floor(Date.now() / 1000)
In this case, it's important to return only an integer—so a simple division won't do. It's also important to only return actually elapsed seconds. (That's why this code uses Math.floor(), and not Math.round().)
