/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
});

exports.getQ = () => {
    console.log('Function `getQ` invoked');


    return client.query(q.Paginate(
        q.Match(
            q.Index("used_questions"), "no"
        ), 
        {
            size: 1
        }
    ));
};

exports.delivered = (ref) => {
    console.log('Function `delivered` invoked');
    return client.query(q.Update(ref,{data: {used: "today"}}));
}
