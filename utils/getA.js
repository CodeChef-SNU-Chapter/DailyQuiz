/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
});

exports.getA = () => {
    console.log('Function `getA` invoked');

    return client.query(q.Paginate(
        q.Match(
            q.Index("used_answers"), "today"
        ), 
        {
            size: 1
        }
    ));
};

exports.delivered = (ref) => {
    console.log('Function `delivered` invoked');
    return client.query(q.Update(ref,{data: {used: "yes"}}));
}
