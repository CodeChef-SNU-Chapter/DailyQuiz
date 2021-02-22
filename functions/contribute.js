/* Import faunaDB sdk */
const faunadb = require('faunadb');
const q = faunadb.query;

exports.handler = async function(event, context) {

    /* configure faunaDB Client with our secret */
    const client = new faunadb.Client({
        secret: process.env.FAUNADB_SERVER_SECRET
    });

    const data = JSON.parse(event.body);

    data['used'] = "no";

    /* For logging only */
    console.log('Function `contribute` invoked', data);

      /* construct the fauna query */
    return client.query(q.Create(q.Collection('questions'), {data: data}))
    .then((response) => {
        console.log('success', response);
        /* Success! return the response with statusCode 200 */
        return {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET, POST, OPTION",
            },
            statusCode: 200,
            body: "0"
        };
    }).catch((error) => {
        console.log('error', error)
        /* Error! return the error with statusCode 400 */
        return {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET, POST, OPTION",
            },
            statusCode: 400,
            body: "1"
        };
    });

    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({message: "Hello World"})
    // };
}